var jflip_container = '#jFlip'
  , front = []
  , back = [];

$(document).ready(function(){
  $.ajax({
    url: jflip_xmlfile,
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
			  $(jflip_container).append('<div class="flipcard" id="flipcard-'+i+'"><div class="front"><div class="content">'+front[i]+'</div></div><div class="back">'+back[i]+'</div></div>');
			}

			//APPEND Instructions Button
			$(jflip_container).append('<div class="btn-i"></div>');
			
			showFlipOverlay("Instructions", directions, "Go!");
			
			$(jflip_container + ' .btn-i').click(function() {
			  showFlipOverlay("Instructions", directions, "Go!");
			});
    },
    error: function(data) {
      console.log(data);
    }
  });
});

function showFlipOverlay(title, directions, btnname) {
	var overlay = "overlay",
		$overlay = "." + overlay;
	
	$(jflip_container).append('<div class="'+overlay+'"><div class="instructions"><div id="title">'+title+'</div><div id="text">'+directions+'</div><div class="go-btn">'+btnname+'</div></div></div>');
	$(jflip_container + $overlay).hide().fadeIn(750);
	$(jflip_container + ' .go-btn').click(function() {
		$(this).parent().parent().fadeOut('slow', function() {
			$(this).remove();
		});
	});
};