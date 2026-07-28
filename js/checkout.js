/* =========================================
   LETS ESSENTIALS
   CHECKOUT SYSTEM
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






// DISPLAY ORDER SUMMARY


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

x ${item.quantity}

-

P${itemTotal}


</p>


`;


});



if(checkoutTotal){

checkoutTotal.textContent =
"P" + total;

}



}



showCheckout();







// CREATE ORDER


if(checkoutForm){


checkoutForm.addEventListener("submit",(e)=>{


e.preventDefault();



const orderNumber =

"ORD-" +

Math.floor(

100000 +

Math.random()*900000

);





const order = {


id:orderNumber,


customer:

document.getElementById(
"checkoutName"
).value,


phone:

document.getElementById(
"checkoutPhone"
).value,


email:

document.getElementById(
"checkoutEmail"
).value,


address:

document.getElementById(
"checkoutAddress"
).value,


payment:

document.getElementById(
"paymentMethod"
).value,


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







localStorage.removeItem(
"letsCart"
);






document.getElementById(
"orderMessage"
).innerHTML =


`

<h3>
Order Successful!
</h3>

<p>
Your order number is:
<strong>${orderNumber}</strong>
</p>

`

;





checkoutForm.reset();





});

}
