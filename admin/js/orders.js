/* =========================================
   LETS ESSENTIALS
   ADMIN ORDERS MANAGEMENT V3.0
========================================= */


const ordersTable =
document.getElementById("ordersTable");


const searchOrders =
document.getElementById("searchOrders");



let orders = JSON.parse(

localStorage.getItem("letsOrders")

) || [];







// ================================
// DISPLAY ORDERS
// ================================


function displayOrders(list = orders){



if(!ordersTable) return;



ordersTable.innerHTML = "";





if(list.length === 0){


ordersTable.innerHTML = `


<tr>

<td colspan="6">

No orders available

</td>

</tr>


`;


return;


}







list.forEach(order => {



ordersTable.innerHTML += `



<tr>


<td>

#${order.id}

</td>




<td>

<strong>
${order.customer || "Guest Customer"}
</strong>


<br>


<small>
${order.phone || ""}
</small>


</td>





<td>


${

order.items ?

order.items.map(item => 

item.name

).join(", ")

:

"No items"

}



</td>






<td>

P${order.total || 0}

</td>





<td>


<select

onchange="updateOrderStatus(${order.id}, this.value)">


<option value="pending"

${order.status === "pending" ? "selected" : ""}>

Pending

</option>



<option value="processing"

${order.status === "processing" ? "selected" : ""}>

Processing

</option>




<option value="completed"

${order.status === "completed" ? "selected" : ""}>

Completed

</option>




<option value="delivered"

${order.status === "delivered" ? "selected" : ""}>

Delivered

</option>




<option value="cancelled"

${order.status === "cancelled" ? "selected" : ""}>

Cancelled

</option>



</select>



</td>






<td>


<button

class="btn btn-secondary"

onclick="deleteOrder(${order.id})">


<i class="fas fa-trash"></i>


</button>



</td>



</tr>



`;



});



}









// ================================
// UPDATE ORDER STATUS
// ================================


function updateOrderStatus(id,status){



const order =
orders.find(

item => item.id === id

);





if(order){



order.status = status;



localStorage.setItem(

"letsOrders",

JSON.stringify(orders)

);



displayOrders();



}



}









// ================================
// DELETE ORDER
// ================================


function deleteOrder(id){



const confirmDelete = confirm(

"Delete this order?"

);





if(confirmDelete){



orders =
orders.filter(

order => order.id !== id

);





localStorage.setItem(

"letsOrders",

JSON.stringify(orders)

);



displayOrders();



}



}









// ================================
// SEARCH ORDERS
// ================================


if(searchOrders){



searchOrders.addEventListener(
"input",
function(){



const value =
this.value.toLowerCase();





const filteredOrders =
orders.filter(order =>



String(order.id)
.includes(value)



||



(order.customer || "")
.toLowerCase()
.includes(value)



);





displayOrders(filteredOrders);



});



}








// LOAD ORDERS

displayOrders();
