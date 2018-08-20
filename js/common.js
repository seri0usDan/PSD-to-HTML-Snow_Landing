$(function() {
	$(".hamburger").click(function() {
		$(".hamburger").toggleClass(" is-active");
		$(".hamburger-inner").toggleClass(" is-black");
		$(".main-nav").toggleClass(" show");
	});
	$(".anchor").click(function(){
		$(".main-nav").toggleClass(" show");
		$(".hamburger-inner").toggleClass(" is-black");
		$(".hamburger").toggleClass(" is-active");
	});
});

	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
			loop: true,
			items: 1,
			dots: true,
			autoplay: true,
			autoplayHoverPause: true,
			dotsContainer: ".owl-buttons"
		});

	$(".clients-carousel").owlCarousel({
		loop: true,
		items: 5,
		nav: false,
		dots: false,
		center: false,
		autoWidth: true,
		margin: 0
	});
	
	$(".blog-section__blogpost-carousel").owlCarousel({
		loop: false,
		items: 3,
		dots: true,
		autoplay: true,
		autoplayHoverPause: true,
		center: false,
		autoWidth: false,
		dotsContainer: ".blogpost-carousel_owl-buttons"
	});

	$("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
	});
	
});
