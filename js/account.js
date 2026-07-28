/* =========================================
   LETS ESSENTIALS
   CUSTOMER DASHBOARD
========================================= */



const customer =
JSON.parse(

localStorage.getItem("letsCustomer")

);





const loggedIn =
localStorage.getItem(
"customerLoggedIn"
);







if(!loggedIn || !customer){


window.location.href =
"login.html";


}







// DISPLAY PROFILE


document.getElementById(
"customerName"
).textContent =
customer.name;



document.getElementById(
"customerEmail"
).textContent =
customer.email;



document.getElementById(
"customerPhone"
).textContent =
customer.phone;








// DISPLAY ORDERS


const ordersContainer =
document.getElementById(
"customerOrders"
);



let orders = JSON.parse(

localStorage.getItem("letsOrders")

) || [];







const customerOrders = orders.filter(order=>{


return order.email === customer.email;


});








if(customerOrders.length === 0){



ordersContainer.innerHTML = `


<p>
You have no orders yet.
</p>


`;



}

else{



customerOrders.forEach(order=>{


ordersContainer.innerHTML += `



<div class="order-result">


<h4>

Order:
${order.id}

</h4>



<p>

Status:

<strong>

${order.status}

</strong>

</p>



<p>

Date:

${order.date}

</p>


<p>

Items:

${order.items.map(item=>

item.name

).join(", ")}

</p>


<p>

Status:

<strong>

${order.status}

</strong>

</p>



</div>



`;



});



}









// LOGOUT


const logoutBtn =
document.getElementById(
"logoutBtn"
);



if(logoutBtn){


logoutBtn.addEventListener("click",()=>{


localStorage.removeItem(
"customerLoggedIn"
);



window.location.href =
"login.html";



});


}
