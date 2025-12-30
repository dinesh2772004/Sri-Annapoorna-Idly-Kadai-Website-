// Admin Panel JavaScript
let currentCategory = 'breakfast';
let editingItemId = null;
let editingOfferId = null;

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function () {
    loadMenuItems();
    loadOffersAdmin();
    setupAdminNavigation();
    setupTabs();
    setupForms();
});

// Setup admin navigation
function setupAdminNavigation() {
    const navLinks = document.querySelectorAll('.admin-nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const section = this.dataset.section;
            if (!section) return;

            e.preventDefault();

            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Show corresponding section
            document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
            document.getElementById(section + '-section').classList.add('active');
        });
    });
}

// Setup category tabs
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            currentCategory = this.dataset.category;
            loadMenuItems();
        });
    });
}

// Load menu items
function loadMenuItems() {
    const menuData = storage.getMenuItems();
    const items = menuData[currentCategory] || [];

    const tbody = document.getElementById('menu-tbody');
    if (!tbody) return;

    tbody.innerHTML = items.map(item => `
        <tr>
            <td><img src="${item.image}" alt="${item.name}" class="item-image-thumb"></td>
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td>${item.description}</td>
            <td>
                <button class="action-btn edit" onclick="editItem(${item.id})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="action-btn delete" onclick="deleteItem(${item.id})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </td>
        </tr>
    `).join('');
}

// Load offers for admin
function loadOffersAdmin() {
    const offers = storage.getOffers();
    const container = document.getElementById('offers-admin-grid');
    if (!container) return;

    container.innerHTML = offers.map(offer => `
        <div class="offer-admin-card">
            <div class="offer-badge">${offer.discount}</div>
            <h3>${offer.title}</h3>
            <p>${offer.description}</p>
            <p class="offer-validity"><i class="fas fa-calendar-alt"></i> ${offer.validity}</p>
            <div class="offer-admin-actions">
                <button class="action-btn edit" onclick="editOffer(${offer.id})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="action-btn delete" onclick="deleteOffer(${offer.id})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join('');
}

// Setup forms
function setupForms() {
    // Item form
    const itemForm = document.getElementById('item-form');
    if (itemForm) {
        itemForm.addEventListener('submit', function (e) {
            e.preventDefault();
            saveMenuItem();
        });
    }

    // Offer form
    const offerForm = document.getElementById('offer-form');
    if (offerForm) {
        offerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            saveOffer();
        });
    }
}

// Modal functions
function openAddItemModal() {
    editingItemId = null;
    document.getElementById('modal-title').textContent = 'Add Menu Item';
    document.getElementById('item-form').reset();
    document.getElementById('item-category').value = currentCategory;
    document.getElementById('item-modal').classList.add('active');
}

function closeItemModal() {
    document.getElementById('item-modal').classList.remove('active');
}

function openAddOfferModal() {
    editingOfferId = null;
    document.getElementById('offer-modal-title').textContent = 'Add Offer';
    document.getElementById('offer-form').reset();
    document.getElementById('offer-modal').classList.add('active');
}

function closeOfferModal() {
    document.getElementById('offer-modal').classList.remove('active');
}

// Edit item
function editItem(id) {
    const menuData = storage.getMenuItems();
    let item = null;

    // Find item across all categories
    for (let category in menuData) {
        item = menuData[category].find(i => i.id === id);
        if (item) break;
    }

    if (!item) return;

    editingItemId = id;
    document.getElementById('modal-title').textContent = 'Edit Menu Item';
    document.getElementById('item-id').value = item.id;
    document.getElementById('item-name').value = item.name;
    document.getElementById('item-category').value = item.category;
    document.getElementById('item-price').value = item.price;
    document.getElementById('item-description').value = item.description;
    document.getElementById('item-image').value = item.image;

    document.getElementById('item-modal').classList.add('active');
}

// Save menu item
function saveMenuItem() {
    const menuData = storage.getMenuItems();

    const item = {
        id: editingItemId || Date.now(),
        name: document.getElementById('item-name').value,
        category: document.getElementById('item-category').value,
        price: parseInt(document.getElementById('item-price').value),
        description: document.getElementById('item-description').value,
        image: document.getElementById('item-image').value
    };

    if (editingItemId) {
        // Update existing item
        for (let category in menuData) {
            const index = menuData[category].findIndex(i => i.id === editingItemId);
            if (index !== -1) {
                menuData[category].splice(index, 1);
                break;
            }
        }
    }

    // Add to appropriate category
    if (!menuData[item.category]) {
        menuData[item.category] = [];
    }
    menuData[item.category].push(item);

    storage.saveMenuItems(menuData);
    closeItemModal();
    loadMenuItems();

    alert('Menu item saved successfully!');
}

// Delete item
function deleteItem(id) {
    if (!confirm('Are you sure you want to delete this item?')) return;

    const menuData = storage.getMenuItems();

    for (let category in menuData) {
        const index = menuData[category].findIndex(i => i.id === id);
        if (index !== -1) {
            menuData[category].splice(index, 1);
            break;
        }
    }

    storage.saveMenuItems(menuData);
    loadMenuItems();

    alert('Item deleted successfully!');
}

// Edit offer
function editOffer(id) {
    const offers = storage.getOffers();
    const offer = offers.find(o => o.id === id);

    if (!offer) return;

    editingOfferId = id;
    document.getElementById('offer-modal-title').textContent = 'Edit Offer';
    document.getElementById('offer-id').value = offer.id;
    document.getElementById('offer-title').value = offer.title;
    document.getElementById('offer-description').value = offer.description;
    document.getElementById('offer-discount').value = offer.discount;
    document.getElementById('offer-validity').value = offer.validity;

    document.getElementById('offer-modal').classList.add('active');
}

// Save offer
function saveOffer() {
    let offers = storage.getOffers();

    const offer = {
        id: editingOfferId || Date.now(),
        title: document.getElementById('offer-title').value,
        description: document.getElementById('offer-description').value,
        discount: document.getElementById('offer-discount').value,
        validity: document.getElementById('offer-validity').value
    };

    if (editingOfferId) {
        const index = offers.findIndex(o => o.id === editingOfferId);
        if (index !== -1) {
            offers[index] = offer;
        }
    } else {
        offers.push(offer);
    }

    storage.saveOffers(offers);
    closeOfferModal();
    loadOffersAdmin();

    alert('Offer saved successfully!');
}

// Delete offer
function deleteOffer(id) {
    if (!confirm('Are you sure you want to delete this offer?')) return;

    let offers = storage.getOffers();
    offers = offers.filter(o => o.id !== id);

    storage.saveOffers(offers);
    loadOffersAdmin();

    alert('Offer deleted successfully!');
}

// Close modal on outside click
window.onclick = function (event) {
    const itemModal = document.getElementById('item-modal');
    const offerModal = document.getElementById('offer-modal');

    if (event.target === itemModal) {
        closeItemModal();
    }
    if (event.target === offerModal) {
        closeOfferModal();
    }
}
