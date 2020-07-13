$(document).ready(function() {

var container = ".jSlider";

$(container).each(function() {

	$.ajax({
		url: $(this).attr('rel'),
		dataType: 'xml',
		success: function(data) {

			width = $(container).css('width');
			height = $(container).css('height');
			
			$(container).parent().css({'width' : width, 'height' : height});

			//SETUP VARS FOR QUICKER INIT
			jslider_directions = $(data).find('directions').text();
			
			showOverlay("Instructions", jslider_directions, "Continue", container);
			
			var background = [],
				title = [],
				content = [];
			
			$(data).find('item').each(function(index) {
				background.push($(this).attr('background'));
				title.push($(this).attr('title'));
				content.push($(this).find('content').text());
			});

			//ADD Instruction Button
			$(container).append('<div class="btn-i"></div>');
			$(container).append('<div id="paging"></div>');
			
			
			for (i = 0; i < content.length; i++) {
				jslider_navNum = (i + 1);
				$(container + ' #paging').append('<div class="page" id="'+i+'" style="background-image: url('+background[i]+')"><div class="title">'+title[i]+'</div>'+content[i]+'<div class="navigation">'+jslider_navNum+' of '+content.length+'</div></div>');
			};
		},
		complete: function(data) {
			$(container + ' .page').click(function() {
				$(this).hide('slide', {direction: 'left'}, 500, function() {
					$(this).next('.page').show('slide', {direction: 'right'}, 500);

					var total = $(container + ' .page').length;
					var id = Number($(this).attr('id'));

					if (id === (total - 1)) {
						$(container + ' .page').eq(0).toggle('drop', 500);
					}
				});
			});

			$(container + ' .btn-i').click(function() {
				showOverlay("Instructions", jslider_directions, "Continue", container);
			});
		}
	});
	
});
	
});