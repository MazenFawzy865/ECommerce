// ========== Data ========== //
const PRODUCTS = [
    // PCs
    {id: 1, name: 'Gaming PC', category: 'PCs', price: 1200, image: './images/Gaming PC.jpg', featured: true},
    {id: 2, name: 'Office PC', category: 'PCs', price: 800, image: './images/Office PC.jpg', featured: false},
    {id: 13, name: 'Gaming PC Pro', category: 'PCs', price: 1800, image: './images/Gaming PC.jpg', featured: false},
    {id: 14, name: 'Workstation PC', category: 'PCs', price: 2200, image: './images/Office PC.jpg', featured: false},
    
    // Laptops
    {id: 3, name: 'Ultrabook Laptop', category: 'Laptops', price: 1500, image: './images/Ultrabook Laptop.jpg', featured: true},
    {id: 4, name: 'Budget Laptop', category: 'Laptops', price: 600, image: './images/Budget Laptop.jpg', featured: false},
    {id: 15, name: 'Gaming Laptop', category: 'Laptops', price: 1400, image: './images/Ultrabook Laptop.jpg', featured: false},
    {id: 16, name: 'Business Laptop', category: 'Laptops', price: 1100, image: './images/Budget Laptop.jpg', featured: false},
    {id: 17, name: 'Student Laptop', category: 'Laptops', price: 450, image: './images/Budget Laptop.jpg', featured: false},
    
    // Phones
    {id: 5, name: 'Smartphone Pro', category: 'Phones', price: 999, image: './images/Smartphone Pro.jpg', featured: true},
    {id: 6, name: 'Budget Phone', category: 'Phones', price: 299, image: './images/Budget Phone.jpg', featured: false},
    {id: 18, name: 'Flagship Phone', category: 'Phones', price: 1299, image: './images/Smartphone Pro.jpg', featured: false},
    {id: 19, name: 'Mid-range Phone', category: 'Phones', price: 599, image: './images/Budget Phone.jpg', featured: false},
    {id: 20, name: 'Entry-level Phone', category: 'Phones', price: 199, image: './images/Budget Phone.jpg', featured: false},
    
    // Tablets
    {id: 7, name: 'Tablet X', category: 'Tablets', price: 650, image: './images/Tablet X.jpg', featured: true},
    {id: 8, name: 'Tablet Mini', category: 'Tablets', price: 400, image: './images/Tablet Mini.jpg', featured: false},
    {id: 21, name: 'Pro Tablet', category: 'Tablets', price: 899, image: './images/Tablet X.jpg', featured: false},
    {id: 22, name: 'Student Tablet', category: 'Tablets', price: 350, image: './images/Tablet Mini.jpg', featured: false},
    {id: 23, name: 'Kids Tablet', category: 'Tablets', price: 250, image: './images/Tablet Mini.jpg', featured: false},
    
    // Accessories
    {id: 9, name: 'Wireless Mouse', category: 'Accessories', price: 40, image: './images/Wireless Mouse.png', featured: true},
    {id: 10, name: 'Mechanical Keyboard', category: 'Accessories', price: 120, image: './images/Mechanical Keyboard.jpg', featured: false},
    {id: 11, name: 'Noise Cancelling Headphones', category: 'Accessories', price: 200, image: './images/Noise Cancelling Headphones.jpg', featured: true},
    {id: 12, name: 'USB-C Charger', category: 'Accessories', price: 30, image: './images/USB-C Charger.jpeg', featured: false},
    {id: 24, name: 'Gaming Mouse', category: 'Accessories', price: 80, image: './images/Wireless Mouse.png', featured: false},
    {id: 25, name: 'RGB Keyboard', category: 'Accessories', price: 150, image: './images/Mechanical Keyboard.jpg', featured: false},
    {id: 26, name: 'Wireless Headphones', category: 'Accessories', price: 180, image: './images/Noise Cancelling Headphones.jpg', featured: false},
    {id: 27, name: 'Fast Charger', category: 'Accessories', price: 45, image: './images/USB-C Charger.jpeg', featured: false},
    {id: 28, name: 'Mouse Pad', category: 'Accessories', price: 15, image: './images/Wireless Mouse.png', featured: false},
    {id: 29, name: 'Keyboard Wrist Rest', category: 'Accessories', price: 25, image: './images/Mechanical Keyboard.jpg', featured: false},
    {id: 30, name: 'Phone Stand', category: 'Accessories', price: 20, image: './images/USB-C Charger.jpeg', featured: false},
];

// ========== State ========== //
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentTheme = localStorage.getItem('theme') || 'light';



// ========== DOM Elements ========== //
const navHome = document.getElementById('nav-home');
const navShop = document.getElementById('nav-shop');
const navCart = document.getElementById('nav-cart');
const navLogin = document.getElementById('nav-login');
const navCategories = document.getElementById('nav-categories');
const categoryDropdown = document.getElementById('category-dropdown');
const cartCount = document.getElementById('cart-count');
const themeToggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

const homeSection = document.getElementById('home-section');
const featuredSection = document.getElementById('featured-section');
const shopSection = document.getElementById('shop-section');
const shopNowBtn = document.getElementById('shop-now-btn');
const featuredProductsGrid = document.getElementById('featured-products-grid');
const shopProductsGrid = document.getElementById('shop-products-grid');
const filterCategory = document.getElementById('filter-category');
const sortProducts = document.getElementById('sort-products');
const cartSection = document.getElementById('cart-section');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');




// ========== Navigation ========== //
function showSection(section) {
    [homeSection, featuredSection, shopSection, cartSection].forEach(s => s.style.display = 'none');
    section.style.display = 'block';
    window.scrollTo({top: 0, behavior: 'smooth'});
}
navHome.addEventListener('click', e => { 
    e.preventDefault(); 
    setActiveNav(navHome); 
    showSection(homeSection); 
    featuredSection.style.display = 'block'; 
});
navShop.addEventListener('click', e => { 
    e.preventDefault(); 
    setActiveNav(navShop); 
    showSection(shopSection); 
    renderShopProducts(); 
});
navCart.addEventListener('click', e => { 
    e.preventDefault(); 
    setActiveNav(navCart); 
    showSection(cartSection); 
    renderCart(); 
});

shopNowBtn.addEventListener('click', e => { e.preventDefault(); setActiveNav(navShop); showSection(shopSection); renderShopProducts(); });
function setActiveNav(active) {
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    active.classList.add('active');
}
// Hamburger menu for mobile
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('open');
        }
    });
    
    // Close mobile menu when window is resized to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 767) {
            navLinks.classList.remove('open');
        }
    });
}
// Dropdown functionality for mobile devices
if (categoryDropdown) {
    const dropdown = categoryDropdown.closest('.dropdown');
    const dropdownLink = dropdown.querySelector('a');
    let hoverTimeout;
    
    // Handle touch devices (mobile) and small screens
    const isMobile = () => {
        return window.innerWidth <= 767 || 'ontouchstart' in window;
    };
    
    if (isMobile()) {
        dropdownLink.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('open');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });
        
        // Close dropdown when window is resized to desktop
        window.addEventListener('resize', () => {
            if (!isMobile()) {
                dropdown.classList.remove('open');
            }
        });
    } else {
        // Desktop hover handling
        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            dropdown.classList.add('hover');
        });
        
        dropdown.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => {
                dropdown.classList.remove('hover');
            }, 150); // Small delay to prevent flickering
        });
        
        // Keep dropdown open when hovering over dropdown content
        categoryDropdown.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
        });
        
        categoryDropdown.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => {
                dropdown.classList.remove('hover');
            }, 150);
        });
        
        // Switch to mobile behavior when window is resized
        window.addEventListener('resize', () => {
            if (isMobile()) {
                dropdown.classList.remove('hover');
            }
        });
    }
    
    // Category link click handlers
    categoryDropdown.querySelectorAll('a[data-category]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            // Set filter in shop section
            if (filterCategory) filterCategory.value = link.dataset.category;
            // Dispatch change event to trigger filtering
            if (filterCategory) filterCategory.dispatchEvent(new Event('change'));
            setActiveNav(navShop);
            showSection(shopSection);
            // Close dropdown
            if (isMobile()) {
                dropdown.classList.remove('open');
            } else {
                dropdown.classList.remove('hover');
            }
        });
    });
}

// ========== Theme Toggle ========== //
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    // Update the icon based on theme
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
        icon.title = 'Switch to light mode';
    } else {
        icon.className = 'fas fa-moon';
        icon.title = 'Switch to dark mode';
    }
}
themeToggle.addEventListener('click', () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
});
setTheme(currentTheme);

// ========== Featured Products ========== //
function renderFeaturedProducts(category = 'All') {
    let products = PRODUCTS.filter(p => p.featured && (category === 'All' || p.category === category));
    featuredProductsGrid.innerHTML = products.map(productCardHTML).join('');
    attachProductCardEvents(featuredProductsGrid);
}
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderFeaturedProducts(btn.dataset.category);
    });
});
renderFeaturedProducts();

// ========== Shop Products ========== //
function renderShopProducts() {
    let products = [...PRODUCTS];
    // Filter
    const cat = filterCategory.value;
    if (cat !== 'All') products = products.filter(p => p.category === cat);
    // Search
    const search = searchInput.value.trim().toLowerCase();
    if (search) products = products.filter(p => p.name.toLowerCase().includes(search));
    // Sort
    switch (sortProducts.value) {
        case 'price-asc': products.sort((a, b) => a.price - b.price); break;
        case 'price-desc': products.sort((a, b) => b.price - a.price); break;
        case 'name-asc': products.sort((a, b) => a.name.localeCompare(b.name)); break;
        case 'name-desc': products.sort((a, b) => b.name.localeCompare(a.name)); break;
    }
    shopProductsGrid.innerHTML = products.length ? products.map(productCardHTML).join('') : '<p>No products found.</p>';
    attachProductCardEvents(shopProductsGrid);
}
filterCategory.addEventListener('change', renderShopProducts);
sortProducts.addEventListener('change', renderShopProducts);
// Search functionality is now handled by debounced input listener below
searchBtn.addEventListener('click', e => {
    e.preventDefault();
    setActiveNav(navShop);
    showSection(shopSection);
    renderShopProducts();
});

// ========== Product Card HTML ========== //
function productCardHTML(p) {
    return `<div class="product-card" data-id="${p.id}">
        <span class="wishlist${wishlist.includes(p.id) ? ' active' : ''}" title="${wishlist.includes(p.id) ? 'Remove from wishlist' : 'Add to wishlist'}" role="button" tabindex="0">
            <i class="fa${wishlist.includes(p.id) ? 's' : 'r'} fa-heart"></i>
        </span>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <h3>${p.name}</h3>
        <div class="price">$${p.price.toFixed(2)}</div>
        <button class="btn btn-primary add-cart-btn" aria-label="Add ${p.name} to cart">Add to Cart</button>
    </div>`;
}
function attachProductCardEvents(grid) {
    const addButtons = grid.querySelectorAll('.add-cart-btn');
    
    addButtons.forEach((btn) => {
        btn.addEventListener('click', e => {
            const productCard = btn.closest('.product-card');
            const id = +productCard.dataset.id;
            addToCart(id);
            // --- FIX: update cart count immediately ---
            updateCartCount();
        });
    });
    grid.querySelectorAll('.wishlist').forEach(heart => {
        heart.addEventListener('click', e => {
            const id = +heart.closest('.product-card').dataset.id;
            toggleWishlist(id);
            renderFeaturedProducts();
            renderShopProducts();
        });
        heart.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const id = +heart.closest('.product-card').dataset.id;
                toggleWishlist(id);
                renderFeaturedProducts();
                renderShopProducts();
            }
        });
    });
}

// ========== Cart Logic ========== //
function addToCart(id) {
    const item = cart.find(i => i.id === id);
    const product = PRODUCTS.find(p => p.id === id);
    
    if (item) {
        item.qty++;
        showNotification(`Updated ${product.name} quantity to ${item.qty}`);
    } else {
        const newItem = {id, qty: 1};
        cart.push(newItem);
        showNotification(`Added ${product.name} to cart`);
    }
    
    saveCart();
    renderCart();
    updateCartCount();
    
    // Force cart display update
    if (cartSection.style.display === 'block') {
        setTimeout(() => {
            renderCart();
        }, 100);
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary);
        color: white;
        padding: 10px 20px;
        border-radius: 4px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}
function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
    updateCartCount();
}
function updateCartQty(id, qty) {
    const item = cart.find(i => i.id === id);
    if (item && qty > 0) {
        item.qty = qty;
    } else if (item) {
        removeFromCart(id);
    }
    saveCart();
    renderCart();
    updateCartCount();
}
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function renderCart() {
    if (!cart.length) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = cart.map(item => {
        const p = PRODUCTS.find(p => p.id === item.id);
        const subtotal = p.price * item.qty;
        total += subtotal;
        return `<div class="cart-item" data-id="${p.id}">
            <img src="${p.image}" alt="${p.name}">
            <div class="cart-item-details">
                <div class="cart-item-title">${p.name}</div>
                <div class="cart-item-price">$${p.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" data-action="dec">-</button>
                <input type="number" min="1" value="${item.qty}" class="qty-input">
                <button class="qty-btn" data-action="inc">+</button>
            </div>
            <button class="cart-item-remove" title="Remove"><i class="fa fa-trash"></i></button>
        </div>`;
    }).join('');
    
    cartTotal.textContent = total.toFixed(2);
    // Attach events
    cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = +btn.closest('.cart-item').dataset.id;
            removeFromCart(id);
        });
    });
    cartItems.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = +btn.closest('.cart-item').dataset.id;
            const input = btn.parentElement.querySelector('.qty-input');
            let qty = +input.value;
            if (btn.dataset.action === 'inc') qty++;
            else if (btn.dataset.action === 'dec') qty--;
            updateCartQty(id, qty);
        });
    });
    cartItems.querySelectorAll('.qty-input').forEach(input => {
        input.addEventListener('change', () => {
            const id = +input.closest('.cart-item').dataset.id;
            let qty = +input.value;
            updateCartQty(id, qty);
        });
    });
}
function updateCartCount() {
    const count = cart.reduce((sum, i) => sum + i.qty, 0);
    cartCount.textContent = count;
}
updateCartCount();

// ========== Wishlist Logic ========== //
function toggleWishlist(id) {
    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(i => i !== id);
    } else {
        wishlist.push(id);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}



// ========== Sticky Navbar ========== //
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========== Initial Render ========== //
renderCart();


// ========== Error Handling ========== //
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

// ========== Performance Optimization ========== //
// Debounce search input
let searchTimeout;
if (searchInput) {
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            setActiveNav(navShop);
            showSection(shopSection);
            renderShopProducts();
        }, 300);
    });
}

// Touch event handling for mobile devices
if ('ontouchstart' in window) {
    // Prevent double-tap zoom on buttons
    document.querySelectorAll('button, .btn, .category-btn').forEach(button => {
        button.addEventListener('touchstart', (e) => {
            e.preventDefault();
        }, { passive: false });
    });
    
    // Add touch feedback for interactive elements
    document.querySelectorAll('.product-card, .category-btn, .nav-links a').forEach(element => {
        element.addEventListener('touchstart', () => {
            element.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', () => {
            element.style.transform = '';
        });
    });
}

 