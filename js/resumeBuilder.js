var bio = {
	"name" : "Bill Parks",
	"role" : "Technical Architect",
	"contacts" : {
		"mobile" : "501-234-6789",
		"email" : "bill_parks@att.net",
		"github" : "bill-parks",
		"twitter" : "heybillparks",
		"location" : "Livonia, MI"
	},
	"welcomeMessage" : "Welcome to my Interactive Resume - A Udacity Nanodegree &copy; (JavaScript) Project",
	"skills" : ["HTML","CSS/bootstrap","JavaScript","jQuery","SQL2008","PSQL","ColdFusion11","IIS7","SCM/Git"],
	"bioPic" : "images/bio.jpg",
	"display" : function(){
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);
	$("#header").append("<img src='" + bio.bioPic + "' class='biopic'>");
	$("#header").append(formattedWelcomeMsg);	
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (i in bio.skills){
			$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
 		};
 	  };
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedLocation);
	}
};

bio.display();

var education = {
    "schools": [
        {
            "name": "Lawrence Technological University",
            "location": "Southfield, Michigan",
            "degree": "Master of Science",
            "majors": "Information&nbspSystems",
            "dates": 2013,
            "url": "http://www.ltu.edu/"
        },
        {
            "name": "Southern Illinois University",
            "location": "Carbondale, Illinois",
            "degree": "Bachelor of Science",
            "majors": "Workforce&nbsp;Development",
            "dates": 1995,
            "url": "http://www.siu.edu/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/ud304"
        },
        {
            "title": "Using Git and GitHub",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/ud775"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/ud804"
        },
        {
            "title": "Intro to jQuery",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/ud245"
        }
    ],
    "display" : function(){
    	for (i in education.schools){
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name).replace("#",education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
			var formattedSchoolDegree = formattedSchoolDegree + formattedSchoolMajor;
			$(".education-entry:last").prepend(formattedSchoolName);
			$(".education-entry:last").prepend(formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolDates);
			};
    	for (i in education.onlineCourses){
			$("#onlineclasses").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title).replace("#",education.onlineCourses[i].url);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
			var formattedOnlineCourse = formattedOnlineTitle + formattedOnlineSchool;
			var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url).replace("#",education.onlineCourses[i].url);
			$(".education-entry:last").append(formattedOnlineCourse);
			$(".education-entry:last").append(formattedOnlineURL);
			$(".education-entry:last").append(formattedOnlineDates);
    		};
    }
};

education.display();

var work = {
    "jobs": [
        {
            "employer": "AT&amp;T",
            "title": "Principal Technical Architect",
            "location": "Plymouth, Michigan",
            "dates": "1995 - Future",
            "description": "Translate business needs into technical solutions.",
            "url": "http://www.att.com/"
        },
        {
            "employer": "Food Manufacturing",
            "title": "Plant Manager",
            "location": "Detroit, Michigan",
            "dates": "1987 - 1995",
            "description": "Overall day to day plant operations.",
            "url": "http://pelleritofoods.com/"
        },
        {
            "employer": "US Navy",
            "title": "Chief Petty Officer (CPO)",
            "dates": "1977 - 1987",
            "location": "San Diego, California",
            "description": "Aircraft Carrier Antisubmarine Warfare (ASW) Chief.",
            "url": "http://www.navy.mil/"
        }
    ],
    "display" : function(){
		for (i in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer).replace("#",work.jobs[i].url);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
		};
	}
};

work.display();

var projects = {
    "project": [
        {
            "title": "Project #1: Mockup to Website",
            "dates": 2015,
            "description": "This project replicates a design document as closely as possible in HTML and CSS.",
    	    "images": [
                {
                    "url": "images/page-mock.png"
                }
            ],
            "url": "https://github.com/bill-parks/nanodegree-project1",
            "more": "dialog.html"
        },
        {
            "title": "Project #2: Interactive Resume",
            "dates": 2015,
            "description": "Create objects from four JSONs, each one representing a different resume section. Encapslate functions such as display() within their objects, and iterate through each JSON appending its information to index.html in the correct section.",
            "images": [
                {
                    "url": "images/resume.PNG"
                }
            ],
            "url": "https://github.com/bill-parks/frontend-nanodegree-resume",
            "more": "dialog.html"
        }
    ],
    "display" : function() {
	for (i in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[i].title).replace("#",projects.project[i].url);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[i].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.project[i].images.length > 0) {
			for (image in projects.project[i].images){
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[i].images[image].url);
			$(".project-entry:last").append(formattedImage);	
			};
		}
	  };
	}
}

projects.display();

var map = {
	"display" : function() {
		$("#mapDiv").append(googleMap)
	}
}

map.display();
