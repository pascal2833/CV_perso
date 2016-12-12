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
		"mobile": "+34 650-754-255"
	},
	//"welcomeMessage": "Welcome message",
	"skills": [
		"HTML5", "css/Sass", , "javascript", "jQuery", "AngularJS", "Grunt/npm","d3.js"
	],
	"frontLevel": ["80", "75", "75", "75","65", "60","60"],
	"back_end_skills": ["PHP", "Base de Datos/SQL", "Symphony2", "java/javaEE"],
	"backEndLevel": ["60", "60", "50", "40"]
	/*"biopic": "images/photoPerfil.jpg"*/
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
	}, {
		"name": "Universidad de Barcelona, UB",
		"location": "Barcelona",
		"latitude": 48.85,
		"longitude": 2.34,
		"textPopUpMap": "TODO",
		"colorCircleGraph": "rgb(150,150,200)",
		"colorCircleStrokeGraph": "rgb(60,60,60)",
		"degree": "Master en gestión ambiental",
		"majors": ["major1", "major2", "major3"],
		"dates": "Septembre 15, 2006",
		"positionAxeY": 130,
		"onlineOrSchool": "school",
		"url": "TODO"
	},{
		"name": "Universidad Autonoma de Barcelona, UAB-CREAF",
		"location": "TODO",
		"latitude": 48.85,
		"longitude": 2.34,
		"textPopUpMap": "TODO",
		"colorCircleGraph": "rgb(150,150,200)",
		"colorCircleStrokeGraph": "rgb(60,60,60)",
		"degree": "Master en Sistema de informacion geográfica y teledetección",
		"majors": ["major1", "major2", "major3"],
		"dates": "Septembre 15, 2010",
		"positionAxeY": 130,
		"onlineOrSchool": "school",
		"url": "TODO"
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
		"tecnologies": "Sass, HTML5, javascript, jQuery, AngularJS, Bootstrap, Grunt, PHP, Symfony2, Oracle, Java/JavaEE"
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
	}],
	"nodes":[
		{"nameEntreprise":"Sopra-Steria", "workName": "Desarrollador web","date":"Octubre 2015 - actual", "positionX": 10, "positionY": 40},
		{"nameEntreprise":"CEA-LSCE", "workName": "Desarrollador web/front-end","date":"Enero de 2012-diciembre de 2014", "positionX": 10, "positionY": 60},

	],
	"links":[
		{"source":0,"target":1,"value":1,"distance":5},

	],
	"childrens": [
		{"name": "javascript", "positionX": 500, "positionY": 40},
		{"name": "PHP", "positionX": 500, "positionY": 60},
		{},
	]
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
		"level": "Nivel medio"
	}],
	"autres":[{
		imageUrl: "images/pingpong_e0.gif",
		"hobbyInfo":"Soy jugador federado de tenis de mesa desde que tengo 16 años. Ahora tengo menos tiempo para practicar pero sigo competiendo!",
	}, {
		imageUrl: "images/camera.png",
		"hobbyInfo":"Descubrí la fotografía de vacaciones en Corsega, muy joven. Me compré luego una camara oscura y cuando estaba en la faculdad, hacía mis propias foto.",
	}]
};

