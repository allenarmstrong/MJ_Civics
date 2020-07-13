// JavaScript Document
$(function() {
	// interactives
	$('.ui_interactive').css({'visibility':'visible'});
	$('.ui_interactive').unwrap();
	$('.ui_interactive').addClass('ui-widget ui-widget-content ui-corner-all');
	$('.ui_interactive').each(function() { 
		$(this).css({ 'width':$(this).attr('data-width'), 'height':$(this).attr('data-height') });
		$(this).slideshow({ itemWidth: $(this).attr('data-width'), itemHeight: $(this).attr('data-height'), transition: $(this).attr('data-transition')}); 
	});
	
	// standalone interactives
	
	$('.ui_accordion').each(function() { 
	
		$(this).accordion({ active: false, collapsible: true, autoHeight: false }); 
	
	});
	
	$('.ui_tabs').each(function() { $(this).tabs() });
	
	$('.ui_audio').each(function() { $(this).audio() });
	
	
	$('.ui_custom_dialog').each(function() { 
	
			$(this).generateDialog( $(this), $(this).parent(), false, false );
	
	});
	
	$('.ui_flip').each(function() { 
	
			$(this).cardflip();
	
	});
	
	$('.ui_custom_dialog_trigger').each(function() { 
		if ( $(this).get(0).tagName == "BUTTON" ) { $(this).button({ disabled: false }) ; }
		
		$(this).bind( 'click', function(event, ui) {
			event.preventDefault();
			$('#' + $(this).attr('data-dialog')).dialog('open');
		});
		
	});
	
	$(this).tooltip();
	
	//$('html').prepend('<div class="invisibleElement">If you are viewing this with a screen reader, please select this <button class="ui_hide">button</button></div>');
});