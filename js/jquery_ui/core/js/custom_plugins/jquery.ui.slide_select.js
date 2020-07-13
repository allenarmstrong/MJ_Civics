/*!
 * jQuery UI Slide - Drag Sort 0.3.0
 *
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 * Optional:
 *  jquery.effects.core.js
 */
(function($, undefined) {
	$.widget("ui.slide_select", {
    options: {
			axis: false,
			chances: 2,
			disabled: null
    },
	
	_create: function() {
		var self = this;
		
		if( isNaN(this.options.chances)) { this.options.chances = 2; }
		
		$(this.element, 'div').addClass('ui-slideshow-item');
		$(this.element, 'div').generateEndButton( 'deselect all', 'submit' );
		
		$('.selectable > li', this.element ).addClass('ui-widget-content');
		$('.selectable > li', this.element ).addClass('ui_selection');
		
		$(".ui_selection", this.element).click( function() {
			$(this).toggleClass("ui-selected");
			console.log(this);
			$('label', this).html('');
			
			if ( $(this).hasClass('ui-selected') ){
				$('label', this).html('selected');
			}
			
		});
		
		
		
		$( '.ui_accessible_label', this.element ).addClass('invisibleElement');
		//$('#sortable', this.element ).disableSelection();
		
		
		
		//this.orderArray = $('.selectable', self.element ).selectable('toArray');
		//this.orderArray.sort();
		
		//this._initIcons();
		//this.shuffleItems();
		
		//$(this).generateDialog( $('.ui_dialog', this.element ), this.element );
		
		
		
		$(this.element).css({ 'position': 'relative' });
		
		this._events();
		this.tries = 0;
		this.completed = false;
			
	},
	_initIcons: function() {
		
	},
	reInit: function() {
		if ( !(this.completed) ) {
			this.tries = 0;
			$('.indicator', this.element ).remove();
			$(".ui_selection", this.element).removeClass("ui-selected");
			this.enableButtons();
			
			$( ".ui_accessible_label", this.element ).html('');
		}
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
		
		$('.ui_submit', this.element).bind('click', function(element){
			
			element.preventDefault();
			
			if ( o.disabled ) {
					return;
			}
			
			var wrong = false;
			var selected = false;
			
			if ( !($('.ui_submit', self.element).button( "option", "disabled" ) ) ) {
				
				var i = 0;
				
				$('.ui_selection', self.element ).each( function() {
				
					if( $(this).hasClass('ui-selected') ) {
						
						selected = true;
						
						if ( !($(this).attr('data-correct') == "true" )) {
							wrong = true;
							
							return;
						}
					} else {
							if ( ($(this).attr('data-correct') == "true" )) {
								wrong = true;
							}		
					}
				});
				
				if ( wrong == true ) {
					self.tries++;
					self.checkItems();	
					
					if ( self.tries < self.options.chances ) {
						$('.incorrect', self.element ).dialog(
						"option", "buttons", [
							{
								text: "Try Again",
								click: function() { $(this).dialog("close"); }
							}]
						);
						$('.incorrect', self.element ).dialog('open');	
					} else {
						self.tries = 0;
						$('.failed', self.element ).dialog('open');	
						self.displayCorrect();
						self.disableButtons();
						self.element.trigger('CONTINUE');
						
					}
					
				} else {
					if (  selected == true ) {
						self.tries = 0;
						$('.correct', self.element).dialog('open');
						
						$('.indicator', self.element ).remove();
						self.disableButtons();
						self.element.trigger('CORRECT');
					}
				}
				
				
			}
			
			
			
		});
		
		$('.ui_deselect_all', this.element).bind('click', function(element){
			
			element.preventDefault();
			
			if ( o.disabled ) {
					return;
			}
			
			if ( !($('.ui_deselect_all', self.element).button( "option", "disabled" ) ) ) { 
			
				self.deselectAll(); 
				
				$( ".ui_accessible_label", this.element ).html('');
			}
			
			
		});
			
	},
	checkItems: function() {
		
		$('.ui_selection', this.element ).each( function() {
			
			if ( $(this).hasClass('ui-selected') ) {
				if( $(this).attr('data-correct') == "true" ) {
					$( $(this), self.element ).prepend('<span class="indicator">&nbsp;<span class="ui-icon ui-icon-circle-check"></span></span>');
					$('label', this).html('correct');
				} else {
					$( $(this), self.element ).prepend('<span class="indicator">&nbsp;<span class="ui-icon ui-icon-circle-close"></span></span>');
					$('label', this).html('incorrect');
				}
			}
		});
		
	},
	displayCorrect: function() {
		
		$('.indicator', self.element ).remove();
		this.deselectAll();
		
		$('.ui_selection', this.element ).each( function() {
			
			if( $(this).attr('data-correct') == "true" ) {
				$(this).addClass("ui-selected");
			}
			
		});
	},
	deselectAll: function() {
		this.reInit();
		
		//if ( this.isWrong() == undefined ) { this.shuffleItems(); }
		
	},
	disableButtons: function() {
		$('.ui_deselect_all', this.element).button('disable');
		$('.ui_submit', this.element).button('disable');
		this.completed = true;
		this.options.disabled = true;
	},
	enableButtons: function() {
		$('.ui_deselect_all', this.element).button('enable');
		$('.ui_submit', this.element).button('enable');
		this.completed = false;
		this.options.disabled = false;
	},
	enableReset: function() {
		$('.ui_deselect_all', this.element).button('enable');
		this.completed = false;
		this.options.disabled = false;
	},
	disable: function( value ) {
		this.options.disabled = value;
	},
	getCompleted: function() {
		return this.completed;	
	},
	setCompleted: function( value ) {
		this.completed = value;	
	}
	
	});
	$.extend($.ui.slide_select, {
		version: 0.3
	});
})(jQuery);