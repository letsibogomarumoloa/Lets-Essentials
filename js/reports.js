// ======================================
// LETS ESSENTIALS BUSINESS REPORTS
// ======================================



if(localStorage.getItem("adminLoggedIn") !== "true"){

window.location.href="login.html";

}




let orders = JSON.parse(

localStorage.getItem("orders")

) || [];



let bookings = JSON.parse(

localStorage.getItem("bookings")

) || [];



let reviews = JSON.parse(

localStorage.getItem("reviews")

) || [];






// ================================
// Revenue
// ================================


let revenue = 0;



orders.forEach(order=>{


revenue += Number(order.total);


});



document.getElementById("reportRevenue")

.innerHTML =

"P" + revenue.toFixed(2);






// ================================
// Orders
// ================================


document.getElementById("reportOrders")

.innerHTML = orders.length;






// ================================
// Bookings
// ================================


document.getElementById("reportBookings")

.innerHTML = bookings.length;






// ================================
// Rating
// ================================


let rating = 0;



reviews.forEach(review=>{


rating += Number(review.rating);


});



if(reviews.length > 0){


rating = rating / reviews.length;


}



document.getElementById("reportRating")

.innerHTML =

"⭐ " + rating.toFixed(1);






// ================================
// Popular Services
// ================================


let services = {};



bookings.forEach(booking=>{


if(services[booking.service]){


services[booking.service]++;


}else{


services[booking.service]=1;


}


});






let serviceTable =

document.getElementById("serviceReport");



serviceTable.innerHTML="";





Object.keys(services).forEach(service=>{


serviceTable.innerHTML +=

`

<tr>

<td>
${service}
</td>


<td>
${services[service]}
</td>


</tr>

`;



});






// ================================
// Products
// ================================



let products={};



orders.forEach(order=>{


order.products.forEach(product=>{


if(products[product.name]){


products[product.name]+=product.quantity;


}else{


products[product.name]=product.quantity;


}


});


});






let productTable =

document.getElementById("productReport");



productTable.innerHTML="";





Object.keys(products).forEach(product=>{


productTable.innerHTML +=


`

<tr>


<td>
${product}
</td>


<td>
${products[product]}
</td>


</tr>


`;



});








// LOGOUT


document

.getElementById("logoutBtn")

.addEventListener("click",function(e){


e.preventDefault();


localStorage.removeItem("adminLoggedIn");


window.location.href="login.html";


});
