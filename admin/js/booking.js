/* =========================================
   LETS ESSENTIALS
   AUTO CARE BOOKING MANAGEMENT
========================================= */



const bookingsContainer =

document.getElementById(
"bookingsContainer"
);






let bookings = JSON.parse(

localStorage.getItem("letsBookings")

) || [];







function displayBookings(){



if(!bookingsContainer)

return;





bookingsContainer.innerHTML="";







if(bookings.length === 0){



bookingsContainer.innerHTML = `


<div class="tracking-box">


<h3>
No Bookings Yet
</h3>


<p>
Customer appointments will appear here.
</p>


</div>


`;



return;


}







bookings.forEach(booking=>{



bookingsContainer.innerHTML += `



<div class="checkout-box">


<h3>

Booking ${booking.id}

</h3>




<p>

<strong>
Customer:
</strong>

${booking.name}

</p>





<p>

<strong>
Phone:
</strong>

${booking.phone}

</p>





<p>

<strong>
Vehicle:
</strong>

${booking.vehicle}

</p>





<p>

<strong>
Service:
</strong>

${booking.service}

</p>





<p>

<strong>
Date:
</strong>

${booking.date}

</p>





<p>

<strong>
Time:
</strong>

${booking.time}

</p>





<p>

<strong>
Location:
</strong>

${booking.location}

</p>







<label>

Status:

</label>




<select onchange="updateBookingStatus('${booking.id}', this.value)">



<option ${booking.status==="Pending"?"selected":""}>

Pending

</option>




<option ${booking.status==="Approved"?"selected":""}>

Approved

</option>




<option ${booking.status==="Completed"?"selected":""}>

Completed

</option>




<option ${booking.status==="Cancelled"?"selected":""}>

Cancelled

</option>



</select>



</div>



`;



});



}









function updateBookingStatus(id,status){



bookings = bookings.map(booking=>{


if(booking.id === id){


booking.status = status;


}


return booking;


});






localStorage.setItem(

"letsBookings",

JSON.stringify(bookings)

);




alert(

"Booking status updated"

);



}








displayBookings();
