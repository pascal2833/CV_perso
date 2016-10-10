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
		$(".skills-section").append(HTMLskillsFrontEndStart);
		$(".skills-section").append(HTMLskillsBackEndStart);
		var front_end_skill;
		for (front_end_skill in bio.skills) {
			if (bio.skills.hasOwnProperty(front_end_skill)) {
				var formattedFrontSkills = HTMLFrontEndSkills.replace("%data%", bio.skills[front_end_skill]);
				$(".front-end-skills-start").append(formattedFrontSkills);
			}
		}
		var back_end_skill;
		for (back_end_skill in bio.back_end_skills) {
			if (bio.back_end_skills.hasOwnProperty(back_end_skill)) {
				var formattedBackSkills = HTMLBackEndSkills.replace("%data%", bio.back_end_skills[back_end_skill]);
				$(".back-end-skills-start").append(formattedBackSkills);
			}
		}
	};
	bio.display();

	var school;
	var onlineCourse;
	education.display = function() {
		for (school in education.schools) {
			if (education.schools.hasOwnProperty(school)) {
				$(".schools").append(HTMLschoolStart);
				var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
				//formattedSchoolName = HTMLschoolName.replace("#", education.schools[school].url);
				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				//$(".school-entry:last").append(formattedSchoolUrl);
				$(".school-entry:last").append(formattedSchoolName);
				$(".school-entry:last").append(formattedSchoolDegree);
				$(".school-entry:last").append(formattedSchoolDates);
				$(".school-entry:last").append(formattedSchoolLocation);
				$(".school-entry:last").append(formattedSchoolMajors);
			}
		}
		for (onlineCourse in education.onlineCourses) {
			if (education.onlineCourses.hasOwnProperty(onlineCourse)) {
				$(".onlineCourses").append(HTMLonlineClasses);
				var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
				var formattedOnlineCourseSchool = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].school);
				var formattedOnlineCourseDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
				var formattedOnlineCourseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
				$(".onlineCourses:last").append(formattedOnlineCourseTitle);
				$(".onlineCourses:last").append(formattedOnlineCourseSchool);
				$(".onlineCourses:last").append(formattedOnlineCourseDate);
				$(".onlineCourses:last").append(formattedOnlineCourseUrl);
			}
		}
	};
	education.display();

	var job;
	work.display = function() {
		for (job in work.jobs) {
			if (work.jobs.hasOwnProperty(job)) {
				$(".worksExperience-section").append(HTMLworkStart); // '<div class="work-entry"></div>'
				var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
				var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				$(".work-entry:last").append(formattedWorkEmployer);
				$(".work-entry:last").append(formattedWorkTitle);
				$(".work-entry:last").append(formattedWorkDate);
				$(".work-entry:last").append(formattedWorkLocation);
				$(".work-entry:last").append(formattedWorkDescription);
			}
		}
	};
	work.display();

	var project;
	projects.display = function() {
		for (project in projects.projects) {
			if (projects.projects.hasOwnProperty(project)) {
				$(".projects-section").append(HTMLprojectStart);
				var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-entry:last").append(formattedProjectTitle);
				$(".project-entry:last").append(formattedProjectDates);
				$(".project-entry:last").append(formattedProjectDescription);
				$(".project-entry:last").append(HTMLProjectPhotoContainer);
				projects.projects[project].images.forEach(function(element) {
					var formattedProjectImages = HTMLprojectImage.replace("%data%", element);
					$(".photosContainer:last").append(formattedProjectImages);
				});
			}
		}
	};


	var langue;
	languesEtAutres.display = function() {
		$(".languesEtAutresSection").append(HTMLlanguesStart);
		for (langue in languesEtAutres.langues) {
			if (languesEtAutres.langues.hasOwnProperty(langue)) {
				var formattedLangueName = HTMLlanguesName.replace("%data%", languesEtAutres.langues[langue].name);
				var formattedLangueLevel = HTMLlanguesName.replace("%data%", languesEtAutres.langues[langue].level);
				$(".languesList").append(HTMLLiElement);
				$(".liElement").append(formattedLangueName);
				$(".liElement").append(formattedLangueLevel);
			}
		}
	};
	languesEtAutres.display();
	projects.display();




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
