"use strict";
$(document).ready(function () {
	"use strict";
	/**
	 * Init comet
	 */
	comet.init('http://video.soundtooth.cn/play/scanQR');
	
	var postData = {
		data: 'value'	
	};
	
	/**
	 * Set the post data and call back function
	 */
	comet.subscribe(postData, function(data) {
		alert('Return result');
	});
	
	$('#listen').click(function (){
		"use strict";
		alert('Listen has run');
		/**
		 * Run the comet
		 */
		comet.run();
	});
	
	$('#publish').click(function (){
		"use strict";
		/**
		 * Run the comet
		 */
		comet.publish();
	});
});