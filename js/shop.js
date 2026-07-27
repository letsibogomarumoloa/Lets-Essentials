let cart = [];





function addProduct(name,price){


cart.push({

name:name,

price:price

});


displayCart();


}





function displayCart(){


const cartBox =
document.getElementById("cart");


if(cart.length === 0){

cartBox.innerHTML =
"No products selected.";

return;

}



let output = "";

let total = 0;



cart.forEach(item=>{


output +=

`

<p>

${item.name}

- P${item.price}

</p>

`;



total += item.price;


});



output +=

`

<hr>

<h3>

Total: P${total}

</h3>

`;



cartBox.innerHTML = output;


}







function createOrder(){


if(cart.length===0){


document.getElementById("orderResult").innerHTML=

"❌ Please select a product first.";


return;


}



let orderNumber =

"LE-" +

Math.floor(Math.random()*90000+10000);





localStorage.setItem(

"orderID",

orderNumber

);



localStorage.setItem(

"orderStatus",

"Processing"

);




document.getElementById("orderResult").innerHTML=

`

✅ Order Created!

<br><br>

Order Number:

<b>${orderNumber}</b>

<br><br>

Status:

🟡 Processing

<br>

Estimated Delivery:

5-7 Working Days

<br><br>

Use this order number to track your order.

`;



}
