/*!
 * jQuery UI Slide - Fill in the Blank 0.0
 *
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 * Optional:
 *  jquery.effects.core.js
 */
(function($, undefined) {
	$.widget("ui.slide_fitb", {
    options: { 
		chances: 2,
		disabled: null
    },
	
	_create: function() {
		
		if( isNaN(this.options.chances)) { this.options.chances = 2; }
		
		$(this.element, 'div').addClass('ui-slideshow-item');
		$(this.element, 'div').generateEndButton( 'reset', 'submit' );
		
		$('.ui_datepicker', this.element).each(function(){
			$(this).datepicker({  defaultDate: $(this).attr('data-default') });
		});
		
		
		//$(this).generateDialog( $('.ui_dialog', this.element ), this.element );
		/*
		$('.ui_dialog', this.element ).each(function() {
			//console.log( this, self.element );
			$(self).generateDialog( $(this), self.element);
		});
		*/
		
		
		$( '.ui_accessible_label', this.element ).addClass('invisibleElement');
		
		$(this.element).css({ 'position': 'relative' });
		
		this.tries = 0;
		this.completed = false;
		
		this._events();
		
	},
	reInit: function() {
		if ( !(this.completed) ) {
		
			$('.ui_text', this.element ).each(function(){
				$(this).val('');
			});
			
			$('.ui_datepicker', this.element ).each(function(){
				$(this).val('');
			});
			
			$('.ui_select option:selected', this.element ).each(function(){
				$(this).parent().val('default');
			});
			
			//$('option', this ).val('');
			$('.indicator', this.element ).remove();
			this.enableButtons();
			this.tries = 0;
			
			
			$( ".ui_accessible_label", this.element ).html('');
		}
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
		
		$('.ui_submit', this.element).bind('click', function(element){
			
			element.preventDefault();
			
			if ( o.disabled ) {
					return;
			}
			
			if ( !($(this, self.element).button( "option", "disabled" ) ) ) {
				
				var wrong = false;
				var i = 0;
				
				$('.ui_datepicker', self.element ).each(function(){
					i++;
					if ( $(this).val() != $(this).attr('data-answer')) { wrong = true; }
					return;
					
				});
				
				$('.ui_text', self.element ).each(function() {
					i++;
					if ( $(this).val().toUpperCase() != $(this).attr('data-answer').toUpperCase() ){ wrong = true; }
					return;
				});
				
				$('.ui_select', self.element ).each(function() {
					i++;
					if ( $(this).val() != "correct" ) { wrong = true; }
					return;
				});
				
					if ( wrong ) {
						
						wrong = false;
						
						self.tries++;
						
						if ( self.tries == o.chances ) {
							$('.failed', self.element ).dialog('open');
							self.tries = 0;
							self.disableButtons();
							self._displayCorrect();
							$('.indicator', self.element ).remove();
							i = 0;
							self.element.trigger('CONTINUE');
						} else {
							$('.incorrect', self.element ).dialog(
							"option", "buttons", [
								{
									text: "Try Again",
									click: function() { $(this).dialog("close"); }
								}]
							);
							$('.incorrect', self.element ).dialog('open');	
							self._checkAnswers();
						}
						
						return false;	
					} else {
						
						if ( i == $('.ui_input', self.element ).size() + $('.ui_datepicker', self.element ).size() ) {
							$('.correct', self.element ).dialog('open');
							self.tries = 0;
							self.disableButtons();
							$('.indicator', self.element ).remove();
							self.element.trigger('CORRECT');
							i = 0;
							return false;	
						}
					}
				
			}
			
			
		});
		
		$('.ui_reset', this.element).bind('click', function(element){
			
			element.preventDefault();
			
			if ( o.disabled ) {
					return;
			}
			
			if ( !($(this, self.element).button( "option", "disabled" ) ) ) {
				self.reInit();
			}
			
			
		});
	},
	_checkAnswers: function() {
		
		var self = this;
			
		$('.ui_text', self.element ).each(function() {
			
			if ( ($(this).val().toUpperCase() == $(this).attr('data-answer').toUpperCase()) ){ 
				$( $(this), self.element ).before('<span class="ui-icon ui-icon-circle-check indicator"></span>');
				$( "label[for="+$(this).attr('id')+"]" ).html('correct');
			} else {
				$( $(this), self.element ).before('<span class="ui-icon ui-icon-circle-close indicator"></span>');
				$( "label[for="+$(this).attr('id')+"]" ).html('incorrect');
			}
		});
		
		$('.ui_select', self.element ).each(function() {
			
			if ( ($(this).val() == "correct" )	) {
				$( $(this), self.element ).before('<span class="ui-icon ui-icon-circle-check indicator"></span>');
				$( "label[for="+$(this).attr('id')+"]" ).html('correct');
			} else {
				$( $(this), self.element ).before('<span class="ui-icon ui-icon-circle-close indicator"></span>');
				$( "label[for="+$(this).attr('id')+"]" ).html('incorrect');
			}
		});
		
		$('.ui_datepicker', this.element ).each(function(){
			if ( $(this).val() == $(this).attr('data-answer')) {
				$( $(this), self.element ).before('<span class="ui-icon ui-icon-circle-check indicator"></span>');
				$( "label[for="+$(this).attr('id')+"]" ).html('correct');
			} else {
				$( $(this), self.element ).before('<span class="ui-icon ui-icon-circle-close indicator"></span>');
				$( "label[for="+$(this).attr('id')+"]" ).html('incorrect');
			}
		});
	},
	_displayCorrect: function() {
		
		$('.ui_text', this.element ).each(function() {
			
			$(this).val( $(this).attr('data-answer') );	
		});
		
		$('.ui_select', this.element ).each(function() {
			
			$(this).val('correct');
		});
		
		$('.ui_datepicker', this.element ).each(function(){
			$(this).val($(this).attr('data-answer'));
		});
	},
	disableButtons: function() {
		$('.ui_submit', this.element).button('disable');
		$('.ui_reset', this.element).button('disable');
		this.completed = true;
	},
	enableButtons: function() {
		$('.ui_submit', this.element).button('enable');
		$('.ui_reset', this.element).button('enable');
		this.completed = false;
	},
	enableReset: function() {
		$('.ui_reset', this.element).button('enable');
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
	$.extend($.ui.slide_fitb, {
		version: 0.3
	});
})(jQuery);