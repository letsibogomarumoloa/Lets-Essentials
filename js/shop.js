/* =========================================
   LETS ESSENTIALS
   SHOP PRODUCTS DISPLAY V3.0
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

${product.description || ""}

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

localStorage.getItem("letsCart")

) || [];





const product = products.find(

item => item.id === productID

);






if(!product){

return;

}






const existingProduct = cart.find(

item => item.id === productID

);






if(existingProduct){


existingProduct.quantity++;


}

else{


cart.push({


id: product.id,


name: product.name,


price: Number(product.price),


image: product.image,


quantity:1


});


}





localStorage.setItem(

"letsCart",

JSON.stringify(cart)

);





alert(

product.name + " added to cart"

);



}
