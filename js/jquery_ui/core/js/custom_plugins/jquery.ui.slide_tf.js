/*!
 * jQuery UI Slide - True or False 0.0
 *
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 * Optional:
 *  jquery.effects.core.js
 */
(function($, undefined) {
	$.widget("ui.slide_tf", {
    options: { 
		chances: 2,
		disabled: null
    },
	
	_create: function() {
		
		$(this.element, 'div').addClass('ui-slideshow-item');
		$('input:button', this.element ).button({ disabled: false });
		
		//$(this).generateDialog( $('.correct', this.element ), this.element );
		//$(this).generateDialog( $('.incorrect', this.element ), this.element );
		//$(this).generateDialog( $('.failed', this.element ), this.element );
		//$(this).generateDialog( $('.instructions', this.element ), this.element );
		//$(this).generateDialog( $('.activation', this.element ), this.element );
		
		$('.incorrect', self.element ).dialog(
		"option", "buttons", [
			{
				text: "Try Again",
				click: function() { $(this).dialog("close"); }
			}]
		);
						
		$('.failed .correct_answer', this.element).html($('input:button[data-correct="true"]', this.element ).val());
		
		$(this.element).css({ 'position': 'relative' });
		
		this.tries = 0;
		this.completed = false;
		
		this._events();
		
	},
	reInit: function() {
		if ( !(this.completed) ) {
			this.enableButtons();
		}
	},
	destroy: function() {
		/**
		 * Default function of a UI widget.
		 * This will destroy the widget and remove any injected code.  
		 */
		$(this.element, 'div').removeClass('ui-slideshow-item');
		return this;
	},
	_events: function() {
		/**
		 * Events for navigation.
		 * Includes hover state and click events.
		 */
		var self = this,
			o = this.options;
		
		$('input:button', this.element ).bind('click', function(element){
			
			if ( o.disabled ) {
				return;	
			}
			
			if ( !($(this, self.element).button( "option", "disabled" ) ) ) {
				
				if ( $(this).attr('data-correct') == "true" ) {
					$('.correct', self.element ).dialog('open');
					self.tries = 0;
					self.disableButtons();
					self.element.trigger('CORRECT');
				}
				else {
					self.tries++;
					
					if ( self.tries == o.chances ) {
						
						$('.failed', self.element ).dialog('open');
						self.tries = 0;
						self.disableButtons();
						self.element.trigger('CONTINUE');
					} else {
						
						
						$('.incorrect', self.element ).dialog('open');
					}
				}
			}
			
			element.preventDefault();
		});
	},
	disableButtons: function() {
		$('input:button', this.element ).button('disable');
		this.completed = true;
	},
	enableButtons: function() {
		$('input:button', this.element ).button('enable');
		this.completed = false;
	},
	doProceed: function() {
		if ( this.tries == 0 ) { return true; } else { return false; }
	},
	getCompleted: function() {
		return this.completed;	
	},
	setCompleted: function( value ) {
		this.completed = value;	
	}
	
	});
	$.extend($.ui.slide_tf, {
		version: 0.3
	});
})(jQuery);