// =========================================
// LETS ESSENTIALS AUTO CARE BOOKING SYSTEM
// booking.js
// =========================================



const bookingForm = document.getElementById("bookingForm");

const bookingMessage = document.getElementById("bookingMessage");

const whatsappBtn = document.getElementById("whatsappBtn");





// Existing bookings

let bookings = JSON.parse(

localStorage.getItem("bookings")

) || [];






// Submit Booking

if(bookingForm){


bookingForm.addEventListener("submit", function(e){


e.preventDefault();





// Get customer details


let name =
document.getElementById("name").value;



let phone =
document.getElementById("phone").value;



let service =
document.getElementById("service").value;



let vehicle =
document.getElementById("vehicle").value;



let registration =
document.getElementById("registration").value;



let date =
document.getElementById("date").value;



let time =
document.getElementById("time").value;



let houseCall =
document.getElementById("houseCall").checked;



let address =
document.getElementById("address").value;








// Check availability


let alreadyBooked = bookings.some(booking => {


return (

booking.date === date &&

booking.time === time &&

booking.status !== "Cancelled"

);


});





if(alreadyBooked){



bookingMessage.innerHTML =

`

❌ Sorry, this time slot is already booked.

Please choose another time.

`;



bookingMessage.style.color="red";


return;


}








// Create booking object


let newBooking = {


id:

"BK-" +

Math.floor(Math.random()*90000+10000),


name:name,


phone:phone,


service:service,


vehicle:vehicle,


registration:registration,


date:date,


time:time,


houseCall:

houseCall ? "Yes" : "No",


address:

houseCall ? address : "Not Required",


status:"Pending",


created:

new Date().toLocaleString()


};








// Save booking


bookings.push(newBooking);



localStorage.setItem(

"bookings",

JSON.stringify(bookings)

);








// Confirmation message


bookingMessage.innerHTML =

`

✅ Booking Submitted Successfully!

<br><br>

Booking Number:

<b>${newBooking.id}</b>

<br><br>

Status:

🟡 Pending Confirmation

`;



bookingMessage.style.color="#0F4C81";








// WhatsApp Message



let message =

`

Hello Lets Essentials 👋


I would like to confirm my Auto Care booking.


Booking Number:

${newBooking.id}


Customer:

${name}


Phone:

${phone}


Service:

${service}


Vehicle:

${vehicle}


Registration:

${registration}


Date:

${date}


Time:

${time}


House Call:

${newBooking.houseCall}


Thank you.

`;







let whatsappNumber =

"267XXXXXXXX";





let whatsappLink =

"https://wa.me/" +

whatsappNumber +

"?text=" +

encodeURIComponent(message);






if(whatsappBtn){


whatsappBtn.href = whatsappLink;


whatsappBtn.style.display="block";


}








bookingForm.reset();



});


}
