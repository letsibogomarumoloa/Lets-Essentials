//
// ======================================
// LETS ESSENTIALS HOMEPAGE CONNECTION
// home.js
// ======================================



// ==============================
// LOAD PRODUCTS
// ==============================


let products = JSON.parse(

localStorage.getItem("products")

) || [];




const homeProducts =

document.getElementById("homeProducts");





function loadProducts(){



if(!homeProducts) return;



homeProducts.innerHTML="";





if(products.length === 0){


homeProducts.innerHTML =

`

<p>

New products coming soon.

</p>

`;

return;

}






// Show only first 4 products

products.slice(0,4).forEach(product=>{



homeProducts.innerHTML +=


`

<div class="product-card">


<img 
src="${product.image}"
alt="${product.name}">



<h3>

${product.name}

</h3>




<p>

${product.category}

</p>




<h4>

P${product.price}

</h4>




<a href="shop.html" class="btn">

View Product

</a>



</div>

`;



});


}









// ==============================
// LOAD APPROVED REVIEWS
// ==============================



let reviews = JSON.parse(

localStorage.getItem("reviews")

) || [];





const homeReviews =

document.getElementById("homeReviews");







function loadReviews(){



if(!homeReviews) return;



homeReviews.innerHTML="";





let approvedReviews = reviews.filter(review =>

review.status === "Approved"

);







if(approvedReviews.length === 0){


homeReviews.innerHTML =

`

<p>

Be the first customer to share your experience.

</p>

`;

return;

}





approvedReviews.slice(0,3).forEach(review=>{



homeReviews.innerHTML +=


`

<div class="review-card">



<h3>

${review.name}

</h3>




<p>

${"⭐".repeat(review.rating)}

</p>



<p>

"${review.message}"

</p>



</div>

`;



});



}








loadProducts();

loadReviews();
