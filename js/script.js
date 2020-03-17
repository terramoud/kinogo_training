jQuery(document).ready(function($) {
	/*117.133x166.717*/
	/*123.133x172.717*/
	/*iq445 320x450 portreit*/
	/*iq445 533x239 landscape*/


/*	$(".indentation").data("blah", "hello");
	alert($(".indentation").data("blah"));
	var option;
	var a = function(p1){
		for(option in this) {
			document.write(option + ':' + this[option] + "<br/>");
		}
	}
	a("asdzxc");*/
	//jQuery("*").css('background-color', 'rgba(0,0,0,0.2)');
		/*make a carousel adaptive*/
	$('.starrr').starrr({
      change: function(e, value){
        if (value) {
          $('.your-choice-was').show();
          $('.choice').text(value);
        } else {
          $('.your-choice-was').hide();
        }
      }
    });

    function adaptiveRating(){
    	var namberOfRatingDiv, rating;
		namberOfRatingDiv = jQuery(".starrr").length;
    	if (jQuery(".rating-bookmarks div:first").hasClass('starrr') == true && window.innerWidth < 992) {
    		rating = jQuery(".starrr").detach();
    		for (var i = 0; i < namberOfRatingDiv; i++) {
    			jQuery(".content").eq(i).append(rating.eq(i));
    		}
    	};
    	if (jQuery(".content div:last").hasClass('starrr') == true && window.innerWidth >= 992) {
    		rating = jQuery(".starrr").detach();
    		for (var i = 0; i < namberOfRatingDiv; i++) {
    			jQuery(".rating-bookmarks").eq(i).prepend(rating.eq(i));
    		}
    	};
    };

    function comments(){
    	var copyComments, copyCommentsH5, soonOnTheSite, soonOnTheSiteContent, updateSerials, updateSerialsContent;
    	if (jQuery("aside").css('display') != "block" && window.innerWidth <= 767) {
	    	soonOnTheSite = jQuery(".soonOnTheSite").detach();
	    	soonOnTheSiteContent = jQuery(".soonOnTheSiteContent").detach();
	    	updateSerials = jQuery(".updateSerials").detach();
	    	updateSerialsContent = jQuery(".updateSerialsContent").detach();
	    	copyComments = jQuery("#comments").detach();
	    	copyCommentsH5 = jQuery(".recentComments").detach();
	    	jQuery(".wrapper-update-serials").prepend(updateSerials);
	    	jQuery("#show-hide-update-serials").append(updateSerialsContent);
	    	jQuery(".soon").append(soonOnTheSite);
	    	jQuery(".soon").append(soonOnTheSiteContent);

	    	jQuery("section").append(copyCommentsH5);
	    	jQuery("section").append(copyComments);
    	};
    	if (jQuery("aside").css('display') == "block" && window.innerWidth > 767) {	
			soonOnTheSite = jQuery(".soonOnTheSite").detach();
	    	soonOnTheSiteContent = jQuery(".soonOnTheSiteContent").detach();
	    	updateSerials = jQuery(".updateSerials").detach();
	    	updateSerialsContent = jQuery(".updateSerialsContent").detach();
	    	copyCommentsH5 = jQuery(".recentComments").detach();
	    	copyComments = jQuery("#comments").detach();
	    	jQuery("aside").append(soonOnTheSite);
	    	jQuery("aside").append(soonOnTheSiteContent);
	    	jQuery("aside").append(updateSerials);
	    	jQuery("aside").append(updateSerialsContent);
	    	jQuery("aside").append(copyCommentsH5);
	    	jQuery("aside").append(copyComments);
    	};
    };

	function carouselFix(quantityImg){
		var quant = quantityImg;
		var imgBorderWidth = 6; //border width "#desktop img"
		var marginWidth = 8; //margin width "#desktop img"
		var quantity = 0; //!
			/*delete clone img*/
		var desktopImg = jQuery("#desktop img");
		for (var i = 0; i < desktopImg.length; i++) {
			for (var j = 0; j < desktopImg.length; j++) {
				if (jQuery("#desktop img").eq(i).attr('src') == jQuery("#desktop img").eq(j).attr('src') && i != j) {
					jQuery("#desktop img").eq(j).attr('src', 'del' + i + j);
				}
			}
		}
		jQuery("#desktop .carousel-item a").has("img[src^=del]").remove();
			/*creating a new html for the carousel, within a screen with a width of 768-992 pixels*/
		var namberOfDesktopImg = jQuery("#desktop img").length;
		var namberOfCarouselItem = Math.ceil(jQuery("#desktop img").length / quant);
		jQuery("#desktop img").attr('class', 'd-block w-1 mr-2');
		var slider = jQuery("#desktop .carousel-item a").detach(); //удаляем элемент
		jQuery("#desktop .carousel-item").remove();
		for (var i = 0; i < namberOfCarouselItem; i++) {
			jQuery("#desktop .carousel-inner").append('<div class="carousel-item"><div class="d-flex flex-row p-2"></div></div>');
			for (var j = 0; j < quant; j++) {
				if (quantity <= namberOfDesktopImg){
					jQuery("#desktop .d-flex").eq(i).append(slider.eq(quantity));
					quantity++;
				}else {
					break;
				}
			}
		}
			/*append is cut because first need copy all <a>, create clone img*/
		if (namberOfDesktopImg % quant != 0) {
			var cloneAllA = jQuery("#desktop .carousel-item a").clone();
			for (var i = 0; i < quant - (namberOfDesktopImg % quant); i++) {
				jQuery("#desktop .d-flex:last").prepend(cloneAllA.eq(namberOfDesktopImg - i - 2)); //the last div.d-flex has one img but it needs five on this insert the last four img from the previous div.d-flex
			}
		}
			/*del mr & add active*/
		jQuery("#desktop .d-flex img:last").attr('class', 'd-block w-1');
		jQuery("#desktop .carousel-item:first").attr('class', 'carousel-item active');
			/*proportions for responsive img*/
		var imgSize = (jQuery("#desktop .d-flex").width() - marginWidth * (quant - 1) - imgBorderWidth * quant) / quant;
		jQuery("#desktop img").width(imgSize);
		jQuery("#desktop img").height((imgSize - imgBorderWidth) / 200 * 300);
	};

	function animationingIconsOfCarousel(color){
		var icon = jQuery(".carousel-control-prev-icon, .carousel-control-next-icon");
		var prevIcon = jQuery(".carousel-control-prev-icon");
		var nextIcon = jQuery(".carousel-control-next-icon");
		if (color == "transparent") {
			var $sliderBorderColor = "transparent";
			jQuery(".carousel-control-prev-icon, .carousel-control-next-icon").css('background-color', $sliderBorderColor);
		} else {
			$sliderBorderColor = "#7D7E80";
			jQuery(".carousel-control-prev-icon, .carousel-control-next-icon").css('background-color', $sliderBorderColor);
		}
		icon.click(function(event) {
			$(this).css('background-color', 'transparent');
			$(this).mouseenter(function(event) {
				/*event mouseleave don't work while mouseenter no active*/
			});
		});
		icon.mouseleave(function(event) {
			$(this).css('background-color', $sliderBorderColor);
		});
		jQuery('.carousel-control-prev').click(function(event) {
			if (prevIcon.css('background-color') == $sliderBorderColor) {
				prevIcon.css('background-color', 'transparent');
			}
			else {
				$(this).mouseenter(function(event) {
					/*event mouseleave don't work while mouseenter no active*/
				});
			}
			$(this).mouseleave(function(event) {
				prevIcon.css('background-color', $sliderBorderColor);
			});
		});
		jQuery('.carousel-control-next').click(function(event) {
			if (nextIcon.css('background-color') == $sliderBorderColor) {
				nextIcon.css('background-color', 'transparent');
			}
			else {
				$(this).mouseenter(function(event) {
					/*event mouseleave don't work while mouseenter no active*/
				});
			}
			$(this).mouseleave(function(event) {
				nextIcon.css('background-color', $sliderBorderColor);
			});
		});	
	};

	function hideHeader(){
		jQuery("#navbarSupportedContent").attr('class', 'navbar-collapse px-3 collapse');
		jQuery("#xs-menu").attr('aria-expanded', "false");
		jQuery("#xs-menu").attr('class', "navbar-toggler d-md-none collapsed");
		jQuery("#search").attr('class', 'd-none d-md-none');
		jQuery("#show-update-serials").attr('data-show', 'hide');
		jQuery("#show-hide-update-serials").css('display', 'none');
		jQuery(".wrapper-update-serials").css('border-bottom-width', '0px');
	};
	function pagination320(){
		if (window.innerWidth <= 530) {
			jQuery(".page-link:first").empty().addClass('fa fa-long-arrow-left');
			jQuery(".page-link:last").empty().addClass('fa fa-long-arrow-right');
			jQuery('[data-resolution="320"]').css('display', 'none');
		};
		if (window.innerWidth >= 531) {
			jQuery(".page-link:first").removeClass('fa fa-long-arrow-left').text('Раньше');
			jQuery(".page-link:last").removeClass('fa fa-long-arrow-right').text('Позже');
			jQuery('[data-resolution="320"]').css('display', 'block');

		};
	};
	/*responsive carousel && header*/
	function responsiveCarousel(){
		if (window.innerWidth >= 992) {
			carouselFix(7);
			animationingIconsOfCarousel();
			hideHeader();
			jQuery(".column, .soonOnTheSiteContent").removeClass('flex-column');
		}

		if (window.innerWidth >= 768 && window.innerWidth < 992) {
			carouselFix(5);
			animationingIconsOfCarousel();
			hideHeader();
			jQuery(".column, .soonOnTheSiteContent").removeClass('flex-column');
		}
		
		if (window.innerWidth >= 531 && window.innerWidth <= 767) {
			carouselFix(3);
			animationingIconsOfCarousel();
			jQuery(".column, .soonOnTheSiteContent").removeClass('flex-column');	
		}

		if (window.innerWidth <= 530) {
			carouselFix(1);
			jQuery("#desktop .d-flex").attr('class', 'sl');
			jQuery(".sl img").attr('class', 'd-block');
				/*proportions for responsive img*/
			var imgSize = jQuery("#desktop .sl").width();
			jQuery("#desktop img").width(imgSize);
			jQuery("#desktop img").height(imgSize / (200 / 300));
			animationingIconsOfCarousel("transparent");
			jQuery(".column, .soonOnTheSiteContent").addClass('flex-column');
		}
	};

	responsiveCarousel();
    adaptiveRating();
    comments();
    pagination320();
	jQuery(window).bind('resize', function(event) {
		/* Act on the event */
		responsiveCarousel();
		adaptiveRating();
		comments();
		pagination320();

	});

	jQuery("#show-update-serials").click(function(event) {
    	if ($(this).attr('data-show') == "hide") {
    		$(this).attr('data-show', 'visible');
    		jQuery("#show-hide-update-serials").slideDown(300);			
    		jQuery(".wrapper-update-serias").css('border-bottom-width', '1px');
    		$(this).removeClass('animate-toggle-down-end').addClass('animate-toggle-down-start');
    	} else {
    		if ($(this).attr('data-show') == "visible") {
	    		$(this).attr('data-show', 'hide');
	    		jQuery("#show-hide-update-serials").slideUp(300);
	    		jQuery(".wrapper-update-serials").animate({"border-bottom-width": "0px"}, 300);
	    		$(this).removeClass('animate-toggle-down-start').addClass('animate-toggle-down-end');
	    	};
    	};
    });	

	jQuery("#xs-search").click(function(event) {
		if (jQuery("#search").hasClass('d-none') && jQuery("#xs-menu").attr('aria-expanded') == "false") {
			jQuery("#search").attr('class', 'd-block d-md-none');
		} else { 
			if (jQuery("#search").hasClass('d-none') == false && jQuery("#navbarSupportedContent").hasClass('show') == false) {
				jQuery("#search").attr('class', 'd-none d-md-none');
			}
			if (jQuery("#search").hasClass('d-none') && jQuery("#navbarSupportedContent").hasClass('show')) {
				jQuery("#navbarSupportedContent").attr('class', 'navbar-collapse px-3 collapse');
				jQuery("#xs-menu").attr('aria-expanded', "false");
				jQuery("#xs-menu").attr('class', "navbar-toggler d-md-none collapsed");
				jQuery("#search").attr('class', 'd-block d-md-none');
			}
		}
	});
	/*if search visible then install hidden because .navbar-collapse is show*/
	jQuery("#xs-menu").click(function(event) {
		/* Act on the event */
		if (jQuery("#search").hasClass('d-none') == false && jQuery("#xs-menu").attr('aria-expanded') == "false") {
			jQuery("#search").attr('class', 'd-none d-md-none');
		}
	});

});

