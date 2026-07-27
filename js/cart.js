// ==================================
// LETS ESSENTIALS CART SYSTEM
// ==================================


let cart = JSON.parse(localStorage.getItem("cart")) || [];



const cartItems =
document.getElementById("cartItems");


const cartTotal =
document.getElementById("cartTotal");





// Display cart


function displayCart(){


cartItems.innerHTML="";


let total = 0;



if(cart.length === 0){


cartItems.innerHTML=

`
<h3>
Your cart is empty.
</h3>
`;

cartTotal.innerHTML="P0";

return;


}




cart.forEach((item,index)=>{


let itemTotal = item.price * item.quantity;


total += itemTotal;



cartItems.innerHTML +=

`

<div class="cart-item">


<div>


<h3>

${item.name}

</h3>


<p>

Price:
P${item.price}

</p>



<div class="quantity">


<button onclick="changeQuantity(${index},-1)">
-
</button>


<span>

${item.quantity}

</span>


<button onclick="changeQuantity(${index},1)">
+
</button>


</div>


<p>

Subtotal:

P${itemTotal}

</p>



</div>




<button onclick="removeItem(${index})">

Remove

</button>



</div>

`;



});



cartTotal.innerHTML =

"P" + total;



}





// Increase / decrease quantity


function changeQuantity(index,change){



cart[index].quantity += change;




if(cart[index].quantity <=0){


cart.splice(index,1);


}




saveCart();


displayCart();


}





// Remove product


function removeItem(index){



cart.splice(index,1);



saveCart();


displayCart();


}





function saveCart(){


localStorage.setItem(

"cart",

JSON.stringify(cart)

);


}





// Checkout


function checkout(){



if(cart.length===0){


document.getElementById("orderMessage").innerHTML=

"❌ Your cart is empty.";


return;


}



let name =
document.getElementById("customerName").value;


let phone =
document.getElementById("customerPhone").value;


let address =
document.getElementById("customerAddress").value;





if(!name || !phone || !address){


document.getElementById("orderMessage").innerHTML=

"❌ Please complete all details.";


return;


}





let orderNumber =

"LE-" +

Math.floor(

Math.random()*90000+10000

);





let orderData = {


id:orderNumber,

status:"Processing",

date:new Date().toLocaleDateString(),

products:cart,

customer:name


};





localStorage.setItem(

"orderData",

JSON.stringify(orderData)

);






document.getElementById("orderMessage").innerHTML=

`

✅ Order Created!

<br><br>

Order Number:

<b>${orderNumber}</b>

<br><br>

Status:

🟡 Processing

<br><br>

You can now track your order.

`;





cart=[];


saveCart();



}




displayCart();
