/* Author: Jochen Vandendriessche

*/
/*
jQuery(document).ready(function(){

	$('nav[role="navigation"] a').each(function(){
		var _color = $(this).attr('href');
		$(this)
			.css('background-color',_color)
			.click(function(e){
				e.preventDefault();
				$('div[role="main"]')
					.css('background-color', _color);
					window.alert(getContrastYIQ(_color));
			})
		
	})

	// get the background color of the [main] div
	var _c = $('div[role="main"]');
	_c.addClass(getContrastYIQ(_c.css('background-color')));
	;

})


	function getContrastYIQ(color){
		window.alert(color);
		var r = 0, g = 0, b = 0;
		// check if it's hex or rgb
		if (/rgb/.test(color)){
			color = color.replace('rgb(', '').replace(')', '').split(/,/);
			r = color[0];
			g = color[1];
			b = color[2];
		}else{
			r = parseInt(color.substr(0,2),16);
			g = parseInt(color.substr(2,2),16);
			b = parseInt(color.substr(4,2),16);
		}
		var yiq = ((r*299)+(g*587)+(b*114))/1000;
		return (yiq >= 128) ? 'light' : 'dark';
	}
*/