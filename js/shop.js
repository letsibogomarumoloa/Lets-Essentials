// ==================================
// LETS ESSENTIALS SHOPPING CART
// ==================================



let cart = JSON.parse(localStorage.getItem("cart")) || [];




// Add product to cart

function addToCart(name, price){


    cart.push({

        name:name,

        price:price,

        quantity:1

    });



    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );



    alert(

        name + " added to cart!"

    );



}
