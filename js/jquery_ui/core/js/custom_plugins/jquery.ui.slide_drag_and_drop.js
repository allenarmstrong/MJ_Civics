/*!
 * jQuery UI Drag and Drop 0.0
 *
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 * Optional:
 *  jquery.effects.core.js
 */
(function($, undefined) {
	$.widget("ui.slide_drag_and_drop", {
    options: {
		draggables: "multiple",
		droppables: "hide",
		disabeled: null
    },
	
	_create: function() {
			
			var self = this;
			
			$(this.element, 'div').addClass('ui-slideshow-item');
			
			if ( self.options.draggables == "single" ) {
				$(this.element, 'div').generateEndButton( 'cycle','reset' );
			} else {
				$(this.element, 'div').generateEndButton( 'reset' );
			}
			
			this.totalDraggables = $('.draggable', this.element).length;
			this.currentDraggable = 0;
			this.selectedDraggable = null;
			
			$( ".draggable", this.element ).each(function() {
				$( this ).addClass('ui-widget-content').draggable({ revert: true, opacity: .5, cursor: 'crosshair' });
				$(this).draggable({ disabled: false });
				if ( self.options.draggables == "single" ) {
					if (  $( this ).index('.draggable') != 0 ) {
						$(this).css({'display':'none'});
					}
				}
			});
			
			
			
			$( ".droppable", this.element ).addClass('ui-widget-header').droppable({
				drop: function( event, ui ) {
					self._checkCollision( $( this ), ui.draggable );
				}
			});
			
			
			
			//$(this).generateDialog( $('.ui_dialog', this.element ), this.element );
			
			$(this.element).css({ 'position': 'relative' });
			
			
			
			
			this.stored = $( ".draggable", this.element ).length;
			this.completed = false;
			
			this._events();
			
			
	},
	_initItems: function() {
		var self = this;
		
		this.totalDraggables = $('.draggable', this.element).length;
		this.currentDraggable = 0;
		
			
		$( ".droppable .bin ul", this.element ).html('');
		
		
		$( ".draggable", this.element ).each(function() {
			$(this).css({'display':'inline-block'});
			$(this).draggable({ disabled: false });
		});
		
		$( ".draggable", this.element ).each(function() {
			
			
			if ( self.options.draggables == "single" ) {
				
				$(this).css({'display':'none'});
				
			}
			
			
		});
		
		$( ".draggable", this.element ).first().css({'display':'inline-block'});
		
		this.stored = $( ".draggable", this.element ).length;
		
		this.enableButtons();
	},
	reInit: function() {
		
		if ( !(this.completed) ) {
			this._initItems();
			
			
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
	_checkCollision: function( droppable, draggable  ) {
			
			if ( $( draggable ).attr('data-label') == $( droppable ).attr('data-label') ) {
				
				$( draggable ).css({'display':'none'}).draggable('disable');
				
				$( droppable ).find( "ul" ).append( "<li>"+draggable.find("p").html()+"</li>" );
				
				
				this._resetDroppable( droppable, droppable.find("h3").html() );
				$( droppable ).addClass( "ui-state-highlight" ).find("h3").html('Correct!');
				
				this.stored--;
				if ( this.stored != 0 ) {
					this.nextDraggable();
				}
				
				if ( this.stored == 0 ) {
					$('.correct', this.element ).dialog('open');
					
					this.disableButtons();
					this.element.trigger('CORRECT');
					
				}
				
				if ( $( draggable ).attr('data-feedback') != undefined ){
					
					$('.' + $( draggable ).attr('data-feedback'), this.element ).dialog('open');
				}
				
			} else {
				//$( draggable ).draggable( "option", "revert", true );	
			}
	},
	_resetDroppable: function( droppable, label ) {
		setTimeout(function(){
			$( droppable ).removeClass( "ui-state-highlight" ).find("h3").html(label);;
	  },1000);
		
	},
	_events: function() {
		
		var self = this;
		var o = this.options;
		
		
		$( ".ui_reset", this.element ).click(function(element) {
			
			element.preventDefault();
			
			if ( o.disabled ) {
				return false;	
			}
			
			if ( !($(this, self.element).button( "option", "disabled" ) ) ) {
				self._initItems();
			};
			
		});
		
		$( ".ui_cycle", this.element ).click(function(element) {
			
			element.preventDefault();
			
			if ( o.disabled ) {
				return false;	
			}
			
			if ( !($(this, self.element).button( "option", "disabled" ) ) ) {
				
				$( ".draggable", self.element ).eq(self.currentDraggable).css({'display':'none'});
				
				self.nextDraggable();
				
			};
			
		});
		
		 
		 $( ".draggable", self.element ).click(function(event) {
			event.stopPropagation();
			$('.ui_slide_drag_and_drop').slide_drag_and_drop('nullDraggables');
			self.selectedDraggable = $(this);
			//console.log( $(self.selectedDraggable).attr('data-label') );
		});
		
		
	},
	nullDraggables: function() {
		this.selectedDraggable = null;
		//console.log('null' );
	},
	nextDraggable: function() {
		this.currentDraggable = this.currentDraggable < this.totalDraggables - 1 ? this.currentDraggable + 1 : 0;
		
		if ( !($( ".draggable", this.element ).eq(this.currentDraggable).draggable( "option", "disabled" ) ) ) {
			$( ".draggable", this.element ).eq(this.currentDraggable).css({'display':'inline-block'});
		} else {	
			this.nextDraggable();
		}
	},
	disableButtons: function() {
		$('.ui_reset', this.element).button('disable');
		$('.ui_cycle', this.element).button('disable');
		this.completed = true;
		this.options.disabled = true;
	},
	enableButtons: function() {
		$('.ui_reset', this.element).button('enable');
		$('.ui_cycle', this.element).button('enable');
		this.completed = false;
		this.options.disabled = false;
	},
	getCompleted: function() {
		return this.completed;	
	},
	setCompleted: function( value ) {
		this.completed = value;	
	},
	enableReset: function() {
		$('.ui_reset', this.element).button('enable');
		this.completed = false;
		this.options.disabled = false;
	}
	
	});
	$.extend($.ui.slide_drag_and_drop, {
		version: 0.3
	});
})(jQuery);