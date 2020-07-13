/*!
 * jQuery UI Slide - Date Picker 0.0
 *
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 * Optional:
 *  jquery.effects.core.js
 */
(function($, undefined) {
	$.widget("ui.slide_date_picker", {
    options: { 
		chances: 2,
    },
	
	_create: function() {
		
		$(this.element, 'div').addClass('ui-slideshow-item');
		$(this.element, 'div').generateEndButton( 'reset', 'submit' );
		
		$(this).generateDialog( $('#correct_feedback', this.element ), this.element );
		$(this).generateDialog( $('#incorrect_feedback', this.element ), this.element );
		$(this).generateDialog( $('#failed_feedback', this.element ), this.element );
		$('#failed_feedback #correct_answer', this.element).html($('#ui_text', this.element ).attr('name'));
		
		$(this.element).css({ 'position': 'relative' });
		$('.ui-dialog', this.element ).css({ 'position': 'fixed' });
		
		this.tries = 0;
		
		this._events();
		
	},
	reInit: function() {
		$('#ui_text', this.element ).each(function() {
			$(this).val('default');
		});
		
		$('#indicator', this.element ).remove();
		$('#ui_submit', this.element).button('enable');
		this.tries = 0;
	},
	destroy: function() {
		/**
		 * Default function of a UI widget.
		 * This will destroy the widget and remove any injected code.  
		 */
		$(this.element, 'li').removeClass('ui-slideshow-item');
		return this;
	},
	_events: function() {
		/**
		 * Events for navigation.
		 * Includes hover state and click events.
		 */
		var self = this,
			o = this.options;
		
		$('#ui_submit', this.element).bind('click', function(element){
			
			if ( o.disabled ) {
					return;
			}
			
			if ( !($(this, self.element).button( "option", "disabled" ) ) ) {
				
				var i = 0;
				var wrong = false;
				
				$('#ui_text option:selected', self.element ).each(function() {
					
					if ( $(this).val() == "correct" ){
						
					}
					else {
						wrong = true;
					}
					
					i++;
					
					if ( wrong ) {
						
						wrong = false;
						
						self.tries++;
						
						if ( self.tries == o.chances ) {
							$('#failed_feedback', self.element ).dialog('open');
							$('#ui_submit', self.element).button('disable');
							self.tries = 0;
							self.element.trigger('CONTINUE');
							self._disableButtons();
							self._displayCorrect();
							$('#indicator', self.element ).remove();
							i = 0;
						} else {
							$('#incorrect_feedback', self.element ).dialog('open');	
							self._checkAnswers();
						}
						
						return false;	
					} else {
						
						if ( i == $('#ui_text', self.element ).size() ) {
							$('#correct_feedback', self.element ).dialog('open');
							self.tries = 0;
							self.element.trigger('CORRECT');
							self._disableButtons();
							$('#indicator', self.element ).remove();
							i = 0;
							return false;	
						}
					}
				});
				
				
			}
			
			element.preventDefault();
		});
		
		$('#ui_reset', this.element).bind('click', function(element){
			
			if ( o.disabled ) {
					return;
			}
			
			if ( !($(this, self.element).button( "option", "disabled" ) ) ) {
				self.reInit();
			}
			
			element.preventDefault();
		});
	},
	_checkAnswers: function() {
		
		var self = this;
		
		$('#ui_text:input', self.element ).each(function() {
			
			if ( $(this).val() == "correct" ){
				$( $(this), self.element ).before('<span class="ui-icon ui-icon-circle-check" id="indicator"></span>');
				//$( $(this), self.element ).append('<span class="ui-icon ui-icon-circle-check ui-state-default">X</span>');
			} else {
				$( $(this), self.element ).before('<span class="ui-icon ui-icon-circle-close" id="indicator"></span>');
				//$( $(this), self.element ).append('<span class="ui-icon ui-icon-circle-close ui-state-default">X</span>');
			}
			
		});
	},
	_displayCorrect: function() {
		$('#ui_text', this.element ).each(function() {
			$(this).val('correct');
		});
	},
	_disableButtons: function() {
		$('input:button', this.element ).button('disable');
	},
	doProceed: function() {
		if ( this.tries == 0 ) { return true; } else { return false; }
	}
	
	});
	$.extend($.ui.slide_date_picker, {
		version: 0.3
	});
})(jQuery);