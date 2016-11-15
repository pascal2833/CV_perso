function startScript() {
	"use strict";
	$.getScript("js/listeInfo.js");

	// Own code, not related with Udacity.
	var breakPoint1 = 480; // CF scss file.
	var widthViewPort = $(window).width();
	if (widthViewPort <= breakPoint1) {
		$(".photo-perfil").addClass("img-circle");
	} else if (widthViewPort > breakPoint1) {
		$(".photo-perfil").removeClass("img-circle");
	}

	$(window).resize(function() {
		var widthViewPort = $(window).width();
		if (widthViewPort <= breakPoint1) {
			$(".photo-perfil").addClass("img-circle");
			/*console.log("inferieur");
			console.log(widthViewPort);*/
		} else if (widthViewPort > breakPoint1) {
			$(".photo-perfil").removeClass("img-circle");
			/*console.log("supérieur");
			console.log(widthViewPort);*/
		}
	});

	//////////////////////////////////////////////////////////
	// Utilisation encapsulation (création méthode/objet) pour display project object (json):
	// TODO : preciser et revoir concept encapsulation : pourquoi, comment, ... ?
	///////////////////////////////////////////////////////////////////////////////////
	bio.display = function() {
		var formattedMyName = HTMLheaderMyName.replace("%data%", bio.name);
		var formattedMyRole = HTMLheaderMyRole.replace("%data%", bio.role);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedTel = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedPhoto = HTMLbioPic.replace("%data%", bio.biopic);
		$(".myNameAndRoleName").append(formattedMyName);
		$(".myName").append(formattedMyRole);
		$(".mailTelGitAndCoe").append(formattedEmail);
		$(".mailTelGitAndCoe").append(formattedTel);
		$(".mailTelGitAndCoe").append(formattedGitHub);
		$(".mailTelGitAndCoe").append(formattedLocation);
		$(".myNameAndRoleName").append(formattedPhoto);
		//
		$(".skills-section").append(HTMLskillsFrontEndDescAndLevelStart);
		$(".skills_frontEnd_desc_level_start").append(HTMLskillsFrontEndDescriptionStart);
		$(".skills_frontEnd_desc_level_start").append(HTMLskillsFrontEndLevelStart);

		bio.skills.forEach(function(element) {
			var formattedFrontSkills = HTMLFrontEndSkills.replace("%data%", element);
			$(".front_end_skills_desc_start").append(formattedFrontSkills);
			$(".front_end_level_start").append(HTMLskillsLevel);
		});

		bio.frontLevel.forEach(function(element, index) {
			$('ul.front_end_level_start li:eq(' + index + ') > .rectIn').attr("id", "frontSkillsNum_" + index);
			$('#frontSkillsNum_' + index).css('width', element + "px");
		});
		//
		$(".skills-section").append(HTMLskillsBackEndDescAndLevelStart);
		$(".skills_backEnd_desc_level_start").append(HTMLskillsBackEndDescriptionStart);
		$(".skills_backEnd_desc_level_start").append(HTMLskillsBackEndLevelStart);
		bio.back_end_skills.forEach(function(element) {
			var formattedBackSkills = HTMLBackEndSkills.replace("%data%", element);
			$(".back_end_skills_desc_start").append(formattedBackSkills);
			$(".back_end_level_start").append(HTMLskillsLevel);
		});
		bio.backEndLevel.forEach(function(element, index) {
			$('ul.back_end_level_start li:eq(' + index + ') > .rectIn').attr("id", "backSkillsNum_" + index);
			$('#backSkillsNum_' + index).css('width', element + "px");
		});
	};
	bio.display();

	/*education.display = function() {
		$(".education_section").append(HTMLschoolStart);
		education.schools.forEach(function(element) {
			var formattedSchoolLink = HTMLschoolLink.replace("%data%", element.url);
			var formattedSchoolName = HTMLschoolName.replace("%data%", element.name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", element.degree);
			var formattedSchoolNameLinkDegree = formattedSchoolLink + formattedSchoolName + formattedSchoolDegree;
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", element.dates);
			var formattedSchoolLocation = HTMLschoolDates.replace("%data%", element.location);
			var formattedSchoolMajors = HTMLschoolDates.replace("%data%", element.majors);
			$(".school_entry:last").append(formattedSchoolNameLinkDegree);
			$(".school_entry:last").append(formattedSchoolDates);
			$(".school_entry:last").append(formattedSchoolLocation);
			$(".school_entry:last").append(formattedSchoolMajors);
		});
		$(".education_section").append(HTMLonlineCoursesStart);
		education.onlineCourses.forEach(function(element) {
			var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%", element.title);
			var formattedOnlineCourseSchool = HTMLonlineTitle.replace("%data%", element.school);
			var formattedOnlineCourseDate = HTMLonlineDates.replace("%data%", element.dates);
			var formattedOnlineCourseUrl = HTMLonlineURL.replace("%data%", element.url);
			$(".onlineCourse_entry:last").append(formattedOnlineCourseTitle);
			$(".onlineCourse_entry:last").append(formattedOnlineCourseSchool);
			$(".onlineCourse_entry:last").append(formattedOnlineCourseDate);
			$(".onlineCourse_entry:last").append(formattedOnlineCourseUrl);
		});
	};*/
	//education.display();

	work.display = function() {
		work.jobs.forEach(function(element) {
			$(".worksExperience-section").append(HTMLworkStart);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", element.title);
			var formattedWorkDate = HTMLworkDates.replace("%data%", element.dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", element.description);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", element.location);
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", element.employer);
			var formattedWorkTecnologies = HTMLworkTecnologies.replace("%data%", element.tecnologies);
			$(".work_entry:last").append(formattedWorkTitle);
			$(".work_entry:last").append(formattedWorkEmployer);
			$(".work_entry:last").append(formattedWorkLocation);
			$(".work_entry:last").append(formattedWorkDate);
			$(".work_entry:last").append(formattedWorkDescription);
			$(".work_entry:last").append(formattedWorkTecnologies);
		});
	};
	work.display();


	projects.display = function() {
		projects.projects.forEach(function(element) {
			$(".projects-section").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", element.title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", element.dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", element.description);
			/*var formattedInfoParralax = HTMLincludeSourceInfo.replace("%data%", element.sourceImageParralax);*/
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			$(".project-entry:last").append(HTMLProjectPhotoContainer);
			/*$(".project-entry:last").append(formattedInfoParralax);*/
			element.images.forEach(function(element) {
				var formattedProjectImages = HTMLprojectImage.replace("%data%", element);
				$(".photosContainer:last").append(formattedProjectImages);
			});
		});
	};
	projects.display();

	languesEtAutres.display = function() {
		$(".languesEtAutresSection").append(HTMLlanguesStart);
		languesEtAutres.langues.forEach(function(element) {
			$(".languesList").append(HTMLlangueContainer);
			var formattedLangueLevel = HTMLlanguesLevel.replace("%data%", element.level);
			var formattedLangueFlag = HTMLlanguesFlag.replace("%data%", element.flagSymbol);
			$(".langueContainer:last").append(formattedLangueFlag);
			$(".langueContainer:last").append(formattedLangueLevel);
		});
	};
	languesEtAutres.display();

	// ---------------------------------- //
	// --- Add time series/formation ---- //
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

	var xScale = d3.scaleTime()
	.domain([new Date(d3.min(allDatesInMs)), new Date(d3.max(allDatesInMs)*1.0001)])// Set input domain (= domain/read data)
	.range([0, widthGraph-100]);//set output domain (representation des données sur le graph, en gnal en pixels).
	// Note : -100 parce que si non, prend tte la largeur du svg, container element, normal !!!
	xScale.nice();
	var yScale = d3.scaleLinear()
	.domain([0, 200])// seulement montrer 2 données : schools et onlineFormation.
	.range([0, heightGraph]);
	yScale.nice();
	// Construct and set axes : CF https://github.com/d3/d3-axis
	var xAxis = d3.axisBottom(xScale);
	var yAxis = d3.axisTop(yScale);

	// Start to draw ... //
	var diametreCercle = 8;
	// On selectionne svg (sur html) et on défini ses dimensions (mème que conteneur -> création container parce que + facile pour styliser):
	var svg = d3.select("svg");


	$('.svgFormationGraph').attr("width", widthGraph);
	$('.svgFormationGraph').attr("height", heightGraph);

	// Define 'div' for tooltips
	var div = d3.select("body")
	.append("div")  // declare the tooltip div
	.attr("class", "tooltip")              // apply the 'tooltip' class
	.style("opacity", 0);                  // set the opacity to nil

	// On fait le join element/data et on ajoute elements de styles  + tooltip/cercles.:
	svg.selectAll("circle")
		.data(education.schoolsAndOnlineCourses)
		.enter().append("circle")
		.attr("cx", function(d) {return xScale(new Date(d.dates));})
		.attr("cy", function(d) {return yScale(d.positionAxeY);})
		.attr("fill", function(d) {return d.colorCircleGraph;})
		.attr("stroke", function(d) {return d.colorCircleStrokeGraph;})
		.attr("r", diametreCercle)
	// Tooltip stuff after this
		.on("mouseover", function(d) {
		div.transition()
			.duration(500)
			.style("opacity", 0);
		div.transition()
			.duration(200)
			.style("opacity", 1);
		div	.html(
				d.name + " (" + d.degree + ")"
			)
			.style("left", (d3.event.pageX) + "px")
			.style("top", (d3.event.pageY - 28) + "px");// Pour placer l'info/cercles.
	})
		.on("mouseleave", function(d) {
		div
			.style("opacity", 0);
	});
	// Add axes:
	svg.append("g")
	//.attr('transform', 'translate(0,'+ heightGraph -100 +')')// Pour placer l'axe comme il faut.
		.attr("transform", "translate(20,320)")// Pour placer l'axe comme il faut. TODO : mettre en dynamique et pour responsive.
		.call(xAxis);

	/**
 * [[
 * Autre exo : test syntaxe un peu bizarre, utilisant fonction anonyme comme paramètre :
 * Cette fonction permet d'avoir coordonnées/click sur page.
 ]]
 * @author Pascal
 * @param {[[Type]]} document).click(function(loc [[Description]]
 */

	$(document).click(function(loc) {
		console.log(loc.pageX, loc.pageY);
	});

	//$('#map').css('height', '50px');

}
$(startScript);
