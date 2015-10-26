(function($) {

	//Function Name 
    $.fn.slideIt = function(options) {
    	
    	// Variables for slider
    	var container = $('.slideIt');
    	var sliderSlide =  $('.slideIt ul');
    	var containerWidth = $(window).width();
    	var tstW = $(".imgGallery").width();
    	var slides = $(".slideIt > ul > li");
    	var numberOfSlides = slides.length;
    	var sliderWindow = numberOfSlides * containerWidth ;
    	var currentPosition = 0;
		var slideShowInterval;
		var bclick;
		var indexOfbClick = $('.bulletsContainer li').index();
		var imgGallery = $(".slideIt > ul > li > img");
	

		// Default settings

		var settings = $.extend({
           autoplay:true,
           speed : 2000,
           arrows :true,
           bullets : true,
           imageGallery : true
        }, options);

		sliderSlide.css('width', sliderWindow + "%");
		slides.css('width', containerWidth + "px");


		// For Responsive 
		$(window).resize(function(){ 
			containerWidth = $(window).width();
			slides.css('width', containerWidth + "px");
			sliderWindow = numberOfSlides * containerWidth ;
			sliderSlide.css('width', sliderWindow + "%");
			sliderSlide.css({'marginLeft' : containerWidth*(- currentPosition)});
		});

		return this.each( function() {

			// Slider Function
			function slideShow (pos){
				if(pos!=null){	
				
					// For Next Arrow
					if (pos == 'next'){
						if (currentPosition == numberOfSlides - 1){
							currentPosition = 0;
						}
						else{
							currentPosition = currentPosition + 1;

						}
					}
					
					// For previos Arrow

					if( pos == 'prev'){
						
						if (currentPosition == 0){
							currentPosition = numberOfSlides  - 1;
						}
						else{
							currentPosition = currentPosition - 1;
						}
						
					}

					if (pos == 'custom'){
						currentPosition = bclick;
					}

				}
				else{
					currentPosition++;
					indexOfbClick++;
				}

				// Animation func
				if (numberOfSlides > currentPosition){

					sliderSlide.stop().animate({'marginLeft' : containerWidth*(- currentPosition)},1000);
					$(".imgGallery ul").stop().animate({'marginLeft' : (170*(- currentPosition))},1000);
					
					$('.imgGallery li').removeClass("active").eq( currentPosition ).addClass("active");
					$('.bulletsContainer li').removeClass("active").eq( currentPosition ).addClass("active");
					
				}
				else{
					currentPosition = -1;
				}	
			}

			// Settings 
			
			// For AutoPlay
			if ( settings.autoplay == true ) {
				slideShowInterval = setInterval(slideShow , settings.speed);
			}

			// For Arrows
			if( settings.arrows == true ){
				container.append( "<div class='rightArrow'> Right</div>" );
				container.append( "<div class='leftArrow'> Left</div>" );

				$('.rightArrow').stop().click(function(){
					slideShow('next');
				});
				$('.leftArrow').stop().click(function(){
					slideShow('prev');
				});
			}


			// For Bullets
			if( settings.bullets == true ){
				container.append( "<ul class='bulletsContainer'></ul>");

				for (var i = 1 ; i <= numberOfSlides; i++) {
					$(".bulletsContainer").append( "<li>" + i +"</li>" );
				};
				$('.bulletsContainer li:first').addClass("active");
				$('.bulletsContainer li').stop().click(function(){
					// pos.preventDefault();
					$('.bulletsContainer li').removeClass("active");
					bclick = $(this).index();
					slideShow('custom');
					$(this).addClass("active");
				});
			}

		
			// For Image gallery
			if( settings.imageGallery == true ){
				container.after( "<div class='imgGallery'><ul></ul></div>");
				$(".imgGallery ul").css('width', sliderWindow + "%");

				imgGallery.each(function(){
					var srcs = $(this).attr("src");
					$(".imgGallery > ul").append( "<li><img src='" + srcs + "'/></li>" );
				});
				$('.imgGallery li:first').addClass("active");
				$('.imgGallery li').stop().click(function(){
					$('.imgGallery li').removeClass("active");
					bclick = $(this).index();
					slideShow('custom');
					$(this).addClass("active");
				});
			}
		});
    }

}(jQuery));