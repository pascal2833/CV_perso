function startScript() {
	// TODO : ne pas utiliser for in, mais for ou forEach.
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
			console.log("inferieur");
			console.log(widthViewPort);
		} else if (widthViewPort > breakPoint1) {
			$(".photo-perfil").removeClass("img-circle");
			console.log("supérieur");
			console.log(widthViewPort);
		}
	});

	//////////////////////////////////////////////////////////
	// Utilisation encapsulation (création méthode/objet) pour display project object (json):
	// TODO : preciser et revoir concept encapsulation : pourquoi, comment, ... ?
	///////////////////////////////////////////////////////////////////////////////////
	bio.display = function() {
		var formattedMyName = HTMLheaderMyName.replace("%data%", bio.name);
		var formattedMyRole = HTMLheaderMyRole.replace("%data%", bio.role);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedTel = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedPhoto = HTMLbioPic.replace("%data%", bio.biopic);
		$(".myNameAndRoleName").append(formattedMyName);
		$(".myNameAndRoleName").append(formattedMyRole);
		$(".welcome-message").append(formattedWelcomeMessage);
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
			$('ul.front_end_level_start li:eq('+index+') > .rectIn').attr("id", "frontSkillsNum_"+index);
			$('#frontSkillsNum_'+index).css('width', element+"px");
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
			$('ul.back_end_level_start li:eq('+index+') > .rectIn').attr("id", "backSkillsNum_"+index);
			$('#backSkillsNum_'+index).css('width', element+"px");
		});
	};
	bio.display();

	education.display = function() {
		$(".education_section").append(HTMLschoolStart);
		education.schools.forEach(function(element) {
			var formattedSchoolName = HTMLschoolName.replace("%data%", element.name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", element.degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", element.dates);
			var formattedSchoolLocation = HTMLschoolDates.replace("%data%", element.location);
			var formattedSchoolMajors = HTMLschoolDates.replace("%data%", element.majors);
			$(".school_entry:last").append(formattedSchoolName);
			$(".school_entry:last").append(formattedSchoolDegree);
			$(".school_entry:last").append(formattedSchoolDates);
			$(".school_entry:last").append(formattedSchoolLocation);
			$(".school_entry:last").append(formattedSchoolMajors);
		});
		$(".education_section").append(HTMLonlineCoursesStart);
		education.onlineCourses.forEach(function(element) {
			//$(".education_section").append(HTMLschoolStart);
			//$(".onlineCourses").append(HTMLonlineClasses);
			var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%", element.title);
			var formattedOnlineCourseSchool = HTMLonlineTitle.replace("%data%", element.school);
			var formattedOnlineCourseDate = HTMLonlineDates.replace("%data%", element.dates);
			var formattedOnlineCourseUrl = HTMLonlineURL.replace("%data%", element.url);
			$(".onlineCourse_entry:last").append(formattedOnlineCourseTitle);
			$(".onlineCourse_entry:last").append(formattedOnlineCourseSchool);
			$(".onlineCourse_entry:last").append(formattedOnlineCourseDate);
			$(".onlineCourse_entry:last").append(formattedOnlineCourseUrl);
		});
	};
	education.display();

	work.display = function() {
		work.jobs.forEach(function(element) {
			$(".worksExperience-section").append(HTMLworkStart);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", element.title);
			var formattedWorkDate = HTMLworkDates.replace("%data%", element.dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", element.description);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", element.location);
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", element.employer);
			$(".work-entry:last").append(formattedWorkEmployer);
			$(".work-entry:last").append(formattedWorkTitle);
			$(".work-entry:last").append(formattedWorkDate);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDescription);
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
			$(".languesList").append(HTMLLiElement);
			var formattedLangueName = HTMLlanguesName.replace("%data%", element.name);
			var formattedLangueLevel = HTMLlanguesName.replace("%data%", element.level);
			$(".liElement:last").append(formattedLangueName);
			$(".liElement:last").append(formattedLangueLevel);
		});
	};
	languesEtAutres.display();

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

	// Intégration de google map :
	$("#mapDiv").append(googleMap);


}
$(startScript);
