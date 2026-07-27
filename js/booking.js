// =========================================
// LETS AUTO CARE BOOKING SYSTEM
// Capacity Based Booking
// =========================================



const bookingForm = document.getElementById("bookingForm");

// ======================================
// AUTO FILL CUSTOMER DETAILS
// ======================================


let loggedUser = JSON.parse(

localStorage.getItem("currentUser")

);




if(loggedUser){



let nameInput = document.getElementById("name");

let phoneInput = document.getElementById("phone");

let notice = document.getElementById("accountNotice");



if(nameInput && phoneInput){


nameInput.value = loggedUser.name;

phoneInput.value = loggedUser.phone;


nameInput.readOnly = true;

phoneInput.readOnly = true;


}





if(notice){


notice.innerHTML =

"✅ Booking will be saved to your Lets Essentials account.";


notice.style.color="green";


}


}

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




// Update customer account history


if(loggedUser){



let users = JSON.parse(

localStorage.getItem("users")

) || [];



let customerIndex = users.findIndex(user =>

user.email === loggedUser.email

);



if(customerIndex !== -1){



users[customerIndex].lastBooking = newBooking;



localStorage.setItem(

"users",

JSON.stringify(users)

);



}



}



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

// =====================================
// SMART TIME SLOT AVAILABILITY
// =====================================


const dateInput = document.getElementById("date");

const timeSelect = document.getElementById("time");



const SLOT_LIMIT = 3;



if(dateInput && timeSelect){



dateInput.addEventListener("change", function(){



let selectedDate = this.value;



let options = timeSelect.options;



for(let i = 1; i < options.length; i++){



let selectedTime = options[i].value;




let bookedCount = bookings.filter(booking => {



return (

booking.date === selectedDate &&

booking.time === selectedTime &&

booking.status !== "Cancelled"

);



}).length;






if(bookedCount >= SLOT_LIMIT){



options[i].disabled = true;


options[i].text =

selectedTime +

" - Fully Booked ❌";



}

else{



options[i].disabled = false;


options[i].text =

selectedTime +

" - Available ✅";



}



}



});



}
