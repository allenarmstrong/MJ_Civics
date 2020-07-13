/*
 * Interface
 *
 */

(function($) {
	
	

  $.fn.extend({
	interface: function() {
		
	},
    generateEndButton: function( type ) {
		
		$(this).append('<div class="ui_edge_buttons"></div>');
		
		for( var i = 0; i< arguments.length; i++ ) {
			
			switch( arguments[i] ) {
			
				case "submit":
					$('.ui_edge_buttons', this ).append('<a class="ui_edge_button ui_submit" href="#">Submit</a>');
					$('.ui_submit', this ).button({ disabled: false });
				break;
				
				case "shuffle":
					$('.ui_edge_buttons', this ).append('<a class="ui_edge_button ui_shuffle" href="#">Shuffle</a>');
					$('.ui_shuffle', this ).button({ disabled: false });
				break;
				
				case "deselect all":
					$('.ui_edge_buttons', this ).append('<a class="ui_edge_button ui_deselect_all" href="#">Deselect All</a>');
					$('.ui_deselect_all', this ).button({ disabled: false });
				break;
				
				case "reset":
					$('.ui_edge_buttons', this ).append('<a class="ui_edge_button ui_reset" href="#">Reset</a>');
					$('.ui_reset', this ).button({ disabled: false });
				break;
				
				case "restart":
					$('.ui_edge_buttons', this ).append('<a class="ui_edge_button ui_restart" href="#">Restart</a>');
					$('.ui_restart', this ).button({ disabled: false });
				break;
				
				case "cycle":
					$('.ui_edge_buttons', this ).append('<a class="ui_edge_button ui_cycle" href="#">Next Item</a>');
					$('.ui_cycle', this ).button({ disabled: false });
					$( ".ui_cycle", this.element).button({
            			icons: {
                		primary: "ui-icon-arrowrefresh-1-w"
            		}});
				break;
				
				default:
				break;
			
			}
		}
    },
    generateSlide: function() {
		
		var s = this.attr('class');
		
			
			if ( s.indexOf("ui_slide_tf") != -1 ) { this.slide_tf({ chances: Number(this.attr('data-chances')) }); } 
				
			if ( s.indexOf("ui_slide_mc") != -1 ) {
				
				this.slide_mc({ chances: Number(this.attr('data-chances')) } ); 
				
			}
				
			if ( s.indexOf("ui_slide_fitb") != -1 ) { this.slide_fitb({ chances: Number(this.attr('data-chances')) }); }
			
			if ( s.indexOf("ui_slide_word_bank") != -1 ) { this.slide_word_bank({ chances: Number(this.attr('data-chances')) }); }
				
			if ( s.indexOf("ui_slide_sort") != -1 ) {
				switch( this.attr('data-type') ) {
					case "vertical":
					this.slide_drag_sort({ axis: "y", chances: Number(this.attr('data-chances')) });
					break;
					
					case "horizontal":
					this.slide_drag_sort({ axis: "x", chances: Number(this.attr('data-chances')) });
					break;
					
					case "multidirectional":
					this.slide_drag_sort({ chances: Number(this.attr('data-chances')) });
					break;
					
					default:
					this.slide_drag_sort({ chances: Number(this.attr('data-chances')) });
					break;
				}
			}
			
			if ( s.indexOf("ui_slide_select") != -1 ) { this.slide_select({ chances: Number(this.attr('data-chances')) }); }
			
			if ( s.indexOf("ui_slide_drag_and_drop") != -1 ) {
				
				this.slide_drag_and_drop({ chances: Number(this.attr('data-chances')), draggables: this.attr('data-draggables'), droppables: this.attr('data-droppables') });
				
				
			}
			
			if ( s.indexOf("ui_results") != -1 ) { this.slide(); }
			
			if ( s.indexOf("ui_slide") != -1 ) { this.slide(); }
			
		
		
    },
	generateDialog: function( element, target, $autoOpen, $reAppend ) {
		
		if ( $autoOpen == undefined ) { $autoOpen = false; }
		if ( $reAppend == undefined ) { $reAppend = true; }
		//console.log(element);
		
		if ( element.attr('data-width') != undefined ) {
			this.width = parseInt(element.attr('data-width'));
		} 
		
		//console.log( element.attr('data-width') );
		$( element ).dialog('widget').draggable("option","containment","parent");
		
		element.dialog({ width: this.width, buttons: {
				Ok: function() {
					$( this ).dialog( "close" );
				}
			}, show: 'fade', hide: 'fade', draggable: true, autoOpen: false, resizable: false, modal: false,
				open: function () {
				 $(element).parent().parent().append('<div class="ui-widget-overlay"></div>');
				 $('.ui-widget-overlay').css({ opacity: 0 });
				 
				},
				close: function () {
				 $('.ui-widget-overlay').remove();
				},
   position: {my: 'center', at: 'center', of: $(target) } });
   
   		if ( $reAppend == true ) { element.parent().appendTo(target);}
		
		$( element ).bind( "dialogopen", function(event, ui) {
			
			//$(element).css({ opacity: 1 });
			$(element).parent().position({ my: 'center', at: 'center', of: target.parents('.ui_interactive') });
			event.preventDefault();
			
		});
		//element.dialog("option", "position", ['200','200']);

		//element.dialog({ autoOpen: false, resizable: false, modal: true, position: 'center'});
	},
	generateActivation: function( element ) {
		var self = this;
		
		$( ".activation", element ).parent().prepend('<span class="ui_dialog_frame"></span>');
		
		$( ".activation", element ).bind( "dialogclose", function(event, ui) {
			//$('.ui_pending', element).children().css({ opacity : 1 });
			$('.ui_pending', element).children().removeClass('nonexistentElement');
			//$(element, 'div').unwrap();
		});
		
		$(element, 'div').wrapInner('<span class="ui_pending" style="display: block"></span>');
		
		
		setTimeout(function(){
			$('.activation', element ).dialog(
			"option", "buttons", [
				{
					text: "Begin",
					click: function() { $(this).dialog("close"); }
				}]
			);
           //$('.activation', element ).dialog('open');
		   $('.activation', element ).parent().appendTo( $( element) ).dialog('widget').position({ my: 'center', at: 'center', of: element, offset: "0 40" });
		   
      	}, 500)
		//$('.activation', element ).parent().appendTo( $( element));
		
		
		
		$('.ui_pending', element ).append('<a class="help" title="Help" href="#">Help</a>');
		$('.help', element ).button( { icons: { primary: "ui-icon-help" },text: false });
		
		$('.ui_pending', element).children().addClass('nonexistentElement');
		$('.activation', element).parent().removeClass('nonexistentElement');
		
		$( '.help', element ).bind( 'click', function(event, ui) {
			event.preventDefault();
			//$('.ui_pending', element).children().css({ opacity: 0.3 });
			$('.activation', element ).dialog(
			"option", "buttons", [
				{
					text: "Ok",
					click: function() { $(this).dialog("close"); }
				}]
			);
			$('.activation', element ).dialog('open');
		    //$('.activation', element ).dialog('widget').position({ my: 'center', at: 'center', of: element, offset: "0 40"});
		});
		
		$('.activation', element ).prepend('<div class="invisibleElement">If you are viewing this on a screen reader, please refer to the text version.</div>');
		
	},
	generateInstructions: function( element ) {
		var self = this;
		
		$( ".instructions", element ).parent().prepend('<span class="ui_dialog_frame"></span>');
		
		$( ".instructions", element ).bind( "dialogclose", function(event, ui) {
			//$('.ui_pending', element).children().css({ opacity: 1 });
			//$(element, 'div').unwrap();
		});
		
		$(element, 'div').wrapInner('<span class="ui_pending"></span>');
		
		
		$('.instructions', element ).dialog(
			"option", "buttons", [
				{
					text: "Begin",
					click: function() { $(this).dialog("close"); 
					self[0].element.trigger( 'BEGIN' ); 
					}
				}]
			);
			
		setTimeout(function(){
			
			
		  	//$( '.help', element ).click();
           $('.instructions', element ).dialog('open');
		  
		   
      	}, 500)
		
		//console.log( $(element ) );
		$('.instructions', element ).parent().appendTo( $( element) );
		$('.instructions', element ).dialog('widget').draggable("option","containment", "parent" );
		
		$('.ui_pending', element ).append('<a class="help" title="Help" href="#">Help</a>');
		$('.help', element ).button( { icons: { primary: "ui-icon-help" },text: false });
		
		$( '.help', element ).bind( 'click', function(event2, ui) {
			event2.preventDefault();
			//$('.ui_pending', element).children().css({ opacity: 0.3 });
			
			$('.instructions', element ).dialog(
			"option", "buttons", [
				{
					text: "Ok",
					click: function() { $(this).dialog("close"); }
				}]
			);
			$('.instructions', element ).dialog('open');
		    //$('.instructions', element ).dialog('widget').position({ my: 'center', at: 'center', of: $('.ui_pending', element ), offset: "0 40" });
		});
		
		$( ".instructions", element ).bind( "dialogopen", function(event3, ui) {
			
			//$('.instructions', element ).dialog('widget').position({ my: 'bottom', at: 'center', of: $(element)});
		nudgex = $(element, 'div').width() / 4;
		nudgey = ( $(element, 'div').height() / 4 ) + 60;
			
		$('.instructions', element ).dialog('widget').css({"top": nudgey + "px", "left" : nudgex + "px"});
		});
		
		
		//$('.ui_pending', element).children().css({ opacity: 0.3 });
		
		//$('.ui-edget-overlay', element).css({ opacity: 0 });
		
	},
	
	checkAutoProgress: function() {
		
		var s = this.attr('class');
		
			
		if ( s.indexOf("ui_slide_tf") != -1 ) {
			this.slide_tf('reInit');
			if ( this.slide_tf('getCompleted')) { return true; } else { return false; }
		} 
			
		if ( s.indexOf("ui_slide_mc") != -1 ) {
			this.slide_mc('reInit');
			if ( this.slide_mc('getCompleted')) { return true; } else { return false; }
			return false;
		}
			
		if ( s.indexOf("ui_slide_fitb") != -1 ) {
			this.slide_fitb('reInit');
			if ( this.slide_fitb('getCompleted')) { return true; } else { return false; }	
		}
		
		if ( s.indexOf("ui_slide_word_bank") != -1 ) {
			this.slide_word_bank('reInit');
			if ( this.slide_word_bank('getCompleted')) { return true; } else { return false; }	
		}
			
		if ( s.indexOf("ui_slide_sort") != -1 ) {
			this.slide_drag_sort('reInit');
			if ( this.slide_drag_sort('getCompleted')) { return true; } else { return false; }
		}
		
		if ( s.indexOf("ui_slide_select") != -1 ) {
			this.slide_select('reInit');
			if ( this.slide_select('getCompleted')) { return true; } else { return false; }
			return false;	
		}
		
		if ( s.indexOf("ui_slide_drag_and_drop") != -1 ) {
			this.slide_drag_and_drop('reInit');
			if ( this.slide_drag_and_drop('getCompleted')) { return true; } else { return false; }	
		}
		
		if ( s.indexOf("ui_results") != -1 ) { return true; }
		
		if ( s.indexOf("ui_slide") != -1 ) { return true; }
		
	},
	reEnable: function() {
		
		var s = this.attr('class');
			
		if ( s.indexOf("ui_slide_tf") != -1 ) { this.slide_tf('setCompleted', false); } 
			
		if ( s.indexOf("ui_slide_mc") != -1 ) { this.slide_mc('setCompleted', false); }
			
		if ( s.indexOf("ui_slide_fitb") != -1 ) { this.slide_fitb('setCompleted', false); }
			
		if ( s.indexOf("ui_slide_word_bank") != -1 ) { this.slide_word_bank('setCompleted', false); }
		
		if ( s.indexOf("ui_slide_sort") != -1 ) { this.slide_drag_sort('setCompleted', false); }
		
		if ( s.indexOf("ui_slide_select") != -1 ) { this.slide_select('setCompleted', false); }
		
		if ( s.indexOf("ui_slide_drag_and_drop") != -1 ) { this.slide_drag_and_drop('setCompleted', false); }
		
		if ( s.indexOf("ui_results") != -1 ) { }
		
		if ( s.indexOf("ui_slide") != -1 ) { }

	},
	enableReset: function() {
		
		var s = this.attr('class');
		
		
			
		if ( s.indexOf("ui_slide_tf") != -1 ) { this.slide_tf('enableButtons'); } 
			
		if ( s.indexOf("ui_slide_mc") != -1 ) { this.slide_mc('enableButtons');}
			
		if ( s.indexOf("ui_slide_fitb") != -1 ) { this.slide_fitb('enableReset'); }
			
		if ( s.indexOf("ui_slide_word_bank") != -1 ) { this.slide_word_bank('enableReset'); }
			
		if ( s.indexOf("ui_slide_sort") != -1 ) { this.slide_drag_sort('enableReset'); }
		
		if ( s.indexOf("ui_slide_select") != -1 ) { this.slide_select('enableReset'); }
		
		if ( s.indexOf("ui_slide_drag_and_drop") != -1 ) { this.slide_drag_and_drop('enableReset'); }
		
		if ( s.indexOf("ui_results") != -1 ) { }
		
		if ( s.indexOf("ui_slide") != -1 ) { }
		
	},
	checkAccessibility: function() {
		
		var s = this.attr('class');
		
		if ( s.indexOf("ui_slide_sort") != -1 ) { this.slide_drag_sort('checkAccessibility'); }
		if ( s.indexOf("ui_slide_drag_and_drop") != -1 ) { this.slide_drag_and_drop('checkAccessibility'); }

	},
	isScrolledIntoView: function(elem)
	{
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();
	
		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();
	
		return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
	}

  });
})(jQuery);
