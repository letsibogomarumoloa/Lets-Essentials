// ===============================
// ORDER TRACKING SYSTEM
// ===============================



function trackOrder(){



const enteredOrder =

document.getElementById("orderNumber").value;



const savedOrder =

localStorage.getItem("orderID");



const result =

document.getElementById("trackingResult");





if(enteredOrder === savedOrder){



result.innerHTML =

`

<h3>
✅ Order Found
</h3>


<p>

Order Number:

<b>${savedOrder}</b>

</p>


<p>

Status:

🟡 Processing

</p>


<p>

Estimated Delivery:

5-7 Working Days

</p>


<p>

Thank you for choosing Lets Essentials.

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
