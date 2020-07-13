/*!
 * jQuery UI Audio 0.0
 *
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 * Optional:
 *  jquery.effects.core.js
 */
(function($, undefined) {
	$.widget("ui.audio", {
    options: {
    },
	
	_create: function() {
		
		if ($.browser.mozilla || $.browser.opera) {
			
		} else {
			$(this.element ).append('<audio autoplay="autoplay" controls="controls"><source src="'+  $(this.element).attr('data-path') +'" /></audio>');
		}
		
	},
	
	

	destroy: function() {
		/**
		 * Default function of a UI widget.
		 * This will destroy the widget and remove any injected code.  
		 */
		return this;
	}
	
	});
	$.extend($.ui.audio, {
		version: 0.3
	});
})(jQuery);