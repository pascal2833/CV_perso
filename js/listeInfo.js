var dateActuelle = new Date();
var dateString = dateActuelle.toDateString();
console.log(dateString);

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
	"skills": [
		"HTML5", "css/Sass", , "javascript", "jQuery", "AngularJS", "Grunt/npm","d3.js"
	],
	"frontLevel": ["80", "75", "75", "75","65", "60","60"],
	"back_end_skills": ["Base de Datos/SQL", "PHP", "Symphony2", "java/javaEE"],
	"backEndLevel": ["60", "50", "45", "40"]
	/*"biopic": "images/photoPerfil.jpg"*/
};

var education = {
	"schoolsAndOnlineCourses": [{
		"name": '<a href="http://www.lyceebranlydreux.fr/actualites-du-lycee.html" target="_blank">Lycee E.Branly</a> :<br>',
		"location": "Dreux (France)",
		"latitude": 48.74,
		"longitude": 1.37,
		"textPopUpMap": "Vivi en esta ciudad (Dreux) hasta el bachillerato. Recuerdos, recuerdos, ...",
		"degree": "Bachillerato científico",
		"majors": ["major1", "major2", "major3"],
		"dates": "June 30, 1996",
		"date_finale": "July 30, 1996",
		"positionAxeY": 130,
		"onlineOrSchool": "school",
		"url": "http://www.lyceebranlydreux.fr/actualites-du-lycee.html"
	}, {
		"name": '<a href="http://www.espagnol.paris-sorbonne.fr/" target="_blank">Paris IV Sorbonne</a> :<br>',
		"location": "Paris",
		"latitude": 48.85,
		"longitude": 2.34,
		"textPopUpMap": "Estudie en la Universidad Paris Sorbonne, en el centro del Barrio Latino de Paris",
		"degree": "Licenciatura en geografía y hidrología",
		"majors": ["major1", "major2", "major3"],
		"dates": "September 1, 1998",
		"date_finale": "June 30, 2002",
		"positionAxeY": 130,
		"onlineOrSchool": "school",
		"url": "http://www.english.paris-sorbonne.fr/"
	}, {
		"name": 'Certificado de catalán (Generalitad de Catalunya) ',
		"location": "bdeh",
		"latitude": 48.74,
		"longitude": 1.37,
		"textPopUpMap": "hdeiwi",
		"degree": "Nivel basic (B)",
		"majors": ["major1", "major2", "major3"],
		"dates": "Juny 1, 2009",
		"date_finale": "November 1, 2009",
		"positionAxeY": 60,
		"onlineOrSchool": "online",
		"url": "https://www.edx.org/"
	},{
		"name": 'Git/GitHub: ',
		"location": "bdeh",
		"latitude": 48.74,
		"longitude": 1.37,
		"textPopUpMap": "hdeiwi",
		"degree": "Formación por internet",
		"majors": ["major1", "major2", "major3"],
		"dates": "January 1, 2015",
		"date_finale": "February 1, 2015",
		"positionAxeY": 60,
		"onlineOrSchool": "online",
		"url": "https://www.edx.org/"
	},{
		"name": '<a href="https://www.edx.org/" target="_blank">Universidad MIT, EdX</a> :<br>',
		"location": "bdeh",
		"latitude": 48.74,
		"longitude": 1.37,
		"textPopUpMap": "hdeiwi",
		"degree": "Formación en Python",
		"majors": ["major1", "major2", "major3"],
		"dates": "March 1, 2015",
		"date_finale": " June 1, 2015",
		"positionAxeY": 60,
		"onlineOrSchool": "online",
		"url": "https://www.edx.org/"
	}, {
		"name": '<a href="https://www.edx.org/" target="_blank">W3C, EdX</a> :<br>',
		"location": "bdeh",
		"latitude": 48.74,
		"longitude": 1.37,
		"textPopUpMap": "hdeiwi",
		"degree": "HTML5: Web Design Fundamentals",
		"majors": ["major1", "major2", "major3"],
		"dates": "June 30, 2015",
		"date_finale": " August 30, 2015",
		"positionAxeY": 60,
		"onlineOrSchool": "online",
		"url": "https://www.edx.org/"
	},{
		"name": '<a href="https://www.udacity.com/" target="_blank">Udacity</a> (Nanodegree) :<br>',
		"location": "bdeh",
		"latitude": 48.74,
		"longitude": 1.37,
		"textPopUpMap": "hdeiwi",
		"degree": "Formación front-end, en curso",
		"majors": ["major1", "major2", "major3"],
		"dates": "August 1, 2016",
		"date_finale": dateString,
		"positionAxeY": 60,
		"onlineOrSchool": "online",
		"url": "https://www.udacity.com/"
	},{
		"name": '<a href="http://www.ub.edu/web/ub/es/" target="_blank">Universidad de Barcelona, UB</a> :<br>',
		"location": "Barcelona",
		"latitude": 48.85,
		"longitude": 2.34,
		"textPopUpMap": "TODO",
		"degree": "Master en gestión ambiental",
		"majors": ["major1", "major2", "major3"],
		"dates": "Septembre 15, 2006",
		"date_finale": "March 20, 2008",
		"positionAxeY": 130,
		"onlineOrSchool": "school",
		"url": "TODO"
	},{
		"name": '<a href="http://www.creaf.cat/es" target="_blank">CREAF </a>/UAB: <br>',
		"location": "TODO",
		"latitude": 48.85,
		"longitude": 2.34,
		"textPopUpMap": "Después del bachillerato, estudie geografía física en la Sorbona, en Paris. Después de mi licencia, pasé la oposición para ser profesor y ejerce como profesor titular de historia y geografía en colegios en las afueras de parís. Luego, me fui a Barcelona para vivir con mi futura esposa",
		"degree": "Master en Sistema de informacion geográfica y teledetección",
		"majors": ["major1", "major2", "major3"],
		"dates": "September 15, 2010",
		"date_finale": "September 30, 2011",
		"positionAxeY": 130,
		"onlineOrSchool": "school",
		"url": "TODO"
	}],
	"complements": {"subTitleStudies": "Estudios", "subTitleFormations": "Formaciones", "xPositionSubTitleStudies": 850, "yPositionSubTitleStudies": 210, "xPositionSubTitleFormations": 850, "yPositionSubTitleFormations": 90},

};

var work = {
	"jobs": [{
		"title": "Desarrollador web/front-end",
		"location": "Barcelona",
		"latitude": 41.39,
		"longitude": 2.16,
		"textPopUpMap": "Llegué a Barcelona en el verano de 2006 y trabajé como teleoperador (en Francés!) durante un año mientras estaba haciendo un master en 'Planificación territorial y gestión ambiental'. Luego, trabajé 2 años como Coordinador de proyectos en hidrología desde una empresa privada, Ofiteco, para el ACA (Agencia Catalana del Agua). Actualmente, trabajo en Sopra-Steria",
		"dates": "Octubre 2015-actual",
		"tecnologies": "Sass, HTML5, javascript, jQuery, AngularJS, Bootstrap, Grunt, PHP, Symfony2, Oracle, Java/JavaEE"
	}, {
		"title": 'Desarrollador Front-end/mapas digitales',
		"location": "Bellaterra, Barcelona",
		"latitude": 41.5,
		"longitude": 2.09,
		"textPopUpMap": "Hice un master en el CREAF/UAB en 'Sistema de información Geográfica' y a raíz de este master, empecé a trabajar en el CEA-LSCE, en París (dentro del contexto de un proyecto europeo). Después de 3 años, volví a Barcelona para seguir trabajando en el Global Carbón Atlas desde el CREAF",
		"dates": "Enero 2015-septiembre 2015",
		"tecnologies": "HTML5, javascript, jQuery, css, D3.js."
	}, {
		"title": "Desarrollador web-mapping",
		"location": "Paris",
		"fillColorSymbolMap": "rgb(100,200,100)",
		"latitude": 48.7,
		"longitude": 2.195,
		"textPopUpMap": "Empecé a desarrollar participando en un nuevo portal, el Global Carbón Atlas en CEA-LSCE, al sur de Paris (dentro del contexto de un proyecto europeo dirigido por el CREAF, en Barcelona)",
		"dates": "Enero de 2012-diciembre de 2014",
		"tecnologies": "HTML5, javascript, jQuery, css, Bootstrap, OpenLayers, Geoserver, Python, PHP, xml."
	}],
	"nodes":[
		{"nameEntreprise":"Sopra-Steria", "workName": "Desarrollador web", "yWorkName": 80, "indiceArray": 0},
		{"nameEntreprise":"LSCE-CREAF", "workName": "Desarrollador Front-end", "yWorkName": 180, "description": "blablabla2", "indiceArray": 1},
		{"nameEntreprise":"CEA-LSCE", "workName": "Desarrollador web-mapping", "yWorkName": 280, "description": "blablabla3", "indiceArray": 2},
	],
	"complementsNodes":[
		{
			"source":0,
			"date":"Octubre 2015 - actual",
			"description": '<a href= "http://www.soprasteria.com/en" target="_blank">Sopra-Steria</a><h4>Trabajo con clientes frances y proyecto interno:</h4><ul><li>Designo de la parte front-end de un proyecto interno e inclusión con JavaEE.</li><li>Web nueva para gestionar las inscripciones de los alumnos en el futuro gran centro universitario francés: tareas de back y de front-end simultaneamente.</li><li>Aplicación de “La Poste”: tareas de back-end.</li></ul>',
			"yWorkName": 85
		},
		{
			"source":1,
			"date":"Enero 2015-septiembre 2015",
			"description": '<a href="http://www.creaf.cat/" target="_blank">CEA/CREAF-UAB</a><h4>Continuación, desde España, del proyecto empezado con el CEA-LSCE:</h4><ul><li>Por razones familiales me fui de Francia para volver a Barcelona donde segui trabajando en el <a href="http://www.globalcarbonatlas.org/en/content/welcome-carbon-atlas" target="_blank">Global Carbon Atlas</a>.</li><li>Representación de datos ambientales en un Web Map Service desde la parte cliente: generación de mapas de incertidumbre con Python e integración al Global carbon Atlas</li></ul>',
			"yWorkName": 185
		},
		{
			"source":2,
			"date":"Enero de 2012-diciembre de 2014",
			"description": '<a href="http://www.lsce.ipsl.fr/en/" target="_blank">CEA-LSCE</a><h4>Ayuda en la realización del <a href="http://www.globalcarbonatlas.org/en/content/welcome-carbon-atlas" target="_blank">Global Carbon Atlas</a>: data visualización aplicado a mapas</h4><ul><li>Contexto: trabajo con un "partner" frances del proyecto Europeo <a href="http://www.geoviqua.org/" target="_blank">GeoViQua</a> de 3 años, dirigido por el CREAF (Barcelona)</li><li>Creación y diseño de los mapas e integración de herramientas creadas por el proyecto GeoViQua</li><li>Creación y gestión de un formulario destinado a los probadores de datos.</li></ul>',
			"yWorkName": 285
		},
	],
	"links":[// Note : source = nodes, target = childrens.
		{"nameEntreprise":"Sopra-Steria", "programmingLanguage": "HTML5", "source":0,"target":0},
		{"nameEntreprise":"Sopra-Steria", "programmingLanguage": "Saas", "source":0,"target":1},
		{"nameEntreprise":"Sopra-Steria", "programmingLanguage": "javascript", "source":0,"target":2},
		{"nameEntreprise":"Sopra-Steria", "programmingLanguage": "jQuery", "source":0,"target":3},
		{"nameEntreprise":"Sopra-Steria", "programmingLanguage": "AngularJS", "source":0,"target":4},
		{"nameEntreprise":"Sopra-Steria", "programmingLanguage": "Grunt/npm", "source":0,"target":5},
		{"nameEntreprise":"Sopra-Steria", "programmingLanguage": "Base de Datos", "source":0,"target":7},
		{"nameEntreprise":"Sopra-Steria", "programmingLanguage": "PHP", "source":0,"target":8},
		{"nameEntreprise":"Sopra-Steria", "programmingLanguage": "Symphony2", "source":0,"target":9},
		{"nameEntreprise":"Sopra-Steria", "programmingLanguage": "Java/javaEE", "source":0,"target":10},
		//
		{"nameEntreprise":"LSCE-CREAF", "programmingLanguage": "HTML5", "source":1,"target":0},
		{"nameEntreprise":"LSCE-CREAF", "programmingLanguage": "javascript", "source":1,"target":2},
		{"nameEntreprise":"LSCE-CREAF", "programmingLanguage": "jQuery", "source":1,"target":3},
		{"nameEntreprise":"LSCE-CREAF", "programmingLanguage": "AngularJS", "source":1,"target":4},
		{"nameEntreprise":"LSCE-CREAF", "programmingLanguage": "d3.js", "source":1,"target":6},
		{"nameEntreprise":"LSCE-CREAF", "programmingLanguage": "Base de Datos", "source":1,"target":7},
		{"nameEntreprise":"LSCE-CREAF", "programmingLanguage": "PHP", "source":1,"target":8},
		//
		{"nameEntreprise":"CEA-LSCE", "programmingLanguage": "HTML5", "source":2,"target":0},
		{"nameEntreprise":"CEA-LSCE", "programmingLanguage": "javascript", "source":2,"target":2},
		{"nameEntreprise":"CEA-LSCE", "programmingLanguage": "jQuery", "source":2,"target":3},
		{"nameEntreprise":"CEA-LSCE", "programmingLanguage": "PHP", "source":2,"target":8},
	],
	"childrens": [
		{"name": "HTML5", "y": 40, "indiceArray": 0},
		{"name": "css/Sass", "y": 65, "indiceArray": 1},
		{"name": "javascript", "y": 95, "indiceArray": 2},
		{"name": "jQuery", "y": 125, "indiceArray": 3},
		{"name": "AngularJS", "y": 155, "indiceArray": 4},
		{"name": "Grunt/npm", "y": 185, "indiceArray": 5},
		{"name": "d3.js", "y": 215, "indiceArray": 6},
		{"name": "Base de Datos", "y": 245, "indiceArray": 7},
		{"name": "PHP", "y": 275, "indiceArray": 8},
		{"name": "Symphony2", "y": 305, "indiceArray": 9},
		{"name": "Java/javaEE", "y": 335, "indiceArray": 10},
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

