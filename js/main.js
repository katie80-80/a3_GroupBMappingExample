
(function() {
	"use strict";
	console.log(" SEAF fired");
	
	//variables
	var map= new google.maps.Map(document.querySelector('.map-wrapper')), 
	marker,
	preloader = document.querySelector('.preload-wrapper'),
	geocoder = new google.maps.Geocoder(),
	geocodeButton = document.querySelector('.geocode'),
	//directions service
	directionsService = new google.maps.DirectionsService(),
	directionsDisplay,
	locations = [];
	
	//functions
	function initMap(position){
		locations[0]= {lat: position.coords.latitude, lng: position.coords.longitude};
		directionsDisplay = new google.maps.DirectionsRenderer();
		directionsDisplay.setMap(map);

		map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});

		map.setZoom(16);

		marker = new google.maps.Marker({
			position : {lat: position.coords.latitude, lng: position.coords.longitude},
			map: map,
			title: 'hello World!'
		});
		preloader.classList.add('hide-preloader');
	}

	// geocoding api => find an address on a map
	function codeAddress(){
		var address = document.querySelector('.address').value;
		geocoder.geocode({'address': address}, function(results, status){
			if (status === google.maps.GeocoderStatus.OK){
				location[1] = {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() };
				map.setCenter(results[0].geometry.location);
				if (marker){
					marker.setMap(null);
					marker = new google.maps.Marker({
						map:map,
						position: results[0].geometry.location
					});

				}

				calcRoute(results[0].geometry.location);

			} else{
				console.log('no dice', status);
			}
		});

	}

	function calcRoute(codeLoc){
		var request = {
			origin: locations[0],
			destination: location[1],
			travelMode: 'DRIVING'
		};

		directionsService.route(request, function(response, status){
			if(status === 'OK'){
				directionsDisplay.setDirections(response);
			}
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

	geocodeButton.addEventListener('click', codeAddress, false);

	//listeners
	
	})();