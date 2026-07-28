/* =========================================
   LETS ESSENTIALS
   ADMIN SETTINGS MANAGEMENT V3.0
========================================= */


const settingsForm =
document.getElementById("settingsForm");


const settingsMessage =
document.getElementById("settingsMessage");





// ================================
// LOAD SETTINGS
// ================================


let settings = JSON.parse(

localStorage.getItem("letsSettings")

) || {

storeName: "Lets Essentials",

whatsapp: "",

email: "",

location: "",

delivery: "",

about: ""

};







function loadSettings(){



document.getElementById("storeName").value =
settings.storeName;



document.getElementById("storeWhatsapp").value =
settings.whatsapp;



document.getElementById("storeEmail").value =
settings.email;



document.getElementById("storeLocation").value =
settings.location;



document.getElementById("deliveryInfo").value =
settings.delivery;



document.getElementById("aboutStore").value =
settings.about;



}









// ================================
// SAVE SETTINGS
// ================================


if(settingsForm){



settingsForm.addEventListener(
"submit",
function(e){



e.preventDefault();





settings = {


storeName:

document.getElementById(
"storeName"
).value,



whatsapp:

document.getElementById(
"storeWhatsapp"
).value,



email:

document.getElementById(
"storeEmail"
).value,



location:

document.getElementById(
"storeLocation"
).value,



delivery:

document.getElementById(
"deliveryInfo"
).value,



about:

document.getElementById(
"aboutStore"
).value



};








localStorage.setItem(

"letsSettings",

JSON.stringify(settings)

);







settingsMessage.innerHTML = `

<span style="color:green;font-weight:600">

Settings saved successfully!

</span>

`;



});



}







// INITIAL LOAD

loadSettings();
