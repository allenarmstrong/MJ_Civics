var answers = [];

$(document).ready(function() {
	$.ajax({
		dataType: 'xml',
		url: 'flash/jQuery/xml/jmatch_civics.xml',
		success: function(data) {
			var container = "#jQMatch";
			var directions = $(data).find('settings').attr('directions');
			var innerDirections = $(data).find('settings').attr('innerDirections');
			var count = 0;
			var correct = 0;
			var total = $(data).find('word').size();
			var words = [];
			var ids = [];
			var definitions = [];
			
			$(data).find('word').each(function(index){
				words[index] = $(this).text();
				ids[index] = $(this).attr('id');
			});
			$(data).find('definition').each(function(index){
				definitions[index] = $(this).text();
			});
			
			$(container).append('<div id="instructions"><div id="title">Instructions</div><div id="text">'+directions+'</div><div id="go-btn">Continue</div></div>');
			$('#go-btn').click(function() {
				$('#instructions').fadeOut('slow', function() {
					$(this).remove()
				});

				init(innerDirections, container, count, correct, total, words, ids, definitions); //START THE INTERACTIVE
			});
		},
		error: function(data) {
			// console.log(data);
		}
	}); //END AJAX REQUEST
	
	function init(innerDirections, container, count, correct, total, words, ids, definitions) {

		$(container).append('<div class="t3565"></div>');
		$('.t3565').append('<div class="innerInstructions">'+innerDirections+'</div>');
		$('.t3565').append('<h1 id="title1j">words</h1><h1 id="title2j">definitions</h1>');
		$('.t3565').append('<div class="t3565Left"></div><div class="t3565Right"></div>');
		$('.t3565Right').append('<div class="definitions"></div>');
		
		for (i=0; i<words.length; i++) {
			// // console.log(ids[i]);
			// // console.log(words[i]);
			// // console.log(definitions[i]);
			$('.t3565Left').append('<div class="word" id='+ids[i]+'>'+words[i]+'</div>');
			
			$('.definitions').append('<div class="definition" id='+ids[i]+'>'+definitions[i]+'</div>');
		}

		$('.definitions').randomize('.definition');
		
		$('.definitions').jScrollPane({showArrows:true});
		
		$('.word, .definition').click(function() {
			$(this).addClass('selected');
			count++;
			if (count == 2) {
				$(container).find('.selected').each(function(index) {
					answers[index] = $(this).attr('id');
					// console.log (answers[index]);
				});
				if (answers[0] == answers[1]) {
					// console.log("CORRECT!");
					$(container).find('.selected').slideUp('slow', function() {
						$(this).remove()
					});
					count = 0;
					correct ++;
					if (correct == total) {
						$(container).append('<div id="instructions"><div id="title">Great job!</div><div id="text">If you would like to try this again, please select the Go button.</div><div id="go-btn">&nbsp;</div></div>');
						$('#go-btn').click(function() {
							$('#instructions').fadeOut('slow', function() {
								$(this).remove();
								$('.t3565').fadeOut('slow', function() {
									$(this).remove();
									init(innerDirections, container, count, correct, total, words, ids, definitions);
								});
							});
						});

						// console.log("FINISHED!");
					}
				} 
				else {
					$(container).append('<div id="instructions"><div id="title">Try Again.</div><div id="text">That selection was incorrect. Please try again.</div><div id="go-btn">&nbsp;</div></div>');
					$('#go-btn').click(function() {
						$('#instructions').fadeOut('slow', function() {
							$(this).remove();
						});
					});

					// console.log("TRY AGAIN!");
					$(container).find('.selected').removeClass('selected');
					count = 0;
				}
			}
		});	 // END CLICK FUNCTION
	};
});


//RANDOMIZE Function
(function($) {

$.fn.randomize = function(childElem) {
  return this.each(function() {
      var $this = $(this);
      var elems = $this.children(childElem);
      
      elems.sort(function() { return (Math.round(Math.random())-0.5); });  

      $this.empty();  

      for(var i=0; i < elems.length; i++)
        $this.append(elems[i]);      

  });    
}
})(jQuery);
