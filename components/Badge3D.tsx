import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { useGLTF, useTexture, Environment, Lightformer } from "@react-three/drei";
import {
  Physics,
  BallCollider,
  CuboidCollider,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RapierRigidBody,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

extend({ MeshLineGeometry, MeshLineMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: { points?: THREE.Vector3[] } & React.DetailedHTMLProps<React.HTMLAttributes<any>, any>;
    meshLineMaterial: { map?: THREE.Texture; lineWidth?: number; color?: string; depthTest?: boolean; resolution?: THREE.Vector2; useMap?: number; repeat?: THREE.Vector2 } & React.DetailedHTMLProps<React.HTMLAttributes<any>, any>;
  }
}

// Helper function to create rounded rectangle shape
function createRoundedRectShape(width: number, height: number, radius: number) {
  const shape = new THREE.Shape();
  const x = -width / 2;
  const y = -height / 2;
  
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  
  return shape;
}

// Helper to create rounded rectangle geometry with proper UVs
function createRoundedRectGeometry(width: number, height: number, radius: number) {
  const shape = createRoundedRectShape(width, height, radius);
  const geometry = new THREE.ShapeGeometry(shape);
  
  // Fix UV coordinates to map texture properly
  const pos = geometry.attributes.position;
  const uvs = new Float32Array(pos.count * 2);
  
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    // Map from [-width/2, width/2] to [0, 1]
    uvs[i * 2] = (x + width / 2) / width;
    uvs[i * 2 + 1] = (y + height / 2) / height;
  }
  
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  return geometry;
}

const segmentProps = {
  type: "dynamic",
  canSleep: true,
  colliders: false,
  angularDamping: 2,
  linearDamping: 2,
} as const;

function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef<THREE.Mesh<MeshLineGeometry, MeshLineMaterial>>(null!);
  const fixed = useRef<RapierRigidBody>(null!);
  const j1 = useRef<RapierRigidBody>(null!);
  const j2 = useRef<RapierRigidBody>(null!);
  const j3 = useRef<RapierRigidBody>(null!);

  const card = useRef<RapierRigidBody>(null!);
  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();
  const [dragged, drag] = useState<THREE.Vector3 | false>(false);
  const [hovered, hover] = useState(false);

  // useGLTF.preload("/assets/3d/card.glb");
  const { nodes, materials } = useGLTF("/assets/3d/card.glb") as any;
  const badgeTexture = useTexture("/badge.png");
  badgeTexture.flipY = true;
  badgeTexture.colorSpace = THREE.SRGBColorSpace;
  
  // Create geometry with proper UVs for the badge front
  const badgeFrontGeometry = useMemo(() => createRoundedRectGeometry(0.68, 0.88, 0.06), []);
  
  // Custom texture for the lanyard with text
  // We use a state to create it once
  const [lanyardTexture] = useState(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 128; // Wide aspect ratio for text
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Keep it completely transparent first to remove any "frame" if that's what user meant for lanyard
      // But for visibility, let's just make the text clear. 
      // User said "remove the frame of background of the badge". 

      // Background color for lanyard strap
      ctx.fillStyle = '#0f172a'; // darker slate
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Text
      ctx.font = 'bold 60px "Arial", sans-serif';
      ctx.fillStyle = '#e2e8f0'; 
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const text = "OUARAS Khelil Rafik  -  OUARAS Khelil Rafik  -  ";
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
  });

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);

  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => void (document.body.style.cursor = "auto");
    }
    return () => void (document.body.style.cursor = "auto");
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (
        !fixed.current ||
        !j1.current ||
        !j2.current ||
        !j3.current ||
        !band.current ||
        !card.current
      )
        return;
  
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (fixed.current) {
        const [j1Lerped, j2Lerped] = [j1, j2].map((ref) => {
            if (ref.current) {
              const lerped = new THREE.Vector3().copy(ref.current.translation());
    
              const clampedDistance = Math.max(
                0.1,
                Math.min(1, lerped.distanceTo(ref.current.translation()))
              );
    
              return lerped.lerp(
                ref.current.translation(),
                delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
              );
            }
          });

      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2Lerped ?? j2.current.translation());
      curve.points[2].copy(j1Lerped ?? j1.current.translation());
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));

      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel(
        { x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z },
        false
      );
    }
  });

  curve.curveType = "chordal";
  lanyardTexture.wrapS = lanyardTexture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.25, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => (
              (e.target as Element)?.releasePointerCapture(e.pointerId),
              drag(false)
            )}
            onPointerDown={(e) => (
              (e.target as Element)?.setPointerCapture(e.pointerId),
              card.current &&
                drag(
                  new THREE.Vector3()
                    .copy(e.point)
                    .sub(vec.copy(card.current.translation()))
                )
            )}
          >
            {/* Front side with badge image - rounded corners */}
            <mesh position={[0, 0.5, 0.015]} geometry={badgeFrontGeometry}>
              <meshBasicMaterial
                map={badgeTexture}
                toneMapped={false}
              />
            </mesh>
            {/* Back side - blank/solid color - rounded corners */}
            <mesh position={[0, 0.5, -0.015]} rotation={[0, Math.PI, 0]}>
              <shapeGeometry args={[createRoundedRectShape(0.68, 0.88, 0.06)]} />
              <meshPhysicalMaterial
                color="#1e293b"
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.3}
                metalness={0.2}
              />
            </mesh>
            {/* Card frame/border - rounded */}
            <mesh position={[0, 0.5, -0.0125]}>
              <extrudeGeometry args={[createRoundedRectShape(0.7, 0.9, 0.06), { depth: 0.025, bevelEnabled: false }]} />
              <meshPhysicalMaterial
                color="#0f172a"
                clearcoat={0.5}
                roughness={0.5}
                metalness={0.3}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry points={curve.getPoints(32)} />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={new THREE.Vector2(3200, 2400)}
          useMap={1}
          map={lanyardTexture}
          repeat={new THREE.Vector2(-1, 1)}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}

export default function Badge3D() {
    return (
      <div className="w-full h-[500px] md:h-full flex items-center justify-center relative">
        <Canvas camera={{ position: [0, 0, 13], fov: 25 }} gl={{ alpha: true }}>
          <ambientLight intensity={Math.PI} />
          <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
            <Band />
          </Physics>
          <Environment blur={0.75}>
            <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
          </Environment>
        </Canvas>
      </div>
    )
}
