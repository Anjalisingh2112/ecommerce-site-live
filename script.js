// ====== Product Data ======
const products = [
  { id: 1, name: "Cool T-Shirt", category: "T-Shirts", price: 499, image: "images/tshirt1.jpg" },
  { id: 2, name: "Graphic T-Shirt", category: "T-Shirts", price: 599, image: "images/tshirt2.jpg" },
  { id: 3, name: "Stylish Shoes", category: "Shoes", price: 1299, image: "images/shoes1.jpg" },
  { id: 4, name: "Running Shoes", category: "Shoes", price: 1499, image: "images/shoes2.jpg" },
  { id: 5, name: "Leather Bag", category: "Bags", price: 1599, image: "images/bag1.jpg" },
  { id: 6, name: "Wireless Headphones", category: "Headphones", price: 2999, image: "images/headphones1.jpg" }
];

// Display products
const productsContainer = document.getElementById("products");

function displayProducts(items) {
  productsContainer.innerHTML = "";
  items.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button>Add to Cart</button>
    `;
    productsContainer.appendChild(productDiv);
  });
}

// Initial load
displayProducts(products);

// Category filter
const categoryButtons = document.querySelectorAll("#categories button");
categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    if(category === "All") {
      displayProducts(products);
    } else {
      displayProducts(products.filter(p => p.category === category));
    }
  });
});

// Search
document.getElementById("searchInput").addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  displayProducts(products.filter(p => p.name.toLowerCase().includes(term)));
});
