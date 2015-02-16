## How I completed this project:


### By the end my resume was to look something like this
![](http://i.imgur.com/pWU1Xbl.png)

And my repository was to include the following files:

* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.
* **js/resumeBuilder.js**: This file was empty. This is where I wrote most of my code.
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **README.md**: This readme file.
* and some images in the images directory.

### Assignment:
The resume has four distinct sections: work, education, projects and a header with biographical information. 

1. Build four JSONs, each one representing a different resume section. 
The objects that you create need to follow the names within the schema below exactly. 
Make sure your JSONs are formatted correctly using <a href="http://jsonlint.com/" target="_blank">JSONlint.com</a>.

* `bio` contains:
        
            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string 
                  github: string
                  twitter: string 
                  location: string
            welcomeMessage: string 
            skills: array of strings
            biopic: url
            display: function taking no parameters

* `education` contains:
      
            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: integer (graduation date)
                 url: string
            onlineCourses: array with
                 title: string
                 school: string
                 date: integer (date finished)
                 url: string
            display: function taking no parameters

* `work` contains
          
            jobs: array of objects with
                 employer: string 
                 title: string 
                 location: string 
                 dates: string (works with a hyphen between them)
                 description: string 
            display: function taking no parameters

* `projects` contains:

            projects: array of objects with
                  title: string 
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

2. Iterate through each JSON and append its information to index.html in the correct section.
 
3. The resume includes an interactive map. To add it, append the googleMap string to `<div id=”mapDiv”>`.

4. All of your code for adding elements to the resume should be within functions. 
And all of your functions should be encapsulated within the same objects containing your resume data. 
For instance, your functions for appending work experience elements to the page should be found within the same object containing data about your work experience.

5. Your resume should also `console.log()` information about click locations. On line 90 in helper.js, you’ll find a jQuery onclick handler that you’ll need to modify to work with the `logClicks(x,y)` function above it.

6. It’s possible to make additional information show up when you click on the pins in the map. Check out line 174 in helper.js and the Google Maps API to get started.

Beyond The Assignment:
* Added some code to enhance the infoWindow when clicking map pointers.
* Added some code to toggle the last name to caps and back when clicking #name.
* Added a project URL for GitHub location.
* Changed header and footer colors and used my own background and bio photos.
