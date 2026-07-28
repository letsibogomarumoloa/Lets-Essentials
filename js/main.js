/* =========================================
   LETS ESSENTIALS
   MAIN JAVASCRIPT
   VERSION 2.0
========================================= */



// =========================================
// MOBILE NAVIGATION
// =========================================


const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");



if(menuBtn){


    menuBtn.addEventListener("click",()=>{


        navLinks.classList.toggle("active");


        const icon = menuBtn.querySelector("i");


        if(navLinks.classList.contains("active")){


            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");


        }else{


            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");


        }


    });


}






// Close mobile menu when clicking a link


document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        if(navLinks){


            navLinks.classList.remove("active");


        }


        if(menuBtn){


            const icon = menuBtn.querySelector("i");


            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");


        }


    });


});







// =========================================
// HEADER SHADOW ON SCROLL
// =========================================


const header = document.getElementById("header");



window.addEventListener("scroll",()=>{


    if(header){


        if(window.scrollY > 50){


            header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.12)";


        }else{


            header.style.boxShadow =
            "0 2px 15px rgba(0,0,0,0.05)";


        }


    }


});







// =========================================
// SCROLL TO TOP BUTTON
// =========================================


const scrollTopBtn = document.getElementById("scrollTop");



window.addEventListener("scroll",()=>{


    if(scrollTopBtn){


        if(window.scrollY > 500){


            scrollTopBtn.classList.add("show");


        }else{


            scrollTopBtn.classList.remove("show");


        }


    }


});






if(scrollTopBtn){


    scrollTopBtn.addEventListener("click",()=>{


        window.scrollTo({


            top:0,


            behavior:"smooth"


        });


    });


}







// =========================================
// FADE-IN ANIMATION ON SCROLL
// =========================================



const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("fade-up");


        }


    });


},{


    threshold:0.15


});






document.querySelectorAll(
".service-card, .why-card, .price-card, .product-card, .testimonial-card"
)
.forEach(element=>{


    observer.observe(element);


});







// =========================================
// CURRENT YEAR FOOTER
// =========================================



const year = new Date().getFullYear();



const footerYear = document.querySelector(".footer-bottom p");



if(footerYear){


    footerYear.innerHTML =

    `© ${year} Lets Essentials.
    All Rights Reserved.`;


}






// =========================================
// PREVENT EMPTY WHATSAPP BUTTON
// =========================================



const whatsappBtn = document.querySelector(".whatsapp-btn");



if(whatsappBtn){


    whatsappBtn.addEventListener("click",(e)=>{


        e.preventDefault();



        const phone =
        "267XXXXXXXX";



        const message =

        "Hello Lets Essentials, I would like to make an enquiry.";




        window.open(

        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,

        "_blank"

        );


    });


}







// =========================================
// PAGE LOADING EFFECT
// =========================================



window.addEventListener("load",()=>{


    document.body.classList.add("loaded");


});
