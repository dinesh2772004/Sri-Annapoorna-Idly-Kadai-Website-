# Sri Annapoorna Idly Kadai - Restaurant Website

A modern, mobile-friendly, and SEO-optimized website for a South Indian restaurant.

## 🌟 Features

### User-Facing Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured content
- **Fast Loading**: Optimized images and efficient code
- **WhatsApp Integration**: Direct ordering via WhatsApp
- **Google Maps**: Interactive map for easy location finding
- **Contact Form**: Easy communication with the restaurant

### Pages Included
1. **Home** - Hero banner, quick info, featured dishes
2. **About Us** - Restaurant story, mission, and team
3. **Menu** - Categorized menu items (Breakfast, Kadai Specials, Beverages)
4. **Offers** - Current deals and promotions
5. **Contact** - Contact form, map, and contact details
6. **Admin Panel** - Manage menu items and offers

### Admin Panel Features
- Add, edit, and delete menu items
- Manage offers and promotions
- Category-based organization
- LocalStorage-based data persistence
- User-friendly interface

## 📁 Project Structure

```
shopping website/
├── index.html          # Home page
├── about.html          # About Us page
├── menu.html           # Menu page
├── offers.html         # Offers page
├── contact.html        # Contact page
├── admin.html          # Admin panel
├── css/
│   ├── style.css       # Main stylesheet
│   └── admin.css       # Admin panel styles
├── js/
│   ├── main.js         # Main JavaScript
│   └── admin.js        # Admin panel functionality
└── images/
    └── hero_banner.webp # Hero banner image
```

## 🚀 Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser.

### Option 2: Use a Local Server (Recommended)
For the best experience, use a local web server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

## 🔧 Admin Panel

Access the admin panel at: `admin.html`

### Managing Menu Items
1. Click on "Menu Management" in the sidebar
2. Select a category (Breakfast, Kadai Specials, or Beverages)
3. Click "Add New Item" to add items
4. Use Edit/Delete buttons to modify existing items

### Managing Offers
1. Click on "Offers Management" in the sidebar
2. Click "Add New Offer" to create offers
3. Use Edit/Delete buttons to modify existing offers

**Note**: All data is stored in the browser's localStorage. Clearing browser data will reset to default values.

## 🎨 Customization

### Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #2D5A27;
    --secondary-color: #F4A460;
    --accent-color: #D2691E;
    /* ... more colors */
}
```

### Contact Information
Update contact details in:
- Footer sections in all HTML files
- Contact page (`contact.html`)
- WhatsApp links (search for `wa.me/919876543210`)

### Google Maps
Replace the map embed URL in `contact.html` with your location coordinates.

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-friendly navigation
- Touch-optimized buttons
- Responsive grid layouts
- Optimized images for faster loading

## 🔒 SSL Support

For production deployment:
1. Use a hosting service that provides SSL (e.g., Netlify, Vercel, GitHub Pages)
2. Or configure SSL certificate on your web server

## 📊 SEO Features

- Semantic HTML5 structure
- Meta descriptions on all pages
- Proper heading hierarchy (H1-H3)
- Alt text for images
- Open Graph tags ready (can be added)
- Fast loading times

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Dummy Data

The website comes with pre-populated dummy data:
- 18 menu items across 3 categories
- 4 sample offers
- Sample restaurant information
- Placeholder images from Unsplash

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with CSS Grid and Flexbox
- **JavaScript (Vanilla)** - Functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Outfit, Playfair Display)
- **LocalStorage API** - Data persistence

## 📞 Support

For questions or issues, please contact the restaurant at:
- Phone: +91 98765 43210
- Email: dineshm8870449432@gmail.com

## 📄 License

This project is created for Sri Annapoorna Idly Kadai. All rights reserved.

---

**Developed with ❤️ for authentic South Indian cuisine**

