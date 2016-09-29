/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*$("#main").append("Pascal Evano");
var awesome = "I'm awesome ...!";
var fun = awesome.replace("awesome", "fun");
$("#main").append(fun);*/

/*var name = "Pascal Evano";
var role = "Front-end beginner";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").append(formattedName);
$("#header").append(formattedRole);*/

/*var s = "audacity";
var udacityizer = function(s) {
	// Right now, the variable s === "audacity"
	// Manipulate s to make it equal to "Udacity"
	// Your code goes here!
	var letterMaj = s[1].toUpperCase();
	var varWordCut = s.slice(2);// To return "dacity";
	s = letterMaj + varWordCut;
	return s;
};
// Did your code work? The line below will tell you:
console.log(udacityizer(s));*/

/*var sampleArray = [0,0,7];
var incrementLastArrayElement = function(_array) {
	var newArray = [];
	// Your code should make newArray equal to an array that has the same
	// values as _array, but the last number has increased by one.
	// For example:
	// _array = [1, 2, 3];
	// turns into:
	// newArray = [1, 2, 4];
	// Your code goes in here!
	var lastElement = _array.pop();
	lastElement++;
	_array.push(lastElement);
	newArray = _array;
	return newArray;
};
// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));*/


/*var name = "AlbERt EINstEiN";
function nameChanger(oldName) {
	var finalName = oldName;
	// Your code goes here!
	var finalNameSplitted = finalName.split(" ");
	var finalName1 = finalNameSplitted[0];
	var finalName1ToMaj = finalName1[0].toUpperCase();
	var finalName1ToMin = finalName1.slice(1).toLowerCase();
	var finalName1OK = finalName1ToMaj + finalName1ToMin;
	var finalName2 = finalNameSplitted[1];
	var finalName2Maj = finalName2.toUpperCase();
	finalName = finalName1OK + " " + finalName2Maj;
	return finalName;
};
// Did your code work? The line below will tell you!
console.log(nameChanger(name));*/

// CRéation propriétés via object syntax.
/*var bio = {
	"name":"Pascal",
	"role": "front truc",
	"picture url": "img/uuu.png",
	"contact info": {
		"name":"Pascal",
		"adress":"Calle calvet, ..",
		"tel":"650..."
	},
	"welcome message": "Coucou!",
	"skillls": ["css", "js", "html"]
};*/

// Création propriétés avec dot :
/*var work = {};
work.job_position = "web developper";
work.employer = "jiji";
work.years_worked = 3;
work.city = "Paris";
// Création propriétés avec [] :
var education = {};
education["lastSchool"] = "Paris 4";
education["years"] = 5;
education["city"] = "Paris";
// Append to page :
$("#main").append(work["job_position"]);
$("#main").append(education.city);*/

// Using json notation :
var bio = {
	"name": "Pascal",
	"role": "front truc",
	"biopic": "jsdowjo",
	"contacts": {
		"email": "pascal2833@...",
		"github": "pascal-evano...",
		"location": "kkpokopk",
		"mobile": "650..."
	},
	"welcomeMessage": "Coucou!",
	"skills": ["css", "js", "html"]
};

var work = {
	"jobs": [{
		"title": "web developper",
		"employer": "hhhh",
		"location":"tambouctou",
		"dates": 2003/12/25,
		"description": "iiojiojoj"
	}, {
		"title": "web developper",
		"employer": "hhhh",
		"location":"tambouctou",
		"dates": 2003/12/25,
		"description": "iiojiojoj"
	}]
};

var projects = {
	"projects": [
		{
			"title": "dednw",
			"dates": "2001-02-23, 2004-12-21",
			"description": "dgweugduygeru",
			"images": [
				"img/hihi", "img/jiji"
			]
		},
		{
			"title": "dednw",
			"dates": "2001-02-23, 2004-12-21",
			"description": "dgweugduygeru",
			"images": [
				"img/hihi", "img/jiji"
			]
		}
	]
};

var education = {
	"schools": [{
		"name": "Branly",
		"location": "Dreux",
		"degree dates": "1996",
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
	"onlineCourses": [{
		"title": "kkpkp",
		"school": "swkskp",
		"dates": "2003",
		"url": "jiji/jijojo/..."
	}]
};
















