function startScript() {
	"use strict";
	$.getScript("js/listeInfo.js");

	$.getScript("js/listeInfo.js");


	var mymap = L.map('map').setView([45, 2], 5);

	var mapBoxLayer = L.tileLayer('https://api.mapbox.com/styles/v1/pascal2833/ciuqwchor00q62hpbl7lyf3k5/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGFzY2FsMjgzMyIsImEiOiJjaXVlazg2dGMwMDF2Mm9vNDNwcjNtMjYyIn0.vUtR3Ij6qmJJubPKGNXWWQ', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18,
		//id: 'your.mapbox.project.id'
	});

	var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	});

	//OpenStreetMap_Mapnik.addTo(mymap);
	mapBoxLayer.addTo(mymap);



	// ------------------------------------- //
	// Add circles and asociated pop-up :
	// ------------------------------------- //
	var circle;
	var popup;
	work.displayCircleOnMap = function() {
		work.jobs.forEach(function(element, index) {
			// Display cities/works/maps :
			circle = L.circle([element.latitude, element.longitude], { //[lat, long]
				color: element.fillColorSymbolMap,// couleur des bords.
				opacity: 0.5,
				fillColor: element.fillColorSymbolMap,
				fillOpacity: 0.5,
				radius: 5000
			}).addTo(mymap);
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
			// Display cities/works/maps :
			circle = L.circle([element.latitude, element.longitude], { //[lat, long]
				color: element.fillColorSymbolMap,// couleur des bords.
				opacity: 0.5,
				fillColor: element.fillColorSymbolMap,
				fillOpacity: 0.5,
				radius: 5000
			}).addTo(mymap);
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


	// ------------------------------------- //
	// Add perso markers et pop-upo quand hover :
	// ------------------------------------- //
	//var marker = L.marker([51.5, -0.09]).addTo(mymap);
	var workIcon = L.icon({
		iconUrl: './images/connect.jpg',
		//shadowUrl: 'leaf-shadow.png',
		iconSize:     [38, 95], // size of the icon
		shadowSize:   [50, 64], // size of the shadow
		iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
		shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
	});
	var workMarker = L.marker(
		[51.5, -0.09],
		{
			icon: workIcon
		})
	.addTo(mymap);


	// Event/click (ex) : Utile pour avoir coordonnées/carte pour pla
	/*function onMapClick(e) {
		alert("You clicked the map at " + e.latlng);
	}*/
	//mymap.on('click', onMapClick);

	$('.leaflet-marker-icon').on('mouseover', function () {
		workMarker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
	});


};
$(startScript);
