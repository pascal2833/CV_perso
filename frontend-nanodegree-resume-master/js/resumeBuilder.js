/*
----------------------------------------------------
Ici, on a uniquement des choses que j'ai faites.
----------------------------------------------------
*/


// Using json notation :
var bio = {
	"name": "Pascal",
	"role": "front-end developper",
	"contacts": {
		"email": "pascal2833@gmail.com",
		"github": "https://github.com/PascalEvano",
		"location": "Barcelona",
		"mobile": "650-754-255"
	},
	"welcomeMessage": "",// TODO
	"skills": [
		"css", "Sass", "HTML5", "javascript", "Angular", "d3.js", "OpenLayers", "PHP", "Symfony2"
	],//TODO
	"biopic": "url ...",// TODO
	"display": "function()"//TODO
};

var education = {
	"schools": [{
		"name": "Lycee E.Branly",
		"location": "Dreux (France)",
		"degree": "",// TODO
		"majors": ["", "", ""],//TODO
		"dates": "string (works with a hyphen between them)"// TODO
		"url": "http...",
		"majors": [
			"njnj", "mkmkmk", "mkmomo"
		]
	}, {
		"name": "Branly",
		"location": "Dreux",
		"degree dates": "1996",
		"url": "http...",
		"majors": [
			"njnj", "mkmkmk", "mkmomo"
		]
	}],
	"onlineCourses": [{// TODO
		"title": "kkpkp",
		"school": "swkskp",
		"dates": "string (works with a hyphen between them)",
		"url": "jiji/jijojo/..."
	}],
	display: "function()"// TODO
};


var work = {
	"jobs": [{
		"title": "web developper",
		"employer": "hhhh",
		"location": "tambouctou",
		"dates": "2003/12/25",
		"description": "iiojiojoj"
	}, {
		"title": "web developper",
		"employer": "kjojoj",
		"location": "tambouctou",
		"dates": "2003/12/25",
		"description": "iiojiojoj cerifjioerufioeruofir vjeiojfiowefocweo cdskcpkdpc jcojdcjpdwcpowpoP"
	}]
};

var projects = {// TODO
"projects": [
	{
		"title": "string",
		"dates": "string (works with a hyphen between them)",
		"description": "string",
		"images": "array with string urls"
	},
	{

	}
],
	"display": "function"
};

// Utilisation fonction pour display works et bio/json:
var displayWork = function () {
	// Bien voir les fichiers helper.js pour voir à quoi se réfèrent les variables.
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
	}

	// for in to iterate/objects work.jobs: --> bien noter que l'on traite ici l'objet work.jobs et pas work !!!
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);// var HTMLworkStart = '<div class="work-entry"></div>';
		var formattedJobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedJobEmployer + " " + formattedJobTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();

var projects = {
	"projects": [
		{
			"title": "dednw",
			"dates": "2001-02-23, 2004-12-21",
			"description": "dgweugduygeru",
			"images": [
				"images/fry.jpg", "images/197x148.gif"
			]
		},
		{
			"title": "dednw",
			"dates": "2001-02-23, 2004-12-21",
			"description": "dgweugduygeru",
			"images": [
				"images/fry.jpg", "images/197x148.gif"
			]
		}
	]
};

// Utilisation encapsulation (création méthode/objet) pour display project object (json):
// Note : var HTMLprojectStart = '<div class="project-entry"></div>';
projects.display = function () {
	for (project in projects.projects) {
		if (projects.projects.hasOwnProperty(project)) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDate);
			$(".project-entry:last").append(formattedProjectDescription);
			if(projects.projects[project].images.length > 0) {
				for (imageUrl in projects.projects[project].images) {
					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[imageUrl]);
					$(".project-entry:last").append(formattedProjectImage);
				}
			}
		}
	}
};
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

// Intégration du div html/google map :

$("#mapDiv").append(googleMap);// var googleMap = '<div id="map"></div>';














