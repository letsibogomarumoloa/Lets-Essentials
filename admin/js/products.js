/* =========================================
   LETS ESSENTIALS
   ADMIN PRODUCTS MANAGEMENT V3.0
========================================= */


const productForm =
document.getElementById("productForm");


const productsTable =
document.getElementById("productsTable");


const searchInput =
document.getElementById("searchProducts");



let products = JSON.parse(

localStorage.getItem("letsProducts")

) || [];





// ================================
// DISPLAY PRODUCTS
// ================================


function displayProducts(list = products){


if(!productsTable) return;



productsTable.innerHTML = "";



if(list.length === 0){


productsTable.innerHTML = `


<tr>

<td colspan="6">

No products found

</td>

</tr>


`;


return;


}




list.forEach(product => {



productsTable.innerHTML += `



<tr>


<td>

<img 
src="../${product.image}"
alt="${product.name}"
width="60"
height="60"
style="object-fit:cover;border-radius:8px;">


</td>



<td>

<strong>
${product.name}
</strong>


<br>


<small>
${product.description || ""}
</small>


</td>




<td>

${product.category}

</td>




<td>

P${product.price}

</td>




<td>

<input 

type="number"

value="${product.stock}"

onchange="updateStock(${product.id},this.value)"

style="width:80px;">

</td>




<td>


<button

class="btn btn-secondary"

onclick="deleteProduct(${product.id})">


<i class="fas fa-trash"></i>


</button>



</td>



</tr>



`;



});


}







// ================================
// ADD PRODUCT
// ================================


if(productForm){



productForm.addEventListener(
"submit",
function(e){



e.preventDefault();




const newProduct = {


id: Date.now(),



name:

document.getElementById(
"productName"
).value,



price:

document.getElementById(
"productPrice"
).value,



category:

document.getElementById(
"productCategory"
).value,



stock:

document.getElementById(
"productStock"
).value,



image:

document.getElementById(
"productImage"
).value,



description:

document.getElementById(
"productDescription"
).value



};





products.push(newProduct);





localStorage.setItem(

"letsProducts",

JSON.stringify(products)

);






document.getElementById(
"productMessage"
).innerHTML = `


<span style="color:green">

Product added successfully!

</span>


`;





productForm.reset();





displayProducts();



});



}









// ================================
// DELETE PRODUCT
// ================================


function deleteProduct(id){



const confirmDelete =
confirm(
"Delete this product?"
);



if(confirmDelete){



products =
products.filter(

product => product.id !== id

);



localStorage.setItem(

"letsProducts",

JSON.stringify(products)

);



displayProducts();



}



}









// ================================
// UPDATE STOCK
// ================================


function updateStock(id,value){



const product =
products.find(

item => item.id === id

);



if(product){


product.stock = value;



localStorage.setItem(

"letsProducts",

JSON.stringify(products)

);



}



}









// ================================
// SEARCH PRODUCTS
// ================================


if(searchInput){



searchInput.addEventListener(
"input",
function(){



const search =
this.value.toLowerCase();





const filteredProducts =
products.filter(product =>



product.name
.toLowerCase()
.includes(search)



||
product.category
.toLowerCase()
.includes(search)



);





displayProducts(filteredProducts);



});



}









// INITIAL LOAD


displayProducts();
