$(document).ready(function() {
  //SETUP Variables
  var container = ".jQuiz2TF",
  	endfeedback,
  	correct = [],
  	incorrect = [],
  	statements = [],
  	selections = {
  		t : [],
  		f : []
  	},
  	answers = {
  		t : [],
  		f : []
  	},
  	correct_num,
  	tries_num;

$(container).each(function() {

	$.ajax({
		url: $(this).attr('rel'),
		dataType: 'xml',
  		success: function(data) {
			
			//SETUP VARS FOR QUICKER init
			directions = $(data).find('directions').text();
			endfeedback = $(data).find('endfeedback').text();
			
			$(data).find('question').each(function(index) {
				statements.push($(this).attr('string'));
				correct.push($(this).find('correct').text());
				incorrect.push($(this).find('incorrect').text());
				selections.t.push($(this).find('choice').eq(0).attr('string'));
				selections.f.push($(this).find('choice').eq(1).attr('string'));
				answers.t.push($(this).find('choice').eq(0).attr('correct'));
				answers.f.push($(this).find('choice').eq(1).attr('correct'));
			});
			
			// START THE INTERACTIVE
			init(directions, endfeedback, statements, correct, incorrect, selections, answers);
		}
	});

});
	
  function init(directions, endfeedback, statements, correct, incorrect, selections, answers) {
  
    tries_num = 0;
    correct_num = 0;

  	// SHOW INSTRUCTIONS
  	showOverlay("Instructions", directions, "Go!", container);
    
    $(container).append('<div class="statement"><span class="bracket"><span class="text">Statement</span></span></div>');
    
  	// ADD QUESTIONS and ANSWERS
  	for (i = 0; i < statements.length; i++) {
  		$(container).append('<div id="item-'+i+'" class="item"></div>');
  		$(container + ' .item').eq(i).append('<h3>'+statements[i]+'</h3><ul class="answer"><li id="t" class="selection"><div class="letter">T.</div><div class="text">'+selections.t[i]+'</div></li><li id="f" class="selection"><div class="letter">F.</div><div class="text">'+selections.f[i]+'</div></li></ul>');
  		
  		//HIDE THE UPCOMING QUESTIONS
      if (i === 0) { $(container + ' .item').addClass('active'); }
      if (i > 0) { $(container + ' .item').addClass('inactive'); }
  	};

  	// ADD THE NAVIGATION and FEEDBACK
  	$(container).append('<div class="navigation">1 of '+statements.length+'</div><div class="item endfeedback inactive"></div>');
  	
  	// ANSWER CLICK FUNCTION
  	$(container + ' .selection').click(function() {
  		// VARS FOR THE CURRENT QUESTION ID
  		var item = $(this).parent().parent().attr('id'),
  			itemArray = item.split('-'),
  			id = itemArray[1];
  		
  		// IF True IS SELECTED, CHECK ANSWER
  		if ($(this).attr('id') === "t" && answers.t[id] === "true" || $(this).attr('id') === "f" && answers.f[id] === "true") {
  		  showOverlay("That is correct!", correct[id], "Close", container);
  		  nextQues(id);
  		  tries_num = 0;
  		  correct_num++;
  		}	else {
  		  if (tries_num >= 1) {
  		    nextQues(id);
  		    showOverlay("That was incorrect.", correct[id], "Close", container);
  		  } else {
    		  showOverlay("Try Again.", incorrect[id], "Close", container);
    		  tries_num++;
        }
  		}
  	});
  };
  
  function nextQues(currQues) {
  	// SETUP VARS FOR MOVING THROUGH QUESTIONS and UPDATING NAV
  	var nextQues = Number(currQues) + 1,
  		nextQuesNav = nextQues + 1;
  
  	if (nextQuesNav > statements.length) {
    	// APPEND THE TOTAL CORRECT
    	$(container + ' .statement').text('You have finished!');
  	  $(container + ' .endfeedback').append('<h3>You correctly answered '+(correct_num + 1)+' out of '+statements.length+' possible.</h3><p>'+endfeedback+'</p>');

      // REMOVE NAVIGATION NUMBERS
  		$(container + ' .navigation').html('').remove();
  		
  		// SHOW RESTART BUTTON
  		$(container).append('<button>Restart</button>');
  		$(container + ' button').hide().fadeIn('slow');
  		
  		// RESTART CLICK FUNCTION
  		$(container + ' button').click(function() {
  			for (i = 0; i < statements.length; i++) { $(container + ' #item-'+i).remove(); };
  			// REMOVE ALL QUESTIONS
  			$(this).fadeOut('slow', function() { $(this).remove(); }); // REMOVE RESTART BUTTON
				$(container + ' .statement').fadeOut('slow', function() { $(this).remove();	}); //REMOVE STATEMENT
  			$(container + ' .endfeedback').fadeOut('slow', function() {
    			// REMOVE FEEDBACK
  				$(this).remove();
  				
  				// RESTART Interactive
  				init(directions, endfeedback, statements, correct, incorrect, selections, answers);
  			});
  		});

  	} else {
  		$(container + ' .navigation').html(nextQuesNav + ' of ' + statements.length); // UPDATE NAVIGATION
  	}
  	
  	// HIDE CURRENT QUESTION then SHOW THE NEXT
  	$(container + ' .item').eq(currQues).switchClass('active', 'inactive', 500);
  	$(container + ' .item').eq(nextQues).switchClass('inactive', 'active', 500);
  };
});