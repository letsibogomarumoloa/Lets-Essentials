/* =========================================
   LETS ESSENTIALS
   ADMIN CUSTOMERS MANAGEMENT V3.0
========================================= */


const customersTable =
document.getElementById("customersTable");


const searchCustomers =
document.getElementById("searchCustomers");



let customers = JSON.parse(

localStorage.getItem("letsCustomers")

) || [];







// ================================
// DISPLAY CUSTOMERS
// ================================


function displayCustomers(list = customers){



if(!customersTable) return;



customersTable.innerHTML = "";





if(list.length === 0){



customersTable.innerHTML = `


<tr>

<td colspan="5">

No customers registered

</td>

</tr>


`;

return;


}







list.forEach(customer => {



customersTable.innerHTML += `



<tr>



<td>

<strong>

${customer.name || "Customer"}

</strong>

</td>





<td>

${customer.email || "No email"}

</td>





<td>

${customer.phone || "No phone"}

</td>





<td>

${customer.date || "N/A"}

</td>





<td>


<button

class="btn btn-secondary"

onclick="deleteCustomer(${customer.id})">


<i class="fas fa-trash"></i>


</button>


</td>





</tr>



`;



});



}









// ================================
// DELETE CUSTOMER
// ================================


function deleteCustomer(id){



const confirmDelete = confirm(

"Delete this customer?"

);





if(confirmDelete){



customers = customers.filter(

customer => customer.id !== id

);





localStorage.setItem(

"letsCustomers",

JSON.stringify(customers)

);





displayCustomers();



}



}









// ================================
// SEARCH CUSTOMERS
// ================================


if(searchCustomers){



searchCustomers.addEventListener(
"input",
function(){



const value =

this.value.toLowerCase();





const filteredCustomers =

customers.filter(customer =>



(customer.name || "")

.toLowerCase()

.includes(value)



||



(customer.email || "")

.toLowerCase()

.includes(value)



||



(customer.phone || "")

.includes(value)



);





displayCustomers(filteredCustomers);



});



}








// INITIAL LOAD

displayCustomers();
