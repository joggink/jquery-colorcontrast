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
				jQuery object - {object}

			Example
				> // initialise new color contrast calculator
				> $('body').colorcontrast();
		  
		*/
		init : function() {
			// check if we have a background image, if not, use the backgroundcolor
			$(this).colorcontrast('bgColor');
			return this;
		},
		bgColor : function() {
			var t = $(this);
			t.removeClass('dark light');
			t.addClass($(this).colorcontrast('calculateYIQ', t.css('background-color')));
		},
		calculateYIQ : function(color){
			var r = 0, g = 0, b = 0, a = 1, yiq = 0;
			if (/rgba/.test(color)){
				color = color.replace('rgba(', '').replace(')', '').split(/,/);
				r = color[0];
				g = color[1];
				b = color[2];
				a = color[3];
			}else if (/rgb/.test(color)){
				color = color.replace('rgb(', '').replace(')', '').split(/,/);
				r = color[0];
				g = color[1];
				b = color[2];
			}else if(/#/.test(color)){
				color = color.replace('#', '');
				if (color.length == 3){
					var _t = '';
					_t += color[0] + color[0];
					_t += color[1] + color[1];
					_t += color[2] + color[2];
					color = _t;
				}
				r = parseInt(color.substr(0,2),16);
				g = parseInt(color.substr(2,2),16);
				b = parseInt(color.substr(4,2),16);
			}
			yiq = ((r*299)+(g*587)+(b*114))/1000;
			return (yiq >= 128) ? 'light' : 'dark';
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