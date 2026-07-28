/* =========================================
   LETS ESSENTIALS
   ADMIN AUTHENTICATION
========================================= */


const adminUsername = "owner";

const adminPassword = "lets2026";




// LOGIN


const adminLoginForm =
document.getElementById("adminLoginForm");



if(adminLoginForm){


adminLoginForm.addEventListener("submit",(e)=>{


e.preventDefault();



const username =
document.getElementById("adminUsername").value;



const password =
document.getElementById("adminPassword").value;





if(
username === adminUsername &&
password === adminPassword
){


localStorage.setItem(

"adminLoggedIn",

"true"

);



window.location.href =
"dashboard.html";



}

else{


document.getElementById(
"adminMessage"
).innerHTML = `


<p style="color:red">

Incorrect login details

</p>


`;


}



});


}








// PROTECT ADMIN PAGES


const adminLoggedIn =
localStorage.getItem(
"adminLoggedIn"
);





const currentPage =
window.location.pathname;





if(

currentPage.includes("/admin/")

&&

!currentPage.includes("login.html")

){


if(adminLoggedIn !== "true"){


window.location.href =
"login.html";


}


}









// LOGOUT


const logoutBtn =
document.getElementById(
"adminLogout"
);



if(logoutBtn){


logoutBtn.addEventListener("click",()=>{


localStorage.removeItem(
"adminLoggedIn"
);



window.location.href =
"login.html";


});


}
