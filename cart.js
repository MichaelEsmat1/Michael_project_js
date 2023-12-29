import productData from "./productData.js";


const pageContainer = document.getElementById("page-container");

const cartData = JSON.parse(sessionStorage.getItem("myCart"));

let elements = "";

productData.forEach((product, index) => {
  if (cartData[product.id]) {
    for (let i = 0; i < cartData[product.id]; i++) {
      elements += `
         <div  class="card">

         <img src="${product.img}" alt="Card ${index} Image" />
         <h2>${product.title}</h2>
         <p>${product.description}</p>
         <p class="email">${product.email}</p>
         <button class="addToCart" data-id="${product.id}">Add to Card</button>
         <p>Quantity: ${cartData[product.id]}</p>
         </div>
      `;
    }
  }
});

pageContainer.innerHTML = elements;
