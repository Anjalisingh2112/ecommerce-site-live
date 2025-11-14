const productsContainer = document.getElementById("products");

const products = [
  { name: "Cool T-Shirt", price: 499, image: "images/tshirt1.jpg" },
  { name: "Graphic T-Shirt", price: 599, image: "images/tshirt2.jpg" },
  { name: "Stylish Shoes", price: 1299, image: "images/shoes1.jpg" },
  { name: "Running Shoes", price: 1499, image: "images/shoes2.jpg" },
  { name: "Leather Bag", price: 1599, image: "images/bag1.jpg" },
  { name: "Wireless Headphones", price: 2999, image: "images/headphone1.jpg" },
  // Add more products if needed
];

products.forEach(product => {
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
