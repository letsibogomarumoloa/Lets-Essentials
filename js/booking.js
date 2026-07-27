// =======================================
// LETS AUTO CARE BOOKING SYSTEM
// =======================================


// Temporary booking database
// Later this will connect to a real database

let bookedSlots = [

    {
        date: "2026-08-15",
        time: "10:00"
    },

    {
        date: "2026-08-15",
        time: "11:00"
    },

    {
        date: "2026-08-20",
        time: "14:00"
    }

];



// Available working hours

const availableTimes = [

    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00"

];





// =======================================
// GET HTML ELEMENTS
// =======================================


const bookingForm =
document.getElementById("bookingForm");


const dateInput =
document.getElementById("date");


const timeContainer =
document.getElementById("timeSlots");


const timeInput =
document.getElementById("time");


const bookingMessage =
document.getElementById("bookingMessage");


const houseCallCheckbox =
document.getElementById("houseCall");


const addressBox =
document.getElementById("addressBox");





// =======================================
// HOUSE CALL ADDRESS DISPLAY
// =======================================


if(houseCallCheckbox){


    houseCallCheckbox.addEventListener("change",()=>{


        if(houseCallCheckbox.checked){


            addressBox.style.display="block";


        }

        else{


            addressBox.style.display="none";


        }


    });


}






// =======================================
// GENERATE AVAILABLE TIME SLOTS
// =======================================


if(dateInput){


dateInput.addEventListener("change",()=>{


    timeContainer.innerHTML="";


    const selectedDate =
    dateInput.value;



    availableTimes.forEach(time=>{


        const slot =
        document.createElement("div");


        slot.classList.add("time-slot");



        const alreadyBooked =
        bookedSlots.some(booking =>

            booking.date === selectedDate &&
            booking.time === time

        );




        if(alreadyBooked){


            slot.classList.add("booked");


            slot.innerHTML =
            `
            ${time}
            <br>
            ❌ Fully Booked
            `;


        }


        else{


            slot.innerHTML =
            `
            ${time}
            <br>
            🟢 Available
            `;



            slot.addEventListener("click",()=>{


                document
                .querySelectorAll(".time-slot")
                .forEach(item=>{


                    item.classList.remove("selected");


                });



                slot.classList.add("selected");


                timeInput.value = time;


            });


        }



        timeContainer.appendChild(slot);



    });



});


}







// =======================================
// FORM SUBMISSION
// =======================================


if(bookingForm){


bookingForm.addEventListener("submit",(event)=>{


event.preventDefault();





// Customer details

const name =
document.getElementById("name").value;


const phone =
document.getElementById("phone").value;



// Service details

const service =
document.getElementById("service").value;



// Vehicle details

const vehicle =
document.getElementById("vehicleType").value;


const registration =
document.getElementById("registration").value;





// Booking details

const date =
dateInput.value;


const time =
timeInput.value;





// House call details

const houseCall =
houseCallCheckbox.checked;


const address =
document.getElementById("address").value;






// Check if time was selected


if(!time){


    bookingMessage.style.color="red";


    bookingMessage.innerHTML =

    `
    ❌ Please select an available time slot.
    `;


    return;


}







// Check again before confirming

const duplicateBooking =
bookedSlots.some(booking =>


booking.date === date &&
booking.time === time


);



if(duplicateBooking){


    bookingMessage.style.color="red";


    bookingMessage.innerHTML =

    `
    ❌ Sorry, this slot has just been booked.
    Please choose another time.
    `;


    return;


}







// Save booking temporarily


bookedSlots.push({

    date:date,

    time:time

});







// Successful booking message


bookingMessage.style.color="green";


bookingMessage.innerHTML =


`

<h3>
✅ Booking Confirmed!
</h3>


<br>


Thank you <b>${name}</b>


<br><br>


<b>Phone:</b>
${phone}


<br><br>


<b>Service:</b>
${service}


<br>


<b>Vehicle:</b>
${vehicle}


<br>


<b>Registration:</b>
${registration}


<br><br>


<b>Date:</b>
${date}


<br>


<b>Time:</b>
${time}



${

houseCall

?

`

<br><br>

🏠 <b>House Call Requested</b>


<br>

Location:

${address}


<br>

Transport fee will be confirmed.

`

:

""

}



<br><br>


We look forward to giving your vehicle the care it deserves.

`;






// Clear form

bookingForm.reset();



timeContainer.innerHTML =

`

<p class="choose-date">

Please select a date first.

</p>

`;



addressBox.style.display="none";



});

}
