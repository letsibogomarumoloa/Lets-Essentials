// ======================================
// LETS ESSENTIALS ORDER MANAGEMENT
// ======================================



if(localStorage.getItem("adminLoggedIn") !== "true"){

window.location.href="login.html";

}





let orders = JSON.parse(

localStorage.getItem("orders")

) || [];





const ordersTable =

document.getElementById("ordersTable");







function displayOrders(data = orders){



ordersTable.innerHTML="";





if(data.length === 0){


ordersTable.innerHTML =

`
<tr>

<td colspan="6">

No orders found.

</td>

</tr>
`;


return;

}





data.forEach((order,index)=>{



let products = "";



order.products.forEach(product=>{


products +=

`${product.name} x${product.quantity}<br>`;


});






ordersTable.innerHTML +=

`

<tr>


<td>

${order.id}

</td>



<td>

${order.customer}

<br>

<small>

${order.phone}

</small>

</td>




<td>

${products}

</td>




<td>

P${order.total}

</td>




<td>


<select onchange="updateStatus(${index},this.value)">


<option ${order.status==="Processing"?"selected":""}>

Processing

</option>


<option ${order.status==="Ordered From Supplier"?"selected":""}>

Ordered From Supplier

</option>


<option ${order.status==="Arrived In Botswana"?"selected":""}>

Arrived In Botswana

</option>


<option ${order.status==="Out For Delivery"?"selected":""}>

Out For Delivery

</option>


<option ${order.status==="Delivered"?"selected":""}>

Delivered

</option>



</select>


</td>




<td>


<button 

class="btn btn-danger"

onclick="deleteOrder(${index})">

Delete

</button>


</td>



</tr>

`;



});



}







function updateStatus(index,status){



orders[index].status=status;



localStorage.setItem(

"orders",

JSON.stringify(orders)

);




// Update latest tracking order if it matches


let currentOrder =

JSON.parse(

localStorage.getItem("orderData")

);



if(currentOrder && currentOrder.id === orders[index].id){


currentOrder.status=status;



localStorage.setItem(

"orderData",

JSON.stringify(currentOrder)

);


}





displayOrders();


}







function deleteOrder(index){



if(confirm("Delete this order?")){


orders.splice(index,1);



localStorage.setItem(

"orders",

JSON.stringify(orders)

);



displayOrders();



}


}








// SEARCH


document

.getElementById("searchOrder")

.addEventListener("input",function(){



let value=this.value.toLowerCase();




let filtered = orders.filter(order=>{


return (

order.id.toLowerCase().includes(value)

||

order.customer.toLowerCase().includes(value)

);


});



displayOrders(filtered);



});







// LOGOUT


document

.getElementById("logoutBtn")

.addEventListener("click",function(e){


e.preventDefault();



localStorage.removeItem("adminLoggedIn");



window.location.href="login.html";


});







displayOrders();
