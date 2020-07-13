// JavaScript Document

var scripts = document.getElementsByTagName( 'script' );
var thisScriptTag = scripts[ scripts.length - 1 ];
//console.log( thisScriptTag.src.slice(0, - 37)  + "core/js/custom_plugins/jquery.ui.slide_word_bank.js" );

var root = thisScriptTag.src.slice(0, - 37);

var def=document.createElement("link");
def.setAttribute("rel", "stylesheet");
def.setAttribute("type", "text/css");
def.setAttribute("href", root + 'core/css/ui_interactive_defaults.css');

var skin=document.createElement("link");
skin.setAttribute("rel", "stylesheet");
skin.setAttribute("type", "text/css");
skin.setAttribute("href", root + 'skin/ui_interactive_skin_wj.css');
//skin.setAttribute("href", root + 'skin/ui_interactive_skin.css');
  

document.getElementsByTagName("head")[0].appendChild(def);
document.getElementsByTagName("head")[0].appendChild(skin);
//document.getElementsByTagName("head")[0].appendChild('<link rel="stylesheet" type="text/css" href="' + root + 'skin/ui_interactive_skin.css">');

$(function() {
	
	var array = new Array();
	var loaded = 0;
	var i = 0;
	var total = 0;
		
	if (typeof(scripts) == 'undefined') { var scripts = new Object(); }
	if (typeof(styles) == 'undefined') { var styles = new Object(); }
	
	
	importPackage();
	
	function importPackage() {
		
		importScript(root + "core/js/jquery-ui-1.8.11.custom.min.js","head", function() { importDefaults() });
	}
		
	function importScript(jsFile, element, callback) {
		
		if (scripts[jsFile] != null) return;
		var scriptElt = document.createElement('script');
		scriptElt.type = 'text/javascript';
		scriptElt.src = jsFile;
		scriptElt.charset = 'utf-8';
		document.getElementsByTagName(element)[0].appendChild(scriptElt);
		scripts[jsFile] = jsFile; // or whatever value your prefer
		//total--;
		
		if ($.browser.msie)
		{
			
			
			scriptElt.onreadystatechange = function () {
				if (this.readyState == 'loaded' || this.readyState == 'complete') {
					if ( callback != undefined ) { callback(); }
					scriptElt.onreadystatechange = null;// Unset onreadystatechange, leaks mem in IE
				}
			}
			
			
			
		}
		else
		{
			scriptElt.onload = callback;
		}
		
	}
	
	function importStyles(cssFile, element) {
		
		if (styles[cssFile] != null) return;
		var styleElt = document.createElement('link');
		styleElt.type = 'text/css';
		styleElt.href = cssFile;
		styleElt.charset = 'utf-8';
		styleElt.rel = 'stylesheet';
		document.getElementsByTagName(element)[0].appendChild(styleElt);
		styles[cssFile] = cssFile; // or whatever value your prefer
	}
	
	function countLoaded() {
			loaded++;
			if( loaded == array.length ) { 
				importScript(root + "core/js/master.js", "head"); 
			}
			
	}
	
	function checkArray( path ) {
		
		var matched = false;
		
		for ( var i = 0; i < array.length; i++ ) { 
			if ( path.match( array[i]) ) { matched = true; break; } else { matched = false;  }
		}
		
		return matched;
	}
	
	function importArray() {
		
		total = array.length;
		
		for ( var i = 0; i < array.length; i++ ) {
			importScript(array[i], 'head', function() { countLoaded() } );
		}
		
		
	}
	

	function importDefaults() {
		
		var ctr = $('.ui_interactive').length;
		
		$('.ui_interactive').each(function() { 
		
			$(this).wrap('<div class="ui_loading_screen"></div>');
			var path;
			
			
			var path = root + "core/js/custom_plugins/jquery.ui.audio.js";
			if( checkArray( path ) == false ) { array.push( path ); }
			
			var path = root + "core/js/custom_plugins/jquery.ui.slide.js";
			if( checkArray( path ) == false ) { array.push( path ); }
						
			path = root + "core/js/custom_plugins/functions/jquery.shuffle.js";
			if( checkArray( path ) == false ) { array.push( path ); }
			
			path = root + "core/js/custom_plugins/functions/jquery.tooltip.js";
			if( checkArray( path ) == false ) { array.push( path ); }
			
			path = root + "core/js/custom_plugins/functions/jquery.flip.min.js";
			if( checkArray( path ) == false ) { array.push( path ); }
			
			var path = root + "core/js/custom_plugins/jquery.ui.cardflip.js";
			if( checkArray( path ) == false ) { array.push( path ); }
			
			
			path = root + "core/js/custom_plugins/functions/jquery.interface.js";
			if( checkArray( path ) == false ) { array.push( path ); }
			
			path = root + "core/js/custom_plugins/jquery.ui.slideshow.js";
			if( checkArray( path ) == false ) { array.push( path ); }
			
			path = root + "core/js/custom_plugins/primitives/jquery.ui.navigation.js";
			if( checkArray( path ) == false ) { array.push( path ); }
			
			path = root + "core/js/custom_plugins/primitives/jquery.ui.quiz_tracker.js";
			if( checkArray( path ) == false ) { array.push( path ); }
			
			ctr--;
			
			if (ctr == 0 ) { importFound(); }
		});
		
		if ( $('.ui_interactive').length == 0 ) {
			
			path = root + "core/js/custom_plugins/functions/jquery.interface.js";
			if( checkArray( path ) == false ) { array.push( path ); }
			
			
			importFound();
		}
		
		
	}
	
	function importFound() {	
	
		var ctr = $('.ui_interactive .ui_slides > div').length;
	
		$('.ui_interactive .ui_slides > div').each(function() { 
		
			var s = $(this).attr('class');
			
			if ( s.indexOf("ui_slide") != -1 ) {
				var path = root + "core/js/custom_plugins/jquery.ui.slide.js";
				if( checkArray( path ) == false ) { array.push( path ); }
			}
			
			if ( s.indexOf("ui_slide_tf") != -1 ) {
				var path = root + "core/js/custom_plugins/jquery.ui.slide_tf.js";
				if( checkArray( path ) == false ) { array.push( path ); }
			} 
			
			if ( s.indexOf("ui_slide_mc") != -1 ) {
				var path = root + "core/js/custom_plugins/jquery.ui.slide_mc.js";
				if( checkArray( path ) == false ) { array.push( path ); }
			}
			
			if ( s.indexOf("ui_slide_fitb") != -1 ) {
				var path = root + "core/js/custom_plugins/jquery.ui.slide_fitb.js";
				if( checkArray( path ) == false ) { array.push( path ); }
			}
			
			if ( s.indexOf("ui_slide_word_bank") != -1 ) {
				
				var path = root + "core/js/custom_plugins/jquery.ui.slide_word_bank.js";
				if( checkArray( path ) == false ) { array.push( path ); }
			}
			
			if ( s.indexOf("ui_slide_sort") != -1 ) {
				var path = root + "core/js/custom_plugins/jquery.ui.slide_drag_sort.js";
				if( checkArray( path ) == false ) { array.push( path ); }
			}
			
			if ( s.indexOf("ui_slide_select") != -1 ) {
				var path = root + "core/js/custom_plugins/jquery.ui.slide_select.js";
				if( checkArray( path ) == false ) { array.push( path ); }
			}
			
			if ( s.indexOf("ui_slide_drag_and_drop") != -1 ) {
				var path = root + "core/js/custom_plugins/jquery.ui.slide_drag_and_drop.js";
				if( checkArray( path ) == false ) { array.push( path ); }
			}
			
			
				
			ctr--;
			
			if (ctr == 0 ) { importArray(); }
			
		});
		
		if ( $('.ui_interactive .ui_slides > div').length == 0 ) {
			
			importArray(); 
		}
		
	}

	function init() {
		
	}
});

