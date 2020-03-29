// Load More Script
$(function() {
  $(".card")
    .slice(0, 5)
    .show();
  $("#load-more").on("click", function(e) {
    e.preventDefault();
    $(".card:hidden")
      .slice(0, 5)
      .slideDown();
    if ($(".card:hidden").length == 0) {
      $("#load-more").fadeOut("slow");
    }
    $("html,body").animate(
      {
        scrollTop: $(this).offset().top
      },
      1500
    );
  });
});
//service slide function
let slides = document.getElementsByClassName("slide"),
	index=0;
show();

function show() {
	let i; 
	for(i=0; i<slides.length; i++) {
		slides[i].style.display = "none";
	}

	index++;
	if(index>slides.length) {
		index = 1;
}

slides[index-1].style.display = "block";
setTimeout(show, 5000);
}

// flip
$(document).ready(function(){
	// set up hover panels
	// although this can be done without JavaScript, we've attached these events
	// because it causes the hover to be triggered when the element is tapped on a touch device
	$('.hover').hover(function(){
		$(this).addClass('flip');
	},function(){
		$(this).removeClass('flip');
	});
});
// carousel call
jQuery(document).ready(function($) {
        		"use strict";
        		//  TESTIMONIALS CAROUSEL HOOK
		        $('#customers-testimonials').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,
		            margin: 0,
		            autoplay: true,
		            dots:true,
		            autoplayTimeout: 8500,
		            smartSpeed: 450,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 2
		              },
		              1170: {
		                items: 3
		              }
		            }
		        });
        	});


























