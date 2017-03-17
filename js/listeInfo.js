var dateActuelle = new Date();
var dateString = dateActuelle.toDateString();

// Using json notation :
var bio = {
	"name": "Pascal Evano",
	"role": "Web, front-end developper",
	"contacts": {
		"email": "pascal2833@gmail.com",
		"github": "PascalEvano",
		//"location": "Barcelona",
		"latitude": 40,
		"longitude": 4,
		"mobile": "+34 650-754-255"
	},
	"skills": [
		"HTML5", "css/Sass", "javascript", "jQuery", "AngularJS", "Grunt/npm","d3.js"
	],
	"frontLevel": ["80", "75", "75", "75","65", "60","60"],
	"back_end_skills": ["MySQL, Oracle, SQL", "PHP", "Symphony2", "java/javaEE"],
	"backEndLevel": ["50", "50", "45", "40"]
};

var infoMapEs = [
	{
		"latitude": 48.74,
		"longitude": 1.37,
		"textPopUp": "Vivi en esta ciudad (Dreux) hasta el bachillerato. Recuerdos, recuerdos, ..."
	},
	{
		"latitude": 48.85,
		"longitude": 2.34,
		"textPopUp": "Después del bachillerato, estudie geografía física en la Sorbona, en Paris. Después de mi licencia, pasé la oposición para ser profesor y ejerce como profesor titular de historia y geografía en colegios en las afueras de parís. Luego, me fui a Barcelona para vivir con mi futura esposa"
	},
	{
		"latitude": 41.39,
		"longitude": 2.16,
		"textPopUp": "Llegué a Barcelona en el verano de 2006 y trabajé como teleoperador (en Francés!) durante un año y como Coordinador de proyectos en hidrología durante 2 años en una empresa privada, Ofiteco, para el ACA (Agencia Catalana del Agua). Luego, estudié y trabajé en la UAB, al lado de Barcelona (ver description asociada en este mapa). Actualmente, trabajo en Sopra-Steria"
	},
	{
		"latitude": 41.5,
		"longitude": 2.09,
		"textPopUp": "Hice un master en el CREAF/UAB en 'Sistema de información Geográfica' y a raíz de este master, empecé a trabajar en el CEA-LSCE, en París (dentro del contexto de un proyecto europeo). Después de 3 años, volví a Barcelona para seguir trabajando en el Global Carbón Atlas desde el CREAF"
	},
	{
		"latitude": 48.7,
		"longitude": 2.195,
		"textPopUp": "Empecé a desarrollar participando en un nuevo portal, el Global Carbón Atlas en CEA-LSCE, al sur de Paris (dentro del contexto de un proyecto europeo dirigido por el CREAF, en Barcelona). Durante este periodo, mantuvé enlaces con España y apprendí muchisimo."
	}
];

var infoMapFr = [
	{
		"latitude": 48.74,
		"longitude": 1.37,
		"textPopUp": "J'ai vécu dans cette ville jusqu'au bac. Toute mon enfance !"
	},
	{
		"latitude": 48.85,
		"longitude": 2.34,
		"textPopUp": "Après mon bac, j'ai étudié la géographie à l'Université de la Sorbonne. Après ma maîtrise ('Etude géomorphologique d'un bassin versant'), j'ai passé le Capès pour être professeur d'histoire-géographie. J'ai ensuite enseigné dans des collèges dans la banlieue parisienne. Je suis ensuite parti à Barcelone pour rejoindre ma future femme."
	},
	{
		"latitude": 41.39,
		"longitude": 2.16,
		"textPopUp": "J'ai atterri à Barcelone l'été 2006. J'ai commencé par travailler comme téléopérateur (en français !) pendant un an puis comme coordinateur d'une équipe ayant pour but de mesurer le débit des rivières dans le nord de la Catalogne (entreprise Ofiteco, travaillant pour l'ACA, l'Agence Catalane de l'Eau). J'ai ensuite étudié et travaillé à l'Université Autonome de Barcelone situé juste à côté de Barcelone (voir cercle associé sur cette carte). Actuellement, je travaille à Sopra-Steria."
	},
	{
		"latitude": 41.5,
		"longitude": 2.09,
		"textPopUp": "Suite à l'obtention d'un master en 'Systèmes d'informations géographiques et Téledetection' à l'Université Autonome de Barcelone/CREAF, je suis parti travailler en France, au CEA-LSCE, au sud de Paris. Ce contrat s'inscrivait dans le contexte d'un projet Européen dirigé depuis le CREAF. Après 3 ans, suite à la naissance de mon fils, je suis retourné vivre à Barcelone, tout en travaillant depuis l'Espagne pour la France sur le Global Carbon Atlas."
	},
	{
		"latitude": 48.7,
		"longitude": 2.195,
		"textPopUp": "J'ai commencé à développer suite à mon arrivée au CEA-LSCE en participant à un projet qui venait de se créer, le site web 'Global Carbon Atlas'. Cette mission s'inscrivait dans le contexte du projet Européen GéoViQua, coordonné depuis l'Espagne. J'ai donc tout au long de cette mission continué à garder de liens avec l'Espagne et apris énormément de choses."
	}
];

var educationEs = {
	"schoolsAndOnlineCourses": [{
		"name": '<a href="http://www.lyceebranlydreux.fr/actualites-du-lycee.html" target="_blank">Lycee E.Branly</a> :<br>',
		"degree": "Bachillerato científico",
		"dates": "June 30, 1996",
		"date_finale": "July 30, 1996",
		"positionAxeY": 130,
		"url": "http://www.lyceebranlydreux.fr/actualites-du-lycee.html"
	}, {
		"name": '<a href="http://www.espagnol.paris-sorbonne.fr/" target="_blank">Paris IV Sorbonne</a> :<br>',
		"degree": "Licenciatura en geografía e hidrología",
		"dates": "September 1, 1998",
		"date_finale": "June 30, 2002",
		"positionAxeY": 130,
		"url": "http://www.english.paris-sorbonne.fr/"
	}, {
		"name": '<div>Catalan (cursos de la generalitat)</div>',
		"degree": "Nivel basic (B)",
		"dates": "Juny 1, 2009",
		"date_finale": "November 1, 2009",
		"positionAxeY": 60,
		"url": "https://www.edx.org/"
	},{
		"name": 'Git/GitHub: ',
		"degree": "Formación por internet",
		"dates": "January 1, 2015",
		"date_finale": "February 1, 2015",
		"positionAxeY": 60,
		"url": "https://www.edx.org/"
	},{
		"name": '<a href="https://www.edx.org/" target="_blank">Universidad MIT, EdX</a> :<br>',
		//"location": "bdeh",
		"degree": "Formación en Python",
		"dates": "March 1, 2015",
		"date_finale": " June 1, 2015",
		"positionAxeY": 60,
		//"onlineOrSchool": "online",
		"url": "https://www.edx.org/"
	}, {
		"name": '<a href="https://www.edx.org/" target="_blank">W3C, EdX</a> :<br>',
		//"location": "bdeh",
		"degree": "HTML5: Web Design Fundamentals",
		"dates": "June 30, 2015",
		"date_finale": " August 30, 2015",
		"positionAxeY": 60,
		//"onlineOrSchool": "online",
		"url": "https://www.edx.org/"
	},{
		"name": '<a href="https://www.udacity.com/" target="_blank">Udacity</a> (Nanodegree) :<br>',
		//"location": "bdeh",
		"degree": "Formación front-end, en curso",
		"dates": "August 1, 2016",
		"date_finale": dateString,
		"positionAxeY": 60,
		//"onlineOrSchool": "online",
		"url": "https://www.udacity.com/"
	},{
		"name": '<a href="">Formación de los profesores</a> :<br>',
		//"location": "Paris",
		"degree": "Preparación a la oposición para ser profesor de historia y geografía",
		"dates": "Septembre 15, 2002",
		"date_finale": "August 15 2003",
		"positionAxeY": 130,
		//"onlineOrSchool": "school",
		"url": "TODO"
	},{
		"name": '<a href="http://www.ub.edu/web/ub/es/" target="_blank">Universidad de Barcelona, UB</a> :<br>',
		//"location": "Barcelona",
		"degree": "Master en Gestión Ambiental",
		"dates": "Septembre 15, 2006",
		"date_finale": "March 20, 2008",
		"positionAxeY": 130,
		//"onlineOrSchool": "school",
		"url": "TODO"
	},{
		"name": '<a href="http://www.creaf.cat/es" target="_blank">CREAF / UAB:</a><br>',
		"degree": "Master en Sistema de Información geografíca y teledetección",
		"dates": "September 15, 2010",
		"date_finale": "September 30, 2011",
		"positionAxeY": 130,
		//"onlineOrSchool": "school",
		"url": "TODO"
	}],
	"complements": {"subTitleStudies": "Estudios", "subTitleFormations": "Formaciones", "xPositionSubTitleStudies": 850, "yPositionSubTitleStudies": 210, "xPositionSubTitleFormations": 850, "yPositionSubTitleFormations": 90, "keyMultiLanguage_formationsTitle": "formationsTitle", "keyMultiLanguage_studiesTitle": "studiesTitle"},
};


var educationFr = {
	"schoolsAndOnlineCourses": [{
		"name": '<a href="http://www.lyceebranlydreux.fr/actualites-du-lycee.html" target="_blank">Lycee E.Branly</a> :<br>',
		//"location": "Dreux (France)",
		"degree": "Bac scientifique",
		"dates": "June 30, 1996",
		"date_finale": "July 30, 1996",
		"positionAxeY": 130,
		//"onlineOrSchool": "school",
		"url": "http://www.lyceebranlydreux.fr/actualites-du-lycee.html"
	}, {
		"name": '<a href="http://www.espagnol.paris-sorbonne.fr/" target="_blank">Paris IV Sorbonne</a> :<br>',
		//"location": "Paris",
		"degree": "Maîtrise de géographie et géomorphologie",
		"dates": "September 1, 1998",
		"date_finale": "June 30, 2002",
		"positionAxeY": 130,
		//"onlineOrSchool": "school",
		"url": "http://www.english.paris-sorbonne.fr/"
	}, {
		"name": '<div>Catalan (cours de la Generalitat de Catalunya)</div>',
		//"location": "bdeh",
		"degree": "Niveau basique (B)",
		"majors": ["major1", "major2", "major3"],
		"dates": "Juny 1, 2009",
		"date_finale": "November 1, 2009",
		"positionAxeY": 60,
		//"onlineOrSchool": "online",
		"url": "https://www.edx.org/"
	},{
		"name": 'Git/GitHub: ',
		//"location": "bdeh",
		"degree": "Formation online",
		"majors": ["major1", "major2", "major3"],
		"dates": "January 1, 2015",
		"date_finale": "February 1, 2015",
		"positionAxeY": 60,
		//"onlineOrSchool": "online",
		"url": "https://www.edx.org/"
	},{
		"name": '<a href="https://www.edx.org/" target="_blank">Universidad MIT, EdX</a> :<br>',
		//"location": "bdeh",
		"degree": "Formation en Python",
		"majors": ["major1", "major2", "major3"],
		"dates": "March 1, 2015",
		"date_finale": " June 1, 2015",
		"positionAxeY": 60,
		//"onlineOrSchool": "online",
		"url": "https://www.edx.org/"
	}, {
		"name": '<a href="https://www.edx.org/" target="_blank">W3C, EdX</a> :<br>',
		//"location": "bdeh",
		"degree": "HTML5: Web Design Fundamentals",
		"majors": ["major1", "major2", "major3"],
		"dates": "June 30, 2015",
		"date_finale": " August 30, 2015",
		"positionAxeY": 60,
		//"onlineOrSchool": "online",
		"url": "https://www.edx.org/"
	},{
		"name": '<a href="https://www.udacity.com/" target="_blank">Udacity</a> (Nanodegree) :<br>',
		//"location": "bdeh",
		"degree": "Formation front-end, en cours",
		"majors": ["major1", "major2", "major3"],
		"dates": "August 1, 2016",
		"date_finale": dateString,
		"positionAxeY": 60,
		//"onlineOrSchool": "online",
		"url": "https://www.udacity.com/"
	},{
		"name": '<a href="">IUFM</a> :<br>',
		//"location": "Paris",
		"degree": "Preparation au Capes d'histoire géographie",
		"majors": ["major1", "major2", "major3"],
		"dates": "Septembre 15, 2002",
		"date_finale": "August 15 2003",
		"positionAxeY": 130,
		//"onlineOrSchool": "school",
		"url": "TODO"
	},{
		"name": '<a href="http://www.ub.edu/web/ub/es/" target="_blank">Universidad de Barcelona, UB</a> :<br>',
		//"location": "Barcelona",
		"degree": "Master en planification environnementale",
		"majors": ["major1", "major2", "major3"],
		"dates": "Septembre 15, 2006",
		"date_finale": "March 20, 2008",
		"positionAxeY": 130,
		//"onlineOrSchool": "school",
		"url": "TODO"
	},{
		"name": '<a href="http://www.creaf.cat/es" target="_blank">CREAF / UAB:</a><br>',
		"degree": "Master en SIG et télédetection",
		"dates": "September 15, 2010",
		"date_finale": "September 30, 2011",
		"positionAxeY": 130,
		"url": "TODO"
	}],
	"complements": {"subTitleStudies": "Études", "subTitleFormations": "Formations", "xPositionSubTitleStudies": 850, "yPositionSubTitleStudies": 210, "xPositionSubTitleFormations": 850, "yPositionSubTitleFormations": 90, "keyMultiLanguage_formationsTitle": "formationsTitle", "keyMultiLanguage_studiesTitle": "studiesTitle"},
};


var work = {
	"jobs": [{
		"title": "Desarrollador web/front-end",
		//"location": "Barcelona",
		"dates": "Octubre 2015-actual",
		//"onlineOrSchool": "school",
		"tecnologies": "Sass, HTML5, javascript, jQuery, AngularJS, Bootstrap, Grunt, PHP, Symfony2, Oracle, Java/JavaEE"
	}, {
		"title": 'Desarrollador Front-end/mapas digitales',
		//"location": "Bellaterra, Barcelona",
		"dates": "Enero 2015-septiembre 2015",
		//"onlineOrSchool": "school",
		"tecnologies": "HTML5, javascript, jQuery, css, D3.js."
	}, {
		"title": "Desarrollador web-mapping",
		//"location": "Paris",
		"dates": "Enero de 2012-diciembre de 2014",
		//"onlineOrSchool": "school",
		"tecnologies": "HTML5, javascript, jQuery, css, Bootstrap, OpenLayers, Geoserver, Python, PHP, xml."
	}],
	"nodes":[
		{"nameEntreprise":"Sopra-Steria", "workName": "Desarrollador web", "yWorkName": 80, "indiceArray": 0, "keyMultiLanguage": "workNameWebDvperTitle"},
		{"nameEntreprise":"LSCE-CREAF", "workName": "Desarrollador Front-end", "yWorkName": 180, "description": "blablabla2", "indiceArray": 1, "keyMultiLanguage": "workNameFrEndDvperTitle"},
		{"nameEntreprise":"CEA-LSCE", "workName": "Desarrollador web-mapping", "yWorkName": 280, "description": "blablabla3", "indiceArray": 2, "keyMultiLanguage": "workNameWebMapDvperTitle"},
	],
	"complementsNodes":[
		{
			"source":0,
			"date":"Octubre 2015 - actual",
			"description": '<a href= "http://www.soprasteria.com/en" target="_blank">Sopra-Steria</a><h4 lang="es" data-lang-token="webDvperDescriptionTitle">Trabajo por clientes frances y proyecto interno:</h4><ul><li lang="es" data-lang-token="webDvperDescriptionPart1">Diseño de la parte front-end de un proyecto interno e inclusión con JavaEE.</li><li lang="es" data-lang-token="webDvperDescriptionPart2">Web nueva para gestionar en el futuro las inscripciones de los alumnos en un gran centro universitario francés: tareas de back y de front-end simultaneamente.</li><li lang="es" data-lang-token="webDvperDescriptionPart3">Aplicación de “La Poste”: tareas de back-end.</li></ul>',
			"yWorkName": 85,
			"keyMultiLanguage": "nodesDatePrecisionWebDvper",
		},
		{
			"source":1,
			"date":"Enero 2015-septiembre 2015",
			"description": '<a href="http://www.creaf.cat/" target="_blank">CEA/CREAF-UAB</a>\
<h4 lang="es" data-lang-token="front_endDvperDescriptionPart1">Continuación, desde España, del proyecto empezado con el CEA-LSCE:</h4>\
<ul>\
<li>\
<span lang="es" data-lang-token="front_endDvperDescriptionPart2">Por razones familiares salí de Francia para volver a Barcelona donde segui trabajando en el </span>\
<a href="http://www.globalcarbonatlas.org/en/content/welcome-carbon-atlas" target="_blank">Global Carbon Atlas.</a>\
</li>\
<li lang="es" data-lang-token="front_endDvperDescriptionPart3">Representación de datos ambientales (flujos de carbono) en un Web Map Service: generación de mapas de incertidumbre con Python e integración a la parte cliente</li\
</ul>',
			"yWorkName": 185,
			"keyMultiLanguage": "nodesDatePrecisionFrEndDvper",
		},
		{
			"source":2,
			"date":"Enero de 2012-diciembre de 2014",
			"description": '<a href="http://www.lsce.ipsl.fr/en/" target="_blank">CEA-LSCE</a>\
<h4>\
<span lang="es" data-lang-token="web_mappingDvperDescriptionPart1">Colaboración para la realización del </span>\
<a href="http://www.globalcarbonatlas.org/en/content/welcome-carbon-atlas" target="_blank">Global Carbon Atlas</a>\
<span lang="es" data-lang-token="web_mappingDvperDescriptionPart2">: data visualización aplicado a mapas</span>\
</h4>\
<ul>\
<li>\
<span lang="es" data-lang-token="web_mappingDvperDescriptionPart3">Contexto: trabajo con un "partner" frances del proyecto Europeo</span> \
<a href="http://www.geoviqua.org/" target="_blank">GeoViQua</a> \
<span lang="es" data-lang-token="web_mappingDvperDescriptionPart4">dirigido por el CREAF (Barcelona)</span>\
</li>\
<li lang="es" data-lang-token="web_mappingDvperDescriptionPart5">\
Creación y diseño de los mapas e integración de herramientas creadas por el proyecto GeoViQua\
</li>\
<li lang="es" data-lang-token="web_mappingDvperDescriptionPart6">Creación y gestión de un formulario destinado a los probadores de datos (localizados en varios paises)</li>\
</ul>',
			"yWorkName": 285,
			"keyMultiLanguage": "nodesDatePrecisionWebMapDvper",
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
		/*{"nameEntreprise":"LSCE-CREAF", "programmingLanguage": "Base de Datos", "source":1,"target":7},*/
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
		{"name": "Oracle", "y": 245, "indiceArray": 7},
		{"name": "PHP/SQL", "y": 275, "indiceArray": 8},
		{"name": "Symphony2", "y": 305, "indiceArray": 9},
		{"name": "Java/javaEE", "y": 335, "indiceArray": 10},
	]
};

