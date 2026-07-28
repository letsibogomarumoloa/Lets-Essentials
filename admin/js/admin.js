/* =========================================
   LETS ESSENTIALS ADMIN SYSTEM
========================================= */


const loginForm =
document.getElementById("adminLoginForm");





if(loginForm){


loginForm.addEventListener("submit",(e)=>{


e.preventDefault();



const username =
document.getElementById("adminUsername").value;



const password =
document.getElementById("adminPassword").value;






// TEMPORARY ADMIN LOGIN

if(
username === "admin" &&
password === "lets123"
){



localStorage.setItem(
"adminLoggedIn",
"true"
);



window.location.href =
"dashboard.html";



}

else{


document.getElementById(
"loginMessage"
).innerHTML =

`

<p style="color:red">

Incorrect login details

</p>

`;



}



});



}







// DASHBOARD COUNTERS


const orders =
JSON.parse(

localStorage.getItem("letsOrders")

) || [];




const bookings =
JSON.parse(

localStorage.getItem("letsBookings")

) || [];





const totalOrders =
document.getElementById("totalOrders");



const totalBookings =
document.getElementById("totalBookings");





if(totalOrders){

totalOrders.innerHTML =
orders.length + " Orders";

}



if(totalBookings){

totalBookings.innerHTML =
bookings.length + " Bookings";

}
