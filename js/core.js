$(document).ready(function() {


function checkFixedNav(){
	if ($(this).scrollTop() > 150 && $(window).width() > 800){ 
    $('#nav').attr("id", "fixedNav"); 
	$('#menu').attr("id", "fixedMenu"); 
     $('#content').css("margin-top", "50px");
} else{
	 $('#fixedNav').attr("id", "nav");
	 $('#fixedMenu').attr("id", "menu"); 
     $('#content').css("margin-top", "0px"); 
}
}

$(window).scroll(function() {
checkFixedNav();
});

$(window).resize(function() {
checkFixedNav();
});



$(".pop").click(function(){
var location = $(this).attr("href");


if ($(this).attr("data-height")) {
if($(this).attr("href").indexOf("genmedia") != -1 || $(this).attr("id") == "resources"){
var popup = window.open(location,'popUp','toolbar=no,location=no,directories=no, status=yes,menubar=no,scrollbars=yes,resizable=yes,width=1000,height='+$(this).attr("data-height"))
}else{
var popup = window.open(location,'popUp','toolbar=no,location=no,directories=no, status=yes,menubar=no,scrollbars=yes,resizable=yes,width=700,height='+$(this).attr("data-height"))
}
}else if($(this).attr("href").indexOf("http://") != -1){
var newWindow = window.open($(this).attr("href"), "_blank");
newWindow.focus();
}else{

if($(this).parent().attr("id") == "notes" ){
var popup = window.open(location,'popUp','toolbar=no,location=no,directories=no, status=yes,menubar=no,scrollbars=yes,resizable=yes,width=1000,height=750')
}else{
var popup = window.open(location,'popUp','toolbar=no,location=no,directories=no, status=yes,menubar=no,scrollbars=yes,resizable=yes,width=700,height=750')
}

}
return false;
}


);

//SWF Embedding
$('.swf').each(function(index) {
var params = $(this).attr('data-height').split(':');
$(this).parent().before($(document.createElement("div")).attr("title", $(this).text()).addClass("swfObject"));
$(this).parent().siblings(".swfObject").flash({swf: params[0],width: params[1], height: params[2], wmode: params[3], flashvars: params[4]});
$(this).parent().remove();
});

//Tabs
$(".tabs div.tab:gt(0)").css("visibility","hidden").css("position", "absolute");
$(".tabs h3:lt(1)").addClass("tabOn");
$(".tabs h3:gt(0)").addClass("tabOff");

$('.tabs h3').each(function(index){
var index = $(this).parent().find("h3").index($(this));
var offset = (index > 0)? parseFloat($(this).parent().find("h3:eq("+ (index-1) +")").css("left").replace(/px/, "")) + parseFloat($(this).parent().find("h3:eq("+ (index-1) +")").outerWidth(true)) + (1) : 0 ;
$(this).css("left",offset+"px");
});

$(".tabs h3").click(function(){
var index = $(this).parent().find("h3").index($(this));
$(this).parents(".tabs").find("h3").removeClass("tabOn").addClass("tabOff");
$(this).addClass("tabOn").removeClass("tabOff");
$(".tabs div.tab").css("visibility","hidden").css("position", "absolute");
$("div.tab:eq("+ index +")").css("visibility","visible").css("position", "relative");
return false;
}
);

$('.jQPlayer').each(function(intIndex){

$(this).before($(document.createElement("div")).attr("title", $(this).text()).addClass("jQPlayer"));
$(this).siblings(".jQPlayer").flash({swf: "../../genFlash/jQPlayer.swf?mp3String="+$(this).attr("href"),width:"20", height: "20", flashvars: "mp3String="+$(this).attr("href")});
$(this).remove();

});

//Accordian
$('dl.accordian dt').click(function() {
		$('dl.accordian dt').removeClass('on');
	 	$('dl.accordian dd').slideUp('normal');
		if($(this).next().is(':hidden') == true) {
			$(this).addClass('on');
			$(this).next().slideDown('normal');
		 } 
		  
	 });

	$('dl.accordian dd').hide();


// Click to reveal
$(".clickReveal dt").click(function(){
$(this).parent().find("dd").toggleClass("notVisible");
$(this).toggleClass("open");
}).parent().find("dd").toggleClass("notVisible");


//tooltip
$(".tooltip").each(function (i) {
$(this).find("span").css("display", "block").toggleClass("notVisible").append($(document.createElement("button")).addClass("close"));
$(this).bind("click", function(){

var index = $(".tooltip").index($(this));
$(".tooltip:lt("+index+")").css("z-index", "2000");
$(".tooltip:gt("+index+")").css("z-index", "2000");
$(this).css("z-index", "3000");

$(".tooltip:lt("+index+") span").addClass("notVisible").css("z-index", "2000");
$(".tooltip:gt("+index+") span").addClass("notVisible").css("z-index", "2000");

$(this).find("span").toggleClass("notVisible").css("z-index", "8000");
if(($(this).find("span").offset().left + 250) > ($("div#content").offset().left + $("div#content").width()) ){
$(this).find("span").addClass("tipRight");
}
});

})


//tooltip2
$(".tooltip2").each(function (i) {

$(this).find("span").toggleClass("notVisible").append($(document.createElement("button")).addClass("close"));
$(this).bind("click", function(){

var index = $(".tooltip2").index($(this));
$(".tooltip2:lt("+index+")").css("z-index", "2000");
$(".tooltip2:gt("+index+")").css("z-index", "2000");
$(this).css("z-index", "3000");

$(".tooltip2:lt("+index+") span").addClass("notVisible").css("z-index", "2000");
$(".tooltip2:gt("+index+") span").addClass("notVisible").css("z-index", "2000");

$(this).find("span").toggleClass("notVisible").css("z-index", "8000");
if(($(this).find("span").offset().left + 250) > ($("div#content").offset().left + $("div#content").width()) ){
$(this).find("span").addClass("tipRight");
}
});

})
 
//Form Submission in New Window
$("form.pop").submit(function() {
this.target="_blank";
});

//Lightbox Activation
$('a.lightbox').lightBox().append($(document.createElement("span")).addClass("magGlass"));

//Form Submission
$("form.discoverVideo").submit(function() {
this.target="_blank";
});


//Close
$("#close").click(function(){
window.close();
return false;
}
);

//texthelp


});