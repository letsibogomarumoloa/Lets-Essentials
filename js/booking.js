// ===============================
// LETS AUTO CARE BOOKING SYSTEM
// ===============================


// Simulated bookings database
// Later this can be replaced with a real database

const bookedSlots = [

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




// Get form elements

const bookingForm = document.getElementById("bookingForm");

const bookingMessage = document.getElementById("bookingMessage");





// When customer submits booking

bookingForm.addEventListener("submit", function(event){


    event.preventDefault();



    const customerName =
    document.getElementById("name").value;


    const phone =
    document.getElementById("phone").value;


    const service =
    document.getElementById("service").value;


    const date =
    document.getElementById("date").value;


    const time =
    document.getElementById("time").value;


    const houseCall =
    document.getElementById("houseCall").checked;




    // Check availability

    const isBooked =
    bookedSlots.some(slot =>

        slot.date === date &&
        slot.time === time

    );





    if(isBooked){


        bookingMessage.style.color = "red";


        bookingMessage.innerHTML =

        `
        ❌ Sorry ${customerName}, this time slot is already fully booked.
        Please select another date or time.
        `;


        return;

    }





    // Add booking temporarily

    bookedSlots.push({

        date:date,
        time:time

    });





    // Success message

    bookingMessage.style.color = "green";


    bookingMessage.innerHTML =

    `
    ✅ Booking Confirmed!

    <br><br>

    Thank you ${customerName}.

    <br>

    Service:
    ${service}

    <br>

    Date:
    ${date}

    <br>

    Time:
    ${time}

    ${
        houseCall 
        ?
        "<br>🏠 House Call Requested"
        :
        ""
    }

    <br><br>

    We look forward to serving you.
    `;





    // Reset form

    bookingForm.reset();



});
