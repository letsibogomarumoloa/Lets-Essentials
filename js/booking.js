/* =========================================
   LETS AUTO CARE
   BOOKING SYSTEM
   VERSION 1.0
========================================= */



const bookingForm = document.getElementById("bookingForm");

const bookingMessage = document.getElementById("bookingMessage");




// =========================================
// AVAILABLE BOOKINGS STORAGE
// =========================================


let bookings = JSON.parse(

    localStorage.getItem("letsBookings")

) || [];







// =========================================
// AVAILABLE TIME SLOTS
// =========================================


const availableSlots = [

    "08:00",

    "10:00",

    "12:00",

    "14:00",

    "16:00"

];








// =========================================
// BOOKING FORM SUBMISSION
// =========================================



if(bookingForm){


bookingForm.addEventListener("submit",(e)=>{


    e.preventDefault();



    const customerName =
    document.getElementById("customerName").value;



    const customerPhone =
    document.getElementById("customerPhone").value;



    const vehicle =
    document.getElementById("vehicle").value;



    const service =
    document.getElementById("service").value;



    const bookingDate =
    document.getElementById("bookingDate").value;



    const bookingTime =
    document.getElementById("bookingTime").value;



    const houseCall =
    document.getElementById("houseCall").value;






    // =====================================
    // CHECK IF SLOT EXISTS
    // =====================================


    const slotTaken = bookings.some((booking)=>{


        return (

            booking.date === bookingDate &&

            booking.time === bookingTime

        );


    });







    if(slotTaken){


        showMessage(

        "Sorry, this time slot is already booked. Please select another time.",

        "error"

        );


        return;


    }







    // =====================================
    // CREATE BOOKING
    // =====================================



    const bookingNumber =

    "LET-" +

    Math.floor(

        100000 +

        Math.random() *

        900000

    );







    const newBooking = {


        id:bookingNumber,


        name:customerName,


        phone:customerPhone,


        vehicle:vehicle,


        service:service,


        date:bookingDate,


        time:bookingTime,


        location:houseCall,


        status:"Pending"



    };







    bookings.push(newBooking);




    localStorage.setItem(

        "letsBookings",

        JSON.stringify(bookings)

    );








    showMessage(

    `Booking successful! Your booking number is ${bookingNumber}`,

    "success"

    );






    bookingForm.reset();





});



}









// =========================================
// MESSAGE DISPLAY
// =========================================



function showMessage(message,type){



    if(!bookingMessage)

    return;





    bookingMessage.innerHTML = message;



    bookingMessage.className = type;



    setTimeout(()=>{


        bookingMessage.innerHTML="";


        bookingMessage.className="";


    },5000);



}








// =========================================
// DISABLE PAST DATES
// =========================================



const dateInput = document.getElementById(
"bookingDate"
);




if(dateInput){



const today = new Date()
.toISOString()
.split("T")[0];



dateInput.setAttribute(

"min",

today

);



}








// =========================================
// ADMIN ACCESS FUNCTION
// FUTURE DASHBOARD USE
// =========================================



function getAllBookings(){


    return JSON.parse(

        localStorage.getItem("letsBookings")

    ) || [];


}
