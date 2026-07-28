/* =========================================
   LETS ESSENTIALS
   CHECKOUT SYSTEM V1.0
========================================= */



let cart = JSON.parse(

localStorage.getItem("letsCart")

) || [];





const checkoutItems =
document.getElementById("checkoutItems");


const checkoutTotal =
document.getElementById("checkoutTotal");



const checkoutForm =
document.getElementById("checkoutForm");









// ================================
// DISPLAY ORDER SUMMARY
// ================================


function displayCheckout(){



if(!checkoutItems) return;




checkoutItems.innerHTML = "";



let total = 0;





cart.forEach(item => {



total += item.price * item.quantity;




checkoutItems.innerHTML += `



<div class="checkout-item">


<h3>

${item.name}

</h3>


<p>

Quantity:
${item.quantity}

</p>


<p>

P${item.price * item.quantity}

</p>


</div>


`;



});







if(checkoutTotal){


checkoutTotal.textContent =

"P" + total;


}



}









// ================================
// PLACE ORDER
// ================================


if(checkoutForm){



checkoutForm.addEventListener(
"submit",
function(e){



e.preventDefault();






if(cart.length === 0){



alert(

"Your cart is empty."

);



return;



}









let orders = JSON.parse(

localStorage.getItem("letsOrders")

) || [];








const order = {


id: Date.now(),



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



items: cart,



total:

cart.reduce(

(sum,item)=>

sum +

(item.price * item.quantity),

0

),



status:"pending",



date:

new Date()
.toLocaleDateString()



};









orders.push(order);







localStorage.setItem(

"letsOrders",

JSON.stringify(orders)

);







document.getElementById(
"orderMessage"
).innerHTML = `



<h3 style="color:green">

Order placed successfully!

</h3>



<p>

Order ID:
#${order.id}

</p>


`;







// CLEAR CART

localStorage.removeItem(
"letsCart"
);



cart = [];






checkoutForm.reset();





});



}









// LOAD

displayCheckout();
