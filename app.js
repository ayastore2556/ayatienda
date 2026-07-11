/* ==========================================================================
   A&A STYLE | PREMIUM STREETWEAR E-COMMERCE CORE LOGIC (app.js)
   ========================================================================== */

// 1. Core Products Database (Clean, structured array for easy customization)
const PRODUCTS_DB = [
  {
    id: "AA-PT-01",
    name: "PANTALÓN WIDE LEG NAVY",
    ref: "REF. AA-PT-01",
    price: 80.00,
    category: "pants",
    imageSrc: "assets/img_93.jpeg",
    description: "Algodón 100% corte baggy. Súper fresco para esta temporada de calor.",
    soldOut: false,
    isTop: true,
    limitedStock: true
  },
  {
    id: "AA-OS-16",
    name: "POLO STYL RESTRICTED BLACK",
    ref: "REF. AA-OS-16",
    price: 35.00,
    category: "oversize",
    imageSrc: "assets/img_100.jpeg",
    description: "Gráfico Restricted en espalda, fit oversize, algodón de alto gramaje.",
    soldOut: false,
    isTop: true,
    sizes: ["M"]
  },
  {
    id: "AA-OS-17",
    name: "POLO STYL ASTRONAUT WHITE",
    ref: "REF. AA-OS-17",
    price: 35.00,
    category: "oversize",
    imageSrc: "assets/img_101.jpeg",
    description: "Diseño espacial de astronauta a gran formato en espalda, cómodo y fresco.",
    soldOut: false,
    isTop: true,
    sizes: ["M"]
  },
  {
    id: "AA-OS-18",
    name: "POLO STYL GOTHIC SKULL",
    ref: "REF. AA-OS-18",
    price: 35.00,
    category: "oversize",
    imageSrc: "assets/img_102.jpeg",
    description: "Ilustración gótica de calavera en la espalda, acabado de alta durabilidad.",
    soldOut: false,
    isTop: true,
    sizes: ["M"]
  },
  {
    id: "AA-PT-03",
    name: "PANTALÓN ALGODÓN PERUANO",
    ref: "REF. AA-PT-03",
    price: 85.00,
    category: "pants",
    imageSrc: "assets/img_95.jpeg",
    description: "Confeccionado en 100% algodón peruano de la más alta calidad, corte amplio y cómodo.",
    soldOut: false,
    isTop: true
  },
  {
    id: "AA-PT-04",
    name: "PANTALÓN STYL URBAN NAVY",
    ref: "REF. AA-PT-04",
    price: 55.00,
    category: "pants",
    imageSrc: "assets/img_96.jpeg",
    description: "Pantalón wide leg urbano con franjas laterales de alta definición, caída perfecta.",
    soldOut: false,
    isTop: true
  },
  {
    id: "AA-PT-05",
    name: "PANTALÓN STYL URBAN SKY",
    ref: "REF. AA-PT-05",
    price: 55.00,
    category: "pants",
    imageSrc: "assets/img_97.jpeg",
    description: "Corte relajado con franja celeste lateral, estilo urbano versátil.",
    soldOut: false,
    isTop: true
  },
  {
    id: "AA-PT-06",
    name: "PANTALÓN STYL URBAN OLIVE",
    ref: "REF. AA-PT-06",
    price: 55.00,
    category: "pants",
    imageSrc: "assets/img_98.jpeg",
    description: "Pantalón wide leg en tono verde oliva con doble franja blanca.",
    soldOut: false,
    isTop: true
  },
  {
    id: "AA-PT-07",
    name: "PANTALÓN STYL URBAN GREY",
    ref: "REF. AA-PT-07",
    price: 55.00,
    category: "pants",
    imageSrc: "assets/img_99.jpeg",
    description: "Corte amplio en tono gris urbano con detalles laterales reflectivos.",
    soldOut: false,
    isTop: true
  },
  {
    id: "AA-OS-01",
    name: "OVERSIZE GRUNGE",
    ref: "REF. AA-OS-01",
    price: 50.00,
    category: "oversize",
    imageSrc: "assets/img_78.jpeg",
    description: "Estampado artesanal en tinta blanca sobre algodón grueso de caída suelta.",
    soldOut: false,
    isTop: true
  },
  {
    id: "AA-OS-02",
    name: "OVERSIZE SKATE GRAPHIC",
    ref: "REF. AA-OS-02",
    price: 50.00,
    category: "oversize",
    imageSrc: "assets/img_79.jpeg",
    description: "Gráfico ilustrado a gran escala en la espalda, fit relajado para el día a día.",
    soldOut: false,
    isTop: false
  },
  {
    id: "AA-OS-03",
    name: "OVERSIZE DISASTER",
    ref: "REF. AA-OS-03",
    price: 50.00,
    category: "oversize",
    imageSrc: "assets/img_80.jpeg",
    description: "Tipografía statement en la espalda, tela pesada de tacto premium.",
    soldOut: false,
    isTop: true
  },
  {
    id: "AA-OS-04",
    name: "OVERSIZE DRAGON",
    ref: "REF. AA-OS-04",
    price: 50.00,
    category: "oversize",
    imageSrc: "assets/img_81.jpeg",
    description: "Print frontal a color sobre algodón 100%, acabado mate y durable.",
    soldOut: false,
    isTop: false
  },
  {
    id: "AA-OS-05",
    name: "OVERSIZE MENTALITY",
    ref: "REF. AA-OS-05",
    price: 50.00,
    category: "oversize",
    imageSrc: "assets/img_82.jpeg",
    description: "Diseño gótico urbano en gran formato, corte oversize sin restar comodidad.",
    soldOut: false,
    isTop: true
  },
  {
    id: "AA-OS-06",
    name: "OVERSIZE LA BLOCKS",
    ref: "REF. AA-OS-06",
    price: 50.00,
    category: "oversize",
    imageSrc: "assets/img_83.jpeg",
    description: "Bloques gráficos minimalistas en la espalda, ideal para looks de entretiempo.",
    soldOut: false,
    isTop: false
  },
  {
    id: "AA-OS-07",
    name: "OVERSIZE LOS ANGELES",
    ref: "REF. AA-OS-07",
    price: 50.00,
    category: "oversize",
    imageSrc: "assets/img_84.jpeg",
    description: "Ilustración fina en la espalda, algodón ligero y transpirable.",
    soldOut: false,
    isTop: false
  },
  {
    id: "AA-OS-08",
    name: "OVERSIZE SMILE",
    ref: "REF. AA-OS-08",
    price: 50.00,
    category: "oversize",
    imageSrc: "assets/img_85.jpeg",
    description: "Tono tierra de temporada con estampado desgastado tipo vintage.",
    soldOut: false,
    isTop: false
  },
  {
    id: "AA-OS-09",
    name: "OVERSIZE NY",
    ref: "REF. AA-OS-09",
    price: 50.00,
    category: "oversize",
    imageSrc: "assets/img_86.jpeg",
    description: "Logo discreto en la espalda, básico versátil de alta rotación.",
    soldOut: false,
    isTop: false
  },
  {
    id: "AA-OS-10",
    name: "OVERSIZE RESTRICTED",
    ref: "REF. AA-OS-10",
    price: 50.00,
    category: "oversize",
    imageSrc: "assets/img_87.jpeg",
    description: "Grafismo denso estilo streetwear para quienes buscan destacar.",
    soldOut: false,
    isTop: true
  },
  {
    id: "AA-OS-11",
    name: "OVERSIZE TRIBAL WHITE",
    ref: "REF. AA-OS-11",
    price: 50.00,
    category: "oversize",
    imageSrc: "assets/img_88.jpeg",
    description: "Ilustración tipo tatuaje sobre base blanca de contraste marcado.",
    soldOut: false,
    isTop: false
  },
  {
    id: "AA-OS-12",
    name: "OVERSIZE TRIBAL GREEN",
    ref: "REF. AA-OS-12",
    price: 50.00,
    category: "oversize",
    imageSrc: "assets/img_89.jpeg",
    description: "Detalle en verde sobre gris, silueta amplia y cómoda.",
    soldOut: false,
    isTop: false
  },
  {
    id: "AA-OS-13",
    name: "OVERSIZE DRAGON GOLD",
    ref: "REF. AA-OS-13",
    price: 50.00,
    category: "oversize",
    imageSrc: "assets/img_90.jpeg",
    description: "Gráfico dorado de gran impacto, pieza statement para looks nocturnos.",
    soldOut: false,
    isTop: false
  },
  {
    id: "AA-OS-14",
    name: "OVERSIZE DRAGON NAVY",
    ref: "REF. AA-OS-14",
    price: 50.00,
    category: "oversize",
    imageSrc: "assets/img_91.jpeg",
    description: "Misma actitud en azul marino, tela de alto gramaje.",
    soldOut: false,
    isTop: false
  },
  {
    id: "AA-OS-15",
    name: "OVERSIZE TOKYO",
    ref: "REF. AA-OS-15",
    price: 50.00,
    category: "oversize",
    imageSrc: "assets/img_92.jpeg",
    description: "Inspiración urbana japonesa con print detallado en la espalda.",
    soldOut: false,
    isTop: false
  },
  {
    id: "AA-PT-02",
    name: "PANTALÓN WIDE LEG GRIS",
    ref: "REF. AA-PT-02",
    price: 55.00,
    category: "pants",
    imageSrc: "assets/img_94.jpeg",
    description: "Corte relajado de pierna ancha, franjas laterales y caída fluida.",
    soldOut: false,
    isTop: true
  }
];

// 2. State Variables
let cart = [];
let selectedSizes = {}; // Maps productId -> selectedSize

// 3. Select DOM Elements
const catalogGrid = document.getElementById("catalog-grid");
const filtersContainer = document.getElementById("filters-container");
const cartSidebar = document.getElementById("cart-sidebar");
const cartOverlay = document.getElementById("cart-overlay");
const cartToggleBtn = document.getElementById("cart-toggle-btn");
const cartCloseBtn = document.getElementById("cart-close-btn");
const cartBadge = document.getElementById("cart-badge");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartTotalPrice = document.getElementById("cart-total-price");
const checkoutForm = document.getElementById("checkout-form");
const microAlert = document.getElementById("micro-alert");

// 4. Render Catalog Grid
function renderCatalog(filter = "all") {
  catalogGrid.innerHTML = "";
  


  const filteredProducts = PRODUCTS_DB.filter(product => {
    if (filter === "all") return true;
    if (filter === "top") return product.isTop;
    if (filter === "oversize") return product.category === "oversize";
    if (filter === "pants") return product.category === "pants";
    return product.category === filter;
  });
  
  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card fade-in-up";
    if (product.isTop) {
      card.classList.add("is-top-product");
    }
    if (product.soldOut) {
      card.classList.add("sold-out-card");
    }
    
    // Size selections html
    let sizeSelectorHTML = "";
    if (!product.soldOut) {
      const isPant = product.category === "pants";
      const specsHTML = isPant 
        ? '<div class="product-specs-row"><span>OVERSIZE FIT</span>✦<span>HEAVY DENIM</span></div>' 
        : '<div class="product-specs-row"><span>100% COTTON</span>✦<span>300 GSM</span>✦<span>OVERSIZE</span></div>';

      const availableSizes = product.sizes || ["S", "M", "L"];
      const sizeButtonsHTML = availableSizes.map(size => `
        <button class="size-btn" data-prod-id="${product.id}" data-size="${size}">${size}</button>
      `).join("");

      sizeSelectorHTML = `
        <div class="size-hover-panel">
          ${specsHTML}
          <div class="sizes-title">SELECCIONA TALLA</div>
          <div class="sizes-options-row">
            ${sizeButtonsHTML}
          </div>
          <button class="add-to-cart-quick-btn" data-prod-id="${product.id}">
            AGREGAR AL CARRITO
          </button>
        </div>
      `;
    }
    
    let badgeHTML = "";
    if (product.limitedStock) {
      badgeHTML = '<span class="product-tag-badge limited-stock">⚡ POCO STOCK</span>';
    } else {
      badgeHTML = product.isTop 
        ? '<span class="product-tag-badge top-seller">BEST SELLER</span>' 
        : '<span class="product-tag-badge limited">LTD EDITION</span>';
    }

    const isPant = product.category === "pants";
    const weightLabel = isPant ? "DENIM_HEAVY" : "COTTON_300GSM";

    // Blueprint corner tags for all products
    const cornerTagsHTML = `
      <span class="card-corner-tag top-left">[A&A_STREET]</span>
      <span class="card-corner-tag top-right">[BATCH_01]</span>
      <span class="card-corner-tag bottom-left">[${weightLabel}]</span>
      <span class="card-corner-tag bottom-right">[LIMIT_ED]</span>
    `;

    const imageContainerContent = `
      <img class="product-image" src="${product.imageSrc}" alt="${product.name}" loading="lazy">
    `;

    card.innerHTML = `
      ${cornerTagsHTML}
      <div class="product-image-container">
        <!-- Reticle corners for Y2K technical look -->
        <div class="reticle-corner top-left"></div>
        <div class="reticle-corner top-right"></div>
        <div class="reticle-corner bottom-left"></div>
        <div class="reticle-corner bottom-right"></div>
        
        ${imageContainerContent}
        ${product.soldOut ? '<div class="sold-out-overlay"><span class="sold-out-tag">SOLD OUT</span></div>' : ''}
        ${sizeSelectorHTML}
      </div>
      
      <div class="product-details-box">
        <div class="product-tag-row">
          ${badgeHTML}
          <span class="product-ref-badge">${product.ref}</span>
        </div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description || ""}</p>
        <div class="product-price-container">
          <span class="product-price-label">CATALOG_PRICE //</span>
          <span class="product-price-symbol">S/</span>
          <span class="product-price-val">${product.price.toFixed(2)}</span>
        </div>
      </div>
    `;
    
    catalogGrid.appendChild(card);
  });
  
  observeCards();
  bindCatalogEvents();
}

// Intersection Observer for scroll-driven animations
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      scrollObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.05,
  rootMargin: "0px 0px -50px 0px"
});

function observeCards() {
  const cards = catalogGrid.querySelectorAll(".product-card");
  cards.forEach(card => {
    scrollObserver.observe(card);
  });
}

// 5. Catalog Event Listeners (Sizes selection & Add to Cart)
function bindCatalogEvents() {
  // Handle size selections
  const sizeBtns = catalogGrid.querySelectorAll(".size-btn");
  sizeBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const prodId = btn.getAttribute("data-prod-id");
      const size = btn.getAttribute("data-size");
      
      // Clear sibling sizes on selection
      const siblingBtns = btn.parentNode.querySelectorAll(".size-btn");
      siblingBtns.forEach(sb => sb.classList.remove("selected"));
      
      btn.classList.add("selected");
      selectedSizes[prodId] = size;
    });
  });

  // Handle Add to Cart trigger
  const addBtns = catalogGrid.querySelectorAll(".add-to-cart-quick-btn");
  addBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const prodId = btn.getAttribute("data-prod-id");
      const chosenSize = selectedSizes[prodId];
      
      if (!chosenSize) {
        showMicroAlert("🚨 POR FAVOR SELECCIONA UNA TALLA (S, M, L)");
        return;
      }
      
      addToCart(prodId, chosenSize);
      
      // Clear chosen size indicators after successfully adding
      const sizePanel = btn.parentNode;
      const sizeBtns = sizePanel.querySelectorAll(".size-btn");
      sizeBtns.forEach(sb => sb.classList.remove("selected"));
      delete selectedSizes[prodId];
    });
  });
  
  const isTouchDevice = window.innerWidth <= 768 || ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  
  // Mobile support: Tap card to open bottom sheet size selector
  const cards = catalogGrid.querySelectorAll(".product-card");
  cards.forEach(card => {
    card.addEventListener("click", (e) => {
      if (isTouchDevice) {
        const sizeBtn = card.querySelector(".size-btn");
        if (sizeBtn) {
          const prodId = sizeBtn.getAttribute("data-prod-id");
          if (e.target.closest(".size-hover-panel")) return;
          openSizeSheet(prodId);
        }
      } else {
        cards.forEach(c => { if(c !== card) c.classList.remove("touch-active"); });
        card.classList.toggle("touch-active");
      }
    });
  });
}

// 6. LocalStorage & Cart Core Logic
function loadCart() {
  const savedCart = localStorage.getItem("aa_style_cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
  updateCartUI();
}

function saveCart() {
  localStorage.setItem("aa_style_cart", JSON.stringify(cart));
  updateCartUI();
}

function addToCart(prodId, size) {
  const product = PRODUCTS_DB.find(p => p.id === prodId);
  if (!product) return;
  
  // Match item by ID AND Size
  const existingItemIndex = cart.findIndex(item => item.id === prodId && item.size === size);
  
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      ref: product.ref,
      price: product.price,
      size: size,
      imageSrc: product.imageSrc,
      quantity: 1
    });
  }
  
  saveCart();
  showMicroAlert(`⚡ AGREGADO: ${product.name} (TALLA ${size})`);
  
  // Cart Badge Pulse animation feedback
  cartBadge.classList.remove("cart-badge-pulse");
  void cartBadge.offsetWidth; // trigger reflow
  cartBadge.classList.add("cart-badge-pulse");
}

function updateCartUI() {
  // Update badge count
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadge.textContent = totalQty;
  
  // Render Sidebar items
  cartItemsContainer.innerHTML = "";
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<div class="empty-cart-msg">CARRITO VACÍO</div>';
    cartTotalPrice.textContent = "S/ 0.00";
    return;
  }
  
  let totalPrice = 0;
  
  cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    totalPrice += subtotal;
    
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <img class="cart-item-img" src="${item.imageSrc}" alt="${item.name}">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-ref">${item.ref}</div>
        <span class="cart-item-talla">TALLA: ${item.size}</span>
        
        <div class="cart-item-controls">
          <div class="qty-counter">
            <button class="qty-btn dec-qty-btn" data-index="${index}">-</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn inc-qty-btn" data-index="${index}">+</button>
          </div>
          <span class="cart-item-price">S/ ${subtotal.toFixed(2)}</span>
        </div>
        <button class="remove-item-btn" data-index="${index}">Eliminar</button>
      </div>
    `;
    cartItemsContainer.appendChild(itemEl);
  });
  
  cartTotalPrice.textContent = `S/ ${totalPrice.toFixed(2)}`;
  bindCartEvents();
}

function bindCartEvents() {
  // Decrease Quantity
  const decBtns = cartItemsContainer.querySelectorAll(".dec-qty-btn");
  decBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-index"));
      if (cart[idx].quantity > 1) {
        cart[idx].quantity -= 1;
      } else {
        cart.splice(idx, 1);
      }
      saveCart();
    });
  });

  // Increase Quantity
  const incBtns = cartItemsContainer.querySelectorAll(".inc-qty-btn");
  incBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-index"));
      cart[idx].quantity += 1;
      saveCart();
    });
  });

  // Remove Item Completely
  const removeBtns = cartItemsContainer.querySelectorAll(".remove-item-btn");
  removeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-index"));
      cart.splice(idx, 1);
      saveCart();
    });
  });
}

// 7. Micro Alert Display Helper
function showMicroAlert(msg) {
  microAlert.textContent = msg;
  microAlert.classList.add("show");
  
  setTimeout(() => {
    microAlert.classList.remove("show");
  }, 3500);
}

// 8. Dynamic Indexation/Filtering Animation handler
filtersContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-btn")) {
    const btns = filtersContainer.querySelectorAll(".filter-btn");
    btns.forEach(btn => btn.classList.remove("active"));
    
    e.target.classList.add("active");
    const filterValue = e.target.getAttribute("data-filter");
    
    // Add grid fade-out before rendering
    catalogGrid.style.opacity = "0";
    catalogGrid.style.transform = "translateY(10px)";
    catalogGrid.style.transition = "opacity 0.25s ease, transform 0.25s ease";
    
    setTimeout(() => {
      renderCatalog(filterValue);
      catalogGrid.style.opacity = "1";
      catalogGrid.style.transform = "translateY(0)";
    }, 250);
  }
});

// 9. Side-Cart Sidebar View Toggles
cartToggleBtn.addEventListener("click", () => {
  cartSidebar.classList.add("open");
  cartOverlay.classList.add("open");
});

cartCloseBtn.addEventListener("click", () => {
  cartSidebar.classList.remove("open");
  cartOverlay.classList.remove("open");
});

cartOverlay.addEventListener("click", () => {
  cartSidebar.classList.remove("open");
  cartOverlay.classList.remove("open");
});

// 10. WhatsApp API Checkout Integration (Form formatting)
checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  if (cart.length === 0) {
    showMicroAlert("🚨 TU CARRITO ESTÁ VACÍO. AGREGA PRENDAS PRIMERO.");
    return;
  }
  
  const name = document.getElementById("client-name").value.trim();
  const address = document.getElementById("client-address").value.trim();
  const reference = document.getElementById("client-reference").value.trim();
  const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
  
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Format items list for invoice ticket format
  let itemsListText = "";
  cart.forEach(item => {
    itemsListText += `• ${item.quantity}x ${item.name} (${item.ref}) - Talla: ${item.size} - S/ ${item.price.toFixed(2)}\n`;
  });
  
  // Ticket format template
  const textMessage = `🛍️ ¡NUEVO PEDIDO - A&A STYLE! 🛍️
----------------------------------
👤 RECEPTOR: ${name}
📍 DIRECCIÓN DELIVERY: ${address}
🗺️ REFERENCIA: ${reference}
🚚 ENVÍO: ¡GRATIS!

🛒 DETALLE DE PRENDAS:
${itemsListText}----------------------------------
💰 TOTAL A PAGAR: S/ ${totalPrice.toFixed(2)}
💳 MÉTODO DE PAGO: ${paymentMethod}`;

  // Encode message for WhatsApp API
  const encodedText = encodeURIComponent(textMessage);
  const whatsappUrl = `https://wa.me/51901742973?text=${encodedText}`;
  
  // Clear cart local data upon sending order
  cart = [];
  saveCart();
  
  // Reset form
  checkoutForm.reset();
  
  // Close Sidebar
  cartSidebar.classList.remove("open");
  cartOverlay.classList.remove("open");
  
  // Open WhatsApp Link
  window.open(whatsappUrl, '_blank');
});

// 10.5 Copy Order Ticket to Clipboard Option
const copyTicketBtn = document.getElementById("copy-ticket-btn");
if (copyTicketBtn) {
  copyTicketBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      showMicroAlert("🚨 TU CARRITO ESTÁ VACÍO. AGREGA PRENDAS PRIMERO.");
      return;
    }

    const name = document.getElementById("client-name").value.trim() || "[No especificado]";
    const address = document.getElementById("client-address").value.trim() || "[No especificado]";
    const reference = document.getElementById("client-reference").value.trim() || "[No especificado]";
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    let itemsListText = "";
    cart.forEach(item => {
      itemsListText += `• ${item.quantity}x ${item.name} (${item.ref}) - Talla: ${item.size} - S/ ${item.price.toFixed(2)}\n`;
    });

    const textMessage = `🛍️ ¡NUEVO PEDIDO - A&A STYLE! 🛍️
----------------------------------
👤 RECEPTOR: ${name}
📍 DIRECCIÓN DELIVERY: ${address}
🗺️ REFERENCIA: ${reference}
🚚 ENVÍO: ¡GRATIS!

🛒 DETALLE DE PRENDAS:
${itemsListText}----------------------------------
💰 TOTAL A PAGAR: S/ ${totalPrice.toFixed(2)}
💳 MÉTODO DE PAGO: ${paymentMethod}`;

    navigator.clipboard.writeText(textMessage)
      .then(() => {
        showMicroAlert("📋 TICKET COPIADO AL PORTAPAPELES. ¡LISTO PARA PEGAR!");
      })
      .catch(err => {
        console.error("Failed to copy ticket:", err);
        showMicroAlert("🚨 ERROR AL COPIAR EL TICKET. INTENTA DE NUEVO.");
      });
  });
}

// 11. Initial Startup Load & Premium UX Initializations
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  loadCart();
  
  // Custom Interactive Cursor
  const cursor = document.getElementById("custom-cursor");
  const cursorDot = document.getElementById("custom-cursor-dot");

  if (cursor && cursorDot) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    });

    // Hover state observer binds
    const updateHoverState = () => {
      const hoverables = document.querySelectorAll("a, button, input, label, .product-card, .payment-method-card, .size-btn");
      hoverables.forEach(el => {
        el.addEventListener("mouseenter", () => cursor.classList.add("hovered"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("hovered"));
      });
    };

    // Intercept catalog rendering to update hover hooks and 3D tilt binds dynamically
    const originalRenderCatalog = renderCatalog;
    renderCatalog = function(...args) {
      originalRenderCatalog(...args);
      updateHoverState();
      bind3dTilt();
    };

    updateHoverState();
    bind3dTilt();
  }

  // Scroll Progress bar updates
  const scrollProgressBar = document.getElementById("scroll-progress-bar");
  if (scrollProgressBar) {
    window.addEventListener("scroll", () => {
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScrollHeight > 0 ? (window.scrollY / totalScrollHeight) * 100 : 0;
      scrollProgressBar.style.width = `${progress}%`;
    });
  }

  // Dismiss splash screen preloader
  const preloader = document.getElementById("preloader");
  if (preloader) {
    // Safety fallback in case window load event already fired
    const dismissPreloader = () => {
      setTimeout(() => {
        preloader.classList.add("fade-out");
        document.body.classList.remove("no-scroll");
      }, 1400); // 1.4s elegant intro scan
    };

    if (document.readyState === "complete") {
      dismissPreloader();
    } else {
      window.addEventListener("load", dismissPreloader);
    }
  }
});

// Interactive 3D Card Tilt Effect
function bind3dTilt() {
  const cards = document.querySelectorAll(".product-card:not(.sold-out-card)");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xRotation = -((y - rect.height / 2) / rect.height) * 12; // tilt degrees capped at 12
      const yRotation = ((x - rect.width / 2) / rect.width) * 12;
      
      card.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) translateY(-4px)`;
    });
    
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0) translateY(0)";
    });
  });
}

// 7. Mobile Bottom Sheet Size Selector & Smooth Scroll
const sizeSheet = document.getElementById("size-sheet");
const sizeSheetOverlay = document.getElementById("size-sheet-overlay");
const sizeSheetClose = document.getElementById("size-sheet-close");
const sheetProductImg = document.getElementById("sheet-product-img");
const sheetProductName = document.getElementById("sheet-product-name");
const sheetProductPrice = document.getElementById("sheet-product-price");
const sheetSizesOptions = document.getElementById("sheet-sizes-options");
const sheetAddToCartBtn = document.getElementById("sheet-add-to-cart-btn");

let sheetActiveProductId = null;
let sheetSelectedSize = null;

function openSizeSheet(productId) {
  const product = PRODUCTS_DB.find(p => p.id === productId);
  if (!product) return;
  
  sheetActiveProductId = productId;
  sheetSelectedSize = null;
  
  sheetProductImg.src = product.imageSrc;
  sheetProductImg.alt = product.name;
  sheetProductName.textContent = product.name;
  sheetProductPrice.textContent = `S/ ${product.price.toFixed(2)}`;
  
  const availableSizes = product.sizes || ["S", "M", "L"];
  sheetSizesOptions.innerHTML = availableSizes.map(size => `
    <button class="sheet-size-btn" data-size="${size}">${size}</button>
  `).join("");
  
  const sheetBtns = sheetSizesOptions.querySelectorAll(".sheet-size-btn");
  sheetBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      sheetBtns.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      sheetSelectedSize = btn.getAttribute("data-size");
    });
  });
  
  sizeSheet.classList.add("open");
  document.body.classList.add("no-scroll");
}

function closeSizeSheet() {
  sizeSheet.classList.remove("open");
  document.body.classList.remove("no-scroll");
  sheetActiveProductId = null;
  sheetSelectedSize = null;
}

if (sizeSheetClose) sizeSheetClose.addEventListener("click", closeSizeSheet);
if (sizeSheetOverlay) sizeSheetOverlay.addEventListener("click", closeSizeSheet);

if (sheetAddToCartBtn) {
  sheetAddToCartBtn.addEventListener("click", () => {
    if (!sheetActiveProductId) return;
    if (!sheetSelectedSize) {
      showMicroAlert("🚨 POR FAVOR SELECCIONA UNA TALLA");
      return;
    }
    addToCart(sheetActiveProductId, sheetSelectedSize);
    closeSizeSheet();
  });
}

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

