function startScript() {
	"use strict";
	$.getScript("js/listeInfo.js");

	// ---------------------------------- //
	// --- Objetif de ce code : Add time series/formation ---- //
	// ---------------------------------- //
	// Define scales (first thing to do):
	var allDatesInMs = [];
	// TODO : rendre ce graph responsive, ici, dimensions sont en dur !
	var widthGraph = $('.svgEducationContainer').css('width').replace(/[^-\d\.]/g, '');// d3.js a besoin de num, pas de px : CF http://stackoverflow.com/questions/1100503/how-to-get-just-numeric-part-of-css-property-with-jquery
	var heightGraph = $('.svgEducationContainer').css('height').replace(/[^-\d\.]/g, '');
	education.schoolsAndOnlineCourses.forEach(function(element) {
		var dateObject = new Date(element.dates);
		var dateInMs =dateObject.getTime();
		allDatesInMs.push(dateInMs);
	});
	var dateActuelle = new Date();

	var xScale = d3.scaleTime()
	.domain([new Date(d3.min(allDatesInMs)), dateActuelle*1.0001])// Set input domain (= domain/read data)
	.range([0, widthGraph-100]);//set output domain (representation des données sur le graph, en gnal en pixels).
	// Note : -100 parce que si non, prend tte la largeur du svg, container element, normal !!!
	xScale.nice();
	var yScale = d3.scaleLinear() // Pas la peine ici en fait, on n'utilise pas de scale donc position/svg container aurait suffit.
	.domain([0, 200])// seulement montrer 2 données : schools et onlineFormation.
	.range([0, heightGraph]);
	yScale.nice();
	// Construct and set axes : CF https://github.com/d3/d3-axis
	var xAxis = d3.axisBottom(xScale);
	var yAxis = d3.axisTop(yScale);

	// Start to draw ... //
	var diametreCercle = 8;
	var colorStrokeCircleGraph = "rgb(20,25,70)";
	var colorFillCircleGraph = "rgb(248,248,252)";
	// On selectionne svg (sur html) et on défini ses dimensions (mème que conteneur -> création container parce que + facile pour styliser):
	var svg = d3.select(".svgFormationGraph");
	$('.svgFormationGraph').attr("width", widthGraph);
	$('.svgFormationGraph').attr("height", heightGraph);

	// Define 'div' for tooltips
	var div = d3.select("body")
	.append("div")  // declare the tooltip div
	.attr("class", "tooltip")              // apply the 'tooltip' class
	.style("opacity", 0);                  // set the opacity to 0

	// On fait le join element/data et on ajoute elements de styles  + tooltip/rectangles.:
	var rectangles = svg.selectAll("ellipseToMake")
	.data(education.schoolsAndOnlineCourses)
	.enter().append("rect")
	.attr("x", function(d) {return xScale(new Date(d.dates));})
	.attr("y", function(d) {return yScale(d.positionAxeY);})
	.attr("width", function(d) {return xScale(new Date(d.date_finale)) - xScale(new Date(d.dates));})
	.attr("height", 4)
	.attr("fill", colorFillCircleGraph)
	.attr("stroke", colorStrokeCircleGraph)
	.attr("stroke-width", 1.3)
	.style("cursor", "pointer");
	// Tooltip stuff after this
	rectangles.on("mouseenter", function(d) {
		div.transition()
			.duration(500)
			.style("opacity", 1)
			.style("background-color", "white");
		div.html(
			d.name + d.degree
		)
			.style("left", (d3.event.pageX - 10) + "px")
			.style("top", (d3.event.pageY + 6) + "px");// Pour placer l'info/rectangles.
	});
	svg.on("mouseleave", function(d) {
		div
			.style("opacity", 0);
	});

	// ------- Add axes and info/graph : -------- //
	svg.append("g")
		.attr("transform", "translate(20,320)")// Pour placer l'axe comme il faut. TODO : mettre en dynamique et pour responsive.
		.call(xAxis);

	var infoStudiesTitle = svg.append("g")
	.append("text")
	.attr("x", function(){return education.complements.xPositionSubTitleStudies;})
	.attr("y", function(){return education.complements.yPositionSubTitleStudies;})
	//.style("font-weight", "bold")
	.style("fill", colorStrokeCircleGraph)
	.style("font-size", "1.04em")
	.text(education.complements.subTitleStudies);
	var infoStudiesFormations = svg.append("g")
	.append("text")
	.attr("x", function(){return education.complements.xPositionSubTitleFormations;})
	.attr("y", function(){return education.complements.yPositionSubTitleFormations;})
	.style("fill", colorStrokeCircleGraph)
	//.style("font-weight", "bold")
	.style("font-size", "1.04em")
	.text(education.complements.subTitleFormations);

}
startScript();
