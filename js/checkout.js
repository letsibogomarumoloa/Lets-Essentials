// ======================================
// LETS ESSENTIALS CHECKOUT SYSTEM
// ======================================



let cart = JSON.parse(

localStorage.getItem("cart")

) || [];



let orders = JSON.parse(

localStorage.getItem("orders")

) || [];





let currentUser = JSON.parse(

localStorage.getItem("currentUser")

);






// ===============================
// AUTO FILL CUSTOMER DETAILS
// ===============================



if(currentUser){



document.getElementById("customerName").value =

currentUser.name;



document.getElementById("customerPhone").value =

currentUser.phone;


}








// ===============================
// DISPLAY CART
// ===============================



let cartBox =

document.getElementById("checkoutCart");



let totalBox =

document.getElementById("checkoutTotal");




let total = 0;





cart.forEach(item=>{


total += Number(item.price);



cartBox.innerHTML +=


`

<div class="profile-card">


<h3>

${item.name}

</h3>


<p>

Category:

${item.category}

</p>



<p>

P${item.price}

</p>


</div>

`;



});





totalBox.innerHTML =

"Total: P" + total;








// ===============================
// CREATE ORDER
// ===============================




document

.getElementById("checkoutForm")

.addEventListener("submit",function(e){



e.preventDefault();







let order = {



id:

"LE-" +

Math.floor(Math.random()*90000+10000),



customer:

document.getElementById("customerName").value,



phone:

document.getElementById("customerPhone").value,



address:

document.getElementById("deliveryAddress").value,



delivery:

document.getElementById("deliveryMethod").value,



payment:

document.getElementById("paymentMethod").value,



products:cart,



total:total,



status:"Processing",



date:

new Date().toLocaleDateString()



};







orders.push(order);



localStorage.setItem(

"orders",

JSON.stringify(orders)

);







// Clear cart


localStorage.removeItem("cart");







document.getElementById("orderMessage").innerHTML =


`

<h3>

✅ Order Successfully Created!

</h3>


<p>

Order Number:

<strong>

${order.id}

</strong>

</p>


<p>

We will update you once your order is ready.

</p>


`;






this.reset();



});
