
(function() {
	"use strict";
	console.log(" SEAF fired");
	
	//variables
	var map, marker;
	
	//functions
	function initMap(){
		map = new google.maps.Map(document.querySelector('.map-wrapper'),
			{
				center: { lat:42.983233, lng: -81.250688 },
				zoom: 14
			}
		);

		marker = new google.maps.Marker({
			position : {lat:42.983233, lng: -81.250688},
			map: map,
			title: 'hello World!'
		});
	}
	initMap();
	//listeners
	
	})();