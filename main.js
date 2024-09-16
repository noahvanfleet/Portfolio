window.onscroll = function() {scrollObserver()};



function scrollObserver() {
    //Makes the navigation bar 'sticky'. 
    let navbar = document.getElementById("navbar");

    if(window.scrollY >= 20) {
        // console.log("sticky")
        navbar.classList.add("sticky");
    } else {
        // console.log("not sticky")
        navbar.classList.remove("sticky");
    }

    // Changes the navbar text based on the section in view to add boat emoji

    //Observer for home section
    let home = document.querySelector("#home");
    let homeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                document.querySelector("#homeNav").innerHTML = "⛵Home";
            } else {
                document.querySelector("#homeNav").innerHTML = "Home";
            }
        });
    }, {threshold: 0.4});

    //Observer for Projects section
    let projects = document.querySelector("#projects");
    let projectsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                document.querySelector("#projNav").innerHTML = "⛵Projects";
            } else {
                document.querySelector("#projNav").innerHTML = "Projects";
            }
        });
    }, {threshold: 0.4});

    //Observer for Contact Me section
    let contact = document.querySelector("#contact");
    let contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                document.querySelector("#conNav").innerHTML = "⛵Contact Me";
            } else {
                document.querySelector("#conNav").innerHTML = "Contact Me";
            }
        });
    }, {threshold: 0.4});

    homeObserver.observe(home);
    projectsObserver.observe(projects);
    contactObserver.observe(contact);
}

// Modal for Projects --------------------------------------------------------

let modal = document.getElementById("modal");
let modalClose = document.getElementById("modal-close");

modalClose.onclick = function () {modal.style.display = "none";};
// ------------------------------------- Sherlock/ Project 1 Modal

let sherlockOpen = document.getElementById("sherlock-open");
let sherlockTitleOpen = document.getElementById("sherlock-title");

function populateSherlockModal() {
    let title = document.querySelector(".project-modal-title");
    title.innerHTML = "Sherlock";

    let description = document.querySelector(".modal-description");
    description.innerHTML = "Sherlock is a cross platform mobile app built to track local crime, sexual offenders, and dangerous locations by the hour in a map view for Knox county, TN. ";

    let tech = document.querySelector(".modal-tech");
    tech.innerHTML = "Sherlock was crafted utilizing React Native for a simple cross platform development experience. As well as utilizing the Google Maps API for a uniform mapping experience across all devices.";

    let goals = document.getElementById("modal-goals");
    goals.children[0].innerHTML = "Show all locally reported crime in a map view."
    goals.children[1].innerHTML = "Train an AI model with local crime data to predict dangerous locations for map display."
    goals.children[2].innerHTML = "Allow users to report and verify crime.";
    goals.children[3].innerHTML = "Users can post anonymously with randomly assigned crime based display names.";

    let challenges = document.getElementById("modal-challenges");
    challenges.children[0].innerHTML = "Unfamiliarity with React Native and Google Maps API.";
    // challenges.children[1].children[0].innerHTML = "Sherlock challenge 1 more info";
    challenges.children[2].innerHTML = "Race conditions with filtering and displaying crime data.";
    challenges.children[3].innerHTML = "App store requirements and legalities.";

}

sherlockOpen.onclick = function() {
    populateSherlockModal();
    modal.style.display = "block";
}

sherlockTitleOpen.onclick = function() {
    populateSherlockModal();
    modal.style.display = "block";
}

// ------------------------------------- Sherlock API/ Project 2 Modal

let proj2Open = document.getElementById("proj2-open");
let proj2TitleOpen = document.getElementById("proj2-title");

function populateProj2Modal() {
    let title = document.querySelector(".project-modal-title");
    title.innerHTML = "Sherlock API";

    let description = document.querySelector(".modal-description");
    description.innerHTML = "The Sherlock API scrapes and parses public crime data from local authorities in Knoxville, TN to provide real-time crime reports, support self-reporting and verification, use anonymous crime-based usernames for community based posts, and can assess threat risks for specific locations.";

    let tech = document.querySelector(".modal-tech");
    tech.innerHTML = "Sherlock was crafted utilizing Node.js for backend functionality, SQLite3 for robust database management, and AWS Cognito for secure user authentication and verification.";

    let goals = document.getElementById("modal-goals");
    goals.children[0].innerHTML = "Enable community safety awareness through real-time crime data.";
    goals.children[1].innerHTML = "Allow for user reporting and verification of crime.";
    goals.children[2].innerHTML = "Facilitate community driven interaction regarding local incidents.";
    goals.children[3].innerHTML = "Enable risk assessment for specific locations.";

    let challenges = document.getElementById("modal-challenges");
    challenges.children[0].innerHTML = "Parsing inconsistent data from local authorities.";
    // challenges.children[1].children[0].innerHTML = "Proj 2 more info 1";
    challenges.children[2].innerHTML = "Downloading from sources that required authorization tokens.";
    challenges.children[3].innerHTML = "Limiting Google Maps API calls to stay within free tier.";
}

proj2Open.onclick = function() {
    populateProj2Modal();
    modal.style.display = "block";

}
proj2TitleOpen.onclick = function() {
    populateProj2Modal();
    modal.style.display = "block";
}

// ------------------------------------- Malloc/ Project 3 Modal

// let proj3Open = document.getElementById("proj3-open");
// let proj3TitleOpen = document.getElementById("proj3-title");

// function populateProj3Modal() {
//     let title = document.querySelector(".project-modal-title");

//     title.innerHTML = "Project 3";

//     let description = document.querySelector(".modal-description");
//     description.innerHTML = "This is a description of Project 3";

//     let tech = document.querySelector(".modal-tech");
//     tech.innerHTML = "This is the tech stack used for Project 3";

//     let goals = document.getElementById("modal-goals");
//     goals.children[0].innerHTML = "Proj 3 Goal 1";
//     goals.children[1].innerHTML = "Proj 3 Goal 2";
//     goals.children[2].innerHTML = "Proj 3 Goal 3";
//     goals.children[3].innerHTML = "Proj 3 Goal 4";

//     let challenges = document.getElementById("modal-challenges");
//     challenges.children[0].innerHTML = "Proj 3 Challenge 1";
//     challenges.children[1].children[0].innerHTML = "Proj 3 more info 1";
//     challenges.children[2].innerHTML = "Proj 3 Challenge 2";
//     challenges.children[3].innerHTML = "Proj 3 Challenge 3";

// }

// proj3Open.onclick = function() {
//     populateProj3Modal();
//     modal.style.display = "block";
// }
// proj3TitleOpen.onclick = function() {
//     populateProj3Modal();
//     modal.style.display = "block";
// }

// // ------------------------------------- Unzip/ Project 4 Modal

// let proj4Open = document.getElementById("proj4-open");
// let proj4TitleOpen = document.getElementById("proj4-title");

// function populateProj4Modal() {
//     let title = document.querySelector(".project-modal-title");

//     title.innerHTML = "Project 4";

//     let description = document.querySelector(".modal-description");
//     description.innerHTML = "This is a description of Project 4";

//     let tech = document.querySelector(".modal-tech");
//     tech.innerHTML = "This is the tech stack used for Project 4";

//     let goals = document.getElementById("modal-goals");
//     goals.children[0].innerHTML = "Proj 4 Goal 1";
//     goals.children[1].innerHTML = "Proj 4 Goal 2";
//     goals.children[2].innerHTML = "Proj 4 Goal 3";
//     goals.children[3].innerHTML = "Proj 4 Goal 4";

//     let challenges = document.getElementById("modal-challenges");
//     challenges.children[0].innerHTML = "Proj 4 Challenge 1";
//     challenges.children[1].children[0].innerHTML = "Proj 4 more info 1";
//     challenges.children[2].innerHTML = "Proj 4 Challenge 2";
//     challenges.children[3].innerHTML = "Proj 4 Challenge 3";

// }

// proj4Open.onclick = function() {
//     populateProj4Modal();
//     modal.style.display = "block";
// }
// proj4TitleOpen.onclick = function() {
//     populateProj4Modal();
//     modal.style.display = "block";
// }

// -----------------------------------------------------------------------------------
// General Modal Functionality

// Closes the modal if the user clicks outside of it
window.addEventListener("click", function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
});

// Stops event bubbling when clicking on modal icons
let eventsIcon = document.getElementsByClassName("project-header-icon");
for(let i = 0; i < eventsIcon.length; i++) {
    eventsIcon[i].addEventListener("click", function(event) {
        event.stopPropagation();
    });
}

// Modal boat animation
let boat = document.querySelector(".project-modal-boat");
let island = document.querySelector(".project-modal-island");


let xpos = 60;
let xipos;

let id = setInterval(function(){
    xipos = (island.getBoundingClientRect().x / window.outerWidth) * 100;
    
    if(xpos > xipos){//Does nothing when boat is at island
        if(xpos > xipos+.5 && xipos!=0){//If boat is past island due to resize, back track
            xpos -= .25;
        }
    }else{
        xpos += .25;
    }
    boat.style.left = xpos + "vw";
}, 10);

// For resize correction ------------------------

//Observer for when window is resized when boat is not visible
let boatObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            xipos = (island.getBoundingClientRect().x / window.outerWidth) * 100; 
        }
    });
})


window.addEventListener("resize", function(){
    if(boat.offsetParent != null){//Will not update here if modal is closed
        xipos = (island.getBoundingClientRect().x / window.outerWidth) * 100;
    }else{
        boatObserver.observe(boat);//Observes the boat to update xipos when modal is opened
    }
})













// window.onload = function() {
//     let touch = false;

//     if("maxTouchPoints" in navigator) {
//         touch = navigator.maxTouchPoints > 0;
//     }

//     if(touch){
//         document.querySelector(".contact-foot").style.display = "none";
//         document.querySelector(".flip").style.marginTop = "-1vh";
//     }
// }
