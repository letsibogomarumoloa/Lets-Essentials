// ======================================
// LETS ESSENTIALS SHOP SYSTEM
// ======================================



let products = JSON.parse(

localStorage.getItem("products")

) || [];



let cart = JSON.parse(

localStorage.getItem("cart")

) || [];





const productContainer =

document.getElementById("shopProducts");





function displayProducts(){


if(!productContainer) return;



productContainer.innerHTML="";




if(products.length===0){


productContainer.innerHTML=

`

<p>
Products coming soon.
</p>

`;

return;

}






products.forEach(product=>{



productContainer.innerHTML +=


`

<div class="product-card">


<img src="${product.image}">



<h3>
${product.name}
</h3>



<p>
${product.category}
</p>


<h4>
P${product.price}
</h4>




<button onclick="addToCart('${product.id}')">

Add To Cart

</button>



</div>

`;



});



}





function addToCart(id){



let product = products.find(item =>

item.id === id

);




if(product){


cart.push(product);



localStorage.setItem(

"cart",

JSON.stringify(cart)

);



alert(

product.name +

" added to cart"

);



displayCart();


}


}







function displayCart(){



let cartBox =

document.getElementById("cartItems");



let totalBox =

document.getElementById("cartTotal");



if(!cartBox) return;



cartBox.innerHTML="";



let total=0;





cart.forEach(item=>{



total += Number(item.price);



cartBox.innerHTML +=


`

<div class="profile-card">

<h3>

${item.name}

</h3>


<p>

P${item.price}

</p>


</div>

`;



});





totalBox.innerHTML =

"Total: P" + total;



}







displayProducts();

displayCart();
