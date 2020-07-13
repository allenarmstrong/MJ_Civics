var jgallery_container = "#jGallery",
	accordion,
	photo = [],
	title = [],
	info = [],
	audio = [],
	mute = false,
	copyright = [],
	jgallery_navNum = 1,
	slide,
	currSlide,
	currSlideID = [],
	nextSlide,
	prevSlide,
	total;

$(document).ready(function() {

  //Audio Options
  soundManager.url = '../swf/';
  soundManager.flashVersion = 9;
  soundManager.useFlashBlock = false;
  soundManager.debugMode = false;

	$.ajax({
		url: jgallery_xmlfile,
		dataType: 'xml',
  		success: function(data) {

			//SETUP VARS FOR QUICKER INIT
			directions = $(data).find('directions').text();

      //Check for Accordion
      accordion = $(data).find('gallery').attr('accordion');
			
			$(data).find('photo').each(function(index) {
				photo.push($(this).attr('src'));
				title.push($(this).attr('title'));
				info.push($(this).find('info').text());
				copyright.push($(this).find('copyright').text());

        var audioSrc = $(this).find('audio').attr('src');

        if (audioSrc !== '') {
          audio.push('true');
        } else {
          audio.push('false');
        }
        
/*         console.log(audioSrc, audio); */

  			//Add Audio, if present
        soundManager.onready(function() {
          if (audioSrc !== '') {
            soundManager.createSound({
              id: 'audio'+index,
              url: audioSrc,
              onfinish: function() {
                toggleAudioControls('pause');
              }
            });
          }
        });
  		});

			total = photo.length;

			// SHOW INSTRUCTIONS
			showGalleryOverlay("Instructions", directions, "Go!");

			for (i = 0; i < photo.length; i++) {
				$(jgallery_container).append('<div id="slide-'+i+'"><div class="photo"><img src="'+photo[i]+'" alt="'+title[i]+'" /></div><div class="info"><h1>'+title[i]+'</h1><div class="text">'+info[i]+'</div><div class="copyright">'+copyright[i]+'</div></div></div>');
				
				if (i === 0) { $('#slide-'+i).addClass('active'); }
				if (i > 0) { $('#slide-'+i).addClass('inactive');	}
				if (audio[i] === 'true') {
				  $(jgallery_container + ' .text').eq(i).after('<div class="audio-controls"><div class="title">Audio</div><div class="play"><a><img src="../imgs/icons/btn-play.png" alt="Play" /></a></div> <div class="pause"><a><img src="../imgs/icons/btn-pause.png" alt="Pause" /></a></div><div class="mute"><a><img src="../imgs/icons/btn-mute.png" alt="Mute" /></a></div><div class="unmute"><a><img src="../imgs/icons/btn-unmute.png" alt="UnMute" /></a></div></div>');
				}
			};
			
			//ADD Navigation, Prev and Next Items
			$(jgallery_container).append('<div class="navigation">'+jgallery_navNum+' of '+total+'</div><div id="prev"><div>PREV</div></div><div id="next"><div>NEXT</div></div>');

      //GET CURRENT SLIDE
  		slide = $(jgallery_container + ' .active').attr('id');
  		currSlide = '#' + slide;
  		currSlideID = slide.split('-');
  
   		getPrevSlide(0);
  		getNextSlide(0);
  		
			//ACCORDION
			if (accordion === 'true') {
				$(jgallery_container + ' .text').accordion({ collapsible: true, active: false, clearStyle: true, animated: true, autoHeight: false });
			};

			$('#next').click(function() {
			
        $(currSlide).switchClass('active', 'inactive', 1000);
				$(nextSlide).switchClass('inactive', 'active', 1000, function() {
		  		slide = $(this).attr('id');
      		currSlide = '#' + slide;
      		currSlideID = slide.split('-');

      		getPrevSlide(currSlideID[1]);
      		getNextSlide(currSlideID[1]);
				});

        stopAudio(Number(currSlideID[1]));
        
        var nextTrack = Number(currSlideID[1]) + 1;

/*         console.log("NEXT TRACK: " + nextTrack, "TOTAL: " + total, (audio[nextTrack])); */

        if (nextTrack === total && (audio[0]) === 'true') {
          playAudio(0);
        } else if ((audio[nextTrack]) === 'true') {
          playAudio(nextTrack);
        }

        
				getNavNum("next", currSlideID[1]);
				$(jgallery_container + ' .navigation').html(jgallery_navNum + ' of ' + total);
			});

			$('#prev').click(function() {

				$(currSlide).switchClass('active', 'inactive', 1000);
				$(prevSlide).switchClass('inactive', 'active', 1000, function() {
		  		slide = $(this).attr('id');
      		currSlide = '#' + slide;
      		currSlideID = slide.split('-');
      
      		getPrevSlide(currSlideID[1]);
      		getNextSlide(currSlideID[1]);
				});

        stopAudio(Number(currSlideID[1]));

        var nextTrack = Number(currSlideID[1]) - 1;

/*         console.log("NEXT TRACK: " + nextTrack, "TOTAL: " + total, (audio[total - 1])); */

        if (nextTrack === -1 && (audio[total - 1]) === 'true') {
          playAudio(total - 1);
        } else if ((audio[nextTrack]) === 'true') {
          playAudio(nextTrack);
        }

				getNavNum("prev", currSlideID[1]);
				$(jgallery_container + ' .navigation').html(jgallery_navNum + ' of ' + total);
			});
		}
	});
});

function getPrevSlide(slideNum) {
	if (slideNum > 0) {
		prevSlide = '#slide-' + Number(slideNum - 1);
	} else {
		prevSlide = '#slide-' + (total - 1);
	}
};

function getNextSlide(slideNum) {
	if (slideNum < (total - 1)) {
		nextSlide = '#slide-' + (Number(slideNum) + 1);
	} else {
		nextSlide = '#slide-0';
	}
};

function getNavNum(type, slideNum) {
	if (type === "prev") {
		if (slideNum === "0") {
			jgallery_navNum = total;
		} else {
			jgallery_navNum--;
		}
	} else if (type === "next") {
		if (Number(slideNum) === (Number(total) - 1)) {
			jgallery_navNum = 1;
		} else {
			jgallery_navNum++;
		}
	};
};

function showGalleryOverlay(title, directions, btnname) {
	var overlay = "overlay",
		$overlay = "." + overlay;
	
	$(jgallery_container).append('<div class="'+overlay+'"><div class="instructions"><div id="title">'+title+'</div><div id="text">'+directions+'</div><div class="go-btn">'+btnname+'</div></div></div>');
	$(jgallery_container + $overlay).hide().fadeIn(750);
	$(jgallery_container + ' .go-btn').click(function() {
		$(this).parent().parent().fadeOut('slow', function() {
			$(this).remove();

/*       console.log(currSlide); */

			if (currSlide === "#slide-0" && audio[0] === 'true') {
			  soundManager.onready(function() { playAudio(0); });
			}			

		});
	});
};

function destroyAudioButtons(id) {
  $(jgallery_container + ' .audio-controls').undelegate();
}

function initAudioButtons(id) {
/*   console.log("INIT: " + id); */

  $(jgallery_container + ' .audio-controls').delegate('.play', 'click', function() {
    playAudio(id);
    toggleAudioControls('play');
  });
  $(jgallery_container + ' .audio-controls').delegate('.pause', 'click', function() {
    soundManager.togglePause('audio'+id);
    toggleAudioControls('pause');
  });
  $(jgallery_container + ' .audio-controls').delegate('.mute', 'click', function() {
    soundManager.toggleMute('audio'+id);
    toggleAudioControls('mute');
  });
  $(jgallery_container + ' .audio-controls').delegate('.unmute', 'click', function() {
    soundManager.toggleMute('audio'+id);
    toggleAudioControls('unmute');
  });
}

function toggleAudioControls(method) {
/*   console.log("METHOD: " + method); */

  if (method === 'play') {
    $('.play').hide();
    $('.pause').show();
  }
  if (method === 'pause') {
    $('.play').show();
    $('.pause').hide();
  }
  if (method === 'mute') {
    $('.unmute').show();
    $('.mute').hide();
    mute = true;
  }
  if (method === 'unmute') {
    $('.mute').show();
    $('.unmute').hide();
    mute = false;
  }
}

function playAudio(id) {
/*   console.log("PLAY: " + id); */

  soundManager.play('audio'+id);
  toggleAudioControls('play');
  destroyAudioButtons(id);
  initAudioButtons(id);

  if (mute === true) { soundManager.toggleMute('audio'+id); }
} 

function stopAudio(id) {
/*   console.log("STOP: " + id); */

  //Stop Audio 
  if (audio[id] === 'true') {
    soundManager.stop('audio'+id);
  }
}