/*!
 * jQuery UI Slideshow 0.0
 *
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 * Optional:
 *  jquery.effects.core.js
 */
(function($, undefined) {
	$.widget("ui.slideshow", {
    options: {
			scroll: 1,
			visible: 1,
			itemWidth: null,
			itemHeight: null,
			setWidth: false,
			transition: 'slide',
			easing: 'swing',
			speed: 'normal'
    },
	
	_create: function() {
			var self = this,
			o = this.options;
			
			
			$(this.element).append('<div class="ui_shell_decoration"></span>');
			
			$('.ui_slides', this.element).addClass('ui-slideshow-slide');
			
			
			
			$('.ui-slideshow-slide > div', this.element).each(function(){ 
				
				$(this).generateSlide() ;
				
				if ( $('.activation', this ).length > 0 ) {
					$(self).generateActivation( this );
				}	
				
				if ( $('.instructions', this ).length > 0 ) {
					$(self).generateInstructions( this );
				}
			});
			
			$('.ui-slideshow-slide', this.element).wrap('<div class="ui-slideshow-clip"></div>');
			
			
			
			$('.ui-slideshow-slide', this.element).bind('CORRECT', function(event, data) { 
				
					if ( data == undefined || isNaN(data.points.earned) ) {
						self.element.quiz_tracker('increment', true );
					} else {
						self.element.quiz_tracker('increment', true, data.points );
					}
				
				
				if ( self.element.navigation('getCurrent') == self.element.navigation('getTotal') ){
					self.element.navigation( 'activateRestart' );
				} else {
					self.element.navigation( 'activateNext' );
				}
				
				if( $('.ui-slideshow-item', self.element).size() == 1 ) {
					$('.ui-slideshow-item', self.element).enableReset();
				}
			});
			
			$('.ui-slideshow-slide', this.element).bind('CONTINUE', function(event, data) {
				
				if ( data != undefined ) {
					self.element.quiz_tracker('increment', false, data.points );
				} else {
					self.element.quiz_tracker('increment', false );
				}
				
				if ( self.element.navigation('getCurrent') == self.element.navigation('getTotal') ){
					self.element.navigation( 'activateRestart' );
				} else {
					self.element.navigation( 'activateNext' );
				}
				
				if( $('.ui-slideshow-item', self.element).size() == 1 ) {
					
					$('.ui-slideshow-item', self.element).enableReset();
				}
			});
			
			
			
			
			
			
			
			if ($('.ui_results', this.element ).length === 1) { this.results = true; } else { this.results = false; }
			
			if ( this.results ) {
				this.element.navigation({ total: $('.ui-slideshow-slide > div', this.element ).length, autoProgress: false });
				this.element.quiz_tracker({ total: $('.ui_assessment', this.element ).length, results: $('div .ui_results', this.element ) });
				//this.element.navigation().bind('END', function(event) { self._checkSlide( self.element.navigation('getCurrent') - 1 ) });					
				this.element.navigation().bind('TRACKER_UPDATED', function(event, data) { self.slideAnimation( data.selected, data.index, self.distance ) });
				$('.ui-slideshow-item', this.element ).css({ 'height': ($('.ui-slideshow-item', this.element ).height() - 70) + 'px' });
					
			}
			else {
				
				if ( $('.ui-slideshow-slide > div', this.element ).length > 1 ) {
					
					self.element.navigation({ total: $('.ui-slideshow-slide > div', this.element ).length });	
					//this.element.navigation().bind('END', function(event) { self._checkSlide( self.element.navigation('getCurrent') - 1 ) });					
					self.element.navigation().bind('TRACKER_UPDATED', function(event, data) { self.slideAnimation( data.selected, data.index, self.distance ) });
					$('.ui-slideshow-item', this.element ).css({ 'height': ($('.ui-slideshow-item', this.element ).height() - 70) + 'px' });
					
						
				} else {
					
				}
			}
			
			if ( o.itemWidth == undefined && o.itemHeight == undefined ) {
				o.itemWidth = $(this.element).css('width');
				o.itemHeight = $(this.element).css('height');
			}
			
			
			this.defaultHeight = o.itemHeight;
			this.defaultWidth = o.itemWidth;
			
			
			
			
			
			if( o.itemWidth && o.itemHeight ) {
				self._resizeSlides({ newWidth: o.itemWidth, newHeight: o.itemHeight }, 0, true);	
			}
			
			o.itemWidth = $('.ui-slideshow-slide > div', this.element).outerWidth(true);
			
			
			this.distance = parseInt(o.itemWidth) * o.scroll;
			
			this.index = 0;
			
			self._checkSlide( 0 );
			
	},
	destroy: function() {
		/**
		 * Default function of a UI widget.
		 * This will destroy the widget and remove any injected code.  
		 */
		$('.ui-slideshow-slide', this.element).unwrap('<div class="ui-slideshow-clip"></div>');
		$(".ui-slideshow-slide > div", this.element).destroy();
		$(' > div', this.element).removeClass('ui-slideshow-slide');
		return this;
	},
		slideAnimation: function(direction, index, distance ) {
			/**
			 * After a click event triggered the carousel is animated.
			 * Further click events prevented during animation.
			 * If tracker enabled it will be updated.
			 * Navigation state updated.
			 * Further click events then enabled.
			 */
			 
			 
			var self = this,
			o = this.options,
			page = 0;
			
			
			if(!this.animated){
				this.animated = true;
				self.element.navigation("disable", true);
				$('.ui-slideshow-slide > div', self.element).children().removeClass('nonexistentElement');
				
				switch( direction )
				{
					case "Previous":
					if ( !(self.results) ) { self._enableSlide( index - 1 ); }
					self._checkSlide( index - 1 );
					page = index - 1;
					self._resizeSlides({ newWidth: $('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).attr('data-width'), newHeight: $('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).attr('data-height') }, page);
					distance = $('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).outerWidth() + parseInt($('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).css('padding-left')) * o.scroll ;
					
					break
					
					case "Next":
					if ( !(self.results) ) { self._enableSlide( index - 1 ); }
					self._checkSlide( index - 1 );
					page = index - 1;
					self._resizeSlides({ newWidth: $('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).attr('data-width'), newHeight: $('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).attr('data-height') }, page);
					distance = $('.ui-slideshow-slide > div:eq('+ ( page - 1 ) +')', self.element).outerWidth() + parseInt($('.ui-slideshow-slide > div:eq('+ ( page - 1 ) +')', self.element).css('padding-left')) * o.scroll ;
					
					
					distance *= -1;
					break
					
					case "Restart":
					
					self._enableSlides();
					self._checkSlide( 0 );
					page = 0;
					
					self._resizeSlides({ newWidth: $('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).attr('data-width'), newHeight: $('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).attr('data-height') }, page);
					
					
					self.totalWidth = 0;
					
					$('.ui-slideshow-slide > div', self.element).each( function() {
						self.totalWidth += $(this).outerWidth() + parseInt($(this).css('padding-left'));
					});
					
					distance = ( self.totalWidth - $('.ui-slideshow-slide > div:eq('+ ( $('.ui-slideshow-slide > div', self.element ).length - 1 ) +')', self.element).outerWidth() - parseInt($('.ui-slideshow-slide > div:eq('+ ( 0 ) +')', self.element).css('padding-left')) * o.scroll);
					
					self.element.quiz_tracker('reInit');
					break;
				}
				//this.distance = parseInt(o.itemWidth) * o.scroll;
				
				
				if ($('.ui-slideshow-slide', this.element).css('left') == 'auto') {
					current = 0;
				}
				else {
					current = parseInt($('.ui-slideshow-slide', this.element).css('left'), 10);
				}
				
				distance = current + distance;
				
				switch( o.transition ) {
					case 'slide':
						$('.ui-slideshow-slide', this.element).animate({left: distance + 'px'}, this.options.speed, this.options.easing, function() 		{
							self.animated = false;
							self.element.navigation("disable", false);
							
							$('.ui-slideshow-slide > div', self.element).children().addClass('nonexistentElement');
							$('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).children().removeClass('nonexistentElement');
							self.element.trigger( 'TRANSITION_COMPLETE', page );
							
					  });
					  
					break;
					
					case 'fade':
						$('.ui-slideshow-slide', this.element).fadeOut(o.speed, o.easing, function() {
							self.animated = false;
							
							$(this).css({left: distance + 'px'});
								
					  }).fadeIn(o.speed, o.easing, function() {
						 	self.element.navigation("disable", false);
							$('.ui-slideshow-slide > div', self.element).children().addClass('nonexistentElement');
							$('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).children().removeClass('nonexistentElement');
							self.element.trigger( 'TRANSITION_COMPLETE', page );
						  
					  });
					  
					  
					break;
					
					case 'blend':
					
						if ( direction == "Next" ) {
							var mar = $('.ui-slideshow-slide > div', self.element).outerWidth(true) * -1;
							
							$('.ui-slideshow-item:nth-child('+ ( index ) +')', self.element).css({'margin-left': mar, 'display' :'none'});
							$('.ui-slideshow-item:nth-child('+ ( index ) +')', self.element).fadeIn(o.speed, o.easing, function() {
								
								
									
									
									$('.ui-slideshow-item:nth-child('+ ( page ) +')', self.element).fadeOut(o.speed, o.easing, function() {
										self.animated = false;
										self.element.navigation("disable", false);
										$('.ui-slideshow-slide > div', self.element).children().addClass('nonexistentElement');
										$(this).show();
										$('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).children().removeClass('nonexistentElement');
										
										$('.ui-slideshow-slide', self.element).css({left: distance + 'px'});
										$('.ui-slideshow-item:nth-child('+ ( index ) +')', self.element).css({'margin-left': '0px'});
									});
									self.element.trigger( 'TRANSITION_COMPLETE', page );
							 });
							 
						}
						
						if ( direction == "Previous" ) {
							 
							var mar = $('.ui-slideshow-slide > div', self.element).outerWidth(true);
							
							$('.ui-slideshow-item:nth-child('+ ( index ) +')', self.element).css({'margin-left': mar});
							$('.ui-slideshow-item:nth-child('+ ( index + 1 ) +')', self.element).css({'margin-left': mar * -1});
							$('.ui-slideshow-item:nth-child('+ ( index + 1 ) +')', self.element).fadeOut(o.speed, o.easing, function() {
								
								
									
										self.animated = false;
										self.element.navigation("disable", false);
										$('.ui-slideshow-slide > div', self.element).children().addClass('nonexistentElement');
										$(this).show();
										$('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).children().removeClass('nonexistentElement');
										
										$('.ui-slideshow-slide', self.element).css({left: distance + 'px'});
										$('.ui-slideshow-item:nth-child('+ ( index ) +')', self.element).css({'margin-left': '0px'});
										$('.ui-slideshow-item:nth-child('+ ( index + 1 ) +')', self.element).css({'margin-left': '0px'});
									
										self.element.trigger( 'TRANSITION_COMPLETE', page );
							});
							
							
						}
					  
					  	if ( direction == "Restart" ) {
							
							$('.ui-slideshow-slide', this.element).fadeOut(o.speed, o.easing, function() {
							
							
							$(this).css({left: distance + 'px'});
							
							}).fadeIn(o.speed, o.easing, function() {
								self.animated = false;
								self.element.navigation("disable", false);
								$('.ui-slideshow-slide > div', self.element).children().addClass('nonexistentElement');
								$('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).children().removeClass('nonexistentElement');
							});
							
							self.element.trigger( 'TRANSITION_COMPLETE', page );
						}
					
					 
					 
					 
					break;	
				}
				
				
			  
			}
		},
		
		_resizeSlides: function( dimensions, page, instant ) {
			
			//console.log( this.defaultWidth, this.defaultHeight, this.navBuffer );
			
			var self = this;
		
			if( dimensions.newWidth != undefined ) {
				
				if ( !instant ) {
					
					$(this.element).animate({ 'width': dimensions.newWidth });
					$('.ui-slideshow-item:eq('+ ( page ) +')', self.element).animate({ 'width': parseInt(dimensions.newWidth) - 30 + 'px'});	
					$('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).animate({ 'width': parseInt(dimensions.newWidth) - 30 + 'px' });
					$('.ui-slideshow-clip', this.element ).animate({ 'width': parseInt(dimensions.newWidth) + 'px' });
					
				} else {
					$(this.element).css({ 'width': dimensions.newWidth });
					$('.ui-slideshow-item:eq('+ ( page ) +')', self.element).css({ 'width': parseInt(dimensions.newWidth) - 30 + 'px'});	
					$('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).css({ 'width': parseInt(dimensions.newWidth) - 30 + 'px' });
					$('.ui-slideshow-clip', this.element ).css({ 'width': parseInt(dimensions.newWidth) + 'px' });
					
				}
				
				this.distance = parseInt(dimensions.newWidth) * this.options.scroll;		
					this.options.itemWidth = dimensions.newWidth;
			}
			else {
				
				if ( !instant ) {
					$(this.element).animate({ 'width': this.defaultWidth });
					$('.ui-slideshow-clip', this.element ).animate({ 'width': this.defaultWidth });
					$('.ui-slideshow-item:eq('+ ( page ) +')', self.element).animate({ 'width': parseInt(this.defaultWidth) - 30 + 'px' });	
					$('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).animate({ 'width': parseInt(this.defaultWidth) - 30 + 'px' });
				} else {
					$(this.element).css({ 'width': this.defaultWidth });
					$('.ui-slideshow-clip', this.element ).css({ 'width': this.defaultWidth });
					$('.ui-slideshow-item:eq('+ ( page ) +')', self.element).css({ 'width': parseInt(this.defaultWidth) - 30 + 'px' });	
					$('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).css({ 'width': parseInt(this.defaultWidth) - 30 + 'px' });

				}
			}
			
			
			if ( $('.ui-slideshow-slide > div', this.element).length > 1 ) {
				this.navBuffer = $('.ui-navigation-header', this.element ).outerHeight() + 30;
			} else {
				this.navBuffer = 0;	
			}
			
			
			if( dimensions.newHeight != undefined ) {
				
				if ( !instant ) {
					$(this.element).animate({ 'height': dimensions.newHeight });
					$('.ui-slideshow-item:eq('+ ( page ) +')', self.element).animate({ 'height':parseInt(dimensions.newHeight) - parseInt(this.navBuffer) + 'px' });
					$('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).animate({ 'height': parseInt(dimensions.newHeight) - parseInt(this.navBuffer) + 'px'});
					$('.ui-slideshow-clip', this.element ).animate({ 'height': parseInt(dimensions.newHeight) - parseInt(this.navBuffer - 30) + 'px' });
				} else {
					$(this.element).css({ 'height': dimensions.newHeight });
					$('.ui-slideshow-item', self.element).css({ 'height':parseInt(dimensions.newHeight) - parseInt(this.navBuffer) + 'px' });
					$('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).css({ 'height': parseInt(dimensions.newHeight) - parseInt(this.navBuffer) + 'px'});
					$('.ui-slideshow-clip', this.element ).css({ 'height': parseInt(dimensions.newHeight) - parseInt(this.navBuffer - 30) + 'px' });
				}
				
				this.options.itemHeight = dimensions.newHeight;
			}
			else {
				if ( !instant ) {
					$(this.element).animate({ 'height': this.defaultHeight });	
					$('.ui-slideshow-item:eq('+ ( page ) +')', self.element).animate({ 'height': parseInt(this.defaultHeight) - parseInt(this.navBuffer) + 'px' });
					$('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).animate({ 'height': parseInt(this.defaultHeight)  - parseInt(this.navBuffer)  + 'px'});
					$('.ui-slideshow-clip', this.element ).animate({ 'height': parseInt(this.defaultHeight) - parseInt(this.navBuffer - 30)  + 'px' });	
				} else {
					$(this.element).css({ 'height': this.defaultHeight });	
					$('.ui-slideshow-item:eq('+ ( page ) +')', self.element).css({ 'height': parseInt(this.defaultHeight) - parseInt(this.navBuffer) + 'px' });
					$('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).css({ 'height': parseInt(this.defaultHeight)  - parseInt(this.navBuffer)  + 'px'});
					$('.ui-slideshow-clip', this.element ).css({ 'height': parseInt(this.defaultHeight) - parseInt(this.navBuffer - 30)  + 'px' });	
	
				}
				//$('.ui-slideshow-clip', this.element ).animate({ 'height': $('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).outerHeight() });
				//$('.ui-slideshow-item:eq('+ ( page ) +')', self.element).animate({ 'height': $('.ui-slideshow-slide > div:eq('+ ( page ) +')', self.element).outerHeight() });
			}
				
		},
		_checkSlide: function( index ) {
			
			var self = this;
			
			if ( $('.ui-slideshow-slide > div:eq('+ ( index ) +')', self.element).checkAutoProgress() == true ) {
				self.element.navigation( 'activateNext' );
				
				if ( self.element.navigation('getCurrent') == self.element.navigation('getTotal') ){
					
					self.element.navigation( 'activateRestart' );
				}
			} else {
				
				self.element.navigation( 'activateNext', false );
			}
			
			//console.log( $('.ui-slideshow-slide > div', this.element) );
			
			//$('.ui-slideshow-slide > div', this.element).addClass('nonexistentElement');
			//$('.ui-slideshow-slide > div:eq('+ ( index ) +')', self.element).removeClass('nonexistentElement');
		},
		_enableSlides: function() {
			$('.ui-slideshow-slide > div', this.element).each(function() { $(this).reEnable()});
		},
		_enableSlide: function( index ) {
			 $('.ui-slideshow-slide > div:eq('+ ( index ) +')', this.element).reEnable();
		}
	
	});
	$.extend($.ui.slideshow, {
		version: 0.3
	});
})(jQuery);