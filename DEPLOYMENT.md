# GitHub Pages Deployment Guide

## Your Repository
- **GitHub URL:** https://github.com/reyn0/PersonalSite
- **GitHub Pages URL:** https://reyn0.github.io/PersonalSite/

## Step 1: ✅ Repository Created

Your repository is already set up at: https://github.com/reyn0/PersonalSite

## Step 2: ✅ Code Pushed

Your code has been pushed to GitHub successfully!

## Step 3: Enable GitHub Pages

1. Go to https://github.com/reyn0/PersonalSite/settings/pages
2. Under "Source":
   - Select branch: **main**
   - Select folder: **/ (root)**
3. Click "Save"

Your site will be published at: **https://reyn0.github.io/PersonalSite/**

**Wait 1-2 minutes** for the first deployment to complete.

## Step 4: Verify Deployment

1. Visit https://reyn0.github.io/PersonalSite/
2. Check that:
   - Modern theme loads by default
   - Theme toggle works
   - All sections display correctly
   - Skills cards show properly
   - Contact links work

## Step 5: Configure Custom Domain (When Ready)

### On GitHub:
1. Go to https://github.com/reyn0/PersonalSite/settings/pages
2. Scroll to "Custom domain"
3. Enter your domain: `yourdomain.com`
4. Click "Save"
5. Check "Enforce HTTPS" (after DNS propagates)

### On Your Domain Registrar:
Add these DNS records:

**For apex domain (yourdomain.com):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: reyn0.github.io
```

### Alternative (CNAME for apex):
If your registrar supports CNAME flattening:
```
Type: CNAME
Name: @
Value: reyn0.github.io
```

**Note:** DNS changes can take 24-48 hours to propagate.

### Create CNAME file:
When you have a domain, create a file named `CNAME` in the repository root with your domain:
```
yourdomain.com
```
Then commit and push it.

## Step 6: Verify Deployment

1. Visit https://reyn0.github.io/PersonalSite/
2. Check that:
   - Modern theme loads by default
   - Theme toggle works
   - All sections display correctly
   - Skills cards show properly
   - Contact links work

## Step 7: Updating Your Site

Whenever you make changes:

```powershell
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically rebuild and deploy (takes 1-2 minutes).

## Quick Links

- **Repository:** https://github.com/reyn0/PersonalSite
- **Settings:** https://github.com/reyn0/PersonalSite/settings/pages
- **Actions (Build Status):** https://github.com/reyn0/PersonalSite/actions
- **Live Site:** https://reyn0.github.io/PersonalSite/

## Troubleshooting

### Site not loading?
- Check "Actions" tab in GitHub for build status
- Ensure repository is Public
- Wait 2-3 minutes after first enabling Pages

### CSS/JS not loading?
- Check browser console for errors
- Verify file paths are relative (not absolute)
- Clear browser cache

### Custom domain not working?
- Verify DNS records are correct
- Use [DNS Checker](https://dnschecker.org) to verify propagation
- Ensure HTTPS enforcement is enabled after DNS propagates
- Check for CNAME file in repository root

### 404 errors?
- Ensure `index.html` is in the root directory
- Check repository settings → Pages shows "Active"

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

**Your site is ready to deploy! 🚀**
