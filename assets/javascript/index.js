'use strict';




                //   mobile toggler

let togg = document.querySelectorAll(".togglers").length;
for (let i = 0; i < togg; i++) {
    document.querySelectorAll(".togglers")[i].addEventListener("click",function (){
        toggleNav();
    });   
};

const navbar = document.getElementById("data-navbar");

const toggleNav = () => navbar.classList.toggle("working");


            //    slide

const slides = document.querySelectorAll(".slides figure");
const indicators = document.querySelectorAll('.dicator')
let slideIndex = 0;
let interValid = null;


// initializeSlider
document.addEventListener("DOMContentLoaded", initializeSlider);


function initializeSlider() {
    
   if (slides.length > 0) {
        slides[slideIndex].classList.add("displayslide");
        interValid = setInterval(nextSlide, 5000);
   }
}   

function showSlide(index){

    if (index >= slides.length) {
        slideIndex = 0;
    }
     else if (index < 0) {
        slideIndex = slides.length - 1;
    } 

     slides.forEach(slide => {
        slide.classList.remove("displayslide");
     });
     slides[slideIndex].classList.add("displayslide");
     indicators.forEach((indicator, index) => {
           indicator.classList.toggle("working", index === slideIndex);
       });

}
function prevSlide(){
    clearInterval(interValid);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
   slideIndex++;
   showSlide(slideIndex);
}
function gotoSlide(index) {
  slideIndex = index;
  showSlide();
}
