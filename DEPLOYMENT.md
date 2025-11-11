# GitHub Pages Deployment Guide

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name your repository (e.g., `personal-site` or `portfolio`)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README (we already have files)
6. Click "Create repository"

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```powershell
# Add the remote repository (replace YOUR-USERNAME and YOUR-REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Rename branch to main (GitHub's default)
git branch -M main

# Push your code
git push -u origin main
```

**Example:**
```powershell
git remote add origin https://github.com/reynaldihadianto/personal-site.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (top menu)
3. Click "Pages" (left sidebar)
4. Under "Source":
   - Select branch: **main**
   - Select folder: **/ (root)**
5. Click "Save"

Your site will be published at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

**Wait 1-2 minutes** for the first deployment to complete.

## Step 4: Configure Custom Domain (Optional)

### On GitHub:
1. In Pages settings, scroll to "Custom domain"
2. Enter your domain: `yourdomain.com`
3. Check "Enforce HTTPS" (after DNS propagates)
4. Click "Save"

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
Value: YOUR-USERNAME.github.io
```

### Alternative (CNAME for apex):
If your registrar supports CNAME flattening:
```
Type: CNAME
Name: @
Value: YOUR-USERNAME.github.io
```

**Note:** DNS changes can take 24-48 hours to propagate.

## Step 5: Verify Deployment

1. Visit `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
2. Check that:
   - Modern theme loads by default
   - Theme toggle works
   - All sections display correctly
   - Skills cards show properly
   - Contact links work

## Updating Your Site

Whenever you make changes:

```powershell
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically rebuild and deploy (takes 1-2 minutes).

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
