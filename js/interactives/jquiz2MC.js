$(document).ready(function() {
  //SETUP Variables
  var container = ".jQuiz2MC",
  	directions,
  	endfeedback,
  	correct = [],
  	incorrect = [],
  	questions = [],
  	selections = {
  		a : [],
  		b : [],
  		c: []
  	},
  	answers = {
  		a : [],
  		b : [],
  		c : []
  	},
  	correct_num,
  	tries_num;

$(container).each(function() {

	$.ajax({
		url: $(this).attr('rel'),
		dataType: 'xml',
  		success: function(data) {
			
			//SETUP VARS FOR QUICKER jquiz2_init
			directions = $(data).find('directions').text();
			endfeedback = $(data).find('endfeedback').text();
			
			$(data).find('question').each(function(index) {
				questions.push($(this).attr('string'));
				correct.push($(this).find('correct').text());
				incorrect.push($(this).find('incorrect').text());
				selections.a.push($(this).find('choice').eq(0).attr('string'));
				selections.b.push($(this).find('choice').eq(1).attr('string'));
				selections.c.push($(this).find('choice').eq(2).attr('string'));
				answers.a.push($(this).find('choice').eq(0).attr('correct'));
				answers.b.push($(this).find('choice').eq(1).attr('correct'));
				answers.c.push($(this).find('choice').eq(2).attr('correct'));
			});
			
			// START THE INTERACTIVE
			init(directions, endfeedback, questions, correct, incorrect, selections, answers);
		}
	});

});
	
  function init(directions, endfeedback, questions, correct, incorrect, selections, answers) {

    tries_num = 0;
    correct_num = 0;

  	// SHOW INSTRUCTIONS
  	showOverlay("Instructions", directions, "Go!", container);

  	// ADD QUESTIONS and ANSWERS
  	$(container).append('<div class="question"><span class="bracket"></span><span class="text">Questions / Statements</span></div>');

  	for (i = 0; i < questions.length; i++) {
  		$(container).append('<div id="item-'+i+'" class="item"></div>');
  		$(container + ' .item').eq(i).append('<h1>'+questions[i]+'</h1><ol class="answer"><li id="a" class="selection"><div class="letter">A.</div><div class="text">'+selections.a[i]+'</div></li><li id="b" class="selection"><div class="letter">B.</div><div class="text">'+selections.b[i]+'</div></li><li id="c" class="selection"><div class="letter">C.</div><div class="text">'+selections.c[i]+'</div></li></ol>');
  		
  		//HIDE THE UPCOMING QUESTIONS
      if (i === 0) { $(container + ' .item').addClass('active'); }
      if (i > 0) { $(container + ' .item').addClass('inactive'); }
  	};

  	// ADD THE NAVIGATION and FEEDBACK
  	$(container).append('<div class="navigation">1 of '+questions.length+'</div><div class="item endfeedback inactive"></div>');

  	// ANSWER CLICK FUNCTION
  	$(container + ' .selection').click(function() {
  		// VARS FOR THE CURRENT QUESTION ID
  		var item = $(this).parent().parent().attr('id'),
  			itemArray = item.split('-'),
  			id = itemArray[1];

/*   			console.log(id); */

  		// IF CORRECT
  		if ($(this).attr('id') === "a" && answers.a[id] === "true" || $(this).attr('id') === "b" && answers.b[id] === "true" || $(this).attr('id') === "c" && answers.c[id] === "true") {
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
  }

  function nextQues(currQues) {
  	// SETUP VARS FOR MOVING THROUGH QUESTIONS and UPDATING NAV
  	var nextQues = Number(currQues) + 1,
  		nextQuesNav = nextQues + 1;
  
  	if (nextQuesNav > questions.length) {
    	// APPEND THE TOTAL CORRECT
    	$(container + ' .question span.text').text('You have finished!');
  	  $(container + ' .endfeedback').append('<h3>You correctly answered '+(correct_num + 1)+' out of '+questions.length+' possible.</h3><p>'+endfeedback+'</p>');

      // REMOVE NAVIGATION NUMBERS
  		$(container + ' .navigation').html('').remove();
  		
  		// SHOW RESTART BUTTON
  		$(container).append('<button>Restart</button>');
  		$(container + ' button').hide().fadeIn('slow');
  		
  		// RESTART CLICK FUNCTION
  		$(container + ' button').click(function() {
  			for (i = 0; i < questions.length; i++) { $(container + ' #item-'+i).remove(); };
  			// REMOVE ALL QUESTIONS
  			$(this).fadeOut('slow', function() { $(this).remove(); }); // REMOVE RESTART BUTTON
				$(container + ' .statement').fadeOut('slow', function() { $(this).remove();	}); //REMOVE STATEMENT
  			$(container + ' .endfeedback').fadeOut('slow', function() {
    			// REMOVE FEEDBACK
  				$(this).remove();
  				
  				// RESTART Interactive
  				init(directions, endfeedback, questions, correct, incorrect, selections, answers);
  			});
  		});

  	} else {
  		$(container + ' .navigation').html(nextQuesNav + ' of ' + questions.length); // UPDATE NAVIGATION
  	}
  	
  	// HIDE CURRENT QUESTION then SHOW THE NEXT
  	$(container + ' .item').eq(currQues).switchClass('active', 'inactive', 500);
  	$(container + ' .item').eq(nextQues).switchClass('inactive', 'active', 500);
  };
});