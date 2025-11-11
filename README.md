# Reynaldi Hadianto - Personal Website

A dual-theme personal landing page featuring modern minimalist and retro 90s designs.

## Features

### 🎨 Dual Theme Design
- **Modern Theme** (Default): Clean, professional, monochrome design with card-based layout
- **Retro Theme**: Nostalgic 90s internet aesthetic with colorful elements, animations, and effects

### 📱 Responsive
- Works on desktop, tablet, and mobile devices
- Optimized layouts for different screen sizes

### 🔄 Theme Toggle
- Click the button in the top-right corner to switch between themes
- Your preference is saved in browser localStorage

## Viewing the Site

### Option 1: Direct File Opening
1. Open `index.html` directly in your web browser
2. Right-click the file and select "Open with" → Your preferred browser

### Option 2: Local Server (Recommended)
Using Python:
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

Using Node.js (if you have it installed):
```bash
npx serve

# Or with live-server
npx live-server
```

## Troubleshooting

### Theme Toggle Not Working?
1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Refresh the page
4. Click the theme toggle button
5. Check for any error messages in the console

### Clear Browser Cache
If styles aren't loading properly:
- Press `Ctrl + Shift + R` (Windows/Linux)
- Press `Cmd + Shift + R` (Mac)

## Files Structure

```
PersonalSite/
├── index.html          # Main HTML file
├── style-modern.css    # Modern theme styles
├── style.css          # Retro theme styles
├── script.js          # JavaScript for theme toggle and effects
├── Profile.pdf        # Your resume/profile
└── README.md          # This file
```

## Customization

### Update Your Information
Edit `index.html` to update:
- Contact information
- Work experience
- Skills
- Education

### Modify Colors
- Modern theme: Edit `style-modern.css` (uses CSS variables in `:root`)
- Retro theme: Edit `style.css`

### Add/Remove Sections
Add new sections in `index.html` following the existing structure with:
```html
<div id="section-name" class="section">
    <h2>Section Title</h2>
    <!-- Your content -->
</div>
```

## Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## License
Personal use only.
