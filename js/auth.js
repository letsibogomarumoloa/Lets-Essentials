/* =========================================
   LETS ESSENTIALS
   CUSTOMER ACCOUNT SYSTEM
========================================= */



const registerForm =
document.getElementById("registerForm");


const loginForm =
document.getElementById("loginForm");






// REGISTER CUSTOMER


if(registerForm){


registerForm.addEventListener("submit",(e)=>{


e.preventDefault();



const user = {


name:

document.getElementById(
"registerName"
).value,



email:

document.getElementById(
"registerEmail"
).value,



phone:

document.getElementById(
"registerPhone"
).value,



password:

document.getElementById(
"registerPassword"
).value,



orders:[]

};






localStorage.setItem(

"letsCustomer",

JSON.stringify(user)

);





document.getElementById(
"registerMessage"
).innerHTML = `


<p style="color:green">

Account created successfully!

<a href="login.html">
Login here
</a>

</p>


`;



registerForm.reset();



});



}









// LOGIN CUSTOMER


if(loginForm){


loginForm.addEventListener("submit",(e)=>{


e.preventDefault();



const savedUser = JSON.parse(

localStorage.getItem("letsCustomer")

);






const email =
document.getElementById(
"loginEmail"
).value;



const password =
document.getElementById(
"loginPassword"
).value;







if(
savedUser &&
savedUser.email === email &&
savedUser.password === password
){



localStorage.setItem(

"customerLoggedIn",

"true"

);



window.location.href =
"dashboard.html";



}

else{


document.getElementById(
"loginMessage"
).innerHTML = `


<p style="color:red">

Incorrect email or password

</p>


`;



}



});



}
