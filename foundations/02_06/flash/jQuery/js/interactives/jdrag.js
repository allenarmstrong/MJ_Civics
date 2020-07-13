(function($){

var drag_container = "#jDrag"
  , drag_answers = []
  ;

$(document).ready(function() {
	$.ajax({
		url: jdrag_xmlfile,
		dataType: 'xml',
		success: function(data) {
			showDragOverlay("Instructions", $(data).find('directions').text(), "Go!", "instructions");
		}
	});
});


function initDrag() {
	$.ajax({
		url: jdrag_xmlfile,
		dataType: 'xml',
		success: function(data) {
			$(data).find('group').each(function(index) {
				$(drag_container).append('<div class="selections"><div id="selection'+index+'" class="selection"><h1 class="left">'+$(data).find('group').eq(index).attr('title')+'</h1><button>Select</button></div></div>');
				$('.selections').fadeIn();
			});

			//Instructions Button
			$(drag_container).append('<div class="btn-i"></div>');
			$(drag_container + ' .btn-i').click(function() {
				showDragOverlay("Instructions", $(data).find('directions').text(), "Go!", "modal_box");
			});
			
			$(data).find('group').each(function(index) {
				$(drag_container + ' .selection button').eq(index).click(function() {
					$(drag_container + ' .selections').fadeOut('slow', function() {
						$(this).remove();
					});
					$(drag_container).append('<div id="drop"><h1>'+$(data).find('group').eq(index).attr('title')+'</h1><div class="title">'+$(data).find('group').eq(index).find('title').text()+'</div><div class="author">by Joe Smith</div><ul class="sortable"></ul></div><div id="drags"><div class="directions">'+$(data).find('group').eq(index).find('innerDirections').text()+'</div><ul class="drags"></ul><div class="back-btn">&lt; back</div></div>');
					
					$(data).find('group').eq(index).find('item').each(function(index) {
						$('ul.drags').append('<li id="'+$(this).attr('id')+'">'+$(this).text()+'</li>');

						if ($(this).attr('correct') === 'true') {
						  drag_answers.push($(this).attr('id'));
						}
					});
					
					$(drag_container + ' .back-btn').click(function() {
						$('#drop, #drags, #drag-instructions').fadeOut('slow', function() {
							$(this).remove();
						});
						initDrag();
					});

					$('#drop, #drags').hide().delay(500).fadeIn(1000);
          
					var total = Number($(data).find('group').attr('total')); //How many items are there
          var tries = 0; //Reset Tries
          var correct = 0; // Reset the Number Correct

					$(drag_container + ' .sortable').sortable({
						connectWith: '.drags',
            tolerance: 'intersect',
            appendTo: '#jDrag',
            helper: 'clone',
            cursor: 'pointer',
            containment: '#jDrag',
						update: function(event, ui) { 
							var results = $(drag_container + ' .sortable').sortable('toArray');
							correct = 0;
							
							if (results.length === total) {
                $(drag_container + ' button.submit').remove();
							  
                $(drag_container).append('<button class="submit">submit</button>');

								$(drag_container + ' button.submit').bind('click', function() {
                  for (var i=0; i < results.length; i++) {
                    if (results[i] === drag_answers[i]) {
                      correct++;
                    }
                  };

                  if (tries === 1) {
                    resetDrags();

                    showDragOverlay($(data).find('incorrect').attr('title'), $(data).find('tries').text(), "Close", "success");
      							$(this).remove();

                    for (var i=1; i < (drag_answers.length + 1); i++) {
                      $(drag_container + ' #' + i).addClass('correct');
                      $(drag_container + ' #' + i).appendTo(drag_container + ' .sortable');
                    };
                    
                    disableDrags();
                  }
                  else {
                    tries++;
                    
        						if (results.length === correct) {
        							showDragOverlay($(data).find('correct').attr('title'), $(data).find('correct').text(), "Close", "success");

                      disableDrags();

        							$(this).remove();
        						} else {
        							showDragOverlay($(data).find('incorrect').attr('title'), $(data).find('incorrect').text(), "Close", "modal_box");
        							$(this).remove();
        							resetDrags();
        						}                      
                  }
								});
							}
						}
					});

					$(drag_container + ' .drags').sortable({
            tolerance: 'intersect',
            appendTo: '#jDrag',
            helper: 'clone',
            cursor: 'pointer',
            containment: '#jDrag',
						connectWith: '.sortable'
					});

					$(drag_container + ' .drags').shuffle();

          $(drag_container + ' .sortable').disableSelection();
          $(drag_container + ' .drags').disableSelection();
				});
			});
		}
	});
}

function resetDrags() {
  $(drag_container + ' .sortable li').appendTo(drag_container + ' .drags');
}

function disableDrags() {
  $(drag_container + ' .sortable').sortable('disable');
	$(drag_container + ' .drags').sortable('disable');
}

function showDragOverlay(title, text, btnname, type) {
	var overlay = "overlay",
		$overlay = "." + overlay;
	
	$(drag_container).append('<div class="'+overlay+'"><div class="instructions"><div id="title">'+title+'</div><div id="text">'+text+'</div><div class="go-btn">'+btnname+'</div></div>');
	$(drag_container + $overlay).hide().fadeIn(750);
	$(drag_container + ' .go-btn').click(function() {
		$(this).parent().parent().fadeOut('slow', function() {
			$(this).remove();
		});
		if (type === "instructions") {
			initDrag();
		} else if (type === "success") {
			$(drag_container).append('<button class="restart">restart</button>');
			$(drag_container + ' button.restart').hide().fadeIn();
			
			$(drag_container + ' button.restart').click(function() {
				$('#drop, #drags, #drag-instructions').fadeOut('slow', function() {
					$(this).remove();
				});
				$(this).remove();
				$(drag_container + ' .btn-i').remove();
				initDrag();
			});
		}
	});
};

})(jQuery);