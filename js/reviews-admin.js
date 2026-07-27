// =====================================
// LETS ESSENTIALS ADMIN REVIEWS
// =====================================


if(localStorage.getItem("adminLoggedIn") !== "true"){

window.location.href="login.html";

}



let reviews = JSON.parse(

localStorage.getItem("reviews")

) || [];





const table =

document.getElementById("reviewTable");






function displayReviews(){



table.innerHTML="";





if(reviews.length===0){


table.innerHTML=

`

<tr>

<td colspan="5">

No reviews yet.

</td>

</tr>

`;

return;

}






reviews.forEach((review,index)=>{



table.innerHTML +=

`

<tr>


<td>

${review.name}

</td>



<td>

${"⭐".repeat(review.rating)}

</td>




<td>

${review.message}

</td>




<td>

<span class="status pending">

${review.status}

</span>

</td>




<td>


<button

class="btn btn-success"

onclick="approveReview(${index})">

Approve

</button>



<button

class="btn btn-danger"

onclick="deleteReview(${index})">

Delete

</button>


</td>



</tr>

`;



});


}







function approveReview(index){


reviews[index].status="Approved";



localStorage.setItem(

"reviews",

JSON.stringify(reviews)

);



displayReviews();


}






function deleteReview(index){


if(confirm("Delete review?")){


reviews.splice(index,1);



localStorage.setItem(

"reviews",

JSON.stringify(reviews)

);



displayReviews();


}


}







document

.getElementById("logoutBtn")

.addEventListener("click",function(e){


e.preventDefault();


localStorage.removeItem("adminLoggedIn");


window.location.href="login.html";


});





displayReviews();
