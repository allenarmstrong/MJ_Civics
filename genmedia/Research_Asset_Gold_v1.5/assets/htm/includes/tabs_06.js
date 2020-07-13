$(document).ready(function(){
jQuery.preloadImages = function()
{
for(var i = 0; i<arguments.length; i++)
{
jQuery("<img>").attr("src", arguments[i]);
}
}

$(window).bind("load", function() {
$('#albumLoader').fadeOut('slow', function () {
$('#lightbox-overlay').fadeOut('slow');
});
});


$(".tab_content").hide(); //Hide all content
$(".tab_content:first").show();
$("ul.tabs li").click(function() {
$(".tab_content").hide(); //Hide all tab content
var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
$(activeTab).fadeIn(); //Fade in the active ID content
return false;
	});


//rollovers

$('.rollover').hover(function() {
var currentImg = $(this).attr('src');
$(this).attr('src', $(this).attr('longdesc'));
$(this).attr('longdesc', currentImg);
}, function() {
var currentImg = $(this).attr('src');
$(this).attr('src', $(this).attr('longdesc'));
$(this).attr('longdesc', currentImg);
});

// $(".display").click(function () {   
   // $(".tips").slideToggle("slow");
//});

 $(".display").toggle(function () { 
	$(".tips").fadeIn("slow",function(){
	$(this).show();   
	 });  
    },
    function(){   
    $(".tips").hide();
	}
);

/*
$(".toggle-down").click(function () { 
$(this).toggleClass("toggle-up");				  
$(".toggle-txt").slideToggle("slow");
});

$(".toggle-down-two").click(function () { 
$(this).toggleClass("toggle-up-two");				  
$(".toggle-txt-two").slideToggle("slow");
});
*/

$(".toggle-down").toggle(function () { 
$(this).toggleClass("toggle-up");				  
$(".toggle-txt").fadeIn("slow",function(){
	$(this).show();   									
});
},
 function(){   
    $(".toggle-txt").hide();
	}
);

$(".toggle-down-two").toggle(function () { 
$(this).toggleClass("toggle-up-two");				  
$(".toggle-txt-two").fadeIn("slow",function(){
  $(this).show();  						
});
},
 function(){   
    $(".toggle-txt-two").hide();
	}

);


if($.browser.msie)
{
$("body").css("height","100%");
}
else
{
var height=$("#contentDiv").innerHeight();
b=height+174;
$("body").css("height", b);	
}

});

/* Lesson 6 Rollover content */
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
		$(activeTab).show(); //Fade in the active content
		return false;
	});

});

$(document).ready(function(){
$(".img-roll-01,.img-roll-02,.img-roll-03,.img-roll-04,.img-roll-05,.img-roll-06,.img-roll-07,.img-roll-08").hide();
$(".img-01").hover(
  function () {  	
    $(".img-roll-01,.img-roll-02,.img-roll-03,.img-roll-04,.img-roll-05,.img-roll-06,.img-roll-07,.img-roll-08,.img-roll-inst").hide();			
    $(".img-roll-01").show();		
	<!--   -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!--   -->
  },
  function () {
	$(".img-roll-inst").show();
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
  	$(".img-roll-01,.img-roll-02,.img-roll-03,.img-roll-04,.img-roll-05,.img-roll-06,.img-roll-07,.img-roll-08,.img-roll-inst").hide();				
    $(".img-roll-02").show();		
	<!--   -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!--   -->
  },
  function () {
  	$(".img-roll-02").hide();			
  	$(".img-roll-inst").show();
	<!-- -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!-- -->
  }
);
$(".img-03").hover(
  function () {
  	$(".img-roll-01,.img-roll-02,.img-roll-03,.img-roll-04,.img-roll-05,.img-roll-06,.img-roll-07,.img-roll-08,.img-roll-inst").hide();				
    $(".img-roll-03").show();		
	<!--   -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!--   -->
  },
  function () {
	$(".img-roll-03").hide();		
  	$(".img-roll-inst").show();
	<!-- -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!-- -->
  }
);
$(".img-04").hover(
  function () {
    $(".img-roll-01,.img-roll-02,.img-roll-03,.img-roll-04,.img-roll-05,.img-roll-06,.img-roll-07,.img-roll-08,.img-roll-inst").hide();			
    $(".img-roll-04").show();		
	<!--   -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!--   -->
  },
  function () {    
  	$(".img-roll-04").hide();		
	$(".img-roll-inst").show();		 
	<!-- -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!-- -->
  }
);
$(".img-05").hover(
  function () {
    $(".img-roll-01,.img-roll-02,.img-roll-03,.img-roll-04,.img-roll-05,.img-roll-06,.img-roll-07,.img-roll-08,.img-roll-inst").hide();			
    $(".img-roll-05").show();		
	<!--   -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!--   -->
  },
  function () {    
  	$(".img-roll-05").hide();		
	$(".img-roll-inst").show();		 
	<!-- -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!-- -->
  }
);
$(".img-06").hover(
  function () {
    $(".img-roll-01,.img-roll-02,.img-roll-03,.img-roll-04,.img-roll-05,.img-roll-06,.img-roll-07,.img-roll-08,.img-roll-inst").hide();			
    $(".img-roll-06").show();		
	<!--   -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!--   -->
  },
  function () {    
  	$(".img-roll-06").hide();		
	$(".img-roll-inst").show();		 
	<!-- -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!-- -->
  }
);
$(".img-07").hover(
  function () {
    $(".img-roll-01,.img-roll-02,.img-roll-03,.img-roll-04,.img-roll-05,.img-roll-06,.img-roll-07,.img-roll-08,.img-roll-inst").hide();			
    $(".img-roll-07").show();		
	<!--   -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!--   -->
  },
  function () {    
  	$(".img-roll-07").hide();		
	$(".img-roll-inst").show();		 
	<!-- -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!-- -->
  }
);
$(".img-08").hover(
  function () {
    $(".img-roll-01,.img-roll-02,.img-roll-03,.img-roll-04,.img-roll-05,.img-roll-06,.img-roll-07,.img-roll-08,.img-roll-inst").hide();			
    $(".img-roll-08").show();		
	<!--   -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!--   -->
  },
  function () {    
  	$(".img-roll-08").hide();		
	$(".img-roll-inst").show();		 
	<!-- -->
	var currentImg = $(this).attr('src');
	$(this).attr('src', $(this).attr('longdesc'));
	$(this).attr('longdesc', currentImg);
	<!-- -->
  }
);
});
	
						  

/* Lesson 6 Rollover End */
						  