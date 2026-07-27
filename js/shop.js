// ======================================
// LETS ESSENTIALS CUSTOMER SHOP
// shop.js
// ======================================


let products = JSON.parse(

localStorage.getItem("products")

) || [];



let cart = JSON.parse(

localStorage.getItem("cart")

) || [];




const productsContainer =
document.getElementById("productsContainer");





function displayProducts(){


if(!productsContainer) return;



productsContainer.innerHTML="";



if(products.length === 0){


productsContainer.innerHTML =

`

<div>

<h3>
No products available yet.
</h3>

<p>
Please check back soon.
</p>

</div>

`;

return;

}





products.forEach((product,index)=>{


productsContainer.innerHTML +=

`

<div class="product-card">


<img 
src="${product.image}"
alt="${product.name}">



<h3>

${product.name}

</h3>



<p class="category">

${product.category}

</p>



<h4>

P${product.price}

</h4>



<button 

onclick="addToCart(${index})">

Add To Cart

</button>



</div>

`;



});



}








function addToCart(index){



let product = products[index];





let existing = cart.find(item =>

item.id === product.id

);





if(existing){


existing.quantity += 1;


}else{


cart.push({

id:product.id,

name:product.name,

price:product.price,

image:product.image,

quantity:1


});


}






localStorage.setItem(

"cart",

JSON.stringify(cart)

);






alert(

product.name +

" added to cart"

);



}







displayProducts();
