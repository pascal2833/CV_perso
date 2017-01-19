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
		/*var formattedPhoto = HTMLbioPic.replace("%data%", bio.biopic);*/
		$(".myNameAndRoleName").append(formattedMyName);
		$(".myNameAndRoleName").append(formattedMyRole);
		$(".mailTelGitAndCoe").append(formattedEmail);
		$(".mailTelGitAndCoe").append(formattedTel);
		$(".mailTelGitAndCoe").append(formattedGitHub);
		$(".mailTelGitAndCoe").append(formattedLocation);
		/*$(".myNameAndRoleName").append(formattedPhoto);*/
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

	// A mettre seulement pour mobiles.
	/*work.display = function() {
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
	work.display();*/

	languesEtAutres.display = function() {
		$(".languesEtAutresSection").append(HTMLlanguesStart);
		languesEtAutres.langues.forEach(function(element) {
			$(".languesList").append(HTMLlangueContainer);
			var formattedLangueLevel = HTMLlanguesLevel.replace("%data%", element.level);
			var formattedLangueFlag = HTMLlanguesFlag.replace("%data%", element.flagSymbol);
			$(".langueContainer:last").append(formattedLangueFlag);
			$(".langueContainer:last").append(formattedLangueLevel);
		});
		$(".languesEtAutresSection").append(HTMLHobbiesContainer);
		languesEtAutres.autres.forEach(function(element) {
			var formattedImageUrl = HTMLImageHobby.replace("%data%", element.imageUrl);
			var formattedHobbiesInfo = HTMLHobbiesInfo.replace("%data%", element.hobbyInfo);
			$('.hobbiesContainer').append(HTMLDefectHobbies);
			$('.hobbiesContainer:last').append(formattedImageUrl);
			$('.hobbiesContainer').append(formattedHobbiesInfo);
		});
	};
	languesEtAutres.display();

	// Show/hide hobbies infos :
	$('.defectHobby:first').on('mouseover', function() {
		$('.hobbiesInfo:first').css('display', 'block');
	});
	$('.defectHobby:first').on('mouseout', function() {
		$('.hobbiesInfo:first').css('display', 'none');
	});
	$('.defectHobby:last').on('mouseover', function() {
		$('.hobbiesInfo:last').css('display', 'block');
	});
	$('.defectHobby:last').on('mouseout', function() {
		$('.hobbiesInfo:last').css('display', 'none');
	});


	/**
 * [[
 * Autre exo : test syntaxe un peu bizarre, utilisant fonction anonyme comme paramètre :
 * Cette fonction permet d'avoir coordonnées/click sur page.
 ]]
 * @author Pascal
 * @param {[[Type]]} document).click(function(loc [[Description]]
 */

	$(document).click(function(loc) {
		//console.log(loc.pageX, loc.pageY);
	});

	//$('#map').css('height', '50px');

}
$(startScript);
