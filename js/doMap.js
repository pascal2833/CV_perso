function startScript() {
	"use strict";
	$.getScript("js/listeInfo.js");
	$.getScript("js/listeInfo.js");

	var mymap = L.map('map').setView([45, 2], 5);

	var mapBoxLayer = L.tileLayer('https://api.mapbox.com/styles/v1/pascal2833/ciuqwchor00q62hpbl7lyf3k5/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGFzY2FsMjgzMyIsImEiOiJjaXVlazg2dGMwMDF2Mm9vNDNwcjNtMjYyIn0.vUtR3Ij6qmJJubPKGNXWWQ', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18,
		minZoom: 2
	});

	mapBoxLayer.addTo(mymap);

	// ------------------------------------- //
	// Add circles and asociated pop-up :
	// ------------------------------------- //
	var circle;
	var popup;
	var circleRadius = 20000;// Initialisation (/niveau zoom).
	var circleArray = [];
	var workStrokeColor = "rgb(116,110,109)";
	var schoolStrokeColor = "rgb(155,161,155)";
	var strokeOpacity = .5;
	var fillOpacity = .5;
	var workFillColor = "rgb(254,112,1)";
	var schoolFillColor = "rgb(43,219,22)";

	// Circles creation:
	work.displayCircleOnMap = function() {
		work.jobs.forEach(function(element, index) {
			// Display cities/works/maps :
			circle = L.circle([element.latitude, element.longitude], { //[lat, long]
				color: workStrokeColor,
				opacity: strokeOpacity,
				fillColor: workFillColor,
				fillOpacity: fillOpacity,
				radius: circleRadius
			});
			circleArray.push(circle);
			circle.addTo(mymap);
			var latLonCircle = circle.getLatLng();
			var latCircle = latLonCircle.lat;
			var longCircle = latLonCircle.lng;
			$('.leaflet-interactive:last').attr('id', 'idWork_'+index);
			$('.leaflet-interactive:last').attr('data-lat', latCircle);
			$('.leaflet-interactive:last').attr('data-long', longCircle);
			$('.leaflet-interactive:last').attr('data-textPopUp', element.textPopUpMap);
		});
	};
	work.displayCircleOnMap();

	education.displayCircleOnMap = function() {
		education.schools.forEach(function(element, index) {
			circle = L.circle([element.latitude, element.longitude], { //[lat, long]
				color: schoolStrokeColor,
				opacity: strokeOpacity,
				fillColor: schoolFillColor,
				fillOpacity: fillOpacity,
				radius: circleRadius
			});
			circleArray.push(circle);
			circle.addTo(mymap);
			var latLonCircle = circle.getLatLng();
			var latCircle = latLonCircle.lat;
			var longCircle = latLonCircle.lng;
			$('.leaflet-interactive:last').attr('id', 'idCircleSchool_'+index);
			$('.leaflet-interactive:last').attr('data-lat', latCircle);
			$('.leaflet-interactive:last').attr('data-long', longCircle);
			$('.leaflet-interactive:last').attr('data-textPopUp', element.textPopUpMap);
		});
	};
	education.displayCircleOnMap();

	// Add pop up-info :
	education.schools.forEach(function(element, index) {
		$('#idCircleSchool_'+index).on('mouseover', function () {
			var idCircle = $(this).attr('id');
			var latCircle = $(this).attr('data-lat');
			var longCircle = $(this).attr('data-long');
			var textPopUp = $(this).attr('data-textPopUp');
			popup = L.popup()
				.setLatLng([latCircle,longCircle])
				.setContent(textPopUp)
				.addTo(mymap);
		});
	});
	work.jobs.forEach(function(element, index) {
		$('#idWork_'+index).on('mouseover', function () {
			var idCircle = $(this).attr('id');
			var latCircle = $(this).attr('data-lat');
			var longCircle = $(this).attr('data-long');
			var textPopUp = $(this).attr('data-textPopUp');
			popup = L.popup()
				.setLatLng([latCircle,longCircle])
				.setContent(textPopUp)
				.addTo(mymap);
		});
	});

	// Adapt circles size f(map zooms):
	mymap.on('zoomend', function() {
		var zoomMap = mymap.getZoom();
		switch(zoomMap) {
			case 2:
				circleRadius = 160000;
				break;
			case 3:
				circleRadius = 70000;
				break;
			case 4:
				circleRadius = 25000;
				break;
			case 5:
				circleRadius = 14000;
				break;
			case 6:
				circleRadius = 10000;
				break;
			case 7:
				circleRadius = 5000;
				break;
			case 8:
				circleRadius = 2500;
				break;
		}
		circleArray.forEach(function(element) {
			element.setRadius(circleRadius);
		});
	});

	// Event/click (ex) : Utile pour avoir coordonnées/carte pour pla
	/*function onMapClick(e) {
		alert("You clicked the map at " + e.latlng);
	}*/
	//mymap.on('click', onMapClick);

};
$(startScript);
