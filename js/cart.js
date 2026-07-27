// ======================================
// LETS ESSENTIALS SHOP ORDER SYSTEM
// cart.js
// ======================================


let cart = JSON.parse(localStorage.getItem("cart")) || [];



const cartItems =
document.getElementById("cartItems");


const cartTotal =
document.getElementById("cartTotal");





function displayCart(){


if(!cartItems) return;


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


let subtotal =
item.price * item.quantity;


total += subtotal;



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


<p>
Quantity: ${item.quantity}
</p>


<p>
Subtotal: P${subtotal}
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







function removeItem(index){


cart.splice(index,1);


saveCart();


displayCart();


}





function saveCart(){


localStorage.setItem(

"cart",

JSON.stringify(cart)

);


}








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

"❌ Please complete your details.";


return;

}







let total = 0;


cart.forEach(item=>{


total += item.price * item.quantity;


});








let order = {


id:

"LE-" +

Math.floor(Math.random()*90000+10000),


customer:name,


phone:phone,


address:address,


products:cart,


total:total,


status:"Processing",


date:new Date().toLocaleDateString()


};









// Get existing orders


let orders = JSON.parse(

localStorage.getItem("orders")

) || [];






// Save order


orders.push(order);



localStorage.setItem(

"orders",

JSON.stringify(orders)

);






// Save latest order for tracking


localStorage.setItem(

"orderData",

JSON.stringify(order)

);








// WhatsApp message


let message =

`

Hello Lets Essentials 👋


I would like to place an order.


Order Number:

${order.id}


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

x${item.quantity}

- P${item.price}

`;

});




message +=

`

Total:

P${total}


Thank you.

`;







let whatsappNumber =
"267XXXXXXXX";



let whatsappLink =

"https://wa.me/" +

whatsappNumber +

"?text=" +

encodeURIComponent(message);






document.getElementById("orderMessage").innerHTML=

`

✅ Order Created Successfully!


<br><br>


Order Number:

<b>${order.id}</b>


<br><br>


Status:

🟡 Processing

`;







let whatsappButton =
document.getElementById("whatsappOrder");



if(whatsappButton){


whatsappButton.href = whatsappLink;


whatsappButton.innerHTML=

"Send Order Through WhatsApp";


whatsappButton.style.display="block";


}






cart=[];


saveCart();



}






displayCart();
