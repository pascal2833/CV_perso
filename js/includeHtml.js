/*
These are HTML strings. Using JavaScript functions
replace the %data% placeholder text you see in them.
*/
/*
Info générales : nom, prénom, mail, ...
*/
var HTMLheaderMyName = '<h1 class= "myName" class= "typoBig">%data%</h1>';
var HTMLheaderMyRole = '<h2 class="myRole">%data%</h2>';
var HTMLmobile = '<div class= "typoMedium mailAndTel"><i class="fa fa-phone iconeFontAwesome"></i>%data%</div>';
var HTMLemail = '<div class= "typoMedium mailAndTel"><i class="fa fa-envelope-o iconeFontAwesome"></i>%data%</div>';
var HTMLgithub = '<div class= "typoMedium mailAndTel"><i class="fa fa-github iconeFontAwesome"></i>%data%</div>';
var HTMLlocation = '<div class= "typoMedium mailAndTel"><i class="fa fa-globe iconeFontAwesome"></i>%data%</div>';
var HTMLbioPic = '<figure class= "photo"><img src="%data%" alt= "CV\'s picture" class="biopic"></figure>';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

/*
Skills
*/
var HTMLskillsFrontEndStart = '<h3 class="center_text">Front-end skills:</h3><ul class="front-end-skills-start center_text"></ul>';
var HTMLskillsBackEndStart = '<h3 class="center_text">Back-end skills:</h3><ul class="back-end-skills-start center_text"></ul>';
var HTMLFrontEndSkills = '<li><span>%data%</span></li>';
var HTMLBackEndSkills = '<li><span>%data%</span></li>';

/*
Expérience :
*/
var HTMLworkStart = '<div class="work-entry center_text"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div>%data%</div>';
var HTMLworkLocation = '<div>%data%</div>';
var HTMLworkDescription = '<p>%data%</p>';

/*
Projets :
*/
var HTMLprojectStart = '<div class="project-entry center_text"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLProjectPhotoContainer = '<div class="photosContainer"></div>';
var HTMLprojectImage = '<img src="%data%">';

/*
Education :
*/
var HTMLschoolStart = '<div class="school-entry center_text"></div>';
var HTMLschoolName = '<a href="#" class="schoolNameLink">%data%';
//var HTMLschoolName = '%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';
//
var HTMLonlineClasses = '<h3 class="center_text">Online Classes</h3>';
var HTMLonlineTitle = '<div class="center_text"><a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a></div>';
var HTMLonlineDates = '<div class="center_text">%data%</div>';
var HTMLonlineURL = '<br><div class="center_text"><a href="#">%data%</a></div>';

/*
Langues et autres :
*/
var HTMLlanguesStart = '<ul class="languesList center_text"></ul>';
var HTMLLiElement = '<li class="liElement"></li>';
var HTMLlanguesName = '<span>%data%: </span>';
var HTMLlanguesLevel = '<span>%data%</span>';

/*
Autre :
*/
var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';
