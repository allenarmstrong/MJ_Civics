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
	$.widget("ui.slide_drag_sort", {
    options: {
			axis: false,
			chances: 2,
			disabled: null
    },
	
	_create: function() {
		var self = this;
		var o = this.options;
		
		if( isNaN(this.options.chances)) { this.options.chances = 2; }
		
		$(this.element, 'div').addClass('ui-slideshow-item');
		$(this.element, 'div').generateEndButton( 'shuffle', 'submit' );
		
		if ( o.axis == "vertical" ) { o.axis = "y" };
		if ( o.axis == "horizontal" ) { o.axis = "z" };
		if ( o.axis == "multidirectional" ) { o.axis = false };
		
		$('.sortable', this.element ).sortable({ axis: o.axis, cursor: 'crosshair', opacity: '0.6' });
		$('.sortable', this.element ).disableSelection();
		
		
		this.orderArray = $('.sortable', self.element ).sortable('toArray');
		this.orderArray.sort();
		
		this._initIcons();
		this.shuffleItems();
		
		$( '.ui_accessible_label', this.element ).addClass('invisibleElement');
		
		//$(this).generateDialog( $('.ui_dialog', this.element ), this.element );
		
		
		$(this.element).css({ 'position': 'relative' });
		
		
		
		this._events();
		this.tries = 0;
		this.completed = false;
			
	},
	reInit: function() {
		if ( !(this.completed) ) {
			this._initIcons();
			this.shuffleItems();
			this.enableButtons();
			
			$( ".ui_accessible_label", this.element ).html('');
		}
	},
	_initIcons: function() {
		
		$('.sortable li span', this.element ).remove();
		
		if ( this.options.axis == "y" ) {
			$('.sortable li', this.element ).css({ "display" : "block" });
			$('.sortable li', this.element ).prepend('<span class="ui-icon ui-icon-arrow-2-n-s"></span>').addClass('ui-state-default');
		}
		else if ( this.options.axis == "x" ) {
			$('.sortable li', this.element ).prepend('<span class="ui-icon ui-icon-arrow-2-e-w"></span>').addClass('ui-state-default');	
		}
		else {
			$('.sortable li', this.element ).prepend('<span class="ui-icon ui-icon-arrow-4-diag"></span>').addClass('ui-state-default');	
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
			
			if ( !($('.ui_submit', self.element).button( "option", "disabled" ) ) ) {
				
				//console.log( order.join(','), self.orderArray.join(',') );
				//order.join(',') == self.orderArray.join(',') ;
				
				if ( self.isWrong() == undefined ) {
						$('.correct', self.element ).dialog('open');
						
						self.checkItems();
						self.disableButtons();
						self.element.trigger('CORRECT');
				} else {
					
					self.tries++;
					
					if ( self.tries < self.options.chances ) {
						$('.incorrect', self.element ).dialog(
						"option", "buttons", [
							{
								text: "Try Again",
								click: function() { $(this).dialog("close"); }
							}]
						);
						$('.incorrect', self.element).dialog('open');
						self.checkItems();
					} else {
						$('.failed', self.element ).dialog('open');
						self.disableButtons();
						self.tries = 0;
						
						
						function sortAlpha(a,b){  
						    return a.id > b.id ? 1 : -1;  
						}; 
						
					   
						var target = $(".sortable", self.element);
						var child = $(".sortable", self.element).children('li');
						child.sort(sortAlpha).appendTo(target);  
						
						child.children('span').removeClass().addClass('ui-icon ui-icon-circle-check');	
						//return false;
						
						self.element.trigger('CONTINUE');
					}
					
					
				}
				
				
			}
			
			
			
		});
		
		$('.ui_shuffle', this.element).bind('click', function(element){
			
			element.preventDefault();
			
			if ( o.disabled ) {
					return;
			}
			
			if ( !($('.ui_shuffle', self.element).button( "option", "disabled" ) ) ) {
				self.shuffleItems();
			}
			
			
		});
		
			
	},
	isWrong: function() {
		
		var order =  $('.sortable', this.element ).sortable('toArray');
		
		for ( var i = 0; i < order.length; i++ ) { if ( order[i] != this.orderArray[i] ) { return true; } }
	},
	checkItems: function() {
		
		var order =  $('.sortable', this.element ).sortable('toArray');
		
		for ( var i = 0; i < order.length; i++ ) {
			
			if ( order[i] != this.orderArray[i] ) {
				$('.sortable li:eq('+i+') span', this.element ).removeClass().addClass('ui-icon ui-icon-circle-close');
				$( '.sortable li:eq('+i+') label', this.element ).html('incorrect');
			} else {
				$('.sortable li:eq('+i+') span', this.element ).removeClass().addClass('ui-icon ui-icon-circle-check');	
				$( '.sortable li:eq('+i+') label', this.element ).html('correct');
			}
		}
	},
	shuffleItems: function() {
		this._initIcons();
		$('.ui_submit', this.element ).button('enable');
		$('.sortable', this.element ).shuffle();
		this.tries = 0;
		if ( this.isWrong() == undefined ) { this.shuffleItems(); }
		
		$( ".ui_accessible_label", this.element ).html('');
	},
	disableButtons: function() {
		$('.ui_shuffle', this.element).button('disable');
		$('.ui_submit', this.element).button('disable');
		this.completed = true;
		this.options.disabled = true;
	},
	enableButtons: function() {
		$('.ui_shuffle', this.element).button('enable');
		$('.ui_submit', this.element).button('enable');
		this.completed = false;
		this.options.disabled = false;
	},
	enableReset: function() {
		$('.ui_shuffle', this.element).button('enable');
		this.completed = false;
		this.options.disabled = false;
	},
	getCompleted: function() {
		return this.completed;	
	},
	setCompleted: function( value ) {
		this.completed = value;	
	}
	});
	$.extend($.ui.slide_drag_sort, {
		version: 0.3
	});
})(jQuery);