var quesCount;
var amountCorrect;
var form = null;
var xmlData;
var quiz_container = "#jQuiz";

$(document).ready(function() {
	$.ajax({
		dataType: 'xml',
		url: jquiz_xmlfile,
		success: function(data) {

			showQuizOverlay("Instructions", $(data).find('directions').text(), "Go!");

			var h = $(quiz_container).css('height');
			height = Number(h.replace(/px/, '')) + 20;

			$(quiz_container).parent().css({'height' : height});
			
			$(quiz_container + ' .go-btn').click(function() {
				$(quiz_container + '.instructions').remove();
				initQuiz();
				return false;
			});
		}
	});
});

function initQuiz() {
	$.ajax({
		dataType: 'xml',
		url: jquiz_xmlfile,
		success: function(data) {

			quesCount = 0;
			amountCorrect = 0;
	
			xmlData = data;
	
			form = $(document.createElement('form'));

			$(data).find('question').each(function(index) {
				var question = $(this).attr('string');
				var directions = $(data).find('innerDirections').text();
				var fieldset = $(document.createElement('fieldset'));
				var correctFeedback = $(data).find('correct');
				var incorrectFeedback = $(data).find('incorrect');
				
				//CREATE Question
				fieldset.append($(document.createElement('h2')).html('<span class="directions">'+directions+'</span><br />'+question));

				//SETUP Left & Right Side quiz_container
				fieldset.append($(document.createElement('div')));
				fieldset.find('div').attr('class', 't6040').append('<div class="left"></div>').append('<div class="right"></div>');

				//CREATE Answer Holder
				fieldset.find('.left').append('<div class="answers"></div>');
				
				//CREATE Answers
				$(this).find('choice').each(function(index){
					fieldset.find('div.left div.answers').append('<input type="radio" name="'+question+'" value="'+$(this).attr("correct")+'" /><label for="'+$(this).attr("string")+'">'+$(this).attr("string")+'</label><br />');
				});
				
				form.append(fieldset);
				fieldset.addClass('notVisible');
			});
	
			$(quiz_container).append(form);
			$(quiz_container).append('<div class="btn-i"></div>');

			//SETUP Navigation Numbers
			$(form).append('<div class="navigation">0 of 0</div>');

      //START QUIZ
			resetQuestion(quesCount);
			
			$(quiz_container + ' .btn-i').click(function() {
				showQuizOverlay("Instructions", $(data).find('directions').text(), "Close");
			});
		}
	});
}

function resetQuestion(index){
	$(quiz_container + ' div.navigation').text(index + 1 + ' of ' + $('fieldset').length);
	$('fieldset:eq('+ index +')').removeClass('notVisible');
	$('fieldset:eq('+ index +') input').click(function(e) {
		$(this).unbind('click').attr('disabled', true);

		if ($('fieldset:eq('+ index +') .answer-box').length == 0) {
			$('fieldset:eq('+ index +') div.right').append('<div class="answer-box"></div>');
		};

		$('.incorrect').addClass('notVisible');

		if($(e.target).attr('value') == 'true') {
			amountCorrect++;

			$('fieldset:eq('+ index +') div.answer-box').addClass('correct notVisible').html($(xmlData).find('question').eq(index).find('correct').text()).removeClass('notVisible');

			$('fieldset:eq('+ index +') input').unbind('click').attr('disabled', true);

			if (amountCorrect === $('fieldset').length) {
				$(quiz_container + ' fieldset div.left').append('<button class="restart">Restart</button>');
				/* $(quiz_container + ' button.restart').fadeIn(); */
				$(quiz_container + ' fieldset button.restart').click(function(e) {
				  e.preventDefault();

					$(quiz_container + ' form').remove();
					$(quiz_container + ' .btn-i').fadeOut('fast', function() {$(this).remove();});
					initQuiz();
				});
			} else {
				$(quiz_container + ' fieldset div.left').append('<button class="next">Next</button>');
				//$(quiz_container + ' .nextquiz_container a').removeClass('notVisible');
				$(quiz_container + ' fieldset button.next').click(function(e) {
				  e.preventDefault();
					nextQuestion(e.target, quesCount++);
					$(quiz_container + ' fieldset button.next').remove();
				});
			};

		} else {
			$('fieldset:eq('+ index +') div.answer-box').attr('class', 'incorrect').html($(xmlData).find('question').eq(index).find('incorrect').text()).removeClass('notVisible');
		}
	});
}

function nextQuestion(target, ques){
	$(target).parent().parent().parent().addClass('notVisible', 500, function() {
		resetQuestion(ques+1);
	});
}

function showQuizOverlay(title, directions, btnname) {
	var overlay = "overlay",
		$overlay = "." + overlay;
	
	$(quiz_container).append('<div class="'+overlay+'"><div class="instructions"><div id="title">'+title+'</div><div id="text">'+directions+'</div><div class="go-btn">'+btnname+'</div></div></div>');
	$(quiz_container + ' .go-btn').click(function() {
		$(this).parent().parent().addClass('notVisible', function() {
			$(this).remove();
		});
	});
};