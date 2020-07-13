/*!
 * jQuery UI Slide - Word Bank 0.0
 *
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 * Optional:
 *  jquery.effects.core.js
 */
(function($, undefined) {
	$.widget("ui.slide_word_bank", {
    options: { 
		chances: 2,
		disabled: null
    },
	
	_create: function() {
		var self = this;
		
		if( isNaN(this.options.chances)) { this.options.chances = 2; }
		
		$(this.element, 'div').addClass('ui-slideshow-item');
		$(this.element, 'div').generateEndButton( 'reset', 'submit' );
		
		//$(this).generateDialog( $('.ui_dialog', this.element ), this.element );
		
		
		
		this.wordbank = new Array();
		
		$('.ui_select', this.element).each(function(){
			self.wordbank.push( $(this).attr('data-answer') );
		});
		
		this.wordbank = $(this).shuffle( this.wordbank );
		
		
		$( '.ui_accessible_label', this.element ).addClass('invisibleElement');
		
		$(this.element).css({ 'position': 'relative' });
		
		this.tries = 0;
		this.completed = false;
		
		this._displayWords();
		this._events();
		
	},
	reInit: function() {
		if ( !(this.completed) ) {
			
			$('.ui_select option:selected', this.element ).each(function(){
				$(this).parent().val('default');
			});
			
			//$('option', this ).val('');
			$('.indicator', this.element ).remove();
			this.enableButtons();
			this.tries = 0;
			
			
			$( ".ui_accessible_label", this.element ).html('');
		}
		
		this._displayWords();
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
		
		$('.ui_select', this.element).bind('change', function(element){
			
			self._displayWords();
		});
		
		$('.ui_submit', this.element).bind('click', function(element){
			
			element.preventDefault();
			
			if ( o.disabled ) {
					return;
			}
			
			if ( !($(this, self.element).button( "option", "disabled" ) ) ) {
				
				var wrong = false;
				var i = 0;
				
				$('.ui_select', self.element ).each(function() {
					i++;
					if ( $(this).val() != $(this).attr('data-answer') ) { wrong = true; }
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
							self.element.trigger( 'FAILED' );
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
							self.element.trigger('INCORRECT');
						}
						
						return false;	
					} else {
						
						if ( i == $('.ui_input', self.element ).size() ) {
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
	_displayWords: function() {
		
		var self = this;
		var selectedArray = new Array();
		var ctr = 0;
		var found = false;
		
		$('.ui_select', this.element).each(function(){
			selectedArray[ctr] = $(this, 'option:selected').val();
			ctr++;
		});
		
		ctr = 0;
		
		$('.ui_remaining_words', this.element).html('');
		
		
		for ( i = 0; i < this.wordbank.length; i++ ) {
			
			for ( j = 0; j < selectedArray.length; j++ ) {
				if ( this.wordbank[i] == selectedArray[j] ) { found = true }
			}
			
			if ( !found ) {
				if ( ctr == 0 ) {
					$('.ui_remaining_words', this.element).append( this.wordbank[i] );
				} else {
					$('.ui_remaining_words', this.element).append( ", " + this.wordbank[i] );
				}
				
			
				ctr++;	
			}
			
			found = false;
		}
		
		$('.ui_select', this.element).each(function(){
			
			
			var preselected = $(this, 'option:selected').val();
			
			$(this).html('<option value="default"></option>')
			
			
			for ( i = 0; i < self.wordbank.length; i++ ) {
				for ( j = 0; j < selectedArray.length; j++ ) {
					if ( self.wordbank[i] == selectedArray[j] && self.wordbank[i] != preselected ) { found = true }
				}
				
				if ( !found ) {
					$(this).append('<option value="'+ self.wordbank[i] +'">'+ self.wordbank[i] +'</option>');	
				}
				
				found = false;
			}
			
			$(this).val(preselected);
		});
		
	},
	_checkAnswers: function() {
		
		var self = this;
			
		
		$('.ui_select', self.element ).each(function() {
			
			if ( ($(this).val() == $(this).attr('data-answer') )	) {
				$( $(this), self.element ).before('<span class="ui-icon ui-icon-circle-check indicator"></span>');
				$( "label[for="+$(this).attr('id')+"]" ).html('correct');
			} else {
				$( $(this), self.element ).before('<span class="ui-icon ui-icon-circle-close indicator"></span>');
				$( "label[for="+$(this).attr('id')+"]" ).html('incorrect');
			}
		});
		
	},
	_displayCorrect: function() {
		
		var self = this;
		
		$('.ui_select', this.element ).each(function() {
			
			$(this).html('<option value="default"></option>')
			
			for ( i = 0; i < self.wordbank.length; i++ ) {
				$(this).append('<option value="'+ self.wordbank[i] +'">'+ self.wordbank[i] +'</option>');	
			}
			
			$(this).val( $(this).attr('data-answer') );
		});
		
		$('.ui_remaining_words', this.element ).html('');
		
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
	$.extend($.ui.slide_word_bank, {
		version: 0.3
	});
})(jQuery);