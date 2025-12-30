# Deployment Guide - Sri Annapoorna Idly Kadai Website

## 🚀 Quick Start (Local Testing)

### Windows Users
Simply double-click `START_WEBSITE.bat` to open the website in your browser.

### Manual Opening
Open `index.html` in any web browser.

---

## 🌐 Deploying to the Internet

### Option 1: Netlify (Recommended - FREE)

1. **Sign up** at [netlify.com](https://netlify.com)
2. **Drag and drop** the entire project folder to Netlify
3. Your site will be live at: `your-site-name.netlify.app`
4. **Free SSL** included automatically!

**Steps:**
- Go to https://app.netlify.com/drop
- Drag the entire "shopping website" folder
- Done! Your site is live with HTTPS

### Option 2: Vercel (FREE)

1. **Sign up** at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in the project folder
4. Follow the prompts
5. Your site is live with free SSL!

### Option 3: GitHub Pages (FREE)

1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository
3. Upload all files to the repository
4. Go to Settings → Pages
5. Select main branch as source
6. Your site will be at: `username.github.io/repository-name`

### Option 4: Traditional Web Hosting

**Requirements:**
- Any web hosting with HTML/CSS/JS support
- No server-side requirements needed
- No database needed (uses localStorage)

**Upload via FTP:**
1. Get FTP credentials from your hosting provider
2. Use FileZilla or similar FTP client
3. Upload all files to `public_html` or `www` folder
4. Access via your domain

**Popular Hosting Providers:**
- Hostinger
- Bluehost
- SiteGround
- GoDaddy

---

## 🔧 Pre-Deployment Checklist

### 1. Update Contact Information

**Files to update:**
- `index.html` - Footer and quick info
- `about.html` - Footer
- `menu.html` - Footer
- `offers.html` - Footer
- `contact.html` - All contact details, map, and footer

**What to change:**
- Phone numbers (currently: +91 98765 43210)
- Email addresses (currently: hello@annapoorna.com)
- Physical address (currently: 123, Temple Road, R.S. Puram, CBE)
- WhatsApp links (search for `wa.me/919876543210`)

### 2. Update Google Maps

In `contact.html`, replace the iframe src with your actual location:

```html
<iframe 
    src="YOUR_GOOGLE_MAPS_EMBED_URL"
    ...
</iframe>
```

**How to get your map URL:**
1. Go to [Google Maps](https://maps.google.com)
2. Search for your restaurant location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace in contact.html

### 3. Add Real Images

Replace placeholder images with your actual food photos:
- Update `images/hero_banner.webp` with your banner
- Update image URLs in `js/main.js` (menuData object)

### 4. Customize Menu Items

Option A: Use Admin Panel
- Open `admin.html`
- Add/edit/delete menu items
- Changes save to localStorage

Option B: Edit JavaScript
- Open `js/main.js`
- Modify the `menuData` object
- Update prices, descriptions, and images

### 5. Update Offers

- Open `admin.html`
- Go to Offers Management
- Add your current offers

---

## 🔒 SSL Certificate Setup

### Free SSL Options:

1. **Let's Encrypt** (if using your own server)
   - Free SSL certificate
   - Auto-renewal
   - Supported by most hosting providers

2. **Cloudflare** (FREE)
   - Sign up at cloudflare.com
   - Add your domain
   - Enable SSL (Free plan available)
   - Provides CDN + SSL

3. **Hosting Provider SSL**
   - Most modern hosts include free SSL
   - Usually one-click activation
   - Check your hosting control panel

---

## 📱 Testing Before Launch

### Test on Multiple Devices:
- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Mobile (iOS Safari, Chrome Mobile)
- ✅ Tablet (iPad, Android tablets)

### Test All Features:
- ✅ Navigation works on all pages
- ✅ Contact form submits properly
- ✅ WhatsApp links open correctly
- ✅ Google Maps loads
- ✅ Admin panel CRUD operations
- ✅ All images load
- ✅ Responsive design on mobile

### Performance Testing:
- Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
- Aim for 90+ score
- Optimize images if needed

---

## 🎯 SEO Optimization (After Deployment)

### 1. Google Search Console
- Add your site to [Google Search Console](https://search.google.com/search-console)
- Submit your sitemap
- Monitor search performance

### 2. Google My Business
- Create a Google My Business listing
- Link to your website
- Add photos and menu

### 3. Social Media
- Add Open Graph tags to HTML files
- Share on Facebook, Instagram
- Add social media links to footer

---

## 📊 Analytics Setup (Optional)

### Google Analytics:
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking code
3. Add before `</head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-TRACKING-ID');
</script>
```

---

## 🆘 Troubleshooting

### Images Not Loading?
- Check file paths are correct
- Ensure images folder uploaded
- Use absolute URLs if needed

### Admin Panel Data Not Saving?
- localStorage only works on same domain
- Don't use incognito/private mode
- Check browser localStorage is enabled

### Mobile Menu Not Working?
- Ensure JavaScript files are loaded
- Check browser console for errors
- Clear browser cache

### Contact Form Not Sending?
- Current form is client-side only
- For real email sending, integrate:
  - [Formspree](https://formspree.io/) (FREE)
  - [EmailJS](https://www.emailjs.com/) (FREE tier available)
  - Or use server-side PHP/Node.js

---

## 📞 Support

For technical issues or questions:
- Check README.md for documentation
- Review code comments in files
- Test in different browsers

---

## ✅ Final Checklist

Before going live:

- [ ] All contact information updated
- [ ] Google Maps shows correct location
- [ ] WhatsApp number is correct
- [ ] Menu items are accurate with prices
- [ ] All images are uploaded and loading
- [ ] Tested on mobile devices
- [ ] Tested on desktop browsers
- [ ] SSL certificate is active
- [ ] Domain name is configured
- [ ] Social media links added (if applicable)
- [ ] Google My Business created
- [ ] Analytics tracking added (optional)

---

**🎉 Congratulations! Your restaurant website is ready to go live!**

For best results, deploy to Netlify or Vercel for instant HTTPS and global CDN.
