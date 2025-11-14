// ====== Product Data ======
const products = [
  { id: 1, name: "Cool T-Shirt", category: "T-Shirts", price: 499, img: "https://i.ibb.co/0jqHpnp/tshirt1.jpg" },
  { id: 2, name: "Stylish Shoes", category: "Shoes", price: 1299, img: "https://i.ibb.co/vZVZb7H/shoes1.jpg" },
  { id: 3, name: "Leather Bag", category: "Bags", price: 1599, img: "https://i.ibb.co/mb7w9kN/bag1.jpg" },
  { id: 4, name: "Wireless Headphones", category: "Headphones", price: 2999, img: "https://i.ibb.co/2dL7QwQ/headphone1.jpg" },
  { id: 5, name: "Graphic T-Shirt", category: "T-Shirts", price: 599, img: "https://i.ibb.co/YcH5Z1F/tshirt2.jpg" },
  { id: 6, name: "Running Shoes", category: "Shoes", price: 1499, img: "https://i.ibb.co/M2B3p7v/shoes2.jpg" }
];

// ====== Cart ======
let cart = [];
const cartCount = document.getElementById("cartCount");

// ====== Display Products ======
const productsContainer = document.getElementById("products");

function displayProducts(items) {
  productsContainer.innerHTML = "";
  items.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(div);
  });
}

// ====== Add to Cart ======
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  cartCount.textContent = cart.length;
  alert(`${product.name} added to cart!`);
}

// ====== Filter by Category ======
const categoryButtons = document.querySelectorAll("#categories button");
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    if(category === "All") {
      displayProducts(products);
    } else {
      displayProducts(products.filter(p => p.category === category));
    }
  });
});

// ====== Search ======
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  displayProducts(products.filter(p => p.name.toLowerCase().includes(query)));
});

// ====== Initial Load ======
displayProducts(products);

