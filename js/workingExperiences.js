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

	// ----------------------------------------------- //
	// Create data entities. ------------------------- //
	// And adding elements to svg container: --------- //
	// ----------------------------------------------- //
	var xWorkName = 325;// Pour placer horizontalement/svg container.
	var nodes = svgGraph.selectAll("g.nodes_texts")
	.data(work.nodes)
	.enter().append("svg:g")// Va creer un element <g> pour chaque element work.nodes.
	.attr("class", "nodes");
	nodes
		.append("text")
		.attr("x", xWorkName)// x et y, pas cx ni cy (pour coordonees de cercles)
		.attr("y", function(d) {return d.yWorkName})
		.attr("fill", "rgb(20,25,70)")
		.text(function(d) {return d.workName;}); // = text to put!

	var complementNodes = svgGraph.selectAll("g.complementNodes_texts")
	.data(work.complementsNodes)
	.enter().append("svg:g")// Va creer un element <g> pour chaque element work.nodes.
	.attr("class", "complementNodes");
	complementNodes
		.append("text")
		.attr("x", xWorkName)// x et y, pas cx ni cy (pour coordonees de cercles)
		.attr("y", function(d) {return d.yWorkName + 15})
		.attr("fill", "rgb(20,25,70)")
		.text(function(d) {return '(' + d.date + ')';}); // = text to put!

	var xProgrammingLanguageName = 850;
	var childrens = svgGraph.selectAll("g.childrens_texts")
	.data(work.childrens)
	.enter().append("svg:g")
	.attr("class", "childrens");
	childrens
		.append("text")
		.attr("x", xProgrammingLanguageName)// x et y, pas cx ni cy (pour coordonees de cercles)
		.attr("y", function(d) {return d.y;})
		.attr("fill", "rgb(20,25,70)")
		.text(function(d) {return d.name;});

	var xWorkNameToLink = 540;
	var links = svgGraph.selectAll("g.lines_links")
	.data(work.links)
	.enter().append("svg:line")
	.attr("class", "links");
	links
		.attr("x1", xWorkNameToLink)
		.attr("y1", function(d) { return work.nodes[d.source].yWorkName - 5; })
		.attr("x2", xProgrammingLanguageName - 5)
		.attr("y2", function(d) { return work.childrens[d.target].y - 5; })
		.attr("stroke", "rgb(42, 44, 51)")
		.attr("stroke-linecap", "round")
		.attr('stroke-width', 0.2)//Defect values
		.attr("opacity", 0.8);

	// ----------------------------------- //
	// ------- Add interaction : --------- //
	// ----------------------------------- //
	// Note : selected/no_selected in in css part.
	nodes.on('mouseover', function(d) {
		$('.infoWorkingExperienceContainer').addClass('infoBlockToUpdate');
		$('.infoWorkingExperienceContainer').css('display', 'block');
		d3.select(this)
			.attr('class', 'selected')
		links.each(function(link) {
			if (link.source === d.indiceArray) {
				d3.select(this)
					.attr('class','selected')
					.attr('stroke-width', 1);
			}
		});
		complementNodes.each(function(complementNode) {
			if (complementNode.source === d.indiceArray) {
				$('.infoWorkingExperienceContainer').html(complementNode.description);
			}
		});
	});
	nodes.on('mouseout', function() {
		//$('.infoWorkingExperienceContainer').addClass('infoBlockToUpdate');
		d3.select(this)
			.attr('class', 'no_selected_workingExperience')
		links.each(function(link) {
			d3.select(this)
				.attr('opacity','0.8')
				.attr("stroke", "rgb(42, 44, 51)")
				.attr('stroke-width', 0.2);
		});
		//$('.infoWorkingExperienceContainer').css('display', 'none');


	});














}
startScript();
