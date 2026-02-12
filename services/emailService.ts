import emailjs from '@emailjs/browser';

// Initialize EmailJS
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;

export const initializeEmailJS = () => {
  if (!EMAILJS_PUBLIC_KEY) {
    throw new Error('Missing VITE_EMAILJS_PUBLIC_KEY in environment');
  }

  emailjs.init(EMAILJS_PUBLIC_KEY);
};

export const sendContactEmail = async (
  name: string,
  email: string,
  title: string,
  message: string
): Promise<void> => {
  try {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_AUTOREPLY_TEMPLATE_ID) {
      throw new Error('Missing EmailJS configuration in environment');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please enter a valid email address');
    }

    // Generate timestamp
    const now = new Date();
    const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')} ${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;
    const year = now.getFullYear().toString();

    // Send notification email to owner
    console.log('Sending notification email to owner:', {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      name: name,
      from_email: email,
      to_email: 'kh.ouaras@univ-alger.dz',
      title: title,
      time: time
    });

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        title: title,
        name: name,
        time: time,
        message: message,
        to_email: 'kh.ouaras@univ-alger.dz',
        from_name: name,
        from_email: email,
      }
    );

    console.log('Notification email sent successfully to: kh.ouaras@univ-alger.dz', 'Response:', response);

    if (response.status !== 200) {
      throw new Error(`Failed to send email. Status: ${response.status}`);
    }

    // Send auto-reply confirmation email to user (optional - won't fail the main email)
    try {
      console.log('Sending auto-reply to user:', email);

      const autoReplyResponse = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTOREPLY_TEMPLATE_ID,
        {
          to_email: email,
          name: name,
          message: message,
          time: time,
          website_url: 'https://khelil-rafik-portfolio.vercel.app',
          year: year,
        }
      );

      console.log('Auto-reply sent successfully to:', email, 'Response:', autoReplyResponse);
    } catch (autoReplyError) {
      console.warn('Auto-reply failed, but main notification was sent successfully:', autoReplyError);
      // Don't throw error - main email was sent successfully
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
