/**
 * Fade In-Out - jQuery Plugin
 * Hace un fadeIn del elemento y despues de X segundos hace un fadeOut
 * El timeout para disparar el fadeOut puede ser cancelado con metodo "hide".
 *
 * @author Sahib Alejandro Jaramillo Leo (sahibalejandro.com)
 * 
 */
(function( $ ){
	var methods = {
		'init': function(seconds)
		{
			if( seconds == undefined ){
				seconds = 5;
			}
			
			return this.fadeIn('slow', function()
			{
				var $that = $(this);
				$that.data('fadeinout_timeout', setTimeout(function()
				{
					$that.fadeOut('slow');
				}, seconds * 1000 ));
			});
		},
		'hide': function()
		{
			clearTimeout(this.data('fadeinout_timeout'));
			this.fadeOut();
			return this;
		}
	};

	$.fn.fadeInOut = function(method)
	{
		// Method calling logic
		if(methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else {
			return methods.init.apply(this, arguments);
		}
	};
})( jQuery );