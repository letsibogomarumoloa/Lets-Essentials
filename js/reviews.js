// =====================================
// LETS ESSENTIALS CUSTOMER REVIEWS
// =====================================



let reviews = JSON.parse(

localStorage.getItem("reviews")

) || [];




const reviewForm =

document.getElementById("reviewForm");





if(reviewForm){



reviewForm.addEventListener("submit",function(e){


e.preventDefault();





let review = {


id:

"RV-" + Date.now(),


name:

document.getElementById("reviewName").value,


rating:

document.getElementById("reviewRating").value,


message:

document.getElementById("reviewMessage").value,


status:

"Pending",


date:

new Date().toLocaleDateString()


};





reviews.push(review);



localStorage.setItem(

"reviews",

JSON.stringify(reviews)

);





document.getElementById("reviewResponse").innerHTML=

"✅ Thank you for your feedback!";





reviewForm.reset();



});



}
