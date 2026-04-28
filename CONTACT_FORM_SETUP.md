# Contact Form Setup - FINAL INSTRUCTIONS

## Current Status
✅ Contact form is styled with black translucent design
✅ Backend API is ready at `/api/contact`
❌ Needs Gmail App Password to send emails

## To Make It Work (5 Minutes):

### Step 1: Enable 2-Step Verification
1. Go to: https://myaccount.google.com/security
2. Sign in with: `anubhuti.matchbestsoftware@gmail.com`
3. Find "2-Step Verification" and turn it ON
4. Follow the setup wizard

### Step 2: Generate App Password
1. Go to: https://myaccount.google.com/apppasswords
2. You'll see "App passwords" section
3. Click "Select app" → Choose "Mail"
4. Click "Select device" → Choose "Other (Custom name)"
5. Type: "VRAM Estates Website"
6. Click "Generate"
7. **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)

### Step 3: Update Environment File
1. Open file: `.env.local` (in project root)
2. Find this line:
   ```
   GMAIL_APP_PASSWORD=
   ```
3. Paste your App Password (remove spaces):
   ```
   GMAIL_APP_PASSWORD=abcdefghijklmnop
   ```
4. Save the file

### Step 4: Restart Server
1. Stop the development server (Ctrl+C in terminal)
2. Start it again:
   ```bash
   npm run dev
   ```

### Step 5: Test
1. Go to: http://localhost:3000/contact
2. Fill out the form
3. Click "Send Message"
4. Check `anubhuti.matchbestsoftware@gmail.com` inbox!

## Troubleshooting

### "Something went wrong" error?
- Make sure you completed ALL steps above
- Check that the App Password has no spaces
- Restart the development server after updating `.env.local`

### Still not working?
- Open browser console (F12) and check for errors
- Check terminal for error messages
- Make sure 2-Step Verification is enabled
- Try generating a new App Password

### Can't find App Passwords option?
- You MUST enable 2-Step Verification first
- Wait a few minutes after enabling 2-Step Verification
- Refresh the page

## What Happens When It Works

✅ Form submits successfully
✅ Success message appears
✅ Email arrives at: anubhuti.matchbestsoftware@gmail.com
✅ Email includes: Name, Email, Phone, Message
✅ You can reply directly to the sender

## Email Details

- **From**: VRAM Estates Contact Form
- **To**: anubhuti.matchbestsoftware@gmail.com
- **Reply-To**: Sender's email address
- **Subject**: "New Contact Form Submission from [Name]"

## Security Notes

⚠️ **Important**:
- Never share your App Password
- `.env.local` is already in `.gitignore` (won't be committed)
- For production, add the App Password to your hosting platform's environment variables

## Production Deployment

When deploying to Vercel/Netlify/etc:
1. Add environment variables in your hosting dashboard:
   - `GMAIL_USER` = anubhuti.matchbestsoftware@gmail.com
   - `GMAIL_APP_PASSWORD` = your-app-password
2. Deploy the site
3. Test the contact form on the live site

That's it! The form will work perfectly once you add the Gmail App Password.
