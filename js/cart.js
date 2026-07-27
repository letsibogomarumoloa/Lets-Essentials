// ==================================
// LETS ESSENTIALS CART SYSTEM
// ==================================



let cart = JSON.parse(localStorage.getItem("cart")) || [];



const cartItems =
document.getElementById("cartItems");


const cartTotal =
document.getElementById("cartTotal");






// Display cart

function displayCart(){


cartItems.innerHTML="";


let total = 0;



if(cart.length === 0){


cartItems.innerHTML=

`
<h3>
Your cart is empty.
</h3>
`;

cartTotal.innerHTML="P0";

return;


}





cart.forEach((item,index)=>{


total += item.price;



cartItems.innerHTML +=

`

<div class="cart-item">


<div>

<h3>

${item.name}

</h3>


<p>

Price: P${item.price}

</p>


</div>




<button onclick="removeItem(${index})">

Remove

</button>


</div>

`;



});



cartTotal.innerHTML =

"P" + total;



}





// Remove item

function removeItem(index){


cart.splice(index,1);



localStorage.setItem(

"cart",

JSON.stringify(cart)

);



displayCart();


}





// Checkout


function checkout(){


if(cart.length === 0){


document.getElementById("orderMessage").innerHTML=

"❌ Your cart is empty.";


return;


}





let name =

document.getElementById("customerName").value;



let phone =

document.getElementById("customerPhone").value;



let address =

document.getElementById("customerAddress").value;





if(!name || !phone || !address){


document.getElementById("orderMessage").innerHTML=

"❌ Please complete all delivery details.";


return;


}





let orderNumber =

"LE-" +

Math.floor(

Math.random()*90000 + 10000

);






localStorage.setItem(

"orderID",

orderNumber

);



localStorage.setItem(

"orderStatus",

"Processing"

);





let message =

`

Hello Lets Essentials 👋


I would like to place an order.


Order Number:

${orderNumber}


Customer:

${name}


Phone:

${phone}


Address:

${address}



Products:

`;





cart.forEach(item=>{


message +=

`

${item.name}

- P${item.price}

`;



});





message +=

`

Total:

${cartTotal.innerText}


Thank you.

`;






let whatsappNumber =

"26777044869";



let whatsappLink =

"https://wa.me/" +

whatsappNumber +

"?text=" +

encodeURIComponent(message);





document.getElementById("orderMessage").innerHTML=

`

✅ Order Created!

<br><br>

Your Order Number:

<b>${orderNumber}</b>


<br><br>

Use this number to track your order.

`;





let whatsappButton =

document.getElementById("whatsappOrder");



whatsappButton.href = whatsappLink;

whatsappButton.innerHTML =

"Send Order Through WhatsApp";


whatsappButton.style.display="block";





cart=[];


localStorage.setItem(

"cart",

JSON.stringify(cart)

);



}




displayCart();
