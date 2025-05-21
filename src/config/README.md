# EmailJS Configuration

This directory contains configuration files for EmailJS, which is used to send emails from the contact form.

## Setup Instructions

1. Sign up for an account at [EmailJS](https://www.emailjs.com/)

2. Create a new Email Service:
   - Click on "Email Services" in the dashboard
   - Choose "Add New Service" and select your email provider (Gmail, Outlook, etc.)
   - Follow the instructions to connect your email account

3. Create a new Email Template:
   - Click on "Email Templates" in the dashboard
   - Choose "Create New Template"
   - Design your template using the following variables:
     - `{{user_name}}` - Sender's name
     - `{{user_email}}` - Sender's email
     - `{{user_phone}}` - Sender's phone
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message content
     - `{{recipient_email}}` - Your email address (optional, if you want to send to different emails)

4. Update the `emailjs.js` file:
   - Replace the placeholder values with your actual EmailJS credentials
   - Set the correct service ID, template ID, and public key from your EmailJS dashboard

## Security Note

The current implementation includes API keys directly in the source code. For production applications, consider:

1. Using environment variables instead of hardcoding keys
2. Implementing server-side email sending to avoid exposing API keys
3. Adding rate limiting to prevent form spam

## Testing

To test the email functionality:
1. Make sure EmailJS is properly configured
2. Fill out the contact form and submit
3. Check your email inbox to verify the message arrived correctly 