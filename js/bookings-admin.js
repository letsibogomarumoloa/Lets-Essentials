// ======================================
// LETS AUTO CARE ADMIN CALENDAR
// ======================================


if(localStorage.getItem("adminLoggedIn") !== "true"){

window.location.href="login.html";

}



let bookings = JSON.parse(

localStorage.getItem("bookings")

) || [];



const SLOT_LIMIT = 3;



const calendar = document.getElementById("bookingCalendar");





function loadCalendar(){



if(!calendar) return;



calendar.innerHTML="";





if(bookings.length === 0){


calendar.innerHTML=

`

<h3>
No bookings available.
</h3>

`;

return;

}





// Group bookings by date


let grouped = {};




bookings.forEach(booking=>{



if(!grouped[booking.date]){


grouped[booking.date]=[];

}



grouped[booking.date].push(booking);



});






Object.keys(grouped).forEach(date=>{





let dayBox = document.createElement("div");



dayBox.className="day-box";





dayBox.innerHTML =

`

<h2>

${date}

</h2>

`;








let times = [

"08:00",

"10:00",

"12:00",

"14:00",

"16:00"

];





times.forEach(time=>{



let dayBookings = grouped[date].filter(item=>{


return (

item.time === time &&

item.status !== "Cancelled"

);


});





let available =

SLOT_LIMIT - dayBookings.length;








let timeBox = document.createElement("div");



timeBox.className="time-box";







if(dayBookings.length > 0){



timeBox.innerHTML =

`

<h3>

${time}

</h3>


<p>

${dayBookings.length}/3 slots booked

</p>


${

dayBookings.map(item=>`

<div class="booking-item">

<strong>

${item.name}

</strong>

<br>

${item.service}

<br>

${item.vehicle}

<br>

Status:

${item.status}

</div>

`).join("")

}



`;



}

else{



timeBox.innerHTML =


`

<h3>

${time}

</h3>


<p>

Available:

${available} slots

</p>


`;



}






dayBox.appendChild(timeBox);



});






calendar.appendChild(dayBox);



});



}







loadCalendar();
