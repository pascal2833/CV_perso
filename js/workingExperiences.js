function startScript() {
	"use strict";
	$.getScript("js/listeInfo.js");

	// Def usefull var:
	var widthGraph = $('.svgEducationContainer').css('width').replace(/[^-\d\.]/g, '');
	var heightGraph = $('.svgEducationContainer').css('height').replace(/[^-\d\.]/g, '');

	// On selectionne svg (sur html) et on défini ses dimensions (mème que conteneur -> création container parce que + facile pour styliser):
	//Create the SVG Viewport
	var svgGraph = d3.select(".svgWorkingExperiencesGraph");
	svgGraph.attr("width", widthGraph);
	svgGraph.attr("height", heightGraph);

	//Add the SVG Text Element to the svgContainer
	var node = svgGraph.selectAll("g.nodes_texts")
	.data(work.nodes)
	.enter().append("svg:g")// Va creer un element <g> pour chaque element work.nodes.
	.attr("class", "node");
	node
		.append("text")
		.attr("x", function(d) {return d.positionX})// x et y, pas cx ni cy (pour coordonees de cercles)
		.attr("y", function(d) {return d.positionY})
		.text(function(d) {return d.workName + " (" + d.nameEntreprise + ")"}); // = text to put!

	var childrens = svgGraph.selectAll("g.childrens_texts")
	.data(work.childrens)
	.enter().append("svg:g")
	.attr("class", "childrens");
	childrens
		.append("text")
		.attr("x", function(d) {return d.positionX})// x et y, pas cx ni cy (pour coordonees de cercles)
		.attr("y", function(d) {return d.positionY})
		.text(function(d) {return d.name});

	var link = svgGraph.selectAll("g.lines_links")
	.data(work.links)
	.enter().append("svg:line")
	.attr("class", function (d) { return "link" + d.value +""; })
	.attr("x1", function(d) { return d.source.x; })
	.attr("y1", function(d) { return d.source.y; })
	.attr("x2", function(d) { return d.target.x; })
	.attr("y2", function(d) { return d.target.y; })
	.attr("stroke-width", 2)
	.attr("stroke", "green");











	}
startScript();
