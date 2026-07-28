/* =========================================
   LETS ESSENTIALS
   PRODUCT MANAGEMENT
========================================= */



const container =
document.getElementById(
"adminProductsContainer"
);





let products = JSON.parse(

localStorage.getItem("letsProducts")

) || [];







function displayProducts(){



container.innerHTML = "";




if(products.length === 0){


container.innerHTML = `

<p>
No products available.
</p>

`;

return;


}







products.forEach(product => {



container.innerHTML += `



<div class="checkout-box">



<img 
src="../${product.image}"
alt="${product.name}"
width="120">





<h3>

${product.name}

</h3>





<p>

Price:
P${product.price}

</p>





<p>

Category:
${product.category}

</p>





<p>

Stock:
${product.stock}

</p>







<button 
class="btn btn-primary"
onclick="editProduct(${product.id})">

Edit

</button>





<button 
class="btn btn-secondary"
onclick="deleteProduct(${product.id})">

Delete

</button>



</div>



<br>


`;



});



}









function deleteProduct(id){



products = products.filter(

product => product.id !== id

);





localStorage.setItem(

"letsProducts",

JSON.stringify(products)

);





displayProducts();



}









function editProduct(id){



const product = products.find(

item => item.id === id

);





const newName = prompt(

"Product name:",
product.name

);



const newPrice = prompt(

"Product price:",
product.price

);



const newStock = prompt(

"Product stock:",
product.stock

);





if(newName){

product.name = newName;

}



if(newPrice){

product.price = newPrice;

}



if(newStock){

product.stock = newStock;

}






localStorage.setItem(

"letsProducts",

JSON.stringify(products)

);





displayProducts();



}







displayProducts();
