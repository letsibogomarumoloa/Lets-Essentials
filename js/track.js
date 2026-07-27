// ======================================
// LETS ESSENTIALS ORDER TRACKING SYSTEM
// track.js
// ======================================



function trackOrder(){


let enteredOrder =

document.getElementById("orderNumber").value
.trim()
.toUpperCase();




let result =

document.getElementById("trackingResult");





if(!enteredOrder){


result.innerHTML =

`
<p style="color:red">

Please enter your order number.

</p>
`;

return;

}






// Get all orders

let orders = JSON.parse(

localStorage.getItem("orders")

) || [];






// Search order

let order = orders.find(item =>

item.id === enteredOrder

);







if(order){



result.innerHTML =

`

<h3>
✅ Order Found
</h3>



<p>

Order Number:

<b>${order.id}</b>

</p>



<p>

Customer:

${order.customer}

</p>




<p>

Order Date:

${order.date}

</p>





<h3>
Order Progress
</h3>





<div class="timeline">



<p class="${order.status === 'Processing' ? 'active':''}">

🟡 Processing

</p>




<p class="${order.status === 'Ordered From Supplier' ? 'active':''}">

🔵 Ordered From Supplier

</p>





<p class="${order.status === 'Arrived In Botswana' ? 'active':''}">

🟣 Arrived In Botswana

</p>





<p class="${order.status === 'Out For Delivery' ? 'active':''}">

🟢 Out For Delivery

</p>





<p class="${order.status === 'Delivered' ? 'active':''}">

✅ Delivered

</p>



</div>





<h3>
Products
</h3>



<p>

${

order.products.map(product =>

product.name +

" x" +

product.quantity

).join("<br>")

}

</p>

`;



}

else{


result.innerHTML =

`

<p style="color:red">

❌ Order not found.

Please check your order number.

</p>

`;



}



}
