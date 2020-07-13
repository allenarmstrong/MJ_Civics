(function($){

var container = ".jDrag"
  , drag_answers = []
  ,xml_file
  ;

$(document).ready(function() {

$(container).each(function() {
  xml_file = $(this).attr('rel');

	$.ajax({
		url: xml_file,
		dataType: 'xml',
		success: function(data) {
			showOverlay("Instructions", $(data).find('directions').text(), "Go!", container);
			$(container + ' .go-btn').click(function() {
			  initDrag(xml_file);
			});
		}
	});
});

function initDrag() {
	$.ajax({
		url: xml_file,
		dataType: 'xml',
		success: function(data) {
			$(data).find('group').each(function(index) {
				$(container).append('<div class="selections"><div id="selection'+index+'" class="selection"><h1 class="left">'+$(data).find('group').eq(index).attr('title')+'</h1><button>Select</button></div></div>');
				$('.selections').fadeIn();
			});

			//Instructions Button
			$(container).append('<div class="btn-i"></div>');
			$(container + ' .btn-i').click(function() {
				showOverlay("Instructions", $(data).find('directions').text(), "Go!", container);
			});
			
			$(data).find('group').each(function(index) {
				$(container + ' .selection button').eq(index).click(function() {
					$(container + ' .selections').fadeOut('slow', function() {
						$(this).remove();
					});
					$(container).append('<div id="drop"><h1>'+$(data).find('group').eq(index).attr('title')+'</h1><div class="title">'+$(data).find('group').eq(index).find('title').text()+'</div><div class="author">by Joe Smith</div><ul class="sortable"></ul></div><div id="drags"><div class="directions">'+$(data).find('group').eq(index).find('innerDirections').text()+'</div><ul class="drags"></ul><div class="back-btn">&lt; back</div></div>');
					
					$(data).find('group').eq(index).find('item').each(function(index) {
						$('ul.drags').append('<li id="'+$(this).attr('id')+'">'+$(this).text()+'</li>');

						if ($(this).attr('correct') === 'true') {
						  drag_answers.push($(this).attr('id'));
						}
					});
					
					$(container + ' .back-btn').click(function() {
						$('#drop, #drags, #drag-instructions').fadeOut('slow', function() {
							$(this).remove();
						});
						initDrag();
					});

					$('#drop, #drags').hide().delay(500).fadeIn(1000);
          
					var total = Number($(data).find('group').attr('total')); //How many items are there
          var tries = 0; //Reset Tries
          var correct = 0; // Reset the Number Correct

					$(container + ' .sortable').sortable({
						connectWith: container + ' .drags',
            tolerance: 'intersect',
            appendTo: container,
            helper: 'clone',
            cursor: 'pointer',
            containment: container,
						update: function(event, ui) { 
							var results = $(container + ' .sortable').sortable('toArray');
							correct = 0;
							
							if (results.length === total) {
                $(container + ' button.submit').remove();
							  
                $(container).append('<button class="submit">submit</button>');

								$(container + ' button.submit').bind('click', function() {
                  for (var i=0; i < results.length; i++) {
                    if (results[i] === drag_answers[i]) {
                      correct++;
                    }
                  };

                  if (tries === 1) {
                    resetDrags();

                    showOverlay($(data).find('incorrect').attr('title'), $(data).find('tries').text(), "Close", container);
                    
              			$(container + ' .go-btn').click(function() {
                      restart();
              			});
                    
      							$(this).remove();

                    for (var i=1; i < (drag_answers.length + 1); i++) {
                      $(container + ' #' + i).addClass('correct');
                      $(container + ' #' + i).appendTo(container + ' .sortable');
                    };
                    
                    disableDrags();
                  }
                  else {
                    tries++;
                    
        						if (results.length === correct) {
        							showOverlay($(data).find('correct').attr('title'), $(data).find('correct').text(), "Close", "success");

                			$(container + ' .go-btn').click(function() {
                        restart();
                			});

                      disableDrags();

        							$(this).remove();
        						} else {
        							showOverlay($(data).find('incorrect').attr('title'), $(data).find('incorrect').text(), "Close", container);
        							$(this).remove();
        							resetDrags();
        						}                      
                  }
								});
							}
						}
					});

					$(container + ' .drags').sortable({
            tolerance: 'intersect',
            appendTo: container,
            helper: 'clone',
            cursor: 'pointer',
            containment: container,
						connectWith: container + ' .sortable'
					});

					$(container + ' .drags').shuffle();

          $(container + ' .sortable').disableSelection();
          $(container + ' .drags').disableSelection();
				});
			});
		}
	});
}

function restart() {
	$(container).append('<button class="restart">restart</button>');
	$(container + ' button.restart').hide().fadeIn();
	
	$(container + ' button.restart').click(function() {
		$('#drop, #drags, #drag-instructions').fadeOut('slow', function() {
			$(this).remove();
		});
		$(this).remove();
		$(container + ' .btn-i').remove();
		initDrag();
	});
}

function resetDrags() {
  $(container + ' .sortable li').appendTo(container + ' .drags');
}

function disableDrags() {
  $(container + ' .sortable').sortable('disable');
	$(container + ' .drags').sortable('disable');
}

});

})(jQuery);