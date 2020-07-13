$(document).ready(function() {

var container = '.jFlip'
  , front = []
  , back = [];

$(container).each(function() {
  $.ajax({
    url: $(this).attr('rel'),
    dataType: 'xml',
    complete: function(data) {
    	$('.front').bind("click",function(){
    		var elem = $(this);

    		// data('flipped') is a flag we set when we flip the element:

    		if(elem.data('flipped'))
    		{
    			// If the element has already been flipped, use the revertFlip method
    			// defined by the plug-in to revert to the default state automatically:

    			elem.revertFlip();

    			// Unsetting the flag:
    			elem.data('flipped',false)
    		}
    		else
    		{
    			elem.flip({
    				direction:'lr',
    				speed: 350,
    				color: '#f9f9f9',
    				onBefore: function(){
    					// Insert the contents of the .sponsorData div (hidden
    					// from view with display:none) into the clicked
    					// .sponsorFlip div before the flipping animation starts:

    					elem.html(elem.siblings('.back').html());
    				}
    			});

    			// Setting the flag:
    			elem.data('flipped',true);
    		}
    	});
    },
    success: function(data) {
      //SETUP VARS FOR QUICKER INIT
			directions = $(data).find('directions').text();
			
			$(data).find('flipcard').each(function(){
			  front.push($(this).find('front').text());
			  back.push($(this).find('back').text());
			});
			
			//APPEND FLIP CARDS
			for (i=0; i<front.length; i++) {
			  $(container).append('<div class="flipcard" id="flipcard-'+i+'"><div class="front"><div class="content">'+front[i]+'</div></div><div class="back">'+back[i]+'</div></div>');
			}

			//APPEND Instructions Button
			$(container).append('<div class="btn-i"></div>');
			
			showOverlay("Instructions", directions, "Continue", container);
			$(container + ' .go-btn').click(function() {
		    
		    if (front.length > 4) {
			    $(container).css({
  			    'overflow-y': 'scroll',
            'overflow-x': 'hidden'
  		    });
		    }

			});
			
			$(container + ' .btn-i').click(function() {
			  showOverlay("Instructions", directions, "Continue", container);
			});
    },
    error: function(data) {
      console.log(data);
    }
  });
});	

});