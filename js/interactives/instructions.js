function showOverlay(title, directions, btnname, container) {
	var overlay = "overlay",
		$overlay = "." + overlay;
	
	$(container).append('<div class="'+overlay+'"><div class="instructions"><div id="title">'+title+'</div><div id="text">'+directions+'</div><div class="go-btn">'+btnname+'</div></div></div>');
	$(container + $overlay).hide().fadeIn(750);
	
	$(container + ' .go-btn').click(function() {
		$(this).parent().parent().fadeOut('slow', function() {
			$(this).remove();
		});
	});
};