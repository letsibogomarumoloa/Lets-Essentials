/* =========================================
   LETS ESSENTIALS
   ORDER TRACKING SYSTEM
========================================= */


const trackingForm =
document.getElementById("trackingForm");


const trackingResult =
document.getElementById("trackingResult");






if(trackingForm){


trackingForm.addEventListener("submit",(e)=>{


e.preventDefault();



const searchNumber =

document.getElementById(
"orderNumber"
).value.trim();





const orders = JSON.parse(

localStorage.getItem("letsOrders")

) || [];






const order = orders.find(item=>{


return item.id === searchNumber;


});








if(!order){



trackingResult.innerHTML = `


<div class="order-result">


<h3>
Order Not Found
</h3>


<p>

Please check your order number and try again.

</p>


</div>


`;



return;


}









trackingResult.innerHTML = `


<div class="order-result">


<h3>
Order Found
</h3>


<p>

<strong>
Order Number:
</strong>

${order.id}

</p>



<p>

<strong>
Customer:
</strong>

${order.customer}

</p>



<p>

<strong>
Items:
</strong>

${order.items.length}

product(s)

</p>



<span class="status">

${order.status}

</span>



</div>


`;



});


}
