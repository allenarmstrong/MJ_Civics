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

    $(".tab_content-two").hide(); //Hide all content
       // $("ul.tabs li a:first").removeClass("orange"); //Hide all content
	$("ul.tabs-two li a:first").addClass("active").show(); //Activate first tab
	$(".tab_content-two:first").show(); //Show first tab content
	
	//On Click Event
	$(".tabs-two li a").click(function() {
		$(".tabs-two li a").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content-two").hide(); //Hide all tab content
		var activeTab = $(this).attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
	});

    

});