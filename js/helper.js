var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = ' <span id="role">%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="contact-entry"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="contact-entry"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="contact-entry"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="contact-entry"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="contact-entry"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="contact-entry"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="contact-entry"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="list-inline"></ul>';
var HTMLskills = '<li><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="col-md-4 work-entry"></div>';
var HTMLworkEmployer = '<a href="#" target="_new">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<div class="smaller"><p><br>%data%</p></div>';

var HTMLprojectStart = '<div class="col-md-6 project-entry"></div>';
var HTMLprojectClearFix = '<div class="clearfix visible-xs"></div>';
var HTMLprojectTitle = '<a href="#" target="_new">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%" class="img-responsive">';

var HTMLschoolStart = '<div class="col-md-2"></div><div class="col-md-5 education-entry"></div>';
var HTMLschoolName = '<a href="#" target="_new">%data%</a>';
var HTMLschoolDegree = '%data%';
var HTMLschoolMajor = '<em> -- %data%</em>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = ' <div class="location-text">%data%</div> ';


var HTMLonlineStart = '<div class="col-md-4 education-entry"></div>';
var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#" target="_new">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div><br>';
var HTMLonlineURL = '<a href="#" class="smaller" target="_new">%data%</a>';

var googleMap = '<div id="map"></div>';

/*
The Internationalize Name.
*/
$(document).ready(function() {
  $('#name').click(function() {
    var iName = inName(bio.name) || function(){};
    $('#name').html(iName);
  });
});

function inName(name) {
  name = name.trim().split(" ");
  nameCheck = $('#name').html().trim().split(" ");
  //console.log(nameCheck);
  if (nameCheck[1] === nameCheck[1].toUpperCase()) {
     name[1] = name[1].slice(0,1).toUpperCase() + name[1].slice(1).toLowerCase();
  }
  else {
    name[1] = name[1].toUpperCase();
  };
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] +" "+ name[1];
}

/*
Collecting Click Locations.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  //console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

/*
Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var cityName = name.trim().split(",");
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">'+name+'</h1>'+
      '<div id="bodyContent">'+
      '<p><b>'+name+'</b>, also referred to as <b>'+cityName[0]+'</b>, is just one location ' +
      'where ' + bio.name + ' has lived or worked. Click other map markers to see more.'
      '</div>'+
      '</div>';
      var infoWindow = new google.maps.InfoWindow({
      content: contentString //name
    });

    // pin click listener calls infoWindow passing the map and marker.
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);
}

/*
The code below initializes Google Map
*/

// Calls the initializeMap() function when the page loads
//window.addEventListener('load', initializeMap);

if (window.addEventListener) {
  window.addEventListener('load', initializeMap);
}
else {
    window.attachEvent('load', initializeMap);
}

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds

if (window.addEventListener) {
  window.addEventListener('resize', function(e) {
    // Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
  });
}
else {
    window.attachEvent('resize', function(e) {
    // Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
  });
}

//window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  //map.fitBounds(mapBounds);
//});
