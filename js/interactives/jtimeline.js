$(document).ready(function() {
  var container = '.jTimeline'
      ,jtimeline_item
      ,jtimeline_first
      ,jtimeline_last;

$(container).each(function() {

	//ajax call to get XML data
	$.ajax({
    type: 'GET',
		url: $(this).attr('rel'), //XML FILE
		dataType: 'xml'

		//parse XML data
		, success: function(xml) {
			$(xml).find('timeline').each(function(){
				var timelineTitle = $(this).attr('title');
				var timelineSubtitle = $(this).attr('subtitle');
				$(container).append('<div id="head"><h1>'+timelineTitle+'</h1><h2>'+timelineSubtitle+'</h2></div>');
				$(container).append('<div class="timelineInfo"></div>');
				$(container).append('<ul id="imageCarousel" class="jcarousel-skin"></ul>');
			});
			$(xml).find('event').each(function() {
				var id = $(this).attr('id');
				var date = $(this).attr('date');
				var title = $(this).attr('title');
				var subtitle = $(this).attr('subtitle');
				var content = $(this).text();
				
				$(container + ' .timelineInfo').append('<div class="item item'+id+'">'+content);
        $(container + ' #imageCarousel').append('<li><a rel="'+id+'">'+date+'</a></li>');
			});
		}

		//once XML is loaded and parsed, then run these functions
		, complete: function() {
			$(container + ' .item').jScrollPane({ showArrows:true });

	    $(container + ' .timelineInfo').cycle({
				fx: 'scrollHorz', // TRANSITION ANIMATION
				easing: 'easeInOutBack', // EASING ANIMATION
				timeout: 0
			});

			$(container + ' #imageCarousel').jcarousel({
				easing: 'easeInOutBack', //EASING ANIMATION
				animation: 1000, //ANIMATION SPEED
				scroll: 1, // how many items to scroll when arrows are clicked
				visible: 6, // how many items are visible at a time on the timeline bottom row
				itemFallbackDimension: 97,
				itemFirstInCallback: jtimeline_itemFirstInCallback,
        itemLastInCallback: jtimeline_itemLastInCallback,
			});

			$(container + ' .jcarousel-item a').eq(0).addClass('jcarousel-item-active'); // SET ACTIVE STATE FOR ITEM 1
			
			// SET ACTIVE STAGE UPON CLICK
  		$(container + ' .jcarousel-item a').click(function() {
  		  var id = Number($(this).attr('rel'));
  		  
				$(container + ' .jcarousel-item-active').removeClass('jcarousel-item-active');
				$(this).addClass('jcarousel-item-active');
				$(container + ' .timelineInfo').cycle(id);
			});
		}
	});
	
});

	//KEYBOARD COMMAND FUNCTIONS
	$(document).keydown(function(event){
	  var prev_item = $(container + ' .jcarousel-item-active').parent().prev(container + ' .jcarousel-item')
	      ,next_item = $(container + ' .jcarousel-item-active').parent().next(container + ' .jcarousel-item')
	      ;
	  
		switch (event.keyCode) {

      //LEFT ARROW
			case 37:

				if (prev_item.length === 0) {	} 
				else {
					$(container + ' .jcarousel-item-active').removeClass('jcarousel-item-active').parent().prev(container + ' .jcarousel-item').find('a').addClass('jcarousel-item-active');
					$(container + ' .timelineInfo').cycle('prev');
				}

				var currItem = $(container + ' .jcarousel-item-active').parent().attr('jcarouselindex');
				
				if (Number(currItem) <= jtimeline_first) {
					$(container + ' .jcarousel-prev').click();
				}

				break;

      //RIGHT ARROW
			case 39:

				if (next_item.length === 0) {	} 
				else {
					$(container + ' .jcarousel-item-active').removeClass('jcarousel-item-active').parent().next(container + ' .jcarousel-item').find('a').addClass('jcarousel-item-active');
					$(container + ' .timelineInfo').cycle('next');
				}

				var currItem = $(container + ' .jcarousel-item-active').parent().attr('jcarouselindex');

				if (Number(currItem) >= jtimeline_last) {
					$(container + ' .jcarousel-next').click();
				}

				break;
	}});
  
  function jtimeline_itemFirstInCallback(carousel, item, idx, state) {
    jtimeline_first = idx;
  }
  
  function jtimeline_itemLastInCallback(carousel, item, idx, state) {
  	jtimeline_last = idx;
  }

});


