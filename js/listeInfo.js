// Using json notation :
var bio = {
	"name": "Pascal Evano",
	"role": "Web, front-end developper",
	"contacts": {
		"email": "pascal2833@gmail.com",
		"github": "PascalEvano",
		"location": "Barcelona",
		"latitude": 40,
		"longitude": 4,
		"mobile": "+33 650-754-255"
	},
	//"welcomeMessage": "Welcome message",
	"skills": [
		"css", "Sass", "HTML5", "javascript", "AngularJS", "d3.js", "OpenLayers"
	],
	"frontLevel": ["80", "50", "80", "65", "50", "65", "80"],
	"back_end_skills": ["PHP", "Symphony2", "SQL"],
	"backEndLevel": ["60", "55", "70"],
	"biopic": "images/photoPerfil.jpg"
};

var education = {
	"schoolsAndOnlineCourses": [{
		"name": "Lycee E.Branly",
		"location": "Dreux (France)",
		"latitude": 48.74,
		"longitude": 1.37,
		"textPopUpMap": "Vivi en esta ciudad (Dreux) hasta el bachillerato. Recuerdos, recuerdos, ...",
		"colorCircleGraph": "rgb(150,150,200)",
		"colorCircleStrokeGraph": "rgb(60,60,60)",
		"degree": "Bachillerato científico",
		"majors": ["major1", "major2", "major3"],
		"dates": "October 15, 1996",
		"positionAxeY": 130,
		"onlineOrSchool": "school",
		"url": "http://www.lyceebranlydreux.fr/actualites-du-lycee.html"
	}, {
		"name": "Paris IV Sorbonne",
		"location": "Paris",
		"latitude": 48.85,
		"longitude": 2.34,
		"textPopUpMap": "Estudie en la Universidad Paris Sorbonne, en el centro del Barrio Latino de Paris",
		"colorCircleGraph": "rgb(150,150,200)",
		"colorCircleStrokeGraph": "rgb(60,60,60)",
		"degree": "Licenciatura en geografía y hidrología",
		"majors": ["major1", "major2", "major3"],
		"dates": "October 15, 2000",
		"positionAxeY": 130,
		"onlineOrSchool": "school",
		"url": "http://www.english.paris-sorbonne.fr/"
	}, {
		"name": "EdX-curso via plataforma web, Universidad MIT",
		"location": "Dreux (France)",
		"latitude": 48.74,
		"longitude": 1.37,
		"textPopUpMap": "Vivi en esta ciudad (Dreux) hasta el bachillerato. Recuerdos, recuerdos, ...",
		"colorCircleGraph": "rgb(200,150,150)",
		"colorCircleStrokeGraph": "rgb(60,60,60)",
		"degree": "2 meses de formación en python",
		"majors": ["major1", "major2", "major3"],
		"dates": "October 15, 2014",
		"positionAxeY": 60,
		"onlineOrSchool": "school",
		"url": "http://www.lyceebranlydreux.fr/actualites-du-lycee.html"
	}]
};


var work = {
	"jobs": [{
		"title": "Desarrollador web/front-end",
		"employer": '<a href= "http://www.soprasteria.com/en" target="_blank">Sopra-Steria',
		"location": "Barcelona",
		"latitude": 41.39,
		"longitude": 2.16,
		"textPopUpMap": "Trabajo actualmente en Sopra Steria, en Barcelona",
		"dates": "Octubre 2015-actual",
		"description": "Participación en varios proyectos web para clientes Franceses.",
		"tecnologies": "Sass, HTML5, javascript, jQuery, AngularJS, Bootstrap, Grunt, PHP, Symfony2, Oracle"
	}, {
		"title": 'Desarrollador Front-end/mapas digitales',
		"employer": '<a href="http://www.creaf.cat/" target="_blank">CEA/CREAF-UAB</a>',
		"location": "Bellaterra, Barcelona",
		"latitude": 41.5,
		"longitude": 2.09,
		"textPopUpMap": "Despues de trabajar en el CEA-LSCE, volvi a Barcelona para seguir trabajando en el Global Carbon Atlas desde con el CREAF",
		"dates": "Enero 2015-septiembre 2015",
		"description": "Representación de datos ambientales en un Web Map Service desde la parte cliente: aplicación al portal Global Carbon Atlas",
		"tecnologies": "HTML5, javascript, jQuery, css, D3.js."
	}, {
		"title": "Desarrollador web-mapping",
		"employer": '<a href="http://www.lsce.ipsl.fr/en/" target="_blank">CEA-LSCE</a>',
		"location": "Paris",
		"fillColorSymbolMap": "rgb(100,200,100)",
		"latitude": 48.7,
		"longitude": 2.195,
		"textPopUpMap": "Empezé a desarollar participando en un nuevo portal, el Global Carbon Atlas en CEA-LSCE, al sur de Paris (dentro del contexto de un proyecto europeo dirigido por el CREAF, en Barcelona)",
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
		"name": "Frances: ",
		"flagSymbol": "images/french_flag.png",
		"level": "Soy frances!"
	}, {
		"name": "Español: ",
		"flagSymbol": "images/spain_flag.png",
		"level": "Vivo en Barcelona desde 2006!"
	}, {
		"name": "Ingles: ",
		"flagSymbol": "images/UK_flag.jpg",
		"level": "Nivel medio aunque lo estoy trabajando ..."
	}, {
		"name": "Catalan: ",
		"flagSymbol": "images/catalan_flag.png",
		"level": "Nivel medio y practicando cada dia!"
	}]
};

