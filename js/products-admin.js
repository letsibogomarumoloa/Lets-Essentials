// =====================================
// LETS ESSENTIALS PRODUCT MANAGEMENT
// =====================================


if(localStorage.getItem("adminLoggedIn") !== "true"){

window.location.href="login.html";

}



let products = JSON.parse(

localStorage.getItem("products")

) || [];





const productForm =
document.getElementById("productForm");


const productsTable =
document.getElementById("productsTable");






function displayProducts(){


productsTable.innerHTML="";



if(products.length===0){


productsTable.innerHTML=

`

<tr>

<td colspan="5">

No products available.

</td>

</tr>

`;

return;

}




products.forEach((product,index)=>{


productsTable.innerHTML +=

`

<tr>


<td>

<img src="${product.image}" width="60">

</td>



<td>

${product.name}

</td>



<td>

${product.category}

</td>



<td>

P${product.price}

</td>



<td>


<button

class="btn btn-danger"

onclick="deleteProduct(${index})">

Delete

</button>


</td>


</tr>

`;

});


}







productForm.addEventListener("submit",function(e){


e.preventDefault();





let product={


id:

"PR-" +

Date.now(),


name:

document.getElementById("productName").value,


price:

Number(document.getElementById("productPrice").value),


category:

document.getElementById("productCategory").value,


image:

document.getElementById("productImage").value || "../images/product.png"


};






products.push(product);



localStorage.setItem(

"products",

JSON.stringify(products)

);





productForm.reset();


displayProducts();



});









function deleteProduct(index){



if(confirm("Delete this product?")){


products.splice(index,1);



localStorage.setItem(

"products",

JSON.stringify(products)

);



displayProducts();



}


}







document
.getElementById("logoutBtn")
.addEventListener("click",function(e){


e.preventDefault();


localStorage.removeItem("adminLoggedIn");


window.location.href="login.html";


});






displayProducts();
