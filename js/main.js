
(function() {
	"use strict";
	console.log(" SEAF fired");
	
	//variables
	var map= new google.maps.Map(document.querySelector('.map-wrapper')), marker;
	
	//functions
	function initMap(position){
		map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});

		map.setZoom(16);

		marker = new google.maps.Marker({
			position : {lat: position.coords.latitude, lng: position.coords.longitude},
			map: map,
			title: 'hello World!'
		});
	}


	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(initMap, handleError);
	} else {
		console.log("no geolocation for you!");		
	}

	function handleError(e){
		console.log(e);
	}

	//listeners
	
	})();