// ======================================
// LETS ESSENTIALS ORDER TRACKING
// ======================================



let orders = JSON.parse(

localStorage.getItem("orders")

) || [];






function trackOrder(){



let orderNumber =

document.getElementById("orderNumber").value.trim();





let result =

document.getElementById("trackingResult");






let order = orders.find(item =>


item.id === orderNumber


);






if(!order){



result.innerHTML =

`

<div class="profile-card">


<h3>
❌ Order Not Found
</h3>


<p>

Please check your order number.

</p>


</div>

`;



return;


}







let stages = [

"Processing",

"Confirmed",

"Preparing",

"Out For Delivery",

"Completed"

];







let current = stages.indexOf(order.status);






let progress = "";






stages.forEach((stage,index)=>{



if(index <= current){



progress +=


`

<div class="step completed">

✅ ${stage}

</div>

`;



}

else{


progress +=


`

<div class="step">

⚪ ${stage}

</div>

`;



}



});








result.innerHTML =


`

<div class="profile-card">


<h2>

Order ${order.id}

</h2>



<p>

Customer:

${order.customer}

</p>



<p>

Total:

P${order.total}

</p>




<p>

Delivery Method:

${order.delivery}

</p>





<h3>

Order Progress

</h3>


${progress}



</div>

`;





}
