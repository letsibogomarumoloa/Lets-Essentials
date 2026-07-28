/* =========================================
   AUTO FILL CUSTOMER DETAILS
========================================= */


const loggedCustomer = JSON.parse(

localStorage.getItem("letsCustomer")

);



if(loggedCustomer){


const nameInput =
document.getElementById(
"checkoutName"
);



const emailInput =
document.getElementById(
"checkoutEmail"
);



const phoneInput =
document.getElementById(
"checkoutPhone"
);





if(nameInput){

nameInput.value =
loggedCustomer.name;

}



if(emailInput){

emailInput.value =
loggedCustomer.email;

}



if(phoneInput){

phoneInput.value =
loggedCustomer.phone;

}



}

/* =========================================
   LETS ESSENTIALS
   CHECKOUT + WHATSAPP SYSTEM
========================================= */


const checkoutForm =
document.getElementById("checkoutForm");


const checkoutItems =
document.getElementById("checkoutItems");


const checkoutTotal =
document.getElementById("checkoutTotal");



let checkoutCart = JSON.parse(

localStorage.getItem("letsCart")

) || [];







function showCheckout(){


let total = 0;


if(!checkoutItems)
return;



checkoutItems.innerHTML="";



checkoutCart.forEach(item=>{


let itemTotal =
item.price * item.quantity;


total += itemTotal;



checkoutItems.innerHTML += `


<p>

${item.name}

x${item.quantity}

-

P${itemTotal}

</p>


`;


});



if(checkoutTotal){

checkoutTotal.textContent =
"P" + total;

}


return total;


}



const orderTotal = showCheckout();








if(checkoutForm){


checkoutForm.addEventListener("submit",(e)=>{


e.preventDefault();





const customer =

document.getElementById(
"checkoutName"
).value;



const phone =

document.getElementById(
"checkoutPhone"
).value;



const email =

document.getElementById(
"checkoutEmail"
).value;



const address =

document.getElementById(
"checkoutAddress"
).value;



const payment =

document.getElementById(
"paymentMethod"
).value;








const orderNumber =

"ORD-" +

Math.floor(

100000 +

Math.random()*900000

);








const order = {


id:orderNumber,


customer:customer,


phone:phone,


email:email,


address:address,


payment:payment,


items:checkoutCart,


status:"Processing"



};







let orders = JSON.parse(

localStorage.getItem("letsOrders")

) || [];




orders.push(order);



localStorage.setItem(

"letsOrders",

JSON.stringify(orders)

);








// CREATE WHATSAPP MESSAGE


let whatsappMessage =

`Hello Lets Essentials 👋

I would like to place an order.

Order Number:
${orderNumber}


Customer:
${customer}


Products:
`;






checkoutCart.forEach(item=>{


whatsappMessage +=

`

${item.name}

Quantity: ${item.quantity}

Price: P${item.price * item.quantity}

`;


});






whatsappMessage +=

`

Total:
P${orderTotal}


Delivery Address:
${address}


Payment:
${payment}

Thank you.
`;








// BUSINESS WHATSAPP NUMBER

const businessNumber =

"267XXXXXXXX";








window.open(

"https://wa.me/" +

businessNumber +

"?text=" +

encodeURIComponent(
whatsappMessage
),

"_blank"

);






localStorage.removeItem(
"letsCart"
);





document.getElementById(
"orderMessage"
).innerHTML =


`

<div class="order-result">


<h3>
Order Created Successfully!
</h3>


<p>

Your order number is:

<strong>
${orderNumber}
</strong>

</p>


</div>

`;





checkoutForm.reset();



});



}
