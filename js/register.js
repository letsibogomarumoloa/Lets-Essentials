// ======================================
// LETS ESSENTIALS CUSTOMER REGISTRATION
// ======================================


let users = JSON.parse(

localStorage.getItem("users")

) || [];




const registerForm =

document.getElementById("registerForm");





registerForm.addEventListener("submit",function(e){


e.preventDefault();





let user = {


id:

"USR-" + Date.now(),


name:

document.getElementById("regName").value,


phone:

document.getElementById("regPhone").value,


email:

document.getElementById("regEmail").value,


password:

document.getElementById("regPassword").value,


vehicles:[],


};







let exists = users.find(item =>

item.email === user.email

);





if(exists){


document.getElementById("registerMessage").innerHTML=

"❌ Account already exists.";


return;


}






users.push(user);



localStorage.setItem(

"users",

JSON.stringify(users)

);






document.getElementById("registerMessage").innerHTML=

"✅ Account created successfully!";




registerForm.reset();



});
