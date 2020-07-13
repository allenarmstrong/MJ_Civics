$(document).ready(function() {

var container = ".jMatch"
   ,directions
   ,innerDirections
   ,count = 0
   ,correct = 0
   ,total
   ,words = []
   ,ids = []
   ,definitions = []
   ,answers = []
;

$(container).each(function() {

	$.ajax({
		dataType: 'xml',
		url: $(this).attr('rel'),
		success: function(data) {

      directions = $(data).find('settings').attr('directions');
      innerDirections = $(data).find('settings').attr('innerDirections');
      total = $(data).find('word').size();
      
			
			$(data).find('word').each(function(index){
				words[index] = $(this).text();
				ids[index] = $(this).attr('id');
			});
			$(data).find('definition').each(function(index){
				definitions[index] = $(this).text();
			});
			
      //Show Instructions
      showOverlay("Instructions", directions, "Go!", container);

      //Start the Interactive
			init(innerDirections, container, count, correct, total, words, ids, definitions);
		}
	}); //END AJAX REQUEST
	
	function init(innerDirections, container, count, correct, total, words, ids, definitions) {

		$(container).append('<div class="t3565"></div>');
		$('.t3565').append('<div class="innerInstructions"><h2>'+innerDirections+'</h2></div>');
		$('.t3565').append('<h1 id="title1">words</h1><h1 id="title2">definitions</h1>');
		$('.t3565').append('<div class="t3565Left"></div><div class="t3565Right"></div>');
		$('.t3565Right').append('<div class="definitions"></div>');
		
		for (i=0; i<words.length; i++) {
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
				});
				if (answers[0] == answers[1]) {
					$(container).find('.selected').slideUp('slow', function() {
						$(this).remove()
					});
					count = 0;
					correct ++;
					if (correct == total) {
            showOverlay("Great job!", "If you would like to try this again, please select the Restart button.", "Restart", container);

						$(container + ' .go-btn').click(function() {
							$('.t3565').fadeOut('slow', function() {
								$(this).remove();
								init(innerDirections, container, count, correct, total, words, ids, definitions);
							});
						});
					}
				}
				else {
          showOverlay("Try Again.", "That selection was incorrect. Please try again.", "Close", container);

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
	
});