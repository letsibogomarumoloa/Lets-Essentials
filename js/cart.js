/* =========================================
   LETS ESSENTIALS
   SHOPPING CART SYSTEM
   VERSION 1.0
========================================= */



// =========================================
// LOAD CART
// =========================================


let cart = JSON.parse(

    localStorage.getItem("letsCart")

) || [];






// =========================================
// UPDATE CART COUNT
// =========================================


function updateCartCount(){


    const cartCount =
    document.getElementById("cartCount");



    if(cartCount){


        let totalItems = 0;



        cart.forEach(item=>{


            totalItems += item.quantity;


        });



        cartCount.textContent = totalItems;


    }


}






// =========================================
// ADD PRODUCT TO CART
// =========================================


const addButtons =
document.querySelectorAll(".addCart");



addButtons.forEach(button=>{


    button.addEventListener("click",()=>{



        const product = {


            id:
            button.dataset.id,


            name:
            button.dataset.name,


            price:
            Number(button.dataset.price),


            quantity:1



        };







        const existingProduct = cart.find(item=>{


            return item.id === product.id;


        });






        if(existingProduct){



            existingProduct.quantity++;



        }else{


            cart.push(product);


        }





        saveCart();



        alert(

        `${product.name} added to cart`

        );



    });



});







// =========================================
// SAVE CART
// =========================================


function saveCart(){


    localStorage.setItem(

        "letsCart",

        JSON.stringify(cart)

    );


    updateCartCount();


}







// =========================================
// REMOVE ITEM
// =========================================


function removeFromCart(id){


    cart = cart.filter(item=>{


        return item.id !== id;


    });



    saveCart();


    displayCart();


}







// =========================================
// CHANGE QUANTITY
// =========================================


function changeQuantity(id,amount){



    const product = cart.find(item=>{


        return item.id === id;


    });




    if(product){


        product.quantity += amount;



        if(product.quantity <=0){


            removeFromCart(id);


            return;


        }


    }




    saveCart();


    displayCart();


}







// =========================================
// DISPLAY CART
// =========================================


function displayCart(){



    const cartContainer =
    document.getElementById("cartItems");



    const totalElement =
    document.getElementById("cartTotal");




    if(!cartContainer)

    return;






    cartContainer.innerHTML="";



    let total = 0;





    cart.forEach(item=>{


        total += item.price * item.quantity;




        cartContainer.innerHTML += `



        <div class="cart-item">


            <div>


                <h3>
                ${item.name}
                </h3>


                <p>

                P${item.price}

                </p>


            </div>



            <div class="quantity">


                <button onclick="changeQuantity('${item.id}',-1)">
                    -
                </button>


                <span>
                ${item.quantity}
                </span>


                <button onclick="changeQuantity('${item.id}',1)">
                    +
                </button>


            </div>



            <button 
            class="remove-btn"
            onclick="removeFromCart('${item.id}')">


            Remove


            </button>



        </div>


        `;


    });






    if(totalElement){


        totalElement.textContent =

        "P" + total;


    }


}








// =========================================
// INITIAL LOAD
// =========================================


updateCartCount();


displayCart();
