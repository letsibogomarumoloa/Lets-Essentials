// ==================================
// ORDER TRACKING
// ==================================


function trackOrder(){


let enteredOrder =

document.getElementById("orderNumber").value;



let order =

JSON.parse(

localStorage.getItem("orderData")

);




let result =

document.getElementById("trackingResult");





if(order && enteredOrder === order.id){



result.innerHTML =


`

<h3>
✅ Order Found
</h3>


<p>

Order Number:

<b>${order.id}</b>

</p>



<h3>
Order Progress
</h3>



<div class="timeline">


<p class="active">
🟡 Processing
</p>


<p>
🔵 Ordered From Supplier
</p>


<p>
🟣 Arrived In Botswana
</p>


<p>
🟢 Out For Delivery
</p>


<p>
✅ Delivered
</p>


</div>



`;



}

else{


result.innerHTML=

`

<p style="color:red">

❌ Order not found.

</p>

`;



}



}
