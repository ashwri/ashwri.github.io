/*$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
   // $(window).scroll( function(){
    
        /* Check the location of each desired element */
     //   $(".scroll-fade-in").each( function(i){
            
       /*     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
           /* if( bottom_of_window > bottom_of_object ){
                
                $(this).fadeIn();
                    
            }
            
        }); 
    
    });
    
});*/

//AOS.init();
//window.addEventListener('load', AOS.refresh);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function addMenu(){
    var x = document.getElementById("nav-bar");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}