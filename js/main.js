
// ===============================
// MOBILE MENU
// ===============================


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("show");

    });

}




// ===============================
// CLOSE MOBILE MENU AFTER CLICK
// ===============================


const links = document.querySelectorAll(".nav-links a");


links.forEach(link=>{


    link.addEventListener("click",()=>{

        navLinks.classList.remove("show");

    });


});





// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 8px 25px rgba(0,0,0,0.15)";

    }

    else{

        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.08)";

    }


});





// ===============================
// SCROLL REVEAL ANIMATION
// ===============================


const revealElements =
document.querySelectorAll(
".service-card, .why-card, .gallery-main, .gallery-small div"
);



const revealOnScroll = ()=>{


    revealElements.forEach(element=>{


        const position =
        element.getBoundingClientRect().top;


        const screenHeight =
        window.innerHeight;



        if(position < screenHeight - 100){


            element.classList.add("show");


        }


    });


};



window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();





// ===============================
// CURRENT YEAR FOOTER
// ===============================


const year =
document.querySelector(".copyright");


if(year){

    const currentYear =
    new Date().getFullYear();


    year.innerHTML =
    `© ${currentYear} Lets Essentials. All Rights Reserved.`;

}
