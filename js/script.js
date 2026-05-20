/* =========================================================
   The Arabic Byanjan — Front-end logic
   ========================================================= */

// ---------- Restaurant config ----------
const RESTAURANT = {
  name: "The Arabic Byanjan",
  whatsapp: "916294990993",      // +91 62949 90993
  location: "Domkal Bridge More, Near Hotel Byanjan, 742303"
};

/* =========================================================
   FULL MENU
   - Each item:
     id, name, type ('veg' | 'nv'), category,
     options: [{label, price}]  (single option = single price)
   ========================================================= */
const MENU = [
  // ============== STARTERS – NON VEG ==============
  { cat: "Starters – Non Veg", icon: "fa-drumstick-bite", items: [
    { name: "Chicken 65", type: "nv", desc: "10 pcs · spicy fried chicken bites", options: [{label: "10 pcs", price: 160}] },
    { name: "Garlic Chicken", type: "nv", desc: "6 pcs · tossed in garlic & soy", options: [{label: "6 pcs", price: 220}] },
    { name: "Lemon Chicken", type: "nv", desc: "6 pcs · tangy lemon glaze", options: [{label: "6 pcs", price: 200}] },
    { name: "Chicken Popcorn", type: "nv", desc: "12 pcs · crispy bite-size", options: [{label: "12 pcs", price: 180}] },
    { name: "Dragon Chicken", type: "nv", desc: "10 pcs · sweet & fiery sauce", options: [{label: "10 pcs", price: 200}] },
    { name: "Chicken Pakora", type: "nv", desc: "6 pcs · gram-flour fritters", options: [{label: "6 pcs", price: 150}] },
    { name: "Chicken Lollipop", type: "nv", desc: "4 pcs · classic frenched drumsticks", options: [{label: "4 pcs", price: 140}] },
    { name: "Chicken Cutlet", type: "nv", desc: "4 pcs · pan-fried minced patties", options: [{label: "4 pcs", price: 160}] },
    { name: "Drums of Heaven", type: "nv", desc: "5 pcs · saucy chicken winglets", options: [{label: "5 pcs", price: 220}] },
    { name: "Chicken Cheese Ball", type: "nv", desc: "6 pcs · molten cheese centre", options: [{label: "6 pcs", price: 220}] },
    { name: "Chicken Butterfly", type: "nv", desc: "8 pcs · crisp coated wings", options: [{label: "8 pcs", price: 160}] },
  ]},

  // ============== STARTERS – VEG ==============
  { cat: "Starters – Veg", icon: "fa-seedling", items: [
    { name: "Paneer 65", type: "veg", desc: "6 pcs · spicy fried cottage cheese", options: [{label: "6 pcs", price: 180}] },
    { name: "Paneer Pakora", type: "veg", desc: "5 pcs · gram-flour battered paneer", options: [{label: "5 pcs", price: 160}] },
    { name: "French Fries", type: "veg", desc: "Crispy salted potato fries", options: [{label: "Plate", price: 120}] },
  ]},

  // ============== MOMOS ==============
  { cat: "Momos", icon: "fa-bowl-food", items: [
    { name: "Veg Momo", type: "veg", desc: "6 pcs · steamed veggie dumplings", options: [{label: "6 pcs", price: 60}] },
    { name: "Chicken Momo", type: "nv", desc: "6 pcs · steamed chicken dumplings", options: [{label: "6 pcs", price: 80}] },
    { name: "Pan Fry Momo", type: "nv", desc: "6 pcs · golden pan-fried", options: [{label: "6 pcs", price: 120}] },
    { name: "Sezuwan Momo", type: "nv", desc: "6 pcs · tossed in sezuwan", options: [{label: "6 pcs", price: 120}] },
    { name: "Tandoori Momo", type: "nv", desc: "6 pcs · smoky tandoor char", options: [{label: "6 pcs", price: 140}] },
  ]},

  // ============== KABABS ==============
  { cat: "Kababs", icon: "fa-fire-flame-curved", items: [
    { name: "Chicken Tikka Kabab", type: "nv", desc: "6 pcs · classic tandoor tikka", options: [{label: "6 pcs", price: 210}] },
    { name: "Chicken Hariyali Kabab", type: "nv", desc: "6 pcs · mint & coriander marinade", options: [{label: "6 pcs", price: 210}] },
    { name: "Chicken Reshmi Kabab", type: "nv", desc: "6 pcs · creamy malai marinade", options: [{label: "6 pcs", price: 230}] },
    { name: "Sheek Kabab", type: "nv", desc: "6 pcs · minced spiced skewers", options: [{label: "6 pcs", price: 190}] },
    { name: "Chicken Malai Kabab", type: "nv", desc: "6 pcs · rich cream & cheese", options: [{label: "6 pcs", price: 250}] },
    { name: "Paneer Kabab", type: "veg", desc: "6 pcs · spiced grilled paneer", options: [{label: "6 pcs", price: 230}] },
  ]},

  // ============== DELIGHTS (Noodles, Chowmein, Rolls) ==============
  { cat: "Delights", icon: "fa-bowl-rice", items: [
    { name: "Veg Hakka Noodles", type: "veg", desc: "Stir-fried with veggies", options: [{label: "Full", price: 100}, {label: "Half", price: 60}] },
    { name: "Egg Hakka Noodles", type: "nv", desc: "Stir-fried with egg", options: [{label: "Full", price: 120}, {label: "Half", price: 70}] },
    { name: "Chicken Hakka Noodles", type: "nv", desc: "Stir-fried with chicken", options: [{label: "Full", price: 160}, {label: "Half", price: 90}] },
    { name: "Mixed Hakka Noodles", type: "nv", desc: "Loaded with chicken, egg & veg", options: [{label: "Full", price: 220}, {label: "Half", price: 130}] },
    { name: "Singapore Noodles", type: "nv", desc: "Fragrant curry-tossed noodles", options: [{label: "Full", price: 220}, {label: "Half", price: 130}] },
    { name: "Chilli Garlic Noodles", type: "nv", desc: "Spicy chilli garlic toss", options: [{label: "Full", price: 220}, {label: "Half", price: 130}] },
    { name: "Veg Chowmein", type: "veg", desc: "Indo-style street style", options: [{label: "Full", price: 50}, {label: "Half", price: 30}] },
    { name: "Egg Chowmein", type: "nv", desc: "With scrambled egg", options: [{label: "Full", price: 60}, {label: "Half", price: 40}] },
    { name: "Chicken Chowmein", type: "nv", desc: "With shredded chicken", options: [{label: "Full", price: 90}, {label: "Half", price: 50}] },
    { name: "Mixed Chowmein", type: "nv", desc: "Chicken, egg & veg combo", options: [{label: "Full", price: 110}, {label: "Half", price: 70}] },
    { name: "Veg Roll", type: "veg", desc: "Roll wrapped in flaky paratha", options: [{label: "1 pc", price: 30}] },
    { name: "Egg Roll", type: "nv", desc: "Egg-coated paratha roll", options: [{label: "1 pc", price: 40}] },
    { name: "Chicken Roll", type: "nv", desc: "Spiced chicken & onions", options: [{label: "1 pc", price: 70}] },
    { name: "Egg Chicken Roll", type: "nv", desc: "Egg + chicken combo roll", options: [{label: "1 pc", price: 80}] },
    { name: "Paneer Roll", type: "veg", desc: "Tandoori paneer wrap", options: [{label: "1 pc", price: 100}] },
  ]},

  // ============== SOUPS ==============
  { cat: "Soups", icon: "fa-mug-hot", items: [
    { name: "Manchow Soup", type: "veg", desc: "Indo-Chinese spiced soup", options: [{label: "Bowl", price: 100}] },
    { name: "Hot & Sour Soup", type: "veg", desc: "Classic tangy soup", options: [{label: "Bowl", price: 100}] },
    { name: "Lemon Coriander Soup", type: "veg", desc: "Fresh lemon & herbs", options: [{label: "Bowl", price: 80}] },
  ]},

  // ============== CONTINENTAL ==============
  { cat: "Continental", icon: "fa-cheese", items: [
    { name: "Macaroni Cheese Pasta", type: "veg", desc: "Creamy white sauce", options: [{label: "Plate", price: 200}] },
    { name: "Pink Cheese Pasta", type: "veg", desc: "Tomato & cream blend", options: [{label: "Plate", price: 210}] },
    { name: "Spaghetti Pasta", type: "veg", desc: "Classic spaghetti style", options: [{label: "Plate", price: 250}] },
  ]},

  // ============== PIZZA & BURGER ==============
  { cat: "Pizza & Burger", icon: "fa-pizza-slice", items: [
    { name: "Classic Margarita Pizza", type: "veg", desc: "Tomato, mozzarella, basil", options: [
      {label: "Large",  price: 300}, {label: "Medium", price: 240}, {label: "Small",  price: 180}
    ]},
    { name: "Chicken Keema Pizza", type: "nv", desc: "Spiced chicken mince", options: [
      {label: "Large",  price: 340}, {label: "Medium", price: 280}, {label: "Small",  price: 220}
    ]},
    { name: "Chicken Sausage Pizza", type: "nv", desc: "Smoky chicken sausage", options: [
      {label: "Large",  price: 390}, {label: "Medium", price: 300}, {label: "Small",  price: 250}
    ]},
    { name: "Veg Supreme Pizza", type: "veg", desc: "Loaded vegetables", options: [
      {label: "Large",  price: 360}, {label: "Medium", price: 290}, {label: "Small",  price: 230}
    ]},
    { name: "Paneer Tikka Pizza", type: "veg", desc: "Tandoori paneer chunks", options: [
      {label: "Large",  price: 420}, {label: "Medium", price: 320}, {label: "Small",  price: 260}
    ]},
    { name: "Veg Burger", type: "veg", desc: "Crispy veg patty", options: [{label: "1 pc", price: 60}] },
    { name: "Chicken Burger", type: "nv", desc: "Juicy chicken patty", options: [{label: "1 pc", price: 80}] },
    { name: "Chicken Cheese Burger", type: "nv", desc: "Chicken + melty cheese", options: [{label: "1 pc", price: 100}] },
    { name: "Double Patty Chicken Cheese Burger", type: "nv", desc: "Two patties, lots of cheese", options: [{label: "1 pc", price: 150}] },
  ]},

  // ============== MAIN COURSE ==============
  { cat: "Main Course", icon: "fa-utensils", items: [
    { name: "Al-Faham with Khabsa Rice", type: "nv", desc: "Charcoal-grilled chicken with khabsa rice", options: [
      {label: "Full",    price: 600},
      {label: "Half",    price: 330},
      {label: "Quarter", price: 190},
    ]},
    { name: "Al-Faham", type: "nv", desc: "Charcoal-grilled chicken specialty", options: [
      {label: "Full",    price: 460},
      {label: "Half",    price: 260},
      {label: "Quarter", price: 160},
    ]},
    { name: "Extra Rice", type: "veg", desc: "Aromatic basmati", options: [
      {label: "Full", price: 60},
      {label: "Half", price: 40},
    ]},
  ]},

  // ============== RICE / ROTI / NAAN ==============
  { cat: "Rice & Roti / Naan", icon: "fa-wheat-awn", items: [
    { name: "Sezuwan Fried Rice", type: "veg", desc: "Fiery sezuwan toss", options: [{label: "Plate", price: 160}] },
    { name: "Butter Garlic Rice", type: "veg", desc: "Rich butter & garlic", options: [{label: "Plate", price: 140}] },
    { name: "Veg Fried Rice", type: "veg", desc: "Classic veg fried rice", options: [{label: "Plate", price: 100}] },
    { name: "Chicken Fried Rice", type: "nv", desc: "Loaded with chicken", options: [{label: "Plate", price: 180}] },
    { name: "Singapore Fried Rice", type: "veg", desc: "Curry-spiced rice", options: [{label: "Plate", price: 120}] },
    { name: "Mixed Fried Rice", type: "nv", desc: "Chicken, egg & prawns mix", options: [{label: "Plate", price: 250}] },
    { name: "Plain Tandoor Roti", type: "veg", desc: "Whole-wheat tandoor roti", options: [{label: "1 pc", price: 20}] },
    { name: "Butter Tandoor Roti", type: "veg", desc: "Brushed with butter", options: [{label: "1 pc", price: 30}] },
    { name: "Plain Tandoor Naan", type: "veg", desc: "Soft tandoor naan", options: [{label: "1 pc", price: 40}] },
    { name: "Butter Tandoor Naan", type: "veg", desc: "Buttered naan", options: [{label: "1 pc", price: 50}] },
    { name: "Plain Garlic Naan", type: "veg", desc: "Naan with garlic", options: [{label: "1 pc", price: 60}] },
    { name: "Butter Garlic Naan", type: "veg", desc: "Garlic + butter", options: [{label: "1 pc", price: 70}] },
  ]},

  // ============== GRAVY ITEMS ==============
  { cat: "Gravy Items", icon: "fa-fire", items: [
    { name: "Afgani Murgh", type: "nv", desc: "Creamy white afghani gravy", options: [{label: "4 pcs", price: 360}, {label: "2 pcs", price: 200}] },
    { name: "Chicken Korma", type: "nv", desc: "Slow-cooked korma", options: [{label: "4 pcs", price: 340}, {label: "2 pcs", price: 190}] },
    { name: "Chicken Ghee Roast", type: "nv", desc: "Mangalorean ghee roast", options: [{label: "8 pcs", price: 380}, {label: "4 pcs", price: 210}] },
    { name: "Butter Chicken", type: "nv", desc: "Rich tomato-butter gravy", options: [{label: "Full", price: 300}, {label: "Half", price: 170}] },
    { name: "Kadai Chicken", type: "nv", desc: "Bell peppers & spices", options: [{label: "Full", price: 260}, {label: "Half", price: 140}] },
    { name: "Chicken Do Pyaza", type: "nv", desc: "Onion-laden curry", options: [{label: "Full", price: 220}, {label: "Half", price: 120}] },
    { name: "Chicken Manchurian", type: "nv", desc: "Indo-Chinese gravy", options: [{label: "Full", price: 240}, {label: "Half", price: 130}] },
    { name: "Chicken Sezwan Gravy", type: "nv", desc: "Spicy sezwan style", options: [{label: "Full", price: 260}, {label: "Half", price: 140}] },
    { name: "Five Spices Chicken", type: "nv", desc: "Aromatic five-spice", options: [{label: "Full", price: 280}, {label: "Half", price: 160}] },
    { name: "Chicken Chilli Gravy", type: "nv", desc: "Hot chilli chicken", options: [{label: "8 pcs", price: 220}, {label: "4 pcs", price: 120}] },
    { name: "Mutton Kosa", type: "nv", desc: "Bengali-style kosha mangsho", options: [{label: "4 pcs", price: 380}, {label: "2 pcs", price: 200}] },
    { name: "Mutton Rara Gosht", type: "nv", desc: "Mutton with kheema gravy", options: [{label: "4 pcs", price: 460}, {label: "2 pcs", price: 260}] },
    { name: "Mutton Korma", type: "nv", desc: "Royal mutton korma", options: [{label: "4 pcs", price: 400}, {label: "2 pcs", price: 230}] },
    { name: "Paneer Chilli Gravy", type: "veg", desc: "Indo-Chinese paneer", options: [{label: "6 pcs", price: 380}, {label: "4 pcs", price: 260}] },
    { name: "Veg Manchurian", type: "veg", desc: "Veg-balls in soy gravy", options: [{label: "6 pcs", price: 190}, {label: "4 pcs", price: 100}] },
    { name: "Veg Sezwan Gravy", type: "veg", desc: "Spicy sezwan veg", options: [{label: "6 pcs", price: 200}, {label: "4 pcs", price: 110}] },
    { name: "Paneer Butter Masala", type: "veg", desc: "Buttery tomato paneer", options: [{label: "6 pcs", price: 210}, {label: "4 pcs", price: 150}] },
    { name: "Paneer Spicy Curry", type: "veg", desc: "Spicy paneer curry", options: [{label: "6 pcs", price: 190}, {label: "4 pcs", price: 130}] },
    { name: "Dahi Paneer", type: "veg", desc: "Yogurt-based paneer", options: [{label: "6 pcs", price: 180}, {label: "4 pcs", price: 120}] },
  ]},

  // ============== CHEF'S SIGNATURE ==============
  { cat: "Chef's Signature", icon: "fa-crown", items: [
    { name: "Resam Lemon Rice", type: "veg", desc: "South-Indian style lemon rice", options: [{label: "Plate", price: 290}] },
    { name: "Paneer Tikka with Sizzler Rice", type: "veg", desc: "Tandoori paneer + sizzler", options: [{label: "Plate", price: 400}] },
    { name: "Chicken Tikka with Sizzler Rice", type: "nv", desc: "Tandoori chicken + sizzler", options: [{label: "Plate", price: 500}] },
  ]},

  // ============== HOT BEVERAGES ==============
  { cat: "Hot Beverages", icon: "fa-mug-saucer", items: [
    { name: "Lemon Tea", type: "veg", desc: "Refreshing lemon tea", options: [{label: "Cup", price: 10}] },
    { name: "Milk Tea", type: "veg", desc: "Classic Indian chai", options: [{label: "Cup", price: 20}] },
    { name: "Green Tea", type: "veg", desc: "Antioxidant green tea", options: [{label: "Cup", price: 15}] },
    { name: "Hot Coffee", type: "veg", desc: "Hot brewed coffee", options: [{label: "Cup", price: 30}] },
  ]},

  // ============== MOCKTAILS & ICE-CREAM ==============
  { cat: "Mocktails & Ice-Cream", icon: "fa-martini-glass-citrus", items: [
    { name: "Blue Heaven Mojito", type: "veg", desc: "Blue curacao mojito", options: [{label: "Glass", price: 70}] },
    { name: "Virgin Mojito", type: "veg", desc: "Mint, lime, soda", options: [{label: "Glass", price: 70}] },
    { name: "Jeera Mojito", type: "veg", desc: "Cumin twist mojito", options: [{label: "Glass", price: 70}] },
    { name: "Green Mint Fresh Lime Mojito", type: "veg", desc: "Fresh lime & mint", options: [{label: "Glass", price: 80}] },
    { name: "Aampanna Mojito", type: "veg", desc: "Raw mango mojito", options: [{label: "Glass", price: 70}] },
    { name: "Mango Mojito", type: "veg", desc: "Sweet mango mojito", options: [{label: "Glass", price: 70}] },
    { name: "Tangy Mocktail with Mint Punch", type: "veg", desc: "Signature tangy punch", options: [{label: "Glass", price: 100}] },
    { name: "Masala Lassi", type: "veg", desc: "Spiced yogurt drink", options: [{label: "Glass", price: 70}] },
    { name: "Normal Cold Drinks", type: "veg", desc: "Aerated soft drinks", options: [{label: "Bottle", price: 30}] },
    { name: "Masala Cold Drinks", type: "veg", desc: "Spiced cold drink", options: [{label: "Glass", price: 40}] },
    { name: "Water", type: "veg", desc: "Mineral water", options: [{label: "Bottle", price: 20}] },
    { name: "Vanilla Ice-Cream", type: "veg", desc: "Classic vanilla", options: [{label: "Scoop", price: 50}] },
    { name: "Chocolate Ice-Cream", type: "veg", desc: "Rich chocolate", options: [{label: "Scoop", price: 50}] },
    { name: "Strawberry Ice-Cream", type: "veg", desc: "Sweet strawberry", options: [{label: "Scoop", price: 50}] },
    { name: "Butter Scotch Ice-Cream", type: "veg", desc: "Crunchy butterscotch", options: [{label: "Scoop", price: 50}] },
  ]},

  // ============== SHAKES ==============
  { cat: "Shakes", icon: "fa-blender", items: [
    { name: "Oreo Milk Shake", type: "veg", desc: "Oreo cookies blended", options: [{label: "Glass", price: 110}] },
    { name: "KitKat Milk Shake", type: "veg", desc: "KitKat blended", options: [{label: "Glass", price: 130}] },
    { name: "Chocolate Milk Shake", type: "veg", desc: "Rich chocolate", options: [{label: "Glass", price: 120}] },
    { name: "Mango Milk Shake", type: "veg", desc: "Fresh mango", options: [{label: "Glass", price: 140}] },
  ]},
];

/* =========================================================
   Helpers
   ========================================================= */
const slug = (s) => s.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-+|-+$/g, "");
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// Assign stable ids
MENU.forEach((cat) => {
  cat.id = slug(cat.cat);
  cat.items.forEach((it, idx) => {
    it.id = `${cat.id}-${idx}-${slug(it.name)}`;
  });
});

/* =========================================================
   CART STATE
   - key: `${itemId}::${optionLabel}`
   ========================================================= */
const STORAGE_KEY = "tab_cart_v1";
let cart = {};

function loadCart() {
  try { cart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { cart = {}; }
}
function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function addToCart(item, opt) {
  const key = `${item.id}::${opt.label}`;
  if (!cart[key]) {
    cart[key] = {
      id: item.id,
      name: item.name,
      option: opt.label,
      price: opt.price,
      qty: 0,
    };
  }
  cart[key].qty += 1;
  saveCart();
  renderCart();
  toast(`${item.name} (${opt.label}) added`);
}
function changeQty(key, delta) {
  if (!cart[key]) return;
  cart[key].qty += delta;
  if (cart[key].qty <= 0) delete cart[key];
  saveCart();
  renderCart();
}
function removeFromCart(key) {
  delete cart[key];
  saveCart();
  renderCart();
}
function clearCart() {
  cart = {};
  saveCart();
  renderCart();
  toast("Cart cleared");
}
function cartTotals() {
  const lines = Object.values(cart);
  const total = lines.reduce((s, l) => s + l.qty * l.price, 0);
  const count = lines.reduce((s, l) => s + l.qty, 0);
  return { total, count, lines };
}

/* =========================================================
   RENDER MENU
   ========================================================= */
function renderMenuTabs() {
  const tabs = $("#menuTabs");
  tabs.innerHTML = `
    <button class="menu-tab active" data-target="all"><i class="fas fa-utensils"></i> All</button>
    ${MENU.map(c => `
      <button class="menu-tab" data-target="${c.id}">
        <i class="fas ${c.icon}"></i> ${c.cat}
      </button>
    `).join("")}
  `;
  tabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".menu-tab");
    if (!btn) return;
    $$(".menu-tab", tabs).forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filterMenu(btn.dataset.target);
  });
}

function renderMenu() {
  const list = $("#menuList");
  list.innerHTML = MENU.map(cat => `
    <div class="menu-category-block" data-cat="${cat.id}">
      <h3>${cat.cat.toUpperCase()}</h3>
    </div>
    ${cat.items.map(item => `
      <article class="menu-item reveal" data-cat="${cat.id}" data-id="${item.id}">
        <div class="mi-head">
          <h4>${item.name}</h4>
          <span class="mi-tag ${item.type}">${item.type === "veg" ? "VEG" : "NON-VEG"}</span>
        </div>
        ${item.desc ? `<p class="mi-desc">${item.desc}</p>` : ""}
        <div class="mi-options">
          ${item.options.map((opt, i) => `
            <div class="mi-option">
              <span class="label">${opt.label}</span>
              <span class="price">₹${opt.price}</span>
              <button class="mi-add" data-item="${item.id}" data-opt="${i}" aria-label="Add ${item.name} ${opt.label}">+</button>
            </div>
          `).join("")}
        </div>
      </article>
    `).join("")}
  `).join("");

  // Click handler for + buttons
  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".mi-add");
    if (!btn) return;
    const itemId = btn.dataset.item;
    const optIdx = +btn.dataset.opt;
    for (const cat of MENU) {
      const it = cat.items.find(x => x.id === itemId);
      if (it) {
        addToCart(it, it.options[optIdx]);
        return;
      }
    }
  });
}

function filterMenu(target) {
  const all = target === "all";
  $$(".menu-item", $("#menuList")).forEach(el => {
    el.style.display = all || el.dataset.cat === target ? "" : "none";
  });
  $$(".menu-category-block", $("#menuList")).forEach(el => {
    el.style.display = all || el.dataset.cat === target ? "" : "none";
  });
}

/* =========================================================
   RENDER CART
   ========================================================= */
function renderCart() {
  const { total, count, lines } = cartTotals();
  $("#cartCount").textContent = count;
  $("#cartTotal").textContent = `₹${total}`;
  $("#orderWhats").disabled = count === 0;

  const body = $("#cartBody");
  if (lines.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-utensils"></i>
        <p>Your cart is empty</p>
        <span>Pick something delicious from the menu!</span>
      </div>`;
    return;
  }
  body.innerHTML = lines.map(l => {
    const key = `${l.id}::${l.option}`;
    return `
      <div class="cart-row" data-key="${key}">
        <div class="name">
          <b>${l.name}</b>
          <small>${l.option} · ₹${l.price}</small>
        </div>
        <div class="cart-qty">
          <button data-act="dec">−</button>
          <span>${l.qty}</span>
          <button data-act="inc">+</button>
        </div>
        <span class="line-price">₹${l.qty * l.price}</span>
        <button class="remove" data-act="rm" aria-label="Remove"><i class="fas fa-trash"></i></button>
      </div>`;
  }).join("");

  // qty handlers
  body.querySelectorAll(".cart-row").forEach(row => {
    const key = row.dataset.key;
    row.querySelector('[data-act="inc"]').onclick = () => changeQty(key, +1);
    row.querySelector('[data-act="dec"]').onclick = () => changeQty(key, -1);
    row.querySelector('[data-act="rm"]').onclick  = () => removeFromCart(key);
  });
}

/* =========================================================
   WHATSAPP ORDER
   ========================================================= */
function buildOrderMessage() {
  const { total, lines } = cartTotals();
  const name = $("#customerName").value.trim();
  const note = $("#customerNote").value.trim();

  let msg = `*New Order — ${RESTAURANT.name}*\n`;
  msg += `_Sent from website_\n\n`;
  if (name) msg += `*Customer:* ${name}\n`;
  msg += `*Items:*\n`;
  lines.forEach((l, i) => {
    msg += `${i + 1}. ${l.name} (${l.option}) × ${l.qty} = ₹${l.qty * l.price}\n`;
  });
  msg += `\n*Total: ₹${total}*\n`;
  if (note) msg += `\n*Note / Address:* ${note}\n`;
  msg += `\nLocation: ${RESTAURANT.location}`;
  return msg;
}

function sendWhatsAppOrder() {
  const { count } = cartTotals();
  if (count === 0) return;
  const text = encodeURIComponent(buildOrderMessage());
  window.open(`https://wa.me/${RESTAURANT.whatsapp}?text=${text}`, "_blank");
}

/* =========================================================
   UI WIRING
   ========================================================= */
function openCart() {
  $("#cartDrawer").classList.add("open");
  $("#cartBackdrop").classList.add("open");
  $("#cartDrawer").setAttribute("aria-hidden", "false");
}
function closeCart() {
  $("#cartDrawer").classList.remove("open");
  $("#cartBackdrop").classList.remove("open");
  $("#cartDrawer").setAttribute("aria-hidden", "true");
}

function toast(message) {
  const t = $("#toast");
  t.innerHTML = `<i class="fas fa-circle-check"></i> ${message}`;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 1800);
}

/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .1 });
  $$(".reveal").forEach(el => io.observe(el));
}

/* =========================================================
   NAV BEHAVIOR
   ========================================================= */
function initNav() {
  const nav = $(".nav-bar");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 30);
  });

  $("#hamburger").onclick = () => $("#navLinks").classList.toggle("open");
  $$("#navLinks a").forEach(a => a.onclick = () => $("#navLinks").classList.remove("open"));
}

/* =========================================================
   LOADER
   ========================================================= */
function hideLoader() {
  const ld = $("#loader");
  ld.classList.add("hidden");
  setTimeout(() => ld.remove(), 800);
}

/* =========================================================
   INIT
   ========================================================= */
window.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  loadCart();
  renderMenuTabs();
  renderMenu();
  renderCart();
  initNav();
  initReveal();

  $("#cartBtn").onclick      = openCart;
  $("#cartClose").onclick    = closeCart;
  $("#cartBackdrop").onclick = closeCart;
  $("#openCartStrip").onclick = openCart;
  $("#orderWhats").onclick   = sendWhatsAppOrder;
  $("#clearCart").onclick    = () => { if (confirm("Clear all items?")) clearCart(); };
});

// Hide loader when everything (incl. images) is ready
window.addEventListener("load", () => {
  // Keep the loader on screen long enough to enjoy the animation
  setTimeout(hideLoader, 2200);
});
