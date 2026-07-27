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

const serviceSelect =
document.getElementById("service");


const vehicleSelect =
document.getElementById("vehicleType");


const estimatedPrice =
document.getElementById("estimatedPrice");

const whatsappBtn =
document.getElementById("whatsappBtn");

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
// PRICE CALCULATOR
// =======================================


function calculatePrice(){


    let servicePrice =
    Number(serviceSelect.value) || 0;



    let vehicleExtra = 0;



    if(vehicleSelect.value === "SUV"){

        vehicleExtra = 40;

    }


    else if(vehicleSelect.value === "Van"){

        vehicleExtra = 40;

    }


    else if(vehicleSelect.value === "7 Seater"){

        vehicleExtra = 40;

    }


    else if(vehicleSelect.value === "Sprinter"){

        vehicleExtra = 70;

    }


    else if(vehicleSelect.value === "Bus"){

        vehicleExtra = 120;

    }



    let houseCallFee = 0;


    if(houseCallCheckbox.checked){

        houseCallFee = 50;

    }




    let total =

    servicePrice +
    vehicleExtra +
    houseCallFee;





    if(total > 0){


        estimatedPrice.innerHTML =

        `Estimated From: P${total}`;


    }


    else{


        estimatedPrice.innerHTML =

        "Select a service to calculate price.";


    }



}





serviceSelect.addEventListener(

"change",

calculatePrice

);



vehicleSelect.addEventListener(

"change",

calculatePrice

);



houseCallCheckbox.addEventListener(

"change",

calculatePrice

);



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

// =======================================
// WHATSAPP CONFIRMATION
// =======================================


const businessNumber =
"26777044869";



let whatsappMessage =

`
Hello Lets Essentials 👋

I would like to confirm my Auto Care booking.

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

${

houseCall

?

`
House Call:
Yes

Location:
${address}
`

:

`
House Call:
No
`

}


Estimated Price:
${estimatedPrice.innerText}


Thank you.
`;





const whatsappURL =

"https://wa.me/" +

businessNumber +

"?text=" +

encodeURIComponent(whatsappMessage);




whatsappBtn.href = whatsappURL;


whatsappBtn.style.display="inline-block";

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
