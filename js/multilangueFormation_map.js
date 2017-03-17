
// ----------------------------------------------------------------------- //
//------- Define necessaries parameters and adpat to language choosed: ----------- //
// ----------------------------------------------------------------------- //
var idSelect;
var langueChosed;
var educationData;
var infoMap = infoMapEs; // Valeur par défaut.

$(".flagToChangeLanguage").click(function() {
	idSelect = $(this).attr("id");
	if(idSelect == "flagToChangeLanguageEs") {
		educationData = educationEs;
		langueChosed = 'es';
		infoMap = infoMapEs;
	}
	else if (idSelect == "flagToChangeLanguageFr") {
		educationData = educationFr;
		langueChosed = 'fr';
		infoMap = infoMapFr;
	};

	// --- Do actions: --- //
	// Adapter langues avec librairie jQ Lang
	window.lang.change(langueChosed);
	// Adapter langues pour graph formation et études (pas réussi à utiliser jQ Lang/svg.)
	adaptInfoGraphFormationStudies();
	// Adapter langues/carte :
	// On doit effacer tous les cercles et les pop up avant, si non, impossible de l'actualiser :
	circleArray.forEach(function(element) {
		mymap.removeLayer(element);
	});
	mymap.closePopup();
	// Maintenant on peut les recréer (fonctions définies dans doMap.js :)
	createCircleAndLinkInfo(infoMap);
	createAndShowPopUp(infoMap);
});

// ----------------------------------------------------------------------- //
//------- Gestion multilangues de la carte -> instanciation page, langue par défaut: ----------- //
// ----------------------------------------------------------------------- //
createCircleAndLinkInfo(infoMap);
createAndShowPopUp(infoMap);

// ----------------------------------------------------------------------- //
//------- Gestion multilangues du graphique formation/études : ----------- //
// ----------------------------------------------------------------------- //
var adaptInfoGraphFormationStudies = function() {
	// On efface les titres par défaut :
	d3.select("#formationTitle").remove();
	d3.select("#formationTitle").remove(); // Pas compris pourquoi mais besoinde le faire 2 fois, une fois, ne le fait pas.
	d3.select("#studyTitle").remove();
	d3.select("#studyTitle").remove();

	// On ajoute à nouveau les informations f(langue choisie) :
	var infoStudiesTitle = svg.append("g")
	.append("text")
	.attr("x", function(){return educationEs.complements.xPositionSubTitleStudies;})
	.attr("y", function(){return educationEs.complements.yPositionSubTitleStudies;})
	.attr("id", "studyTitle")
	.style("fill", colorStrokeCircleGraph)
	.style("font-size", "1.04em")
	.text(educationData.complements.subTitleStudies)
	;
	var infoStudiesFormations = d3.select(".svgFormationGraph").append("g")
	.append("text")
	.attr("x", function(){return educationEs.complements.xPositionSubTitleFormations;})
	.attr("y", function(){return educationEs.complements.yPositionSubTitleFormations;})
	.attr("id", "formationTitle")
	.style("fill", colorStrokeCircleGraph)
	.style("font-size", "1.04em")
	.text(educationData.complements.subTitleFormations)
	;

	// On fait le join element/data et on ajoute elements de styles  + tooltip/rectangles.:
	var rectangles = svg.selectAll("ellipseToMake")
	.data(educationData.schoolsAndOnlineCourses)
	.enter().append("rect")
	.attr("x", function(d) {return xScale(new Date(d.dates));})
	.attr("y", function(d) {return yScale(d.positionAxeY);})
	.attr("width", function(d) {return xScale(new Date(d.date_finale)) - xScale(new Date(d.dates));})
	.attr("height", 4)
	.attr("fill", colorFillCircleGraph)
	.attr("stroke", colorStrokeCircleGraph)
	.attr("stroke-width", 1.3)
	.style("cursor", "pointer")
	;
	// Tooltip stuff after this
	rectangles.on("mouseenter", function(d) {
		div.transition()
			.duration(500)
			.style("opacity", 1)
			.style("left", (d3.event.pageX - 10) + "px")
			.style("top", (d3.event.pageY + 6) + "px")// Pour placer l'info/rectangles.
		div.html(
			d.name + d.degree
		);
	})
	;
};


