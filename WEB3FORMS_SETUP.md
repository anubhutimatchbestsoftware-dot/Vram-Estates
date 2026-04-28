# Web3Forms Setup for VRAM Estates Contact Form

## Quick Setup (2 Minutes!)

### Step 1: Get Your Access Key
1. Visit: https://web3forms.com/
2. Enter email: `anubhuti.matchbestsoftware@gmail.com`
3. Click "Create Access Key"
4. Check your email for the access key
5. Copy the access key (looks like: `a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6`)

### Step 2: Update the Contact Form
1. Open file: `src/app/contact/page.tsx`
2. Find line 35 (approximately):
   ```javascript
   formDataToSend.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');
   ```
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key
4. Save the file

### Step 3: Test
1. Go to: http://localhost:3000/contact
2. Fill out the form
3. Click "Send Message"
4. Check `anubhuti.matchbestsoftware@gmail.com` inbox!

## Important Notes

✅ **The access key MUST be valid** - Get it from https://web3forms.com/
✅ **Email will be sent to**: anubhuti.matchbestsoftware@gmail.com (the email you used to create the access key)
✅ **Free tier**: 250 submissions per month
✅ **No backend needed**: Works entirely from frontend

## Example

If your access key is: `a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6`

Update line 35 to:
```javascript
formDataToSend.append('access_key', 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6');
```

## Troubleshooting

### Getting "400 Bad Request" error?
- ❌ Access key is invalid or missing
- ✅ Get a new access key from https://web3forms.com/
- ✅ Make sure you copied the entire key
- ✅ Remove any extra spaces

### Not receiving emails?
- Check spam/junk folder
- Verify you used the correct email when creating the access key
- Wait a few minutes (sometimes there's a delay)

### Still not working?
- Open browser console (F12) and check for errors
- Make sure you saved the file after updating the access key
- Restart the development server

## Alternative: Use Nodemailer

If you prefer to use Gmail SMTP with Nodemailer:
1. Follow `EMAIL_SETUP_INSTRUCTIONS.md`
2. Update contact form to use `/api/contact` endpoint
3. Requires Gmail App Password setup

Web3Forms is recommended for simplicity!

