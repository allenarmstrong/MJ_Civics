$(document).ready(function() {

	//Default Action
	$(".tab_content").hide(); //Hide all content
       // $("ul.tabs li a:first").removeClass("orange"); //Hide all content
	$("ul.tabs li a:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content
	
	//On Click Event
	$(".tabs li a").click(function() {
		$(".tabs li a").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content
		var activeTab = $(this).attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
	});

});

$(document).ready(function(){
$(".img-roll-01,.img-roll-02,.img-roll-03,.img-roll-04").hide();
$(".img-01").hover(
  function () {  	
    $(".img-roll-01,.img-roll-02,.img-roll-03,.img-roll-04,.img-roll-05").hide();			
    $(".img-roll-01").show();		
	<!--   -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!--   -->
  },
  function () {
	$(".img-roll-05").show();
	$(".img-roll-01").hide();			
	<!-- -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!-- -->
  }
);
$(".img-02").hover(
  function () {
  	$(".img-roll-01,.img-roll-02,.img-roll-03,.img-roll-04,.img-roll-05").hide();				
    $(".img-roll-02").show();		
	<!--   -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!--   -->
  },
  function () {
  	$(".img-roll-02").hide();			
  	$(".img-roll-05").show();
	<!-- -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!-- -->
  }
);
$(".img-03").hover(
  function () {
  	$(".img-roll-01,.img-roll-02,.img-roll-03,.img-roll-04,.img-roll-05").hide();				
    $(".img-roll-03").show();		
	<!--   -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!--   -->
  },
  function () {
	$(".img-roll-03").hide();		
  	$(".img-roll-05").show();
	<!-- -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!-- -->
  }
);
$(".img-04").hover(
  function () {
    $(".img-roll-01,.img-roll-02,.img-roll-03,.img-roll-04,.img-roll-05").hide();			
    $(".img-roll-04").show();		
	<!--   -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!--   -->
  },
  function () {    
  	$(".img-roll-04").hide();		
	$(".img-roll-05").show();		 
	<!-- -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!-- -->
  }
);
});
	
						  