var jslider_container = "#jSlider";

$(document).ready(function() {
	$.ajax({
		url: jslider_xmlfile,
		dataType: 'xml',
		success: function(data) {

			width = $(jslider_container).css('width');
			height = $(jslider_container).css('height');
			
			$(jslider_container).parent().css({'width' : width, 'height' : height});

			//SETUP VARS FOR QUICKER INIT
			jslider_directions = $(data).find('directions').text();
			
			showSliderOverlay("Instructions", jslider_directions, "Go!");
			
			var background = [],
				title = [],
				content = [];
			
			$(data).find('item').each(function(index) {
				background.push($(this).attr('background'));
				title.push($(this).attr('title'));
				content.push($(this).find('content').text());
			});

			//ADD Instruction Button
			$(jslider_container).append('<div class="btn-i"></div>');
			$(jslider_container).append('<div id="paging"></div>');
			
			
			for (i = 0; i < content.length; i++) {
				jslider_navNum = (i + 1);
				$(jslider_container + ' #paging').append('<div class="page" id="'+i+'" style="background-image: url('+background[i]+')"><div class="title">'+title[i]+'</div>'+content[i]+'<div class="navigation">'+jslider_navNum+' of '+content.length+'</div></div>');
			};
		},
		complete: function(data) {
			$(jslider_container + ' .page').click(function() {
				$(this).hide('slide', {direction: 'left'}, 500, function() {
					$(this).next('.page').show('slide', {direction: 'right'}, 500);

					var total = $(jslider_container + ' .page').length;
					var id = Number($(this).attr('id'));

					if (id === (total - 1)) {
						$(jslider_container + ' .page').eq(0).toggle('drop', 500);
					}
				});
			});

			$(jslider_container + ' .btn-i').click(function() {
				showSliderOverlay("Instructions", jslider_directions, "Close");
			});
		}
	});
});


function showSliderOverlay(title, directions, btnname) {
	var overlay = "overlay",
		$overlay = "." + overlay;
	
	$(jslider_container).append('<div class="'+overlay+'"><div class="instructions"><div id="title">'+title+'</div><div id="text">'+directions+'</div><div class="go-btn">'+btnname+'</div></div></div>');
	$(jslider_container + $overlay).hide().fadeIn(750);
	$(jslider_container + ' .go-btn').click(function() {
		$(this).parent().parent().fadeOut('slow', function() {
			$(this).remove();
		});
	});
};