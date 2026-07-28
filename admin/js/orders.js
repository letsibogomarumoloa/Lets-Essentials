/* =========================================
   LETS ESSENTIALS
   ADMIN ORDER MANAGEMENT
========================================= */



const ordersContainer =
document.getElementById("ordersContainer");





let orders = JSON.parse(

localStorage.getItem("letsOrders")

) || [];






function displayOrders(){



if(!ordersContainer)

return;



ordersContainer.innerHTML="";






if(orders.length === 0){



ordersContainer.innerHTML = `


<div class="tracking-box">


<h3>
No Orders Yet
</h3>


<p>
Customer orders will appear here.
</p>


</div>


`;



return;


}








orders.forEach(order=>{


ordersContainer.innerHTML += `



<div class="checkout-box">



<h3>

Order ${order.id}

</h3>



<p>

<strong>
Customer:
</strong>

${order.customer}

</p>




<p>

<strong>
Phone:
</strong>

${order.phone}

</p>




<p>

<strong>
Email:
</strong>

${order.email}

</p>




<p>

<strong>
Address:
</strong>

${order.address}

</p>





<h4>
Products
</h4>



<ul>

${

order.items.map(item=>`

<li>

${item.name}

x${item.quantity}

-
P${item.price * item.quantity}

</li>

`).join("")

}

</ul>






<p>

<strong>
Payment:
</strong>

${order.payment}

</p>







<label>

Status:

</label>



<select onchange="updateOrderStatus('${order.id}', this.value)">



<option ${order.status==="Processing"?"selected":""}>

Processing

</option>



<option ${order.status==="Ready"?"selected":""}>

Ready

</option>



<option ${order.status==="Completed"?"selected":""}>

Completed

</option>



<option ${order.status==="Cancelled"?"selected":""}>

Cancelled

</option>



</select>





</div>


`;



});



}









function updateOrderStatus(id,status){



orders = orders.map(order=>{


if(order.id === id){


order.status = status;


}


return order;



});







localStorage.setItem(

"letsOrders",

JSON.stringify(orders)

);



alert(

"Order status updated"

);



}







displayOrders();
