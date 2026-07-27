// ======================================
// LETS ESSENTIALS CUSTOMER LOGIN
// ======================================



let users = JSON.parse(

localStorage.getItem("users")

) || [];





document

.getElementById("loginForm")

.addEventListener("submit",function(e){



e.preventDefault();





let email =

document.getElementById("loginEmail").value;




let password =

document.getElementById("loginPassword").value;






let user = users.find(item =>


item.email === email &&

item.password === password


);






if(user){



localStorage.setItem(

"currentUser",

JSON.stringify(user)

);





window.location.href="account.html";



}

else{



document.getElementById("loginMessage").innerHTML=

"❌ Incorrect email or password.";



}



});
