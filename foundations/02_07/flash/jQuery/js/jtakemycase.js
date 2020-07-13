//SETUP Variables
var jtakemycase_container = "#jTakeMyCase",
	jtakemycase_endfeedback,
	jtakemycase_selections = [],
	jtakemycase_amendments = [],
	jtakemycase_amendmentChoices = [],
	jtakemycase_correct_cases = 0,
	jtakemycase_correct_amendments = 0,
	jtakemycase_case_tries,
	jtakemycase_amendment_tries,
	jtakemycase_total_questions = 0,
	jtakemycase_xmlfile = 'flash/jQuery/xml/jtakemycase.xml',
	jtakemycase_amendmentPhase;
	jtakemycase_id = 0;

$(document).ready(function() {
	$.ajax({
		url: jtakemycase_xmlfile,
		dataType: 'xml',
  		success: function(data) {
			
			//SETUP VARS FOR QUICKER jtakemycase_init
			jtakemycase_directions = $(data).find('directions').text();
			jtakemycase_endfeedback = $(data).find('endfeedback').text();
			
			$(data).find('question').each(function(index) {
				
			jtakemycase_selections.push({bgImg: $(this).attr('bgImg'), statement: $(this).attr('desc'), a:{ title: $(this).find('choice').eq(0).attr('title'), desc: $(this).find('choice').eq(0).attr('desc'), feedbackTitle: $(this).find('choice').eq(0).attr('feedbackTitle'), feedback: $(this).find('choice').eq(0).attr('feedback'), correct: $(this).find('choice').eq(0).attr('correct')}, b:{ title: $(this).find('choice').eq(1).attr('title'), desc: $(this).find('choice').eq(1).attr('desc'), feedbackTitle: $(this).find('choice').eq(1).attr('feedbackTitle'), feedback: $(this).find('choice').eq(1).attr('feedback'), correct: $(this).find('choice').eq(1).attr('correct') }, override: $(this).attr('override') });
				
				
				// SET UP AMENDMENT CHOICES FOR THE CASES
				if($(this).attr('override') != "true")
				{
					$(this).find('amendmentChoices').each(function() {
						
						var arr = [];
						var corr;
						
						$(this).find('choice').each(function() {
							arr.push($(this).text());
							if($(this).attr('correct') == 'true') {
								corr = $(this).text(); 	
							}
						});
						jtakemycase_amendmentChoices.push({ choices:arr, correct:corr, correctFeedback:{ feedbackTitle: $(this).attr('correctFeedbackTitle'), feedback: $(this).attr('correctFeedback')}, incorrectFeedback:{ feedbackTitle: $(this).attr('incorrectFeedbackTitle'), feedback: $(this).attr('incorrectFeedback') } });
					});
					
					jtakemycase_total_questions++;
					
				}
				else
				{
					jtakemycase_amendmentChoices.push([0]);
				}
				
			});
			
			$(data).find('amendment').each(function(index) {
				jtakemycase_amendments.push({ title: $(this).attr('title'), fullText: $(this).children('fullText').text(), meaningTitle: $(this).children('meaning').attr('title'), meaning: $(this).children('meaning').text() });
				
				
			});
			
			// START THE INTERACTIVE
			jtakemycase_init(jtakemycase_directions, jtakemycase_endfeedback, jtakemycase_selections);
		}
	});
});

function jtakemycase_init(jtakemycase_directions, jtakemycase_endfeedback, jtakemycase_selections) {

  jtakemycase_case_tries = 0;
  jtakemycase_amendment_tries = 0;
  jtakemycase_correct_cases = 0;
  jtakemycase_correct_amendments = 0;
  jtakemycase_amendmentPhase = false;
	// ADD QUESTIONS and ANSWERS
	for (i = 0; i < jtakemycase_selections.length; i++) {
		
	//alert(jtakemycase_selections[i].bgImg);
		
		$(jtakemycase_container).append($('<div id="item-'+i+'" class="item"></div>').css("background-image",'url("flash/jQuery/images/scenario_'+ jtakemycase_selections[i].bgImg +'.png")'));
		
			//$(jtakemycase_container).append('<div id="item-'+i+'" class="item" style="background-image:url("../images/scenario_01.png")"></div>');
		
		$(jtakemycase_container + ' .item').eq(i).append('<div class="statement"><span>STATEMENT</span><h3>'+jtakemycase_selections[i].statement+'</h3></div><div class="answer"><div id="t" class="selection"><div class="letter">'+jtakemycase_selections[i].a.title+'</div><div class="text">'+jtakemycase_selections[i].a.desc+'</div></div><div id="f" class="selection"><div class="letter">'+jtakemycase_selections[i].b.title+'</div><div class="text">'+jtakemycase_selections[i].b.desc+'</div></div><br clear="all" />');
		
		if(i > 0) {
		  $(jtakemycase_container + ' #item-' + i).hide();
		};
	};
	
	// ADD AMENDMENT INSTRUCTIONS
	$(jtakemycase_container).append('<div class="specialText"><div class="chooseAmendment"><div id="jtitle">Select the correct amendment this relates to.</div></div></div>');
	$(jtakemycase_container + ' .specialText').css({'opacity' : '0', 'visibility' : 'hidden' });
	
	// ADD THE AMENDMENTS
	//$(jtakemycase_container).append('<div class ="amendments" style="visibility:hidden"><h3>AMENDMENTS</h3></div>');
	$(jtakemycase_container).append('<div class ="amendments" ><h3>AMENDMENTS</h3></div>');
	
	for (j = 0; j < jtakemycase_amendments.length; j++) {
			$(jtakemycase_container + ' .amendments').append('<div id="a" class="amendment"><div class="letter">'+jtakemycase_amendments[j].title+'</div></div><div class="tooltip"><h3>'+jtakemycase_amendments[j].meaningTitle+'</h3><p>'+jtakemycase_amendments[j].fullText+'</p></div>');
			$(jtakemycase_container + ' .amendments .tooltip').css('opacity' , '0');
	}
	
	//$(jtakemycase_container + ' .amendments').css('opacity' , '0');
		
	// ADD THE NAVIGATION and FEEDBACK
	$(jtakemycase_container).append('<div class="navigation">1 of '+jtakemycase_selections.length+'</div><div class="item endfeedback"><div class="question"></div></div>');
	
	// HIDE THE UPCOMING QUESTIONS
  $(jtakemycase_container + ' .endfeedback').hide();
	
	// SHOW INSTRUCTIONS
	showOverlay("Instructions", jtakemycase_directions, "Continue");
	
	//$(jtakemycase_container + ' .amendments .tooltip').hover(function() {
		//$(this).disableSelection();
	//});
	
	// Amendment HOVER FUNCTION
	
		
		$(jtakemycase_container + ' .amendments .amendment').hover(function() {
			if( $(this).attr('id') == 'a' ) {
				var index = $(this).index() + 1;
			
				$($(this).next()).css('visibility' , 'visible').animate({'opacity' : '1'});}
				
		},function(){
				
				$($(this).next()).animate({'opacity' : '0'}, function(){
				
				$(this).css({'visibility' : 'hidden'});
			
				});
			
		});
		
	// ANSWER CLICK FUNCTION
	$(jtakemycase_container + ' .selection').click(function() {
		
		// VARS FOR THE CURRENT QUESTION ID
		var item = $(this).parent().parent().attr('id'),
			itemArray = item.split('-');
			
		jtakemycase_id = itemArray[1];
		
		if (jtakemycase_selections[jtakemycase_id].override != "true" ) {
			// IF True IS SELECTED, CHECK ANSWER
			if ($(this).attr('id') === "t") {
				if (jtakemycase_selections[jtakemycase_id].a.correct === "true") { jtakemycase_CheckAmendment(jtakemycase_selections[jtakemycase_id].a); jtakemycase_amendmentPhase	= true; }
				else { jtakemycase_case_tries++; jtakemycase_TryAgain(jtakemycase_selections[jtakemycase_id].a); }
			}
	
			// IF False IS SELECTED, CHECK ANSWER
			else if ($(this).attr('id') === "f") {
				if (jtakemycase_selections[jtakemycase_id].b.correct === "true") { jtakemycase_CheckAmendment(jtakemycase_selections[jtakemycase_id].b); jtakemycase_amendmentPhase = true; }
				else { jtakemycase_case_tries++; jtakemycase_TryAgain(jtakemycase_selections[jtakemycase_id].b); }
			}
		} else{
			if ($(this).attr('id') === "t") {
				jtakemycase_Correct(jtakemycase_selections[jtakemycase_id].a);
			} else if ($(this).attr('id') === "f") {
				jtakemycase_Correct(jtakemycase_selections[jtakemycase_id].b);
			}
		}
		
		function jtakemycase_CheckAmendment(obj) {
			
			// DETERMINE SCORE
			if ( jtakemycase_case_tries == 0 ) {
				jtakemycase_correct_cases++;	
			}
			else {
				jtakemycase_case_tries = 0;
			}
			
			// HIDE CHOICES
			showOverlay(obj.feedbackTitle, obj.feedback, "Close");
			$(jtakemycase_container + ' .answer').animate({'opacity' : '0'}, function(){
				$(this).css({'visibility' : 'hidden'});	
			});
			
			// SHOW NEW INSTRUCTIONS
			$(jtakemycase_container + ' .specialText').animate({'opacity' : '1'}, function(){
				$(this).css({'visibility' : 'visible'});	
			});
			
			
			// NARROW DOWN AmendmentS
			$(jtakemycase_container + ' .amendment').css({'opacity' : '.5'});
			$(jtakemycase_container + ' .amendment').attr('id','null');

			for ( var i = 0; i < jtakemycase_amendmentChoices[jtakemycase_id].choices.length; i++ ) {
				var index = (jtakemycase_amendmentChoices[jtakemycase_id].choices[i]) - 1;
				$(jtakemycase_container + ' .amendment:eq('+index+')').css({'opacity' : '1'});
				$(jtakemycase_container + ' .amendment:eq('+index+')').attr('id','a');
			}
		}
		
		
	});
	
	// Amendment CLICK FUNCTION
	$(jtakemycase_container + ' .amendment').click(function() {
		
		if($(this).attr('id') == 'a' && jtakemycase_amendmentPhase == true ) {
			var index = ($(this).index() + 1) / 2;
			
			if( jtakemycase_amendmentChoices[jtakemycase_id].correct == index ) {
				
				if ( jtakemycase_amendment_tries == 0 ) {
					jtakemycase_correct_amendments++;	
				}
				else {
					jtakemycase_amendment_tries = 0;
				}
			
				
				jtakemycase_amendmentPhase = false;
				jtakemycase_Correct(jtakemycase_amendmentChoices[jtakemycase_id].correctFeedback);
				
			}
			else {
				jtakemycase_amendment_tries++;
				jtakemycase_TryAgain(jtakemycase_amendmentChoices[jtakemycase_id].incorrectFeedback);
			}
		}
	});
	
	
}

function jtakemycase_Correct(obj) {
	showOverlay(obj.feedbackTitle, obj.feedback, "Close");
	nextQues(jtakemycase_id);
}

function jtakemycase_TryAgain(obj) {
	showOverlay(obj.feedbackTitle, obj.feedback, "Close");
}



function nextQues(currQues) {
	// SETUP VARS FOR MOVING THROUGH QUESTIONS and UPDATING NAV
	var nextQues = Number(currQues) + 1,
		nextQuesNav = nextQues + 1;
	
	if (nextQuesNav > jtakemycase_selections.length) {
	  $(jtakemycase_container + ' .endfeedback').append('<h2>YOU HAVE FINISHED!</h2><h1>You correctly selected '+jtakemycase_correct_cases+' cases out of '+jtakemycase_total_questions+' possible and '+jtakemycase_correct_amendments+' amendments out of '+jtakemycase_total_questions+' possible.</h1><p>'+jtakemycase_endfeedback+'</p>'); // APPEND THE TOTAL CORRECT
		$(jtakemycase_container + ' .navigation').html('').remove(); // REMOVE NAVIGATION NUMBERS
		$(jtakemycase_container + ' .amendments').remove(); // REMOVE AMENDMENTS
		
		// SHOW RESTART BUTTON
		$(jtakemycase_container).append('<button>Restart</button>');
		$(jtakemycase_container + ' button').hide().fadeIn('slow');
		
		// RESTART CLICK FUNCTION
		$(jtakemycase_container + ' button').click(function() {
			for (i = 0; i < jtakemycase_selections.length; i++) { $(jtakemycase_container + ' #item-'+i).remove(); }; // REMOVE ALL QUESTIONS
			$(this).fadeOut('slow', function() { $(this).remove(); }); // REMOVE RESTART BUTTON
			$(jtakemycase_container + ' .endfeedback').fadeOut('slow', function() { 
				$(this).remove(); // REMOVE FEEDBACK
				jtakemycase_init(jtakemycase_directions, jtakemycase_endfeedback, jtakemycase_selections ); // RESTART Interactive
			});
		});
	} else {
		$(jtakemycase_container + ' .navigation').html(nextQuesNav + ' of ' + jtakemycase_selections.length); // UPDATE NAVIGATION
	}
	
	// HIDE CURRENT QUESTION then SHOW THE NEXT
	$(jtakemycase_container + ' .item').eq(currQues).toggle('drop', 500, function() {
		$(jtakemycase_container + ' .item').eq(nextQues).toggle('drop', 500);
	});
	
	// show case choices
	$(jtakemycase_container + ' .answer').css('visibility' , 'visible').animate({'opacity' : '1'});
	
	// show amendments
	$(jtakemycase_container + ' .amendments').css('visibility' , 'visible').animate({'opacity' : '1'});
	$(jtakemycase_container + ' .amendment').css({'opacity' : '1'});
	$(jtakemycase_container + ' .amendment').attr('id','a');
	
	// HIDE NEW INSTRUCTIONS
	$(jtakemycase_container + ' .specialText').animate({'opacity' : '0'}, function(){
		$(this).css({'visibility' : 'hidden'});	
	});
	
};


function showOverlay(title, directions, btnname) {
	var overlay = "overlay",
		$overlay = "." + overlay;
	
	$(jtakemycase_container).append('<div class="'+overlay+'"><div class="instructions"><div id="jtitle">'+title+'</div><div id="text">'+directions+'</div><div class="go-btn">'+btnname+'</div></div></div>');
	$(jtakemycase_container + $overlay).hide().fadeIn(750);
	$(jtakemycase_container + ' .go-btn').click(function() {
		$(this).parent().parent().fadeOut('slow', function() {
			$(this).remove();
		});
	});
};