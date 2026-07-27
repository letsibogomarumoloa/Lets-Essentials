// ===============================
// LETS AUTO CARE BOOKING SYSTEM
// ===============================


const bookedSlots = [

{
date:"2026-08-15",
time:"10:00"
},

{
date:"2026-08-15",
time:"11:00"
},

{
date:"2026-08-20",
time:"14:00"
}

];



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



const dateInput =
document.getElementById("date");


const timeContainer =
document.getElementById("timeSlots");


const timeInput =
document.getElementById("time");




// Generate time slots when date changes

dateInput.addEventListener("change",()=>{


    timeContainer.innerHTML="";


    let selectedDate =
    dateInput.value;



    availableTimes.forEach(time=>{


        let slot =
        document.createElement("div");


        slot.classList.add("time-slot");



        let taken =
        bookedSlots.some(booked=>

            booked.date === selectedDate &&
            booked.time === time

        );




        slot.innerHTML =
        taken
        ?
        `${time}<br>❌ Booked`
        :
        `${time}<br>🟢 Available`;





        if(taken){


            slot.classList.add("booked");


        }

        else{


            slot.addEventListener("click",()=>{


                document
                .querySelectorAll(".time-slot")
                .forEach(item=>

                    item.classList.remove("selected")

                );



                slot.classList.add("selected");


                timeInput.value=time;


            });


        }



        timeContainer.appendChild(slot);



    });


});






// Booking submission


const form =
document.getElementById("bookingForm");


const message =
document.getElementById("bookingMessage");



form.addEventListener("submit",(e)=>{


e.preventDefault();



const name =
document.getElementById("name").value;


const service =
document.getElementById("service").value;


const date =
dateInput.value;


const time =
timeInput.value;



if(!time){


message.style.color="red";


message.innerHTML=

"❌ Please select an available time slot.";


return;


}





bookedSlots.push({

date:date,
time:time

});





message.style.color="green";


message.innerHTML=

`
✅ Booking Confirmed!

<br><br>

Thank you ${name}.

<br>

Service:
${service}

<br>

Date:
${date}

<br>

Time:
${time}

<br><br>

We look forward to serving you.
`;



form.reset();


timeContainer.innerHTML=

`
<p class="choose-date">
Please select a date first.
</p>
`;



});
