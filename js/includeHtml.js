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
var HTMLskillsFrontEndDescAndLevelStart = '<div class="skills_frontEnd_desc_level_start"></div>';
var HTMLskillsFrontEndDescriptionStart = '<ul class="front_end_skills_desc_start center_text"><h4>Front-end skills:</h4></ul>';
var HTMLskillsFrontEndLevelStart = '<ul class="front_end_level_start center_text"><h4>Level:</h4></ul>';
//
var HTMLskillsBackEndDescAndLevelStart = '<div class="skills_backEnd_desc_level_start"></div>';
var HTMLskillsBackEndDescriptionStart = '<ul class="back_end_skills_desc_start center_text"><h4>Back-end skills:</h4></ul>';
var HTMLskillsBackEndLevelStart = '<ul class="back_end_level_start center_text"><h4>Level:</h4></ul>';
//
var HTMLFrontEndSkills = '<li class="skills_list"><span>%data%</span></li>';
var HTMLBackEndSkills = '<li class="skills_list"><span>%data%</span></li>';
var HTMLskillsLevel = '<li class="skills_level_list rectOut"><div class="rectIn"></div></li>';

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
var HTMLincludeSourceInfo = '<span class="source_info">%data</span>';

/*
Education :
*/
var HTMLschoolStart = '<div class="school_entry center_text"><h4>Shools:</h4></div>';
var HTMLonlineCoursesStart = '<div class="onlineCourse_entry center_text"><h4>Online Courses:</h4></div>';
var HTMLschoolName = '<a href="#" class="schoolNameLink">%data%';
//var HTMLschoolName = '%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em><br>';
//
var HTMLonlineClassesStart = '<h4 class="center_text">Online Classes:</h4>';
var HTMLonlineTitle = '<div class="center_text"><a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a></div>';
var HTMLonlineDates = '<div class="center_text">%data%</div>';
var HTMLonlineURL = '<br><div class="center_text"><a href="#">%data%</a></div><br>';

/*
Langues et autres :
*/
var HTMLlanguesStart = '<ul class="languesList center_text"></ul>';
var HTMLLiElement = '<li class="liElement"></li>';
var HTMLlanguesName = '<span>%data%</span>';
var HTMLlanguesLevel = '<span>%data%</span>';

/*
Autre :
*/
var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';
