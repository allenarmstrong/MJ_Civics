/*!
 * jQuery UI Slide - Multiple Choice 0.0
 *
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 * Optional:
 *  jquery.effects.core.js
 */
(function($, undefined) {
	$.widget("ui.slide_mc", {
    options: { 
		chances: 2,
		disabled: null
    },
	
	_create: function() {
		
		var self = this;
		
		if( isNaN(this.options.chances)) { this.options.chances = 2; }
		
		$(this.element, 'div').addClass('ui-slideshow-item');
		$(this.element, 'div').generateEndButton( 'submit' );
		
		/*
		$('.ui_dialog', this.element).each( function() {
			$(this).generateDialog( $(this), self.element );
		});
		*/
		$('.ui_dialog .correct_answer', this.element).prepend('<span class="insert"></span>').css({ 'display':'none' });
		
		if ( this.tries == this.options.chances ) {
			
			$('.ui_dialog .correct_answer .insert', this.element).html($('input[data-feedback="correct"] + label', this.element ).text() + " is the correct answer. ");
			
			$('.ui_dialog .correct_answer', this.element).css({ 'display':'none' });
		}
		
		$(this.element).css({ 'position': 'relative' });
		
		this.tries = 0;
		this.completed = false;
		
		this._events();
		
		
	},
	reInit: function() {
		if ( !(this.completed) ) {
			this.enableButtons();
			$('input:radio', this.element ).attr('checked', false);
			this.tries = 0;
			$('.ui_dialog .correct_answer .insert', this.element).html('');
			$('.ui_dialog .correct_answer', this.element).css({ 'display':'none' });
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
				
				
				var s = $('input[class="ui_choice"]:checked', self.element ).val(); 
				
				if ( $('input[class="ui_choice"]:checked', self.element ).val() == "correct"  ) {
					
					$("." + $('input[class="ui_choice"]:checked', self.element ).attr('data-feedback'), self.element).dialog('open');
					self.disableButtons();
					self.tries = 0;
					
					
					
					self.element.trigger('CORRECT', { points: { earned: Number($('input[class="ui_choice"]:checked', self.element ).attr('data-points')), possible: self.getPossiblePoints() } });
					
					
				}
				else {
					
					if ( s != undefined ) {
						self.tries++;
						if ( self.tries == o.chances ) {
							self.disableButtons();
							self.tries = 0;
							
							$('.ui_dialog .correct_answer .insert', this.element).html('');
							$('.ui_dialog .correct_answer .insert', self.element).prepend("\"" + $('input[data-feedback="correct"] + label', self.element ).text() + "\" is the correct answer. ");
							$('.ui_dialog .correct_answer', this.element).css({ 'display':'inline' });
							
							$("." + $('input[class="ui_choice"]:checked', self.element ).attr('data-feedback'), self.element).dialog(
							"option", "buttons", [
								{
									text: "Ok",
									click: function() { $(this).dialog("close"); }
								}]
							);
							$("." + $('input[class="ui_choice"]:checked', self.element ).attr('data-feedback'), self.element).dialog('open');
							
							self.element.trigger('CONTINUE', { points: { earned: Number($('input[class="ui_choice"]:checked', self.element ).attr('data-points')), possible: self.getPossiblePoints() } });
							
					
						}
						else {
							//$('.ui_dialog .correct_answer .insert', this.element).html('');
							//$('.ui_dialog .correct_answer .insert', self.element).append( "Try again, please.");
							 //$(this).button('option', 'label', 'Stop');
							$("." + $('input[class="ui_choice"]:checked', self.element ).attr('data-feedback'), self.element).dialog(
							"option", "buttons", [
								{
									text: "Try Again",
									click: function() { $(this).dialog("close"); }
								}]
							);
							$("." + $('input[class="ui_choice"]:checked', self.element ).attr('data-feedback'), self.element).dialog('open');							
							//$('.ui_dialog .correct_answer', this.element).css({ 'display':'inline' });
						}
					}
				}
				
			}
			
			
			
		});	
	},
	doProceed: function() {
		if ( this.tries == 0 ) { return true; } else { return false; }
	},
	disableButtons: function() {
		$('.ui_submit', this.element).button('disable');
		this.completed = true;
	},
	enableButtons: function() {
		$('.ui_submit', this.element).button('enable');
		this.completed = false;
	},
	getPossiblePoints: function() {
		
		var largest = 0;
		
		 $('input[class="ui_choice"]', this.element ).each( function() {
			if (  Number($(this).attr('data-points' )) > largest ) { largest =  Number($(this).attr('data-points' )) };
		});
		
		
		return largest;
	},
	getCompleted: function() {
		return this.completed;	
	},
	setCompleted: function( value ) {
		this.completed = value;	
	}
	
	});
	$.extend($.ui.slide_mc, {
		version: 0.3
	});
})(jQuery);