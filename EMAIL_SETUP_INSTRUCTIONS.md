# Email Setup Instructions for VRAM Estates Contact Form

## Overview
The contact form now uses **Nodemailer with Gmail SMTP** to send emails directly to `anubhuti.matchbestsoftware@gmail.com`.

## Setup Steps

### 1. Enable 2-Step Verification on Gmail
1. Go to https://myaccount.google.com/security
2. Sign in with `anubhuti.matchbestsoftware@gmail.com`
3. Under "How you sign in to Google", enable **2-Step Verification**
4. Follow the prompts to set it up

### 2. Generate Gmail App Password
1. Go to https://myaccount.google.com/apppasswords
2. Sign in with `anubhuti.matchbestsoftware@gmail.com`
3. In the "Select app" dropdown, choose **Mail**
4. In the "Select device" dropdown, choose **Other (Custom name)**
5. Enter "VRAM Estates Website" as the name
6. Click **Generate**
7. Copy the 16-character password (it will look like: `xxxx xxxx xxxx xxxx`)

### 3. Update Environment Variables
1. Open the `.env.local` file in the project root
2. Replace `your-gmail-app-password-here` with the App Password you just generated
3. Remove any spaces from the password
4. Save the file

Example:
```env
GMAIL_USER=anubhuti.matchbestsoftware@gmail.com
GMAIL_APP_PASSWORD=abcdabcdabcdabcd
```

### 4. Restart the Development Server
1. Stop the current development server (Ctrl+C)
2. Run `npm run dev` again
3. The contact form should now work!

## Testing the Contact Form

1. Go to http://localhost:3000/contact
2. Fill out the form with test data
3. Click "Send Message"
4. Check `anubhuti.matchbestsoftware@gmail.com` inbox for the email

## Email Features

✅ Sends to: `anubhuti.matchbestsoftware@gmail.com`
✅ Reply-To: Set to the sender's email address
✅ Professional HTML email template
✅ Includes: Name, Email, Phone (optional), Message
✅ Plain text fallback for email clients that don't support HTML

## Troubleshooting

### "Failed to send email" error
- Make sure 2-Step Verification is enabled on the Gmail account
- Verify the App Password is correct (no spaces)
- Restart the development server after updating `.env.local`

### "Invalid login" error
- The App Password might be incorrect
- Generate a new App Password and update `.env.local`

### Emails not arriving
- Check the spam/junk folder
- Verify the Gmail account is `anubhuti.matchbestsoftware@gmail.com`
- Check the terminal/console for error messages

## Security Notes

⚠️ **Important**: 
- Never commit `.env.local` to Git (it's already in `.gitignore`)
- Keep your App Password secure
- Don't share the App Password publicly
- For production, use environment variables in your hosting platform

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform:
   - `GMAIL_USER=anubhuti.matchbestsoftware@gmail.com`
   - `GMAIL_APP_PASSWORD=your-app-password`

2. The contact form will automatically use these variables

## Alternative Email Services

If you prefer not to use Gmail, you can easily switch to:
- **SendGrid** (free tier: 100 emails/day)
- **Mailgun** (free tier: 5,000 emails/month)
- **Amazon SES** (very cheap, pay-as-you-go)

Let me know if you need help setting up any of these alternatives!
