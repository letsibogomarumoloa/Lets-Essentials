// ======================================
// LETS ESSENTIALS CUSTOMER DASHBOARD
// ======================================



let currentUser = JSON.parse(

localStorage.getItem("currentUser")

);





if(!currentUser){


window.location.href="login.html";


}







// PROFILE


document.getElementById("customerName").innerHTML =

currentUser.name;



document.getElementById("profileName").innerHTML =

currentUser.name;



document.getElementById("profilePhone").innerHTML =

currentUser.phone;



document.getElementById("profileEmail").innerHTML =

currentUser.email;







// ======================================
// BOOKINGS
// ======================================


let bookings = JSON.parse(

localStorage.getItem("bookings")

) || [];




let customerBookings = bookings.filter(booking=>{


return booking.phone === currentUser.phone;


});






let bookingContainer =

document.getElementById("customerBookings");






if(customerBookings.length===0){


bookingContainer.innerHTML=

`

<p>
You have no Auto Care bookings yet.
</p>

`;



}

else{



customerBookings.forEach(booking=>{


bookingContainer.innerHTML +=



`

<div class="profile-card">


<h3>

${booking.service}

</h3>


<p>

🚗 ${booking.vehicle}

</p>


<p>

📅 ${booking.date}

</p>


<p>

⏰ ${booking.time}

</p>


<p>

Status:

<strong>

${booking.status}

</strong>

</p>



</div>


`;



});


}









// ======================================
// ORDERS
// ======================================



let orders = JSON.parse(

localStorage.getItem("orders")

) || [];





let customerOrders = orders.filter(order=>{


return order.phone === currentUser.phone;


});






let orderContainer =

document.getElementById("customerOrders");






if(customerOrders.length===0){


orderContainer.innerHTML=

`

<p>
You have no orders yet.
</p>

`;



}

else{



customerOrders.forEach(order=>{



orderContainer.innerHTML +=


`

<div class="profile-card">


<h3>

Order #${order.id}

</h3>


<p>

Amount:

P${order.total}

</p>



<p>

Status:

<strong>

${order.status}

</strong>

</p>



</div>

`;



});



}









// ======================================
// LOGOUT
// ======================================


document

.getElementById("logoutBtn")

.addEventListener("click",function(e){



e.preventDefault();



localStorage.removeItem("currentUser");



window.location.href="login.html";



});
