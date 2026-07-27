// ======================================
// LETS AUTO CARE ADMIN BOOKINGS
// STATUS NOTIFICATIONS
// ======================================



if(localStorage.getItem("adminLoggedIn") !== "true"){

window.location.href="login.html";

}





let bookings = JSON.parse(

localStorage.getItem("bookings")

) || [];





const SLOT_LIMIT = 3;



const calendar =

document.getElementById("bookingCalendar");



const notificationBox =

document.getElementById("notificationBox");






function saveBookings(){


localStorage.setItem(

"bookings",

JSON.stringify(bookings)

);


}








function loadCalendar(){



if(!calendar) return;



calendar.innerHTML="";





bookings.forEach((booking,index)=>{



let box = document.createElement("div");


box.className="booking-item";



box.innerHTML =

`

<h3>

${booking.name}

</h3>


<p>

🚗 ${booking.service}

</p>


<p>

Vehicle:
${booking.vehicle}

</p>


<p>

Date:
${booking.date}

</p>


<p>

Time:
${booking.time}

</p>



<p>

Status:

<strong>

${booking.status}

</strong>

</p>




<select onchange="changeBookingStatus(${index},this.value)">



<option value="Pending"
${booking.status==="Pending"?"selected":""}>

Pending

</option>



<option value="Confirmed"
${booking.status==="Confirmed"?"selected":""}>

Confirmed

</option>



<option value="Completed"
${booking.status==="Completed"?"selected":""}>

Completed

</option>



<option value="Cancelled"
${booking.status==="Cancelled"?"selected":""}>

Cancelled

</option>



</select>


`;




calendar.appendChild(box);



});



}







function changeBookingStatus(index,status){



bookings[index].status=status;



saveBookings();



generateNotification(bookings[index]);



loadCalendar();



}








function generateNotification(booking){



let message="";





if(booking.status==="Confirmed"){


message=

`

Hello ${booking.name} 👋


Your Lets Auto Care booking has been confirmed.


Service:

${booking.service}


Vehicle:

${booking.vehicle}


Date:

${booking.date}


Time:

${booking.time}


We look forward to serving you.

Thank you for choosing Lets Essentials.

`;



}







if(booking.status==="Completed"){



message=

`

Hello ${booking.name} 👋


Your vehicle service has been completed.


Thank you for trusting Lets Essentials.


We appreciate your support.

`;



}







if(booking.status==="Cancelled"){



message=

`

Hello ${booking.name}.


Unfortunately your Lets Auto Care booking has been cancelled.


Please contact us to reschedule.

`;



}








if(message){



let whatsappLink =


"https://wa.me/" +

booking.phone +

"?text=" +

encodeURIComponent(message);






notificationBox.innerHTML =

`

<div class="notification-card">


<h3>
Customer Notification
</h3>


<p>
${message.replace(/\n/g,"<br>")}
</p>



<a 

href="${whatsappLink}"

target="_blank"

class="btn">

Send WhatsApp Message

</a>


</div>

`;



}





}







loadCalendar();
