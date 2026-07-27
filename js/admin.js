// =====================================================
// LETS ESSENTIALS ADMIN DASHBOARD
// admin.js
// =====================================================

// ----------------------------
// Protect Dashboard
// ----------------------------

if (localStorage.getItem("adminLoggedIn") !== "true") {
    window.location.href = "login.html";
}

// ----------------------------
// Logout
// ----------------------------

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function (e) {

        e.preventDefault();

        if (confirm("Are you sure you want to logout?")) {

            localStorage.removeItem("adminLoggedIn");

            window.location.href = "login.html";

        }

    });

}

// ----------------------------
// Load Data
// ----------------------------

const bookings =
JSON.parse(localStorage.getItem("bookings")) || [];

const orders = [];

const savedOrder =
JSON.parse(localStorage.getItem("orderData"));

if(savedOrder){

    orders.push(savedOrder);

}

// ----------------------------
// Statistics
// ----------------------------

const bookingCount =
document.getElementById("bookingCount");

const orderCount =
document.getElementById("orderCount");

const revenue =
document.getElementById("revenue");

const customerCount =
document.getElementById("customerCount");

if(bookingCount){

bookingCount.textContent = bookings.length;

}

if(orderCount){

orderCount.textContent = orders.length;

}

let totalRevenue = 0;

orders.forEach(order=>{

    if(order.products){

        order.products.forEach(product=>{

            totalRevenue +=
            product.price * product.quantity;

        });

    }

});

if(revenue){

revenue.textContent =
"P" + totalRevenue.toFixed(2);

}

// ----------------------------
// Customer Count
// ----------------------------

const customers = new Set();

bookings.forEach(item=>{

    if(item.name){

        customers.add(item.name);

    }

});

orders.forEach(order=>{

    if(order.customer){

        customers.add(order.customer);

    }

});

if(customerCount){

customerCount.textContent =
customers.size;

}

// ----------------------------
//
