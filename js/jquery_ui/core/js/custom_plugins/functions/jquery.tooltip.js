/*
 * jQuery tooltip
 */
 
this.tooltip = (function($){

	$.fn.tooltip = function() {
		
		
		
		this.active = false;
		
		$('.ui_tooltip_content').addClass('invisibleElement');
		
		
		$('.ui_tooltip').mouseover(function(e) {
			 
			 if ( this.active == false || this.active == undefined ) {
				 this.active = true
				 //Remove the title attribute's to avoid the native tooltip from the browser
				 $(this).attr('title','');
				 
				 if( $(this).attr('data-action') == undefined || $(this).attr('data-action') == "over") {
					//Grab the title attribute's value and assign it to a variable
					this.tip = $('.ui_tooltip_content', this ).html();  
					 
					
					//Append the tooltip template and its value
					$(this).append('<div class="ui_tooltip_bubble"><div class="tipArrow"></div><div class="tipBody">' + this.tip + '</div></div>');    
					this.originalArrowOffsetLeft = $('.ui_tooltip_bubble .tipArrow').css('left');
					this.originalArrowOffsetTop = $('.ui_tooltip_bubble .tipArrow').css('top');
		
					
					//Set the X and Y axis of the tooltip
					if ( ( e.pageX + 25) - $(this).parents('.ui-slideshow-item', this.element).offset().left > 350 ) {
						$('.ui_tooltip_bubble .tipArrow').css({'left': ( parseInt($('.ui_tooltip_bubble').css('width')) - 60 )  });	
						$('.ui_tooltip_bubble').css('left', e.pageX - $(this).parents('.ui-slideshow-item').offset().left - ( parseInt($('.ui_tooltip_bubble').css('width')) - 20 )  );	
					}
					
					$('.ui_tooltip_bubble').css('top', (e.pageY + 25) - $(this).parents('.ui-slideshow-item').offset().top  );
					$('.ui_tooltip_bubble').css('left', ( e.pageX + 25) - $(this).parents('.ui-slideshow-item').offset().left );
					 
					//Show the tooltip with faceIn effect
					$('.ui_tooltip_bubble').fadeIn('500');
					//$('.ui_tooltip_bubble').fadeTo('10',1);
				 } 
				 else if ($(this).attr('data-action') == "click") {
					 $(this).css({'cursor': 'pointer'});
				 }
			 }
			 
		}).click(function(e) {
			
			if( $(this).attr('data-action') == "click" && ( this.active == false || this.active == undefined ) ) {
				
				this.active = true;
				$(this).css({'cursor': 'pointer'});
				//Grab the title attribute's value and assign it to a variable
				this.tip = $('.ui_tooltip_content', this ).html();   
				 
				//Remove the title attribute's to avoid the native tooltip from the browser
				$(this).attr('title','');
				 
				//Append the tooltip template and its value
				$(this).append('<div class="ui_tooltip_bubble"><div class="tipArrow"></div><div class="tipBody">' + this.tip + '</div></div>');    
				
				//Set the X and Y axis of the tooltip
				if ( ( e.pageX + 25) - $(this).parents('.ui-slideshow-item', this.element).offset().left > 350 ) {
					$('.ui_tooltip_bubble .tipArrow').css({'left': ( parseInt($('.ui_tooltip_bubble').css('width')) - 60 )  });	
					$('.ui_tooltip_bubble').css('left', e.pageX - $(this).parents('.ui-slideshow-item').offset().left - ( parseInt($('.ui_tooltip_bubble').css('width')) - 20 ) );	
				}
				
				$('.ui_tooltip_bubble').css('top', (e.pageY + 25) - $(this).parents('.ui-slideshow-item').offset().top  );
				$('.ui_tooltip_bubble').css('left', ( e.pageX + 25) - $(this).parents('.ui-slideshow-item').offset().left );
				 
				//Show the tooltip with faceIn effect
				$('.ui_tooltip_bubble').fadeIn('500');
				//$('.ui_tooltip_bubble').fadeTo('10',0.8);
			 }
		}).mousemove(function(e) {
		 
			//Keep changing the X and Y axis for the tooltip, thus, the tooltip move along with the mouse
			$('.ui_tooltip_bubble').css('top', (e.pageY + 25) - $(this).parents('.ui-slideshow-item', this.element).offset().top );
			
			if ( ( e.pageX + 25) - $(this).parents('.ui-slideshow-item', this.element).offset().left > 350 ) {
				$('.ui_tooltip_bubble .tipArrow').css({'left': ( parseInt($('.ui_tooltip_bubble').css('width')) - 60 )  });	
				$('.ui_tooltip_bubble').css('left', ( e.pageX + 25) - $(this).parents('.ui-slideshow-item').offset().left - ( parseInt($('.ui_tooltip_bubble').css('width')) - 20 ) );	
			}
			else {
				
				$('.ui_tooltip_bubble .tipArrow').css({'left': this.originalArrowOffsetLeft });
				$('.ui_tooltip_bubble').css('left', e.pageX - $(this).parents('.ui-slideshow-item').offset().left );	
			}
			
			if ( ( e.pageY + 25) - $(this).parents('.ui-slideshow-item', this.element).offset().top > 300 ) {
				$('.ui_tooltip_bubble').css('top', e.pageY - $(this).parents('.ui-slideshow-item').offset().top -  ( parseInt($('.ui_tooltip_bubble').css('height')) + 25 ) );	
				$('.ui_tooltip_bubble .tipArrow').css({'top': parseInt($('.ui_tooltip_bubble').css('height')) });
				$('.ui_tooltip_bubble .tipArrow').css({'border-width': '15px 15px 0px' });
				
				//console.log( $('.ui_tooltip_bubble').css('height'));
			}
			else {
				$('.ui_tooltip_bubble .tipArrow').css({'top': this.originalArrowOffsetTop });
				$('.ui_tooltip_bubble').css('top', (e.pageY + 25 ) - $(this).parents('.ui-slideshow-item').offset().top );	
				$('.ui_tooltip_bubble .tipArrow').css({'border-width': '0px 15px 15px' });
			}
			 
		}).mouseout(function(e) {
		 
		 		
				if (!e) var e = window.event;
				var tg = (window.event) ? e.srcElement : e.relatedTarget;
				
				if ( $(tg).parents('.ui_tooltip_bubble' ).length == 0  ) {
		 		this.active = false;
				//Put back the title attribute's value
				$(this).attr('title',$('.tipBody').html());
			 
				//Remove the appended tooltip template
				$(this).children('div.ui_tooltip_bubble').remove();
				} else {
					
				}
				
			
		});
		
		
	}
})(jQuery);