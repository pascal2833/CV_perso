// Using json notation :
var bio = {
	"name": "Pascal Evano",
	"role": "Web, front-end developper",
	"contacts": {
		"email": "pascal2833@gmail.com",
		"github": "PascalEvano",
		"location": "Barcelona",
		"mobile": "+33 650-754-255"
	},
	"welcomeMessage": "Welcome message",
	"skills": [
		"css", "Sass", "HTML5", "javascript", "AngularJS", "d3.js", "OpenLayers"
	],
	"frontLevel": ["80", "50", "80", "65", "50", "65", "80"],
	"back_end_skills": ["PHP", "Symphony2", "SQL"],
	"backEndLevel": ["60", "55", "70"],
	"biopic": "images/photoPerfil.jpg"
};

var education = {
	"schools": [{
		"name": "Lycee E.Branly",
		"location": "Dreux (France)",
		"degree": "degree4 E Branly",
		"majors": ["major1", "major2", "major3"],
		"dates": "1996",
		"url": "http://www.lyceebranlydreux.fr/actualites-du-lycee.html"
	}, {
		"name": "Paris IV Sorbonne",
		"location": "Paris",
		"degree": "degree4 Universite P.Sorbonne",
		"majors": ["major1", "major2", "major3"],
		"dates": "2000",
		"url": "http://www.english.paris-sorbonne.fr/"
	}],
	"onlineCourses": [{
		"title": "Python",
		"school": "EdX",
		"dates": "juin-juillet 2015",
		"url": "http://jiji/jijojo/..."
	}]
};


var work = {
	"jobs": [{
		"title": "Desarrollador web/front-end",
		"employer": '<a href= "http://www.soprasteria.com/en" target="_blank">Sopra-Steria',
		"location": "Barcelona",
		"dates": "Octubre 2015-actual",
		"description": "Participación en varios proyectos web para clientes Franceses.",
		"tecnologies": "Sass, HTML5, javascript, jQuery, AngularJS, Bootstrap, Grunt, PHP, Symfony2, Oracle"
	}, {
		"title": 'Desarrollador Front-end/mapas digitales',
		"employer": '<a href="http://www.creaf.cat/" target="_blank">CEA/CREAF-UAB</a>',
		"location": "Bellaterra, Barcelona",
		"dates": "Enero 2015-septiembre 2015",
		"description": "Representación de datos ambientales en un Web Map Service desde la parte cliente: aplicación al portal Global Carbon Atlas",
		"tecnologies": "HTML5, javascript, jQuery, css, D3.js."
	}, {
		"title": "Desarrollador web-mapping",
		"employer": '<a href="http://www.lsce.ipsl.fr/en/" target="_blank">CEA-LSCE</a>',
		"location": "Paris",
		"dates": "Enero de 2012-diciembre de 2014",
		"description": 'Participación, desde su inicio hasta su “fin” al portal <a href="http://www.globalcarbonatlas.org/?q=en/content/welcome-carbon-atlas" target="_blank">Global Carbon Atlas</a><span> (concepción y realización de los mapas)</span>',
		"tecnologies": "HTML5, javascript, jQuery, css, Bootstrap, OpenLayers, Geoserver, Python, PHP, xml."
	}]
};

var projects = {
	"projects": [{
		"title": "Pense bete",
		"dates": "2001-02-23",
		"description": "Description: jcdjcoijfcjeoic",
		"images": [
				"images/penseBete_1x.jpg", "images/fotos_mariana_1x.jpg"
			]
			//"sourceImageParralax": "&copy; pixabay"
	}, {
		"title": "Soccer player",
		"dates": "2001-02-23",
		"description": "Description: dgweugduygeru",
		"images": [
				"images/soccer_player_1x.jpg", "images/madeInItaly_1x.jpg"
			]
			//"sourceImageParralax": "&copy; pixabay"
	}]
};

var languesEtAutres = {
	"langues": [{
		"name": "Français: ",
		"level": "native"
	}, {
		"name": "Espagnol: ",
		"level": "bilingue"
	}, {
		"name": "Anglais: ",
		"level": "moyen"
	}, {
		"name": "Catalan: ",
		"level": "moyen"
	}]
};
