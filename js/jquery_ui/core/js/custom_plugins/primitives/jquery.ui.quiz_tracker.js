/*!
 * jQuery UI Quiz Tracker 0.0
 *
 * Copyright 2011, Rob Layton
 * http://www.roblayton.com
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 * 
 */
(function($, undefined) {
	$.widget("ui.quiz_tracker", {
    options: {
		total: 0,
		chances: 2,
		results: null
			
    },
		_create: function() {
			/**
			 * Default function of a UI widget.
			 * Inject UI Navigation HTML into designated container.
			 * Set the initial dimensions of the navigation.
			 * If a tracker is requested then generate tracker.
			 * Set the initial state of the navigation.
			 * Attach events to the navigation. 
			 */
			 
			 
			$('.ui_results', this.element, 'div').generateEndButton( 'restart' );
		
			this.tries = 0;
			this.correct = 0;
			this.percentage = 0;
			this.points = 0;
			this.totalPoints = 0;
			this.results = null;
			
			if ( this.options.results != null ) {
					this.results = this.options.results;
					
					this.reInit();
			}
			
			this._events();
			
		},
		_events: function() {
			$('.ui_restart', this.element).bind('click', function(element){
				
				element.preventDefault();
			
				
				if ( !($(this, self.element).button( "option", "disabled" ) ) ) {
					$('.ui-navigation-header .restart', this.element).trigger('click');
				}
				
			});
		},
		increment: function( correct, points ) {
			
			var self = this;
			
			if ( correct == true) {
				this.correct++;
				
				this.tries = 0;
				if ( points != undefined ) { this.points += points.earned; }
				if ( points != undefined ) { this.totalPoints += points.possible; }
				
				if ( this.results != null ) {
					$( '.num_correct', this.element ).html(this.correct);
					$( '.num_total', this.element ).html(this.options.total);
					$( '.percentage', this.element ).html( Math.round(this.getPercentage() * 100 ) + '%');
					$( '.points', this.element ).html( this.points );
					$( '.points_total', this.element ).html( this.totalPoints );
					$( '.pointsFeedback', this.element ).addClass('invisibleElement');
					
					
					$($( '.pointsFeedback' ).get().reverse(), this.element).each( function() {
						if ( self.points >= Number($(this).attr('data-min')) ) {
							$(this).removeClass('invisibleElement');
							return false;
						}
						
						
						
					});
					
				}
			}
			else {
				this.tries++;
				
				if ( this.tries == this.options.chances ) {
					this.element.trigger('FAILED');
					this.tries = 0;
					if ( points != undefined ) { this.totalPoints += points.possible; }
				}
			}
			
			
		},
		getPercentage: function() {
			return ( this.correct / this.options.total );
		},
		getCorrect: function() {
			return this.correct;
		},
		getTotal: function() {
			return this.options.total;
		},
		doProceed: function() {
			if ( this.tries == 0 ) { return true; } else { return false; }
		},
		reInit: function() {
			
			this.tries = 0;
			this.correct = 0;
			this.percentage = 0;
			this.totalPoints = 0;
			this.points = 0;
			
			$( '.num_correct', this.element ).html('0');
			$( '.num_total', this.element ).html(this.options.total);
			$( '.percentage', this.element ).html('0%');
			$( '.points', this.element ).html('0');
			$( '.points_total', this.element ).html( this.options.totalPoints );
			$( '.pointsFeedback', this.element ).addClass('invisibleElement');
		},
		destroy: function() {
			/**
			 * Default function of a UI widget.
			 * This will destroy the widget and remove any injected code.  
			 */
			
			return this;
		}
	});
	$.extend($.ui.quiz_tracker, {
		version: 0.3
	});
})(jQuery);