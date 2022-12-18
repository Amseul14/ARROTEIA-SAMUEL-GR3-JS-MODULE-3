console.table(console, document) ;
// ------------------------------------DARK-MODE--------------------------------------------------------
const btnLight = document.querySelector(".light") ;
const btnDark = document.querySelector(".dark") ;

console.log(btnDark, btnLight) ;

btnLight.addEventListener('click', function() {  
    btnDark.style.opacity = 0 ;
    btnLight.style.opacity = 1 ; 
    document.body.style.backgroundColor = "white" ;
    document.body.style.color = "black" ;
    console.log("cliqueL") ;
});

btnDark.addEventListener('click', function() {  
    btnDark.style.opacity = 1 ;
    btnLight.style.opacity = 0 ; 
    document.body.style.backgroundColor = "rgb(20, 18, 32)" ;
    document.body.style.color = "white" ;
    console.log("cliqueD") ;
});
//---------------------------------------------------------------------------------------------------------

//--------------------------------------------CAROUSSEL----------------------------------------------------
const slides = document.querySelectorAll(".slide");// images
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");
let curSlide = 0; // currentSlide
let maxSlide = slides.length - 1; 

//Slide suivante
nextSlide.addEventListener("click", function () {
    if (curSlide === maxSlide) curSlide = 0; // Remise a slide 0
        else curSlide++;

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`; // Deplace coord X pour les slides
    });
});

//Slide precedente 
prevSlide.addEventListener("click", function () {
    if (curSlide === 0) curSlide = maxSlide; // Remise a slide 0
        else curSlide--;

    slides.forEach((slide, indx) => { 
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`; // Deplace coord X pour les slides
    });
});
//-------------------------------------------------------------------------------------------------------------------
