

var fadecontentviewer={
	csszindex: 100,
	fade:function($allcontents, togglerid, selected, speed){
		var selected=parseInt(selected)
		var $togglerdiv=$("#"+togglerid)
		var $target=$allcontents.eq(selected)
		//alert(togglerid)
		if (togglerid=="toggler1")
		{
		 if(selected==0){$('#toggler1 .prev').hide()}
		 else{$('#toggler1 .prev').show()}
		 if(selected==$allcontents.length-1){$('#toggler1 .next').hide()}
		 else{$('#toggler1 .next').show()}
		}
		if (togglerid=="toggler2")
		{
		 if(selected==0){$('#toggler2 .prev').hide()}
		 else{$('#toggler2 .prev').show()}
		 if(selected==$allcontents.length-1){$('#toggler2 .next').hide()}
		 else{$('#toggler2 .next').show()}
		}
		if (togglerid=="toggler3")
		{
		 if(selected==0){$('#toggler3 .prev').hide()}
		 else{$('#toggler3 .prev').show()}
		 if(selected==$allcontents.length-1){$('#toggler3 .next').hide()}
		 else{$('#toggler3 .next').show()}
		}
		
		
		if ($target.length==0){ //if no content exists at this index position (ie: stemming from redundant pagination link)
			alert("No content exists at page number "+selected+"!")
			return 
		}
		if ($togglerdiv.attr('lastselected')==null || parseInt($togglerdiv.attr('lastselected'))!=selected){
			
			var $toc=$("#"+togglerid+" .toc")
			var $selectedlink=$toc.eq(selected)
			$("#"+togglerid+" .next").attr('nextpage', (selected<$allcontents.length-1)? selected+1+'pg' : 0+'pg')
			$("#"+togglerid+" .prev").attr('previouspage', (selected==0)? $allcontents.length-1+'pg' : selected-1+'pg')
			
			$target.fadeOut("slow", function(){
				$allcontents.hide();
				$target.fadeIn("slow");			 
			});
			//$target.css({zIndex: this.csszindex++, display: 'inline'})
			
			//$target.hide()
			//$target.fadeIn(speed)
			$toc.removeClass('selected')
			//$selectedlink.addClass('selected')
			$togglerdiv.attr('lastselected', selected+'pg')
		}
	},

	setuptoggler:function($allcontents, togglerid, speed){
		var $toc=$("#"+togglerid+" .toc")
		$toc.each(function(index){
				$(this).attr('pagenumber', index+'pg')
		})
		
		var $next=$("#"+togglerid+" .next")
		var $prev=$("#"+togglerid+" .prev")
		$next.click(function(){
			fadecontentviewer.fade($allcontents, togglerid, $(this).attr('nextpage'), speed)
			return false
		})
		$prev.click(function(){
			fadecontentviewer.fade($allcontents, togglerid, $(this).attr('previouspage'), speed)
			return false
		})
		$toc.click(function(){
			fadecontentviewer.fade($allcontents, togglerid, $(this).attr('pagenumber'), speed)
			return false
		})
	},

	init:function(fadeid, contentclass, togglerid, selected, speed){
		$(document).ready(function(){
			var faderheight=$("#"+fadeid).height()
			var $fadecontents=$("#"+fadeid+" ."+contentclass)
			$fadecontents.css({top: 0, left: 0, height: faderheight, display: 'none'})
			fadecontentviewer.setuptoggler($fadecontents, togglerid, speed)
			setTimeout(function(){fadecontentviewer.fade($fadecontents, togglerid, selected, speed)}, 100)
			$(window).bind('unload', function(){ //clean up
				$("#"+togglerid+" .toc").unbind('click')
				$("#"+togglerid+" .next", "#"+togglerid+" .prev").unbind('click')
			})
		})
	}
}