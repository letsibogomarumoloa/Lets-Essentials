// =========================================
// LETS AUTO CARE BOOKING SYSTEM
// Capacity Based Booking
// =========================================



const bookingForm = document.getElementById("bookingForm");

const bookingMessage = document.getElementById("bookingMessage");

const whatsappBtn = document.getElementById("whatsappBtn");



let bookings = JSON.parse(

localStorage.getItem("bookings")

) || [];




// Maximum vehicles per time slot

const SLOT_LIMIT = 3;






if(bookingForm){



bookingForm.addEventListener("submit", function(e){


e.preventDefault();





// Collect information


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








// ==============================
// CHECK SLOT AVAILABILITY
// ==============================



let bookingsForSlot = bookings.filter(booking => {



return (

booking.date === date &&

booking.time === time &&

booking.status !== "Cancelled"

);



});






if(bookingsForSlot.length >= SLOT_LIMIT){



bookingMessage.innerHTML =

`

❌ This time slot is fully booked.

<br><br>

Please choose another date or time.

`;



bookingMessage.style.color="red";


return;

}





// ==============================
// CREATE BOOKING
// ==============================



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







// Remaining spaces


let remaining =

SLOT_LIMIT - (bookingsForSlot.length + 1);








bookingMessage.innerHTML =

`

✅ Booking Successfully Submitted!

<br><br>


Booking Number:

<b>${newBooking.id}</b>


<br><br>


Time Slot:

${date} at ${time}


<br><br>


Remaining spaces:

${remaining}

`;



bookingMessage.style.color="green";







// WhatsApp message


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


whatsappBtn.style.display="inline-block";


}






bookingForm.reset();



});



}
