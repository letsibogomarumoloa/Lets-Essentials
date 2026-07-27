// =======================================
// LETS ESSENTIALS BOOKING MANAGEMENT
// =======================================



if(localStorage.getItem("adminLoggedIn") !== "true"){

window.location.href="login.html";

}




let bookings =

JSON.parse(localStorage.getItem("bookings")) || [];



const bookingList =

document.getElementById("bookingList");





function displayBookings(data = bookings){



bookingList.innerHTML="";



if(data.length===0){


bookingList.innerHTML=

`
<tr>

<td colspan="8">

No bookings found.

</td>

</tr>
`;

return;

}





data.forEach((booking,index)=>{


bookingList.innerHTML +=

`

<tr>


<td>

${booking.name || "Unknown"}

</td>


<td>

${booking.phone || "-"}

</td>



<td>

${booking.service || "-"}

</td>



<td>

${booking.vehicle || "-"}

</td>



<td>

${booking.date || "-"}

</td>



<td>

${booking.time || "-"}

</td>



<td>

<span class="status pending">

${booking.status || "Pending"}

</span>

</td>




<td>


<button 
class="btn btn-success"
onclick="completeBooking(${index})">

Complete

</button>



<button 
class="btn btn-danger"
onclick="cancelBooking(${index})">

Cancel

</button>



</td>



</tr>

`;



});



}







function completeBooking(index){



bookings[index].status="Completed";



saveBookings();



displayBookings();



}







function cancelBooking(index){



if(confirm("Cancel this booking?")){


bookings[index].status="Cancelled";


saveBookings();


displayBookings();


}


}







function saveBookings(){



localStorage.setItem(

"bookings",

JSON.stringify(bookings)

);


}







// SEARCH

document
.getElementById("searchBooking")
.addEventListener("input",function(){



let value =
this.value.toLowerCase();




let filtered = bookings.filter(item=>{


return (

(item.name &&
item.name.toLowerCase().includes(value))

||

(item.service &&
item.service.toLowerCase().includes(value))


);


});



displayBookings(filtered);



});








// LOGOUT


document
.getElementById("logoutBtn")
.addEventListener("click",function(e){


e.preventDefault();


localStorage.removeItem("adminLoggedIn");


window.location.href="login.html";


});






displayBookings();
