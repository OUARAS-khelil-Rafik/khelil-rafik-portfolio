# EmailJS Setup Guide for Contact Form

## Steps to Configure EmailJS

### 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com)
- Sign up for a free account
- Verify your email

### 2. Get Your Public Key
- Log in to your EmailJS dashboard
- Go to **Account** → **API Keys**
- Copy your **Public Key**

### 3. Create Email Service
- In EmailJS dashboard, go to **Email Services**
- Click **Add Service**
- Select **Gmail** (or your preferred email provider)
- Connect your Gmail account (Kh.ouaras@univ-alger.dz)
- Set the **Service ID** to: `service_cgvdvg4`
- Save the service

### 4. Create Email Template
- In EmailJS dashboard, go to **Email Templates**
- Click **Create New Template**
- Set the **Template ID** to: `template_a0s1ee8`
- Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent through your portfolio contact form.
```

- Click the fields in the template and set them as:
  - {{from_name}} → Template Variable: `from_name`
  - {{from_email}} → Template Variable: `from_email`
  - {{message}} → Template Variable: `message`
- Set **Send To** email to your Gmail: `Kh.ouaras@univ-alger.dz`
- Save the template

### 5. Update Your Code
Update `/services/emailService.ts` with your credentials:

```typescript
const EMAILJS_PUBLIC_KEY = '_zVpEqPFupzN20O8y';
const EMAILJS_SERVICE_ID = 'service_cgvdvg4';
const EMAILJS_TEMPLATE_ID = 'template_a0s1ee8';
```

### 6. Test the Form
- Run your dev server: `npm run dev`
- Fill out the contact form
- Click **Send Message**
- Check your Gmail inbox for the message

## Troubleshooting

- **"Failed to send email"**: Check that your Service ID and Template ID match exactly
- **Emails not arriving**: Check your Gmail spam folder or EmailJS dashboard for error logs
- **Public Key error**: Make sure you're using your actual public key, not the service ID

## Helpful Links
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Email Templates Guide](https://www.emailjs.com/docs/user-guide/manage-templates/)
