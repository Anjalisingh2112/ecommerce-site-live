const productsContainer = document.getElementById("products");

const products = [
  { name: "Cool T-Shirt", price: 499, image: "images/tshirt1.jpg" },
  { name: "Graphic T-Shirt", price: 599, image: "images/tshirt2.jpg" },
  { name: "Stylish Shoes", price: 1299, image: "images/shoes1.jpg" },
  { name: "Running Shoes", price: 1499, image: "images/shoes2.jpg" },
  { name: "Leather Bag", price: 1599, image: "images/bag1.jpg" },
  { name: "Wireless Headphones", price: 2999, image: "images/headphone1.jpg" },
  { name: "Casual T-Shirt", price: 549, image: "images/tshirt3.jpg" },
  { name: "Formal Shoes", price: 1999, image: "images/shoes3.jpg" },
  { name: "Backpack", price: 1299, image: "images/bag2.jpg" },
  { name: "Sports Headphones", price: 3499, image: "images/headphone2.jpg" },
  { name: "Summer T-Shirt", price: 699, image: "images/tshirt4.jpg" },
  { name: "Sneakers", price: 1599, image: "images/shoes4.jpg" },
];

function displayProducts(list) {
  productsContainer.innerHTML = "";
  list.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button>Add to Cart</button>
    `;
    productsContainer.appendChild(div);
  });
}

// Initial display
displayProducts(products);

// Optional: Add search functionality
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  displayProducts(filtered);
});
