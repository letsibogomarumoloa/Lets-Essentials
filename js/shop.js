// ==================================
// LETS ESSENTIALS SHOP SYSTEM
// ==================================


let cart = JSON.parse(localStorage.getItem("cart")) || [];




// Add product

function addToCart(name, price){


let existingProduct = cart.find(item => item.name === name);



if(existingProduct){


    existingProduct.quantity += 1;


}

else{


    cart.push({

        name:name,

        price:price,

        quantity:1

    });


}



localStorage.setItem(

"cart",

JSON.stringify(cart)

);



alert(name + " added to cart!");



}
