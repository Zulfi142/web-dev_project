const API_URl = "https://dummyjson.com/products";
const productList = document.querySelector(".productList")
const inp=document.getElementById("inp");
const btn=document.getElementById("btn");
const msg=document.querySelector(".msg");
const sortSelect=document.getElementById("sortSelect");
let products = [];
let filterProducts = [];
async function fetchProducts(){
    let res = await fetch(API_URl);//request gyi
    // console.log(res);
    let data = await res.json();//save data in js to use as a object in readable form
    // console.log(data.products);
    products= [...data.products];
    displayProducts(products)
}
fetchProducts()
function displayProducts(products){
   productList.innerHTML="";
   msg.innerText="";
   if(products.length==0){
    msg.innerText="Product not found"
   }
   else{
    for(let product of products){
        // console.log(product);
        const div = document.createElement("div");
        div.classList.add("card");
        const str = `<img src=${product.images[0]}>
            <p class="category">${product.category}</p>
            <h2>${product.title}</h2>
            <p class="desc">${product.description}</p>
            <p class="price">$ ${product.price}</p>
            <p class="rating">⭐${product.rating}</p>`
        div.innerHTML=str;
        productList.appendChild(div);  
    }
}
}
btn.addEventListener("click", searchproduct);
async function searchproduct() {
    if (inp.value != "") {
        let searchvalue = inp.value.trim();
        const url = "https://dummyjson.com/products/search?q=";
        const APILINK = url + searchvalue;
        inp.value = "";
        let res = await fetch(APILINK);
        let data = await res.json();
        console.log(data.products);
        products = data.products;
        displayProducts(products);
    } 
    else {
        
    }
}
sortSelect.addEventListener("change",sortProduct);

function sortProduct(){
    filterProducts=[...products];
    if(sortSelect.value=="price-high"){
        filterProducts.sort((a,b)=>b.price-a.price);
    }
    else if(sortSelect.value=="price-low"){
         filterProducts.sort((a,b)=>a.price-b.price);
    }
    else if(sortSelect.value=="rating-high"){
         filterProducts.sort((a,b)=>b.rating-a.rating);
    }
    else if(sortSelect.value=="rating-low"){
        filterProducts.sort((a,b)=>a.rating-b.rating);
    }
    else if(sortSelect.value=="sort"){
         filterProducts=[...products];
    }
    displayProducts(filterProducts);
}