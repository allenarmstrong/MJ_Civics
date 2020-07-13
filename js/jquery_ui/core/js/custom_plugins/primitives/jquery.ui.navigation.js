/*!
 * jQuery UI Navigation 0.0
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
	$.widget("ui.navigation", {
    options: {
		total: 0,
		autoProgress: true,
		prevButton: true,
		restartButton: true,
		nextButton: true,
		label: "page",
		limit: null,
		disabled: null
			
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
			
			
			this.animated = false;
			this.element.prepend('<div class="ui-navigation-header ui-widget-header ui-corner-all"></div>');
			$('.ui-navigation-header', this.element ).prepend('<ul class="ui-navigation"></ul>');
			
			if ( this.options.restartButton ) {
				$('.ui-navigation', this.element ).append('<li><a class="restart" title="Restart" href="#">Restart</a></li>');
				$('.ui-navigation-header .restart', this.element ).button( { icons: { primary: "ui-icon-seek-first" },text: false });
			}
			
			if ( this.options.prevButton ) {
				$('.ui-navigation', this.element ).append('<li><a class="prev" title="Prev" href="#">Prev</a></li>');
				$('.ui-navigation-header .prev', this.element ).button( { icons: { primary: "ui-icon-circle-triangle-w" },text: false });
			}
			
			if ( this.options.nextButton ) {
				$('.ui-navigation', this.element ).append('<li><a class="next" title="Next" href="#">Next</a></li>');
				$('.ui-navigation-header .next', this.element ).button( { icons: { primary: "ui-icon-circle-triangle-e" },text: false });
			}
			
			if ( typeof this.options.disabled !== "boolean" ) {
				this.options.disabled = this.element.attr( "disabled" );
			}
			
			if ( this.element.is( ":disabled" ) ) {
				options.disabled = true;
			}
			 
			if ( this.options.limit == null ) { this.options.limit = this.options.total; }
			
			 
			this.current = 1;
			this._setTracker();
			this._events();
			this._navigationState();
			
		},
		destroy: function() {
			/**
			 * Default function of a UI widget.
			 * This will destroy the widget and remove any injected code.  
			 */
			if ( this.options.restartButton ) { $('.ui-navigation-header .restart', this.element ).unbind('click'); }
			if ( this.options.prevButton ) { $('.ui-navigation-header .prev', this.element ).unbind('click'); }
			if ( this.options.nextButton ) { $('.ui-navigation-header .next', this.element ).unbind('click'); }
			$('.ui-navigation', this.element).remove();
			return this;
		},
		_determineLimit: function( type ) {
			
			switch ( type ) {
				
				case "page":
				var pageLimit = this.current > this.options.limit ? this.options.limit : this.current;
				return pageLimit;
				break;
				
				case "total":
				var totalLimit = this.options.total > this.options.limit ? this.options.limit : this.options.total;
				return totalLimit;
				break;	
			}
		},
		_setTracker: function() {
			
			$('.ui-navigation', this.element).after('<p class="ui-navigation-tracker">' + this.options.label + ' ' + this._determineLimit( "page" ) +' of '+ this._determineLimit( "total" ) +'</p>');
		},
		updateTracker: function() {
			
			$('.ui-navigation-tracker', this.element).html( this.options.label + ' ' +  this._determineLimit( "page" ) +' of '+ this._determineLimit( "total" ) );
			return this;
		},
		_navigationState: function() {
			
			/**
			 * Enable or disable navigation depending on current position.
			 */
			if(this.current == 1){
				$('.ui-navigation-header .restart', this.element).button('disable');
				$('.ui-navigation-header .prev', this.element).button('disable');
				
				if( this.options.autoProgress == false )
				{
					//$('.ui-navigation-header .next', this.element).button('disable');
				}
				
      		}
			else {
				
				if ( this.options.prevButton ) {
					$('.ui-navigation-header .restart', this.element).button('disable');
					$('.ui-navigation-header .prev', this.element).button('enable');
				}
			}
			
			if(this.current == this.options.total ){
				if ( this.options.restartButton /*&& this.options.autoProgress == true*/ ) {
					this.element.trigger( 'END' );
				}
				//if ( this.options.nextButton ) { $('.ui-navigation-header .next', self.element).button('disable'); }
				//if ( this.options.nextButton ) { $('.ui-navigation-header .next', this.element).button('disable'); }
				
      		}
			else {
				
				if ( this.options.nextButton ) {
					if ( this.options.autoProgress == true )
					{
						//$('.ui-navigation-header .next', this.element).button('enable');
					}
					else
					{
						
						//$('.ui-navigation-header .next', this.element).button('disable');
					}
				}
			}
		},
		activateNext: function( state ) {
			
			if ( state == false) {
				$('.ui-navigation-header .next', this.element).button('disable');
			} else {
				$('.ui-navigation-header .next', this.element).button('enable');
			}
		},
		activatePrev: function( state ) {
			
			if ( state == false ) {
				$('.ui-navigation-header .prev', this.element).button('disable');
			} else {
				$('.ui-navigation-header .prev', this.element).button('enable');
			}
		},
		activateRestart: function( state ) {
			if ( state == false ) {
				$('.ui-navigation-header .restart', this.element).button('disable');
			} else {
				$('.ui-navigation-header .restart', this.element).button('enable');
			}
		},
		_events: function() {
			/**
			 * Events for navigation.
			 * Includes hover state and click events.
			 */
			var self = this,
				o = this.options
			
			if ( this.options.nextButton ) {
				$('.ui-navigation-header .next', this.element).bind('click', function(element){
					
					element.preventDefault();
					
					if ( o.disabled ) {
						return;
					}
					
					
					
					
					if(self.current < o.total && !($('.ui-navigation-header .next', self.element).button( "option", "disabled" ) )){
						self.current++;
						self._navigationState();
						self.updateTracker();
						self.element.trigger('TRACKER_UPDATED', { selected: "Next", index: self.current });
					}
					
					if(self.current == o.total ){ $('.ui-navigation-header .next', self.element).button('disable'); }
				});
			}
			if ( this.options.prevButton ) {
				$('.ui-navigation-header .prev', this.element).bind('click', function(element){
					
					element.preventDefault();
					
					if ( self.options.disabled ) {
						return;
					}
					
					
					if(self.current > 1 && !($('.ui-navigation-header .prev', self.element).button( "option", "disabled" ) )){
						self.current--;
						self._navigationState();
						self.updateTracker();
						self.element.trigger('TRACKER_UPDATED', { selected: "Previous", index: self.current });
					}
				});
			}
			if ( this.options.restartButton ) {
				$('.ui-navigation-header .restart', this.element).bind('click', function(element){
					
					element.preventDefault();
					
					if ( self.options.disabled ) {
						return;
					}
					
					
					if(self.current > 1 && !($('.ui-navigation-header .restart', self.element).button( "option", "disabled" ) )){
						self.element.trigger('TRACKER_UPDATED', { selected: "Restart", index: self.current });
						self.current = 1;
						self._navigationState();
						self.updateTracker();
						self.element.trigger('RESTARTED');
					}
				});
			}
			
		},
		disable: function( value ) {
			this.options.disabled = value;
			
			if ( value == true ) {
				$('.ui-navigation-header .ui-navigation', this.element).css({ 'opacity' : 0.5 });
				$('.ui-navigation-header .next', this.element).css({ 'cursor' : 'default' });
				$('.ui-navigation-header .prev', this.element).css({ 'cursor' : 'default' });
			} else {
				$('.ui-navigation-header .ui-navigation', this.element).css({ 'opacity' : 1 });
				$('.ui-navigation-header .next', this.element).css({ 'cursor' : 'pointer' });
				$('.ui-navigation-header .prev', this.element).css({ 'cursor' : 'pointer' });
			}
		},
		getCurrent: function() {
			return this.current;
		},
		getTotal: function() {
			return this.options.total;
		}
	});
	$.extend($.ui.navigation, {
		version: 0.3
	});
})(jQuery);