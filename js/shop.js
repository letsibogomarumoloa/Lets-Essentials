/* =========================================
   LETS ESSENTIALS
   SHOP PRODUCTS DISPLAY V2.0
========================================= */


const productsContainer =
document.getElementById(
"productsContainer"
);



let products = JSON.parse(

localStorage.getItem("letsProducts")

) || [];







// ================================
// DISPLAY PRODUCTS
// ================================


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





<p>

Stock:
${product.stock}

</p>





<button

class="btn btn-primary"

onclick="addToCart(${product.id})">


Add To Cart


</button>




</div>



`;



});



}









// ================================
// ADD TO CART
// ================================


function addToCart(productID){



let cart = JSON.parse(

localStorage.getItem("cart")

) || [];





const product = products.find(

item => item.id === productID

);





if(!product){

alert(
"Product not found"
);

return;

}








// CHECK IF PRODUCT EXISTS


const existingProduct = cart.find(

item => item.id === productID

);







if(existingProduct){



existingProduct.quantity += 1;



}

else{



cart.push({


id: product.id,


name: product.name,


price: product.price,


image: product.image,


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
