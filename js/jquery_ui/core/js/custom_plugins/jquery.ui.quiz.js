/*!
 * jQuery UI Quiz 0.3.0
 *
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 * Optional:
 *  jquery.effects.core.js
 */
(function($, undefined) {
	$.widget("ui.quiz", {
    options: {
			scroll: 1,
			visible: 1,
			itemWidth: null,
			setWidth: false,
			easing: 'swing',
			speed: 'normal',
			disabled: null
    },
	
	_create: function() {
		var self = this;
			
		this.element.navigation({ total: $('#question', this.element ).size() + 1, autoProgress: false, prevButton: false, label: 'question', limit: 2 });
		this.element.navigation().bind('TRACKER_UPDATED', function(event, data) { self.slideAnimation( data.selected, data.index, self.distance ) });
		this.element.navigation().bind('RESTARTED', function(event) { self.element.quiztracker('reInit') });
		
		this.element.quiz_tracker({ total: $('#question', this.element ).size(), results: $('li #ui_results', this.element ) });
		this.element.navigation().bind('FAILED', function(event) { 
		
		$('#failed #correct_answer', this.element).html($('.ui-slideshow-slide li:nth-child('+ self.element.navigation('getCurrent')  +') input[value="correct"] + label', self.element ).text());
		$('#failed', this.element).dialog('open');
		$('#ui_submit', self.element ).button('disable');
		self.element.navigation('activateNext');
			
		});
		
		$(' > ul', this.element).addClass('ui-slideshow-slide');
		$('.ui-slideshow-slide > li', this.element).addClass('ui-slideshow-item');
		$('.ui-slideshow-slide', this.element).wrap('<div class="ui-slideshow-clip"></div>');
		
		if(!this.options.itemWidth) {
			this.options.itemWidth = $('.ui-slideshow-slide > li', this.element).outerWidth(true);
		}
		this.distance = parseInt(this.options.itemWidth * this.options.scroll, 10);
		this.index = 1;
		
		$('.ui_dialog', this.element ).dialog({ autoOpen: false });
		
		$('#ui_submit', this.element ).button( { disabled: false });
		
		this._events();
			
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
				o = this.options;
				
			this.index = index;
				
			this.element.navigation("disable", true);
			
			if(!this.animated){
				this.animated = true;
				
				switch( direction )
				{
					case "Next":
					distance *= -1;
					break
					
					case "Restart":
					distance *= ( index - 1 );
					break;
				}
				
				if ($('.ui-slideshow-slide', this.element).css('left') == 'auto') {
					current = 0;
				}
				else {
					current = parseInt($('.ui-slideshow-slide', this.element).css('left'), 10);
				}
				
				distance = current + distance;
				$('.ui-slideshow-slide', this.element).animate({left: distance + 'px'}, this.options.speed, this.options.easing, function() {
					self.animated = false;
					self.element.navigation("disable", false);
					$('#ui_submit', self.element ).button('enable');
			  });
			}
			
			/*
			$('.ui-navigation-header .prev', self.element)
			this.element.navigation().setOption( "disabled", true );
			*/
		},
	destroy: function() {
		/**
		 * Default function of a UI widget.
		 * This will destroy the widget and remove any injected code.  
		 */
		
		return this;
	},
	_events: function() {
		/**
		 * Events for navigation.
		 * Includes hover state and click events.
		 */
		var self = this,
			o = this.options
		
		$('#ui_submit', this.element).bind('click', function(element){
			
			if ( self.options.disabled ) {
					return;
			}
			
			
			if ( !($(this, self.element).button( "option", "disabled" ) ) ) {
				
				
				var s = $('.ui-slideshow-slide li:nth-child('+ self.element.navigation('getCurrent')  +') input[name="choice"]:checked', self.element ).val(); 
				
				if ( s == "correct" ) {
					self.element.quiz_tracker("increment", true);
					if ( ( self.element.navigation('getCurrent') ) != self.element.navigation('getTotal') ) {
						self.element.navigation('activateNext');
						$("#" + s).dialog('open');
						$(this, self.element ).button('disable');
					}
					else {
						
					}
				}
				else {
					self.element.quiz_tracker('increment');
					if ( !self.element.quiztracker('doProceed')) {
						$("#" + s).dialog('open');
					}
				}
			}
			element.preventDefault();
			
		});
			
	},
	disable: function( value ) {
		this.options.disabled = value;
	}
	});
	$.extend($.ui.quiz, {
		version: 0.3
	});
})(jQuery);