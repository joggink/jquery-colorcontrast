/**
 * jQuery color contrast
 * @Author: 		Jochen Vandendriessche <jochen@builtbyrobot.com>
 * @Author URI: 	http://builtbyrobot.com
 **/

(function($){

	var methods = {
		/*
			Function: init

			Initialises the color contrast

			Parameters:
				jQuery object(s) - {object}

			Example
				> // initialise new color contrast calculator
				> $('body').colorcontrast();
		  
		*/
		init : function(o) {

		}
	};
	$.fn.colorcontrast = function(method){
		
		if ( methods[method] ) {
		      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		    } else if ( typeof method === 'object' || ! method ) {
		      return methods.init.apply( this, arguments );
		    } else {
		      $.error( 'Method ' +  method + ' does not exist on jQuery color contrast' );
		}
		
	}
	
})(this.jQuery);