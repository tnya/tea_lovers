/* NAVBAR */
/*(function($) {
  $(function() {
    $('.toggle-overlay').click(function() {
      $('aside').toggleClass('open');
    });
  });
})(jQuery);
*/


/* CAROUSEL */
$('.carousel.carousel-slider').carousel({full_width: true, indicators: true, padding: 200},setTimeout(autoplay, 4500));
function autoplay() {
$('.carousel').carousel('next');
setTimeout(autoplay, 3500);
 }

/* SECCION 4: FOTOS */
/* Fade in (falta implementar y entenderlo)*/
$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});

