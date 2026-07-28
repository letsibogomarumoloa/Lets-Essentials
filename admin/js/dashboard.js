/* =========================================
   LETS ESSENTIALS
   ADMIN DASHBOARD LOGIC V3.0
========================================= */



// LOAD DATA

const products = JSON.parse(
    localStorage.getItem("letsProducts")
) || [];


const orders = JSON.parse(
    localStorage.getItem("letsOrders")
) || [];


const bookings = JSON.parse(
    localStorage.getItem("letsBookings")
) || [];


const customers = JSON.parse(
    localStorage.getItem("letsCustomers")
) || [];






// ================================
// STATISTICS COUNTERS
// ================================


const productsCount =
document.getElementById("productsCount");


const ordersCount =
document.getElementById("ordersCount");


const bookingsCount =
document.getElementById("bookingsCount");


const customersCount =
document.getElementById("customersCount");





if(productsCount){

    productsCount.textContent =
    products.length;

}



if(ordersCount){

    ordersCount.textContent =
    orders.length;

}



if(bookingsCount){

    bookingsCount.textContent =
    bookings.length;

}



if(customersCount){

    customersCount.textContent =
    customers.length;

}







// ================================
// RECENT PRODUCTS
// ================================


const recentProducts =
document.getElementById("recentProducts");





if(recentProducts){



if(products.length === 0){


recentProducts.innerHTML = `

<tr>

<td colspan="4">

No products available

</td>

</tr>

`;



}

else{



let latestProducts =
products.slice(-5).reverse();





recentProducts.innerHTML = "";




latestProducts.forEach(product => {



recentProducts.innerHTML += `


<tr>


<td>
${product.name}
</td>


<td>
${product.category}
</td>


<td>
P${product.price}
</td>


<td>
${product.stock}
</td>


</tr>


`;



});



}



}








// ================================
// RECENT ORDERS
// ================================


const recentOrders =
document.getElementById("recentOrders");




if(recentOrders){



if(orders.length === 0){


recentOrders.innerHTML = `

<tr>

<td colspan="4">

No orders available

</td>

</tr>

`;



}

else{


let latestOrders =
orders.slice(-5).reverse();




recentOrders.innerHTML = "";





latestOrders.forEach(order => {



recentOrders.innerHTML += `


<tr>


<td>
#${order.id}
</td>


<td>
${order.customer || "Customer"}
</td>


<td>
P${order.total || 0}
</td>


<td>

<span class="status ${order.status || "pending"}">

${order.status || "Pending"}

</span>

</td>


</tr>


`;



});



}


}








// ================================
// RECENT BOOKINGS
// ================================


const recentBookings =
document.getElementById("recentBookings");





if(recentBookings){



if(bookings.length === 0){


recentBookings.innerHTML = `

<tr>

<td colspan="4">

No bookings available

</td>

</tr>

`;



}

else{


let latestBookings =
bookings.slice(-5).reverse();




recentBookings.innerHTML = "";




latestBookings.forEach(booking => {



recentBookings.innerHTML += `



<tr>


<td>
${booking.name || "Customer"}
</td>


<td>
${booking.service || "Auto Care"}
</td>


<td>
${booking.date || "N/A"}
</td>


<td>


<span class="status ${booking.status || "pending"}">

${booking.status || "Pending"}

</span>


</td>



</tr>



`;



});



}



  }
