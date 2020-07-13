/*!
 * jQuery UI Card Flip 0.0
 *
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 * Optional:
 *  jquery.effects.core.js
 */
(function($, undefined) {
	$.widget("ui.cardflip", {
    options: {
    },
	
	_create: function() {
			var self = $(this.element);
			
			self.disabled = false;
			
			$(this.element).bind("click",function(){
				
				// $(this) point to the clicked .ui_flip element (caching it in elem for speed):
				
			
				if ( !self.disabled ) {
					// data('flipped') is a flag we set when we flip the element:
					
					if(self.data('flipped'))
					{
						// If the element has already been flipped, use the revertFlip method
						// defined by the plug-in to revert to the default state automatically:
						
						self.revertFlip();
						
						// Unsetting the flag:
						self.data('flipped',false)
					}
					else
					{
						// Using the flip method defined by the plugin:
						
						self.flip({
							direction:'lr',
							speed: 350,
							onBefore: function(){
								
								// Insert the contents of the .ui_flipped div (hidden from view with display:none)
								// into the clicked .ui_flip div before the flipping animation starts:
								
								self.html(self.siblings('.ui_flipped').html());
								self.disabled = true;
							},
							onEnd: function(){
									self.disabled = false;
							}
						});
						
						// Setting the flag:
						self.data('flipped',true);
					}
				}
			});
			
	},
	destroy: function() {
		/**
		 * Default function of a UI widget.
		 * This will destroy the widget and remove any injected code.  
		 */
		
		return this;
	}
	
	});
	$.extend($.ui.cardflip, {
		version: 0.3
	});
})(jQuery);