# 🚀 Quick Start Guide

## Open the Website
**Windows**: Double-click `START_WEBSITE.bat`
**Manual**: Open `index.html` in any browser

---

## 📱 Pages Overview

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero, hours, featured items |
| About | `about.html` | Story, mission, team |
| Menu | `menu.html` | All food items by category |
| Offers | `offers.html` | Current deals |
| Contact | `contact.html` | Form, map, contact info |
| Admin | `admin.html` | Manage menu & offers |

---

## ⚡ Quick Edits

### Change Phone Number
Search & Replace: `+91 98765 43210` → Your number

### Change Email
Search & Replace: `hello@annapoorna.com` → Your email

### Change Address
Search & Replace: `123, Temple Road, R.S. Puram, CBE` → Your address

### Change WhatsApp
Search & Replace: `wa.me/919876543210` → `wa.me/YOUR_NUMBER`

---

## 🎨 Update Menu Items

**Easy Way**: Open `admin.html` → Menu Management → Add/Edit/Delete

**Code Way**: Edit `js/main.js` → Find `menuData` object

---

## 🏷️ Update Offers

Open `admin.html` → Offers Management → Add/Edit/Delete

---

## 🗺️ Update Google Maps

1. Go to Google Maps → Find your location
2. Click "Share" → "Embed a map"
3. Copy the iframe code
4. Open `contact.html`
5. Replace the iframe (around line 115)

---

## 🎨 Change Colors

Edit `css/style.css` → Lines 1-10 (`:root` section)

```css
--primary-color: #2D5A27;    /* Main green */
--secondary-color: #F4A460;  /* Saffron */
--accent-color: #D2691E;     /* Orange */
```

---

## 🌐 Deploy Online (FREE)

### Netlify (Easiest)
1. Go to https://app.netlify.com/drop
2. Drag the entire "shopping website" folder
3. Done! Live with HTTPS

### Vercel
1. Go to https://vercel.com
2. Sign up → Import project
3. Upload folder → Deploy

### GitHub Pages
1. Create GitHub account
2. New repository → Upload files
3. Settings → Pages → Enable

---

## 📂 File Structure

```
shopping website/
├── *.html (6 pages)
├── css/ (2 files)
├── js/ (2 files)
├── images/ (2 files)
└── *.md (4 docs)
```

---

## 🔑 Important Files

- `index.html` - Start here
- `admin.html` - Manage content
- `README.md` - Full docs
- `DEPLOYMENT_GUIDE.md` - How to deploy
- `PROJECT_SUMMARY.md` - What's included

---

## ✅ Pre-Launch Checklist

- [ ] Update phone number
- [ ] Update email address
- [ ] Update physical address
- [ ] Update WhatsApp number
- [ ] Update Google Maps location
- [ ] Add real menu items (via admin)
- [ ] Add real offers (via admin)
- [ ] Add real food photos
- [ ] Test on mobile device
- [ ] Test all links work

---

## 💡 Tips

- **Admin Panel**: All changes save to browser localStorage
- **Images**: Replace with your own food photos for best results
- **Testing**: Open in Chrome, Firefox, Safari, and mobile
- **Speed**: Already optimized, but compress images if needed
- **SEO**: Update meta descriptions in each HTML file

---

## 🆘 Common Issues

**Menu items not showing?**
→ Check browser console (F12) for errors

**Admin changes not saving?**
→ Don't use incognito mode, enable localStorage

**Images not loading?**
→ Check file paths, ensure images folder uploaded

**Mobile menu not working?**
→ Ensure JavaScript files are loaded

---

## 📞 Contact Info to Update

Files with contact info:
- All HTML files (footer sections)
- `contact.html` (main contact section)
- `index.html` (quick info cards)

---

## 🎯 Default Dummy Data

**Phone**: +91 98765 43210
**Email**: hello@annapoorna.com
**Address**: 123, Temple Road, R.S. Puram, CBE
**Hours**: 7:00 AM - 10:00 PM (Daily)
**Menu Items**: 18 items
**Offers**: 4 deals

---

**Need More Help?**
→ See `README.md` for detailed documentation
→ See `DEPLOYMENT_GUIDE.md` for hosting options
→ See `PROJECT_SUMMARY.md` for complete overview

---

**Ready to Launch! 🚀**
