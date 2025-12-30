// Menu Data
const menuData = {
    breakfast: [
        {
            id: 1,
            name: "Idli (3 pcs)",
            price: 40,
            description: "Soft, fluffy steamed rice cakes served with sambar and chutney",
            image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400",
            category: "breakfast"
        },
        {
            id: 2,
            name: "Vada (2 pcs)",
            price: 45,
            description: "Crispy golden lentil donuts served with sambar and chutney",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400",
            category: "breakfast"
        },
        {
            id: 3,
            name: "Masala Dosa",
            price: 70,
            description: "Crispy rice crepe filled with spiced potato masala",
            image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400",
            category: "breakfast"
        },
        {
            id: 4,
            name: "Pongal",
            price: 60,
            description: "Savory rice and lentil porridge tempered with spices",
            image: "https://images.unsplash.com/photo-1626776876729-bab4fe8c5b4e?w=400",
            category: "breakfast"
        },
        {
            id: 5,
            name: "Upma",
            price: 50,
            description: "Semolina cooked with vegetables and aromatic spices",
            image: "https://images.unsplash.com/photo-1589301773859-34462e0f6d76?w=400",
            category: "breakfast"
        },
        {
            id: 6,
            name: "Poori Masala",
            price: 65,
            description: "Fluffy fried bread served with potato curry",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
            category: "breakfast"
        }
    ],
    specials: [
        {
            id: 7,
            name: "Ghee Roast Dosa",
            price: 90,
            description: "Paper-thin crispy dosa roasted in pure ghee",
            image: "https://images.unsplash.com/photo-1694672666144-c5b7b8e3c5b0?w=400",
            category: "specials"
        },
        {
            id: 8,
            name: "Rava Masala Dosa",
            price: 80,
            description: "Crispy semolina crepe with potato filling",
            image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400",
            category: "specials"
        },
        {
            id: 9,
            name: "Onion Rava Dosa",
            price: 75,
            description: "Crispy semolina crepe topped with onions",
            image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400",
            category: "specials"
        },
        {
            id: 10,
            name: "Mysore Masala Dosa",
            price: 85,
            description: "Spicy red chutney dosa with potato masala",
            image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400",
            category: "specials"
        },
        {
            id: 11,
            name: "Mini Tiffin",
            price: 120,
            description: "Combo of 2 idli, 1 vada, 1 mini dosa with all accompaniments",
            image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400",
            category: "specials"
        },
        {
            id: 12,
            name: "Special Thali",
            price: 150,
            description: "Complete meal with rice, sambar, rasam, vegetables, and dessert",
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400",
            category: "specials"
        }
    ],
    beverages: [
        {
            id: 13,
            name: "Filter Coffee",
            price: 30,
            description: "Traditional South Indian filter coffee with frothy milk",
            image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400",
            category: "beverages"
        },
        {
            id: 14,
            name: "Masala Tea",
            price: 25,
            description: "Aromatic tea brewed with Indian spices",
            image: "https://images.unsplash.com/photo-1597318112874-f0f7e2a59d40?w=400",
            category: "beverages"
        },
        {
            id: 15,
            name: "Badam Milk",
            price: 50,
            description: "Rich almond milk flavored with saffron and cardamom",
            image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400",
            category: "beverages"
        },
        {
            id: 16,
            name: "Buttermilk",
            price: 20,
            description: "Refreshing spiced yogurt drink",
            image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400",
            category: "beverages"
        },
        {
            id: 17,
            name: "Fresh Lime Soda",
            price: 35,
            description: "Tangy lime juice with soda and a hint of salt",
            image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400",
            category: "beverages"
        },
        {
            id: 18,
            name: "Rose Milk",
            price: 40,
            description: "Sweet milk flavored with rose syrup",
            image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400",
            category: "beverages"
        }
    ]
};

// Offers Data
const offersData = [
    {
        id: 1,
        title: "Breakfast Combo",
        description: "2 Idli + 1 Vada + Coffee at just ₹80! Save ₹35",
        discount: "30% OFF",
        validity: "Valid till: 31st January 2025"
    },
    {
        id: 2,
        title: "Weekend Special",
        description: "Get a free filter coffee with any dosa order on weekends",
        discount: "FREE Coffee",
        validity: "Valid on Saturdays & Sundays"
    },
    {
        id: 3,
        title: "Family Pack",
        description: "4 Idli + 2 Vada + 2 Dosa + 4 Coffees at ₹300. Perfect for family breakfast!",
        discount: "25% OFF",
        validity: "Valid till: 15th February 2025"
    },
    {
        id: 4,
        title: "Lunch Thali Deal",
        description: "Special Thali with unlimited sambar and rasam at ₹130 (Mon-Fri)",
        discount: "₹20 OFF",
        validity: "Valid on weekdays only"
    }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load menu items
    loadFeaturedItems();
    loadMenuByCategory();
    loadOffers();
    
    // Setup contact form
    setupContactForm();
    
    // Mobile menu toggle
    setupMobileMenu();
});

// Load featured items on home page
function loadFeaturedItems() {
    const container = document.getElementById('featured-items');
    if (!container) return;
    
    // Get 3 random items from specials
    const featured = menuData.specials.slice(0, 3);
    
    container.innerHTML = featured.map(item => createMenuItemHTML(item)).join('');
}

// Load menu items by category
function loadMenuByCategory() {
    loadCategoryItems('breakfast-menu', menuData.breakfast);
    loadCategoryItems('specials-menu', menuData.specials);
    loadCategoryItems('beverages-menu', menuData.beverages);
}

function loadCategoryItems(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = items.map(item => createMenuItemHTML(item)).join('');
}

// Create menu item HTML
function createMenuItemHTML(item) {
    return `
        <div class="menu-item">
            <div class="menu-item-image" style="background-image: url('${item.image}')"></div>
            <div class="menu-item-info">
                <div class="menu-item-header">
                    <h3>${item.name}</h3>
                    <span class="menu-item-price">₹${item.price}</span>
                </div>
                <p class="menu-item-desc">${item.description}</p>
            </div>
        </div>
    `;
}

// Load offers
function loadOffers() {
    const container = document.getElementById('offers-container');
    if (!container) return;
    
    container.innerHTML = offersData.map(offer => `
        <div class="offer-card">
            <div class="offer-badge">${offer.discount}</div>
            <div class="offer-content">
                <h3>${offer.title}</h3>
                <p>${offer.description}</p>
                <p class="offer-validity"><i class="fas fa-calendar-alt"></i> ${offer.validity}</p>
            </div>
        </div>
    `).join('');
}

// Setup contact form
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formMessage = document.getElementById('form-message');
        const formData = new FormData(form);
        
        // Simulate form submission
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        
        // Reset form
        form.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuBtn || !navLinks) return;
    
    menuBtn.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.right = '20px';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.borderRadius = '10px';
        navLinks.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
}

// LocalStorage functions for admin panel
const storage = {
    getMenuItems: function() {
        const stored = localStorage.getItem('menuItems');
        return stored ? JSON.parse(stored) : this.getDefaultMenu();
    },
    
    getDefaultMenu: function() {
        return {
            breakfast: menuData.breakfast,
            specials: menuData.specials,
            beverages: menuData.beverages
        };
    },
    
    saveMenuItems: function(items) {
        localStorage.setItem('menuItems', JSON.stringify(items));
    },
    
    getOffers: function() {
        const stored = localStorage.getItem('offers');
        return stored ? JSON.parse(stored) : offersData;
    },
    
    saveOffers: function(offers) {
        localStorage.setItem('offers', JSON.stringify(offers));
    }
};
