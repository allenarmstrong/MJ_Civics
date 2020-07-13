/*!
 * jQuery UI Slide 0.0
 *
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 * Optional:
 *  jquery.effects.core.js
 */
(function($, undefined) {
	$.widget("ui.slide", {
    options: {
    },
	
	_create: function() {
			
			var self = this;
			
			$(this.element, 'div').addClass('ui-slideshow-item');
			
			//$(this).generateDialog( $('.ui_dialog', this.element ), this.element );
			$('.ui_dialog', this.element ).each(function() {
				//console.log( this, self.element );
				$(self).generateDialog( $(this), self.element);
			});
	},
	destroy: function() {
		/**
		 * Default function of a UI widget.
		 * This will destroy the widget and remove any injected code.  
		 */
		$(this.element, 'div').removeClass('ui-slideshow-item');
		return this;
	}
	
	});
	$.extend($.ui.slide, {
		version: 0.3
	});
})(jQuery);