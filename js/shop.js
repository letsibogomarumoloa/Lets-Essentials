/* =========================================
   LETS ESSENTIALS
   SHOP PRODUCT LOADER
========================================= */


const productContainer =
document.getElementById("productContainer");


let products = JSON.parse(

localStorage.getItem("letsProducts")

) || [];





function loadProducts(){


if(!productContainer)

return;



productContainer.innerHTML="";




if(products.length === 0){


productContainer.innerHTML = `


<div class="tracking-box">

<h3>
No Products Available
</h3>


<p>
Products will appear here once added.
</p>


</div>


`;

return;


}





products.forEach(product=>{


productContainer.innerHTML += `



<div class="product-card">


<img src="${product.image || 'images/products/default.jpg'}"
alt="${product.name}">



<div class="product-info">


<span class="product-category">

${product.category}

</span>




<h3>

${product.name}

</h3>




<div class="product-footer">


<strong>

P${product.price}

</strong>




<button 
class="btn-small addCart"

data-id="${product.id}"

data-name="${product.name}"

data-price="${product.price}">


Add To Cart


</button>




</div>


</div>


</div>


`;



});




// reconnect cart buttons

activateCartButtons();



}







function activateCartButtons(){


document.querySelectorAll(".addCart")
.forEach(button=>{


button.addEventListener("click",()=>{


const product = {


id:String(button.dataset.id),


name:button.dataset.name,


price:Number(button.dataset.price),


quantity:1


};




let cart = JSON.parse(

localStorage.getItem("letsCart")

) || [];




const existing = cart.find(item=>

item.id === product.id

);





if(existing){


existing.quantity++;


}else{


cart.push(product);


}





localStorage.setItem(

"letsCart",

JSON.stringify(cart)

);



updateCartCount();



alert(

product.name + " added to cart"

);



});


}



}





loadProducts();
