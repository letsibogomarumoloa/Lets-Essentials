// =======================================
// LETS ESSENTIALS CUSTOMER MANAGEMENT
// =======================================


if(localStorage.getItem("adminLoggedIn") !== "true"){

window.location.href="login.html";

}



let bookings = JSON.parse(

localStorage.getItem("bookings")

) || [];



let orders = JSON.parse(

localStorage.getItem("orders")

) || [];




let customers = [];





function generateCustomers(){


customers=[];



bookings.forEach(booking=>{


let existing = customers.find(customer =>

customer.phone === booking.phone

);



if(existing){


existing.bookings++;


}else{


customers.push({

name:booking.name,

phone:booking.phone,

bookings:1,

orders:0,

activity:"Auto Care Booking"

});


}


});





orders.forEach(order=>{


let existing = customers.find(customer =>

customer.phone === order.phone

);



if(existing){


existing.orders++;


existing.activity="Booking + Order";


}else{


customers.push({

name:order.customer,

phone:order.phone,

bookings:0,

orders:1,

activity:"Shop Order"

});


}



});



}





function displayCustomers(data=customers){



let table =

document.getElementById("customerTable");



table.innerHTML="";





if(data.length===0){


table.innerHTML=

`

<tr>

<td colspan="5">

No customers found.

</td>

</tr>

`;

return;

}





data.forEach(customer=>{


table.innerHTML +=

`

<tr>

<td>

${customer.name}

</td>


<td>

${customer.phone}

</td>


<td>

${customer.bookings}

</td>


<td>

${customer.orders}

</td>


<td>

${customer.activity}

</td>


</tr>

`;



});



}







document

.getElementById("searchCustomer")

.addEventListener("input",function(){



let value=this.value.toLowerCase();



let filtered = customers.filter(customer=>{


return customer.name.toLowerCase()

.includes(value)

|| 

customer.phone.includes(value);


});



displayCustomers(filtered);



});








document

.getElementById("logoutBtn")

.addEventListener("click",function(e){


e.preventDefault();



localStorage.removeItem("adminLoggedIn");


window.location.href="login.html";


});







generateCustomers();

displayCustomers();
