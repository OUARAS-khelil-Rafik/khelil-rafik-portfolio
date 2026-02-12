import emailjs from '@emailjs/browser';

// Initialize EmailJS
const EMAILJS_PUBLIC_KEY = '_zVpEqPFupzN20O8y'; // You'll get this from EmailJS
const EMAILJS_SERVICE_ID = 'service_cgvdvg4'; // You'll create this in EmailJS
const EMAILJS_TEMPLATE_ID = 'template_a0s1ee8'; // You'll create this in EmailJS

export const initializeEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

export const sendContactEmail = async (
  name: string,
  email: string,
  title: string,
  message: string
): Promise<void> => {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please enter a valid email address');
    }

    console.log('Sending email with:', {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      from_name: name,
      from_email: email,
      to_email: 'Kh.ouaras@univ-alger.dz'
    });

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_email: 'Kh.ouaras@univ-alger.dz', // Your Gmail address
        from_name: name,
        from_email: email, // User's email from the form
        title: title,
        message: message,
        reply_to: email, // Set reply-to as the user's email
      }
    );

    console.log('Email sent successfully from:', email, 'Response:', response);

    if (response.status !== 200) {
      throw new Error(`Failed to send email. Status: ${response.status}`);
    }

    return;
  } catch (error) {
    let errorMsg = 'Failed to send email. Please try again.';
    
    if (error instanceof Error) {
      errorMsg = error.message;
    } else if (error && typeof error === 'object') {
      const err = error as any;
      if (err.text) {
        errorMsg = `EmailJS Error: ${err.text}`;
      } else if (err.message) {
        errorMsg = err.message;
      } else if (err.status) {
        errorMsg = `Error ${err.status}: Please check your EmailJS configuration`;
      } else {
        errorMsg = `Error: ${JSON.stringify(err)}`;
      }
    }
    
    console.error('Email sending error details:', {
      error: errorMsg,
      fullError: error
    });
    throw new Error(errorMsg);
  }
};
