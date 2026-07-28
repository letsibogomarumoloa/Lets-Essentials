/* =========================================
   LETS ESSENTIALS
   SHOP PRODUCTS DISPLAY
========================================= */


const productsContainer =
document.getElementById(
"productsContainer"
);




let products = JSON.parse(

localStorage.getItem("letsProducts")

) || [];







if(products.length === 0){


productsContainer.innerHTML = `


<p>

No products available yet.

</p>


`;



}

else{



products.forEach(product => {



productsContainer.innerHTML += `



<div class="product-card">



<img 
src="${product.image}"
alt="${product.name}">





<h3>

${product.name}

</h3>





<p>

${product.description}

</p>





<h4>

P${product.price}

</h4>





<button 
class="btn btn-primary"
onclick="addToCart(${product.id})">

Add To Cart

</button>



</div>



`;



});



}








function addToCart(productID){



let cart = JSON.parse(

localStorage.getItem("cart")

) || [];





const product = products.find(

item => item.id === productID

);





cart.push(product);





localStorage.setItem(

"cart",

JSON.stringify(cart)

);





alert(

product.name + " added to cart"

);



}
