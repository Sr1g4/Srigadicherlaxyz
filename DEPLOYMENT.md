# Deployment Guide for srigadicherla.xyz

This guide will help you deploy your resume website to your GoDaddy domain using Vercel.

## Prerequisites

✅ Build verified successfully - Your Next.js app builds without errors.

## Step 1: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or email

2. **Prepare Your Repository**
   - Make sure your code is in a Git repository (GitHub, GitLab, or Bitbucket)
   - Push all your code to the repository

3. **Import Project**
   - In Vercel dashboard, click "Add New" → "Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js and configure settings
   - Click "Deploy"

4. **Initial Deployment**
   - Vercel will build and deploy your site
   - You'll get a URL like `your-project.vercel.app`
   - Test this URL to ensure everything works

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - For production: `vercel --prod`

## Step 2: Add Your Domain to Vercel

1. **Go to Project Settings**
   - In your Vercel dashboard, select your project
   - Go to "Settings" → "Domains"

2. **Add Domain**
   - Enter `srigadicherla.xyz`
   - Click "Add"
   - Also add `www.srigadicherla.xyz` (optional but recommended)

3. **Get DNS Records**
   - Vercel will show you the DNS records you need to add
   - You'll typically see:
     - **A Record** for root domain (`srigadicherla.xyz`)
     - **CNAME Record** for `www` subdomain

## Step 3: Configure GoDaddy DNS

1. **Log into GoDaddy**
   - Go to [godaddy.com](https://godaddy.com)
   - Log into your account

2. **Access DNS Management**
   - Go to "My Products"
   - Find `srigadicherla.xyz`
   - Click "DNS" or "Manage DNS"

3. **Update DNS Records**
   - **For root domain (`srigadicherla.xyz`):**
     - Find or add an **A Record**
     - Name: `@` or leave blank
     - Value: The IP address provided by Vercel
     - TTL: 600 (or default)
   
   - **For www subdomain:**
     - Find or add a **CNAME Record**
     - Name: `www`
     - Value: The CNAME provided by Vercel (usually `cname.vercel-dns.com`)
     - TTL: 600 (or default)

4. **Remove Conflicting Records**
   - Remove any existing A or CNAME records that might conflict
   - Keep MX records if you use email with this domain

5. **Save Changes**
   - Click "Save" after updating all records

## Step 4: Wait for DNS Propagation

- DNS changes can take **24-48 hours** to propagate globally
- Often works within **1-2 hours**
- You can check propagation status at [whatsmydns.net](https://www.whatsmydns.net)

## Step 5: Verify Deployment

1. **Check HTTPS**
   - Vercel automatically provides SSL certificates
   - Your site should be accessible at `https://srigadicherla.xyz`

2. **Test Functionality**
   - ✅ Homepage loads correctly
   - ✅ All sections display properly
   - ✅ Theme toggle works
   - ✅ Email link works
   - ✅ Resume download works
   - ✅ Mobile responsiveness
   - ✅ All animations work

3. **Test Both URLs**
   - `https://srigadicherla.xyz`
   - `https://www.srigadicherla.xyz` (if configured)

## Troubleshooting

### DNS Not Working
- Wait longer (up to 48 hours)
- Clear your browser cache
- Try accessing from different network
- Verify DNS records are correct in GoDaddy

### Build Errors
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify `next.config.js` is correct

### Domain Not Connecting
- Double-check DNS records match Vercel's requirements exactly
- Ensure no conflicting records exist
- Contact Vercel support if issues persist

## Additional Notes

- **Automatic Deployments**: Vercel will auto-deploy when you push to your main branch
- **Preview Deployments**: Pull requests get preview URLs automatically
- **Free Tier**: Vercel's free tier is sufficient for a portfolio site
- **HTTPS**: SSL certificates are automatically provisioned and renewed

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- GoDaddy Support: [godaddy.com/help](https://www.godaddy.com/help)
