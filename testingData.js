import productData from "./productData.js";

const addToCartBtns = document.getElementsByClassName("addToCart");
const cartCountBtn = document.getElementById("cartcount");
const productsContainer = document.getElementById("productsContainer");

let elemets = "";
productData.forEach((cardData, index) => {
  elemets += `
     <div data-type=${index<8?"Perfume":index>=8 && index<16?"Accessories":"bags"} class="card">
        <img src="${cardData.img}" alt="Card ${index} Image" />
        <h2>${cardData.title}</h2>
        <p>${cardData.description}</p>
        <p class="email">${cardData.email}</p>
        <button class="addToCart" data-id="${cardData.id}">Add to Card</button>
      </div>
  `;
});

productsContainer.innerHTML = elemets;

let cartCounter = 0;
let cartData = {};

[...addToCartBtns].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    var productId = e.target.getAttribute("data-id");
    console.log(productId);
    cartCounter++;
    cartCountBtn.value = cartCounter;
    addToCartFunc(productId);
  });
});

function addToCartFunc(id) {
  if (cartData[id]) {
    cartData[id]++;
  } else {
    cartData[id] = 1;
  }

  sessionStorage.setItem("myCart", JSON.stringify(cartData));
}





var tabs=document.querySelectorAll(".tab");
var divs=document.querySelectorAll(".card");
// console.log(divs);


// console.log(productData[0].category);
// console.log(tabs);
tabs.forEach((e)=>{
  e.addEventListener("click",function(){
    // console.log(e.getAttribute("data-type"));
    tabs.forEach((t)=>{
      t.classList.remove("active");
    })
    e.classList.add("active");




    divs.forEach((d)=>{
      d.style.display="none";
      if(e.getAttribute("data-type")===d.getAttribute("data-type")){
      d.style.display="block";
      // console.log(e.getAttribute("data-type"));
          // console.log(p.parentElement.parentElement);
          
      // console.log(p.category);
      }
      if(e.getAttribute("data-type")==="All"){
        divs.forEach((m)=>{
          m.style.display="block";
        })
      }
    })

  })
  

})