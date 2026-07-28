/* =========================================
   LETS ESSENTIALS
   ADMIN BOOKINGS MANAGEMENT V3.0
========================================= */


const bookingsTable =
document.getElementById("bookingsTable");


const searchBookings =
document.getElementById("searchBookings");



let bookings = JSON.parse(

localStorage.getItem("letsBookings")

) || [];







// ================================
// DISPLAY BOOKINGS
// ================================


function displayBookings(list = bookings){



if(!bookingsTable) return;




bookingsTable.innerHTML = "";





if(list.length === 0){


bookingsTable.innerHTML = `


<tr>

<td colspan="6">

No bookings available

</td>

</tr>


`;

return;


}







list.forEach(booking => {



bookingsTable.innerHTML += `



<tr>





<td>


<strong>

${booking.name || "Customer"}

</strong>


<br>


<small>

${booking.phone || ""}

</small>


</td>







<td>


${booking.vehicle || "Not provided"}


</td>







<td>


${booking.service || "Auto Care Service"}


</td>







<td>


${booking.date || "N/A"}


<br>

${booking.time || ""}


</td>







<td>



<select

onchange="updateBookingStatus(${booking.id},this.value)">



<option value="pending"

${booking.status === "pending" ? "selected" : ""}>

Pending

</option>





<option value="confirmed"

${booking.status === "confirmed" ? "selected" : ""}>

Confirmed

</option>





<option value="completed"

${booking.status === "completed" ? "selected" : ""}>

Completed

</option>





<option value="cancelled"

${booking.status === "cancelled" ? "selected" : ""}>

Cancelled

</option>




</select>



</td>








<td>


<button

class="btn btn-secondary"

onclick="deleteBooking(${booking.id})">


<i class="fas fa-trash"></i>


</button>



</td>





</tr>



`;



});



}









// ================================
// UPDATE BOOKING STATUS
// ================================


function updateBookingStatus(id,status){



const booking =

bookings.find(

item => item.id === id

);





if(booking){



booking.status = status;



localStorage.setItem(

"letsBookings",

JSON.stringify(bookings)

);



displayBookings();



}



}









// ================================
// DELETE BOOKING
// ================================


function deleteBooking(id){



const confirmDelete = confirm(

"Delete this booking?"

);





if(confirmDelete){



bookings =

bookings.filter(

booking => booking.id !== id

);





localStorage.setItem(

"letsBookings",

JSON.stringify(bookings)

);





displayBookings();



}



}









// ================================
// SEARCH BOOKINGS
// ================================


if(searchBookings){



searchBookings.addEventListener(
"input",
function(){



const value =

this.value.toLowerCase();





const filteredBookings =

bookings.filter(booking =>



(booking.name || "")

.toLowerCase()

.includes(value)



||



(booking.service || "")

.toLowerCase()

.includes(value)



||



(booking.vehicle || "")

.toLowerCase()

.includes(value)



);





displayBookings(filteredBookings);



});



}








// INITIAL LOAD

displayBookings();
