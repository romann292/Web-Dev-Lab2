/**
 * ═══════════════════════════════════════════════════════════════════════
 * NOVASTORE / ELECTROVAULT — E-COMMERCE CORE LOGIC
 * Full Stack Web Development Lab 2 · Task 6
 * Student: Roman Fatima (241878) · BSCS 5A · Air University
 * ═══════════════════════════════════════════════════════════════════════
 */

// ── 1. PRODUCTS DATA ──
const PRODUCTS = [
  {
    id: 1,
    name: "Apple MacBook Pro 16\" M3 Max",
    category: "laptops",
    categoryLabel: "Laptops",
    price: 3499,
    oldPrice: 3999,
    discount: "12% OFF",
    rating: 4.9,
    reviewsCount: 342,
    badge: "Bestseller",
    badgeColor: "bg-warning text-dark",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80",
    description: "Equipped with the groundbreaking M3 Max chip, 36GB unified memory, and Liquid Retina XDR display with ProMotion 120Hz.",
    specs: ["Apple M3 Max 16-Core CPU", "40-Core GPU, 36GB RAM", "1TB Ultra-Fast SSD", "22-hour battery life", "Liquid Retina XDR Display"],
    inStock: true
  },
  {
    id: 2,
    name: "Sony WH-1000XM5 ANC Headphones",
    category: "audio",
    categoryLabel: "Audio",
    price: 399,
    oldPrice: 479,
    discount: "17% OFF",
    rating: 4.8,
    reviewsCount: 512,
    badge: "Top Rated",
    badgeColor: "bg-primary text-white",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    description: "Industry-leading noise canceling with 8 microphones, Auto NC Optimizer, and crystal-clear hands-free calling with 30-hour battery.",
    specs: ["Dual processors ANC", "30-hr battery life", "Multipoint connection", "Hi-Res LDAC Audio", "Lightweight ergonomic design"],
    inStock: true
  },
  {
    id: 3,
    name: "Apple iPhone 16 Pro Max 256GB",
    category: "smartphones",
    categoryLabel: "Smartphones",
    price: 1199,
    oldPrice: 1299,
    discount: "8% OFF",
    rating: 4.9,
    reviewsCount: 684,
    badge: "New Arrival",
    badgeColor: "bg-success text-white",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=80",
    description: "Forged in grade 5 titanium with the revolutionary A18 Pro chip, 48MP Fusion camera system with 5x Telephoto optical zoom.",
    specs: ["A18 Pro Bionic chip", "6.9-inch Super Retina XDR", "48MP Triple Camera", "Action Button & Camera Control", "All-day battery life"],
    inStock: true
  },
  {
    id: 4,
    name: "Apple Watch Ultra 2 Titanium 49mm",
    category: "wearables",
    categoryLabel: "Wearables",
    price: 799,
    oldPrice: 899,
    discount: "11% OFF",
    rating: 4.9,
    reviewsCount: 220,
    badge: "Rugged Pro",
    badgeColor: "bg-dark text-white",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    description: "The most rugged and capable Apple Watch ever. Corrosion-resistant titanium case, precision dual-frequency GPS, and up to 36 hours of battery.",
    specs: ["49mm Titanium Case", "3000 nits display brightness", "Precision Dual-frequency GPS", "Depth gauge to 40m", "100m water resistant"],
    inStock: true
  },
  {
    id: 5,
    name: "Sony Alpha A7 IV Full-Frame Camera",
    category: "cameras",
    categoryLabel: "Cameras",
    price: 2498,
    oldPrice: 2699,
    discount: "7% OFF",
    rating: 4.9,
    reviewsCount: 189,
    badge: "Creator Choice",
    badgeColor: "bg-info text-dark",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80",
    description: "33MP Full-Frame Exmor R CMOS sensor, 4K 60p video, 10-bit 4:2:2 recording, Real-time Eye AF for humans, animals, and birds.",
    specs: ["33MP BSI CMOS Sensor", "BIONZ XR processor", "4K 60p 10-bit recording", "759-pt phase-detect AF", "5.5-stop In-body Image Stabilization"],
    inStock: true
  },
  {
    id: 6,
    name: "Keychron Q1 Pro Wireless Mechanical",
    category: "peripherals",
    categoryLabel: "Peripherals",
    price: 199,
    oldPrice: 239,
    discount: "16% OFF",
    rating: 4.7,
    reviewsCount: 145,
    badge: "Custom Grade",
    badgeColor: "bg-secondary text-white",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
    description: "Full aluminum CNC body, 75% layout, hot-swappable Keychron K Pro switches, double-gasket design, and QMK/VIA programmable.",
    specs: ["CNC Machined Aluminum", "Bluetooth 5.1 & Type-C", "Hot-swappable switches", "RGB South-facing backlight", "Compatible with Mac & Windows"],
    inStock: true
  },
  {
    id: 7,
    name: "Dell XPS 15 9530 OLED Touch",
    category: "laptops",
    categoryLabel: "Laptops",
    price: 2199,
    oldPrice: 2599,
    discount: "15% OFF",
    rating: 4.7,
    reviewsCount: 260,
    badge: "Sale",
    badgeColor: "bg-danger text-white",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=700&q=80",
    description: "13th Gen Intel Core i9-13900H, NVIDIA RTX 4070, 32GB DDR5, 1TB NVMe, 3.5K OLED InfinityEdge touch screen.",
    specs: ["Intel Core i9-13900H", "NVIDIA RTX 4070 8GB", "3.5K OLED Touchscreen", "32GB DDR5 4800MHz", "Carbon fiber palm rest"],
    inStock: true
  },
  {
    id: 8,
    name: "Bose QuietComfort Ultra Soundbar",
    category: "audio",
    categoryLabel: "Audio",
    price: 899,
    oldPrice: 999,
    discount: "10% OFF",
    rating: 4.8,
    reviewsCount: 178,
    badge: "Dolby Atmos",
    badgeColor: "bg-primary text-white",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=700&q=80",
    description: "Immersive spatial audio with Dolby Atmos and proprietary TrueSpace technology for room-filling theater sound.",
    specs: ["Dolby Atmos & Spatial Audio", "Voice4Video voice control", "Wi-Fi & Bluetooth streaming", "HDMI eARC connectivity", "ADAPTiQ audio calibration"],
    inStock: true
  },
  {
    id: 9,
    name: "Samsung Galaxy S24 Ultra 512GB",
    category: "smartphones",
    categoryLabel: "Smartphones",
    price: 1299,
    oldPrice: 1419,
    discount: "8% OFF",
    rating: 4.8,
    reviewsCount: 430,
    badge: "AI Powered",
    badgeColor: "bg-info text-dark",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=80",
    description: "Titanium exterior, Galaxy AI features with Circle to Search, 200MP camera with Quad Telephoto system, and built-in S Pen.",
    specs: ["Snapdragon 8 Gen 3 for Galaxy", "200MP Quad-Telephoto", "Built-in S Pen Stylus", "6.8\" Dynamic AMOLED 2X", "5000 mAh All-day Battery"],
    inStock: true
  },
  {
    id: 10,
    name: "Logitech MX Master 3S Ergonomic Mouse",
    category: "peripherals",
    categoryLabel: "Peripherals",
    price: 99,
    oldPrice: 129,
    discount: "23% OFF",
    rating: 4.9,
    reviewsCount: 920,
    badge: "Best Value",
    badgeColor: "bg-success text-white",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=700&q=80",
    description: "Quiet Click technology, 8,000 DPI track-on-glass sensor, MagSpeed electromagnetic scroll wheel, and ergonomic sculpted silhouette.",
    specs: ["8000 DPI Darkfield Sensor", "MagSpeed 1000 lines/sec scroll", "Quiet Click sound reduction", "Multi-device Flow control", "70-day battery on full charge"],
    inStock: true
  },
  {
    id: 11,
    name: "Apple iPad Pro 13\" M4 OLED",
    category: "laptops",
    categoryLabel: "Tablets",
    price: 1299,
    oldPrice: 1399,
    discount: "7% OFF",
    rating: 4.9,
    reviewsCount: 310,
    badge: "Ultra Thin",
    badgeColor: "bg-warning text-dark",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=80",
    description: "The thinnest Apple product ever made. Revolutionary Ultra Retina XDR Tandem OLED display and extreme M4 processing speeds.",
    specs: ["Apple M4 Next-gen silicon", "Ultra Retina XDR Tandem OLED", "5.1mm razor-thin profile", "Pencil Pro haptic feedback", "Thunderbolt / USB 4 port"],
    inStock: true
  },
  {
    id: 12,
    name: "Garmin Fenix 7X Sapphire Solar",
    category: "wearables",
    categoryLabel: "Wearables",
    price: 799,
    oldPrice: 899,
    discount: "11% OFF",
    rating: 4.8,
    reviewsCount: 165,
    badge: "Solar Powered",
    badgeColor: "bg-dark text-white",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
    description: "Solar charging lens harnesses sunlight to extend battery life up to 37 days in smartwatch mode. Built-in LED flashlight and TopoActive maps.",
    specs: ["Power Sapphire Solar lens", "Up to 37 days battery", "Built-in multi-LED flashlight", "Preloaded TopoActive maps", "Pulse Ox & HRV status"],
    inStock: true
  }
];

// ── 2. INITIAL REVIEWS DATA ──
const INITIAL_REVIEWS = [
  {
    id: 1,
    name: "Hamza Tariq",
    rating: 5,
    date: "September 24, 2026",
    title: "Unmatched performance & build quality!",
    comment: "I purchased the MacBook Pro M3 Max for our Full Stack lab projects and deep learning tasks. The compile times are instantaneous and the battery easily lasts 2 full days of lectures. Delivery was within 24 hours.",
    verified: true,
    avatarColor: "#4f46e5"
  },
  {
    id: 2,
    name: "Ayesha Malik",
    rating: 5,
    date: "September 20, 2026",
    title: "Best ANC headphones on the market",
    comment: "The Sony WH-1000XM5 blocks out university cafeteria noise completely. The microphone quality on Zoom and Teams presentations is exceptionally clear. Super comfortable for 6+ hours of continuous study.",
    verified: true,
    avatarColor: "#06b6d4"
  },
  {
    id: 3,
    name: "Dr. Farooq Khan",
    rating: 5,
    date: "September 15, 2026",
    title: "Exceptional shopping experience & student discount",
    comment: "Used the AU2026 promo coupon and received a 15% discount. The checkout process was seamless with multiple payment options and immediate digital invoice generation. Highly recommended for students and faculty.",
    verified: true,
    avatarColor: "#10b981"
  },
  {
    id: 4,
    name: "Zainab Raza",
    rating: 4,
    date: "September 10, 2026",
    title: "Keychron mechanical keyboard is pure typing bliss",
    comment: "The tactile feedback and wireless multi-device switching between my laptop and iPad make this the best keyboard I have ever owned. Arrived in pristine condition.",
    verified: true,
    avatarColor: "#f59e0b"
  }
];

// ── 3. STATE MANAGEMENT ──
let state = {
  cart: JSON.parse(localStorage.getItem('electro_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('electro_wishlist') || '[]'),
  user: JSON.parse(localStorage.getItem('electro_user') || 'null'),
  appliedPromo: JSON.parse(localStorage.getItem('electro_promo') || 'null'),
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
  reviews: JSON.parse(localStorage.getItem('electro_reviews') || JSON.stringify(INITIAL_REVIEWS)),
  theme: localStorage.getItem('electro_theme') || 'light'
};

// ── 4. INITIALIZATION ──
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(state.theme);
  updateAuthUI();
  updateCartBadge();
  updateWishlistBadge();
  renderProducts();
  renderCart();
  renderReviews();
  setupEventListeners();
  checkAutoLogin();
});

// ── 5. THEME TOGGLE ──
function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-bs-theme', theme);
  localStorage.setItem('electro_theme', theme);
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.className = theme === 'dark' ? 'bi bi-sun-fill text-warning' : 'bi bi-moon-stars-fill text-dark';
  }
}

function toggleTheme() {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  showToast(`Switched to ${state.theme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
}

// ── 6. AUTHENTICATION (SIGNUP / LOGIN / LOGOUT) ──
function checkAutoLogin() {
  if (!state.user) {
    // Default demo user ready
    state.user = {
      name: "Roman Fatima",
      email: "roman.fatima@students.au.edu.pk",
      regNo: "241878",
      avatar: "RF"
    };
    localStorage.setItem('electro_user', JSON.stringify(state.user));
    updateAuthUI();
  }
}

function updateAuthUI() {
  const userBtn = document.getElementById('userAuthBtn');
  const userGreeting = document.getElementById('userGreeting');
  if (!userBtn) return;

  if (state.user) {
    userBtn.innerHTML = `
      <div class="d-flex align-items-center gap-2">
        <span class="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold" style="width:32px;height:32px;background:linear-gradient(135deg,#4f46e5,#06b6d4);font-size:0.8rem;">
          ${state.user.avatar || state.user.name.slice(0, 2).toUpperCase()}
        </span>
        <span class="d-none d-lg-inline fw-semibold small">${state.user.name.split(' ')[0]}</span>
      </div>
    `;
    userBtn.setAttribute('data-bs-toggle', 'dropdown');
    userBtn.removeAttribute('onclick');

    if (userGreeting) {
      userGreeting.innerHTML = `Welcome back, <strong>${state.user.name}</strong>!`;
    }
  } else {
    userBtn.innerHTML = `<i class="bi bi-person-circle fs-5"></i><span class="d-none d-lg-inline fw-semibold small ms-1">Login</span>`;
    userBtn.setAttribute('onclick', 'openLoginModal()');
    userBtn.removeAttribute('data-bs-toggle');
    if (userGreeting) {
      userGreeting.innerHTML = `Welcome, <strong>Guest</strong>`;
    }
  }
}

function handleSignup(event) {
  event.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirmPassword').value;
  const phone = document.getElementById('signupPhone').value.trim();

  if (password !== confirmPassword) {
    showToast("Passwords do not match! Please verify.", "danger");
    return;
  }
  if (password.length < 6) {
    showToast("Password must be at least 6 characters.", "warning");
    return;
  }

  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  const user = { name, email, phone, avatar: initials || 'RF', regNo: "241878" };
  state.user = user;
  localStorage.setItem('electro_user', JSON.stringify(user));

  const signupModalEl = document.getElementById('signupModal');
  const modal = bootstrap.Modal.getInstance(signupModalEl);
  if (modal) modal.hide();

  updateAuthUI();
  showToast(`Account successfully created! Welcome, ${name} 🎉`, "success");
}

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    showToast("Please provide both email and password.", "warning");
    return;
  }

  // Set logged in user
  const name = email.split('@')[0].replace('.', ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  const user = { name, email, avatar: initials || 'RF', regNo: "241878" };
  state.user = user;
  localStorage.setItem('electro_user', JSON.stringify(user));

  const loginModalEl = document.getElementById('loginModal');
  const modal = bootstrap.Modal.getInstance(loginModalEl);
  if (modal) modal.hide();

  updateAuthUI();
  showToast(`Welcome back, ${name}! 👋`, "success");
}

function demoLogin() {
  document.getElementById('loginEmail').value = "roman.fatima@students.au.edu.pk";
  document.getElementById('loginPassword').value = "student2026";
  showToast("Demo credentials filled! Logging in...", "info");
  setTimeout(() => {
    document.getElementById('loginForm').dispatchEvent(new Event('submit'));
  }, 400);
}

function logoutUser() {
  state.user = null;
  localStorage.removeItem('electro_user');
  updateAuthUI();
  showToast("You have been signed out.", "info");
}

function openLoginModal() {
  const modal = new bootstrap.Modal(document.getElementById('loginModal'));
  modal.show();
}

function openSignupModal() {
  const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
  if (loginModal) loginModal.hide();
  const signupModal = new bootstrap.Modal(document.getElementById('signupModal'));
  signupModal.show();
}

// ── 7. PRODUCT RENDERING & FILTERING ──
function renderProducts() {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  let filtered = PRODUCTS.filter(p => {
    const matchCategory = state.activeCategory === 'all' || p.category === state.activeCategory;
    const matchSearch = p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                        p.description.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                        p.categoryLabel.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Sorting
  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (state.sortBy === 'discount') {
    filtered.sort((a, b) => parseInt(b.discount) - parseInt(a.discount));
  }

  // Update count indicator
  const countEl = document.getElementById('productsCount');
  if (countEl) countEl.textContent = `${filtered.length} products found`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-12 py-5 text-center">
        <i class="bi bi-search text-muted display-3 mb-3 d-block"></i>
        <h4 class="fw-bold">No products found</h4>
        <p class="text-muted">Try clearing your search query or choosing another category filter.</p>
        <button class="btn btn-primary btn-sm px-4" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => {
    const isWishlisted = state.wishlist.includes(product.id);
    return `
      <div class="col-sm-6 col-lg-4 col-xl-3">
        <div class="product-card">
          <!-- Badges -->
          <div class="product-badge-wrap">
            <span class="badge ${product.badgeColor} fw-semibold shadow-sm">${product.badge}</span>
            <span class="badge bg-danger fw-semibold shadow-sm">${product.discount}</span>
          </div>

          <!-- Wishlist Button -->
          <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist(${product.id}, this)" 
                  title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
            <i class="bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'}"></i>
          </button>

          <!-- Product Image & Quick View -->
          <div class="product-img-wrap">
            <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" onerror="this.src='https://placehold.co/600x400/1e293b/ffffff?text=${encodeURIComponent(product.name)}'">
            <div class="quick-view-overlay">
              <button class="btn btn-light btn-sm fw-semibold rounded-pill px-3 shadow" onclick="openQuickView(${product.id})">
                <i class="bi bi-eye me-1"></i>Quick View
              </button>
            </div>
          </div>

          <!-- Product Body -->
          <div class="product-body">
            <div class="product-cat">${product.categoryLabel}</div>
            <h3 class="product-title" title="${product.name}">${product.name}</h3>

            <!-- Rating -->
            <div class="product-rating">
              <div class="stars">
                ${getStarHTML(product.rating)}
              </div>
              <span class="fw-bold text-dark dark-text-light ms-1">${product.rating}</span>
              <span class="rating-count">(${product.reviewsCount})</span>
            </div>

            <!-- Price -->
            <div class="price-wrap">
              <span class="product-price">$${product.price.toLocaleString()}</span>
              <span class="product-old-price">$${product.oldPrice.toLocaleString()}</span>
            </div>

            <!-- Add to Cart CTA -->
            <button class="btn-add-cart" id="addBtn-${product.id}" onclick="addToCart(${product.id})">
              <i class="bi bi-cart-plus-fill fs-6"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function getStarHTML(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.4;
  let html = '';
  for (let i = 0; i < fullStars; i++) html += '<i class="bi bi-star-fill text-warning"></i>';
  if (hasHalf) html += '<i class="bi bi-star-half text-warning"></i>';
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) html += '<i class="bi bi-star text-muted"></i>';
  return html;
}

// ── 8. CATEGORY & FILTER CONTROLS ──
function filterCategory(cat, element) {
  state.activeCategory = cat;
  document.querySelectorAll('.category-pill').forEach(el => el.classList.remove('active'));
  if (element) element.classList.add('active');
  renderProducts();
}

function handleSearch(query) {
  state.searchQuery = query;
  renderProducts();
}

function handleSort(sortType) {
  state.sortBy = sortType;
  renderProducts();
}

function resetFilters() {
  state.activeCategory = 'all';
  state.searchQuery = '';
  state.sortBy = 'featured';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.category-pill').forEach(el => {
    el.classList.toggle('active', el.dataset.category === 'all');
  });
  renderProducts();
}

// ── 9. QUICK VIEW MODAL ──
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modalBody = document.getElementById('quickViewContent');
  modalBody.innerHTML = `
    <div class="row g-4 align-items-center">
      <div class="col-md-6 text-center">
        <div class="p-3 bg-body-tertiary rounded-4">
          <img src="${product.image}" alt="${product.name}" class="img-fluid rounded-3" style="max-height:300px;object-fit:contain;">
        </div>
      </div>
      <div class="col-md-6">
        <span class="badge ${product.badgeColor} mb-2">${product.badge}</span>
        <span class="badge bg-danger mb-2">${product.discount}</span>
        <div class="text-uppercase small text-primary fw-bold mb-1">${product.categoryLabel}</div>
        <h4 class="fw-bold mb-2">${product.name}</h4>
        
        <div class="d-flex align-items-center gap-2 mb-3">
          <div class="text-warning">${getStarHTML(product.rating)}</div>
          <span class="fw-bold">${product.rating}</span>
          <span class="text-muted small">(${product.reviewsCount} customer reviews)</span>
        </div>

        <div class="d-flex align-items-baseline gap-3 mb-3">
          <span class="fs-3 fw-bold text-primary">$${product.price.toLocaleString()}</span>
          <span class="text-muted text-decoration-line-through fs-5">$${product.oldPrice.toLocaleString()}</span>
          <span class="badge bg-success-subtle text-success border border-success-subtle">Save $${(product.oldPrice - product.price).toLocaleString()}</span>
        </div>

        <p class="text-muted small mb-3">${product.description}</p>

        <h6 class="fw-bold mb-2 small text-uppercase letter-spacing-1">Key Specifications:</h6>
        <ul class="list-unstyled small mb-4">
          ${product.specs.map(spec => `<li class="mb-1"><i class="bi bi-check-circle-fill text-success me-2"></i>${spec}</li>`).join('')}
        </ul>

        <div class="d-flex gap-3">
          <div class="quantity-stepper">
            <button class="qty-btn" onclick="adjustQuickViewQty(-1)">-</button>
            <span class="qty-num" id="quickViewQty">1</span>
            <button class="qty-btn" onclick="adjustQuickViewQty(1)">+</button>
          </div>
          <button class="btn btn-primary flex-grow-1 fw-semibold d-flex align-items-center justify-content-center gap-2" onclick="addFromQuickView(${product.id})">
            <i class="bi bi-cart-plus-fill"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;

  const modal = new bootstrap.Modal(document.getElementById('quickViewModal'));
  modal.show();
}

function adjustQuickViewQty(delta) {
  const qtyEl = document.getElementById('quickViewQty');
  if (!qtyEl) return;
  let val = parseInt(qtyEl.textContent) + delta;
  if (val < 1) val = 1;
  qtyEl.textContent = val;
}

function addFromQuickView(productId) {
  const qtyEl = document.getElementById('quickViewQty');
  const qty = qtyEl ? parseInt(qtyEl.textContent) : 1;
  addToCart(productId, qty);
  const modalEl = document.getElementById('quickViewModal');
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();
}

// ── 10. WISHLIST MANAGEMENT ──
function toggleWishlist(productId, btn) {
  const index = state.wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);
  if (index === -1) {
    state.wishlist.push(productId);
    btn.classList.add('active');
    btn.innerHTML = '<i class="bi bi-heart-fill"></i>';
    showToast(`Added "${product.name}" to Wishlist! ❤️`, 'success');
  } else {
    state.wishlist.splice(index, 1);
    btn.classList.remove('active');
    btn.innerHTML = '<i class="bi bi-heart"></i>';
    showToast(`Removed from Wishlist`, 'info');
  }
  localStorage.setItem('electro_wishlist', JSON.stringify(state.wishlist));
  updateWishlistBadge();
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlistBadge');
  if (badge) badge.textContent = state.wishlist.length;
}

// ── 11. CART MANAGEMENT (ADD, EDIT, DISPLAY, REMOVE) ──
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      categoryLabel: product.categoryLabel,
      quantity: quantity
    });
  }

  saveCart();
  renderCart();
  updateCartBadge(true);

  // Button feedback
  const btn = document.getElementById(`addBtn-${productId}`);
  if (btn) {
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="bi bi-check-lg"></i> Added!';
    btn.classList.add('btn-success');
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.classList.remove('btn-success');
    }, 1200);
  }

  showToast(`Added ${quantity > 1 ? quantity + 'x ' : ''}"${product.name}" to Cart! 🛒`, 'success');
}

function updateCartQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  renderCart();
  updateCartBadge();
}

function removeFromCart(productId) {
  const item = state.cart.find(i => i.id === productId);
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  renderCart();
  updateCartBadge();
  if (item) {
    showToast(`Removed "${item.name}" from Cart`, 'info');
  }
}

function clearCart() {
  if (state.cart.length === 0) return;
  state.cart = [];
  state.appliedPromo = null;
  localStorage.removeItem('electro_promo');
  saveCart();
  renderCart();
  updateCartBadge();
  showToast("Your cart has been cleared", "info");
}

function saveCart() {
  localStorage.setItem('electro_cart', JSON.stringify(state.cart));
}

function updateCartBadge(pulse = false) {
  const badge = document.getElementById('cartBadge');
  const count = state.cart.reduce((sum, i) => sum + i.quantity, 0);
  if (badge) {
    badge.textContent = count;
    if (pulse) {
      badge.classList.remove('pulse-badge');
      void badge.offsetWidth;
      badge.classList.add('pulse-badge');
    }
  }
}

function calculateTotals() {
  const subtotal = state.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const tax = subtotal * 0.05; // 5% sales tax
  const shipping = subtotal > 99 || subtotal === 0 ? 0 : 15;
  let discount = 0;

  if (state.appliedPromo) {
    discount = (subtotal * state.appliedPromo.percent) / 100;
  }

  const grandTotal = Math.max(0, subtotal + tax + shipping - discount);
  return { subtotal, tax, shipping, discount, grandTotal };
}

function renderCart() {
  const itemsContainer = document.getElementById('cartItemsList');
  const emptyState = document.getElementById('cartEmptyState');
  const footer = document.getElementById('cartFooter');
  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = '';
    if (emptyState) emptyState.classList.remove('d-none');
    if (footer) footer.classList.add('d-none');
    return;
  }

  if (emptyState) emptyState.classList.add('d-none');
  if (footer) footer.classList.remove('d-none');

  itemsContainer.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://placehold.co/100/1e293b/ffffff?text=Tech'">
      <div class="flex-grow-1">
        <div class="cart-item-title">${item.name}</div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <div class="cart-item-price">$${(item.price * item.quantity).toLocaleString()} <span class="text-muted small fw-normal">($${item.price.toLocaleString()} ea)</span></div>
          <div class="d-flex align-items-center gap-2">
            <div class="quantity-stepper">
              <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
              <span class="qty-num">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${item.id})" title="Remove item">
              <i class="bi bi-trash3-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Update Summary
  const totals = calculateTotals();
  document.getElementById('cartSubtotal').textContent = `$${totals.subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById('cartTax').textContent = `$${totals.tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  document.getElementById('cartShipping').textContent = totals.shipping === 0 ? 'FREE' : `$${totals.shipping.toFixed(2)}`;
  
  const discountRow = document.getElementById('cartDiscountRow');
  if (totals.discount > 0) {
    discountRow.classList.remove('d-none');
    document.getElementById('cartDiscount').textContent = `-$${totals.discount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  } else {
    discountRow.classList.add('d-none');
  }

  document.getElementById('cartGrandTotal').textContent = `$${totals.grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// ── 12. PROMO CODE APPLICATION ──
function applyPromoCode() {
  const input = document.getElementById('promoCodeInput');
  const code = input.value.trim().toUpperCase();

  if (!code) {
    showToast("Please enter a promo code", "warning");
    return;
  }

  const validCodes = {
    'AU2026': { percent: 15, name: "Air University Student Discount (15% OFF)" },
    'NOVA10': { percent: 10, name: "Welcome Promo (10% OFF)" },
    'SALE20': { percent: 20, name: "Flash Sale Promo (20% OFF)" }
  };

  if (validCodes[code]) {
    state.appliedPromo = { code, ...validCodes[code] };
    localStorage.setItem('electro_promo', JSON.stringify(state.appliedPromo));
    renderCart();
    showToast(`Promo Applied! ${validCodes[code].name} 🎉`, 'success');
  } else {
    showToast("Invalid Promo Code! Try 'AU2026' or 'NOVA10'", 'danger');
  }
}

// ── 13. REVIEWS & TESTIMONIALS ──
function renderReviews() {
  const container = document.getElementById('reviewsContainer');
  if (!container) return;

  container.innerHTML = state.reviews.map(rev => `
    <div class="col-md-6 col-lg-3">
      <div class="review-card">
        <div class="d-flex align-items-center gap-3 mb-3">
          <div class="reviewer-avatar" style="background:${rev.avatarColor || '#4f46e5'}">
            ${rev.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
          </div>
          <div>
            <h6 class="fw-bold mb-0">${rev.name}</h6>
            <div class="text-muted small">${rev.date}</div>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2 mb-2">
          <div class="text-warning">${getStarHTML(rev.rating)}</div>
          ${rev.verified ? '<span class="badge bg-success-subtle text-success small border border-success-subtle"><i class="bi bi-shield-check me-1"></i>Verified</span>' : ''}
        </div>
        <h6 class="fw-bold text-dark dark-text-light mb-1">${rev.title}</h6>
        <p class="text-muted small flex-grow-1">${rev.comment}</p>
      </div>
    </div>
  `).join('');
}

let selectedRating = 5;
function setRatingStar(val) {
  selectedRating = val;
  const stars = document.querySelectorAll('#starPicker i');
  stars.forEach((s, idx) => {
    s.className = idx < val ? 'bi bi-star-fill active' : 'bi bi-star';
  });
}

function handleReviewSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('reviewAuthorName').value.trim() || (state.user ? state.user.name : "Roman Fatima");
  const title = document.getElementById('reviewTitleInput').value.trim();
  const comment = document.getElementById('reviewCommentInput').value.trim();

  const newReview = {
    id: Date.now(),
    name,
    rating: selectedRating,
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    title,
    comment,
    verified: true,
    avatarColor: '#' + Math.floor(Math.random()*16777215).toString(16)
  };

  state.reviews.unshift(newReview);
  localStorage.setItem('electro_reviews', JSON.stringify(state.reviews));
  renderReviews();

  const modalEl = document.getElementById('writeReviewModal');
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();

  document.getElementById('reviewForm').reset();
  showToast("Thank you! Your verified review has been published ⭐", "success");
}

// ── 14. CHECKOUT WORKFLOW ──
function proceedToCheckout() {
  if (state.cart.length === 0) {
    showToast("Your cart is empty! Add products first.", "warning");
    return;
  }

  // Close Cart offcanvas
  const offcanvasEl = document.getElementById('cartOffcanvas');
  const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
  if (offcanvas) offcanvas.hide();

  // Populate checkout modal
  const totals = calculateTotals();
  document.getElementById('checkoutSummaryTotal').textContent = `$${totals.grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  
  if (state.user) {
    document.getElementById('shippingFullName').value = state.user.name || "Roman Fatima";
    document.getElementById('shippingEmail').value = state.user.email || "roman.fatima@students.au.edu.pk";
    document.getElementById('shippingPhone').value = state.user.phone || "+92 300 1234567";
  }

  const modal = new bootstrap.Modal(document.getElementById('checkoutModal'));
  modal.show();
}

function selectPaymentMethod(method, cardEl) {
  document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('selected'));
  cardEl.classList.add('selected');
  cardEl.querySelector('input[type=radio]').checked = true;

  const cardDetails = document.getElementById('cardDetailsFields');
  const mobileDetails = document.getElementById('mobileWalletFields');
  const codDetails = document.getElementById('codDetailsMessage');

  cardDetails.classList.add('d-none');
  mobileDetails.classList.add('d-none');
  codDetails.classList.add('d-none');

  if (method === 'card') cardDetails.classList.remove('d-none');
  else if (method === 'jazzcash' || method === 'easypaisa') mobileDetails.classList.remove('d-none');
  else if (method === 'cod') codDetails.classList.remove('d-none');
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('placeOrderBtn');
  btn.disabled = true;
  btn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status"></span>Processing Order...`;

  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = `<i class="bi bi-lock-fill me-1"></i> Place Order &amp; Pay`;

    const checkoutModalEl = document.getElementById('checkoutModal');
    const checkoutModal = bootstrap.Modal.getInstance(checkoutModalEl);
    if (checkoutModal) checkoutModal.hide();

    // Generate Order ID & show confirmation
    const orderId = 'EV-' + Math.floor(100000 + Math.random() * 900000);
    const orderTotals = calculateTotals();
    const orderedItems = [...state.cart];

    // Clear cart
    state.cart = [];
    state.appliedPromo = null;
    localStorage.removeItem('electro_promo');
    saveCart();
    renderCart();
    updateCartBadge();

    // Populate Confirmation Receipt
    document.getElementById('confirmOrderId').textContent = orderId;
    document.getElementById('confirmTotal').textContent = `$${orderTotals.grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.getElementById('confirmItemsCount').textContent = `${orderedItems.reduce((s, i) => s + i.quantity, 0)} items`;
    
    const itemsList = document.getElementById('confirmItemsList');
    itemsList.innerHTML = orderedItems.map(item => `
      <li class="d-flex justify-content-between align-items-center mb-1">
        <span class="small">${item.quantity}x ${item.name}</span>
        <span class="small fw-bold">$${(item.price * item.quantity).toLocaleString()}</span>
      </li>
    `).join('');

    const confirmModal = new bootstrap.Modal(document.getElementById('orderSuccessModal'));
    confirmModal.show();

    showToast(`Order Placed Successfully! Tracking: #${orderId} 📦`, "success");
  }, 1200);
}

// ── 15. TOAST NOTIFICATIONS ──
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const icons = {
    success: 'bi-check-circle-fill text-success',
    danger: 'bi-x-circle-fill text-danger',
    warning: 'bi-exclamation-triangle-fill text-warning',
    info: 'bi-info-circle-fill text-primary'
  };

  const toastId = 'toast-' + Date.now();
  const toastEl = document.createElement('div');
  toastEl.className = 'toast custom-toast align-items-center border-0 mb-2';
  toastEl.id = toastId;
  toastEl.setAttribute('role', 'alert');
  toastEl.setAttribute('aria-live', 'assertive');
  toastEl.setAttribute('aria-atomic', 'true');

  toastEl.innerHTML = `
    <div class="d-flex">
      <div class="toast-body d-flex align-items-center gap-2 py-3 px-3">
        <i class="bi ${icons[type] || icons.info} fs-5"></i>
        <div class="small fw-semibold text-main">${message}</div>
      </div>
      <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;

  container.appendChild(toastEl);
  const toast = new bootstrap.Toast(toastEl, { delay: 3500 });
  toast.show();
  toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
}

// ── 16. EVENT LISTENERS ──
function setupEventListeners() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  }

  // Star picker events
  const starIcons = document.querySelectorAll('#starPicker i');
  starIcons.forEach(icon => {
    icon.addEventListener('mouseover', function() {
      const val = parseInt(this.dataset.value);
      starIcons.forEach((s, idx) => {
        s.classList.toggle('hover', idx < val);
      });
    });
    icon.addEventListener('mouseout', function() {
      starIcons.forEach(s => s.classList.remove('hover'));
    });
  });
}
