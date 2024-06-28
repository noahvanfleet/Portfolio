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
    }, {threshold: 0.3});

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
    }, {threshold: 0.3});

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
    }, {threshold: 0.3});

    homeObserver.observe(home);
    projectsObserver.observe(projects);
    contactObserver.observe(contact);
}

// Modal for Projects --------------------------------------------------------

let modal = document.getElementById("modal");
let modalClose = document.getElementById("modal-close");

modalClose.onclick = function () {modal.style.display = "none";};
// ------------------------------------- Sherlock Modal

let sherlockOpen = document.getElementById("sherlock-open");
let sherlockTitleOpen = document.getElementById("sherlock-title");

function populateSherlockModal() {
    let title = document.querySelector(".project-modal-title");

    title.innerHTML = "Sherlock";
}

sherlockOpen.onclick = function() {
    populateSherlockModal();
    modal.style.display = "block";
}

sherlockTitleOpen.onclick = function() {
    populateSherlockModal();
    modal.style.display = "block";
}

// ------------------------------------- Project 2 Modal

let proj2Open = document.getElementById("proj2-open");
let proj2TitleOpen = document.getElementById("proj2-title");

function populateProj2Modal() {
    let title = document.querySelector(".project-modal-title");

    title.innerHTML = "Project 2";
}

proj2Open.onclick = function() {
    populateProj2Modal();
    modal.style.display = "block";

}
proj2TitleOpen.onclick = function() {
    populateProj2Modal();
    modal.style.display = "block";
}

// ------------------------------------- Project 3 Modal

let proj3Open = document.getElementById("proj3-open");
let proj3TitleOpen = document.getElementById("proj3-title");

function populateProj3Modal() {
    let title = document.querySelector(".project-modal-title");

    title.innerHTML = "Project 3";

}

proj3Open.onclick = function() {
    populateProj3Modal();
    modal.style.display = "block";
}
proj3TitleOpen.onclick = function() {
    populateProj3Modal();
    modal.style.display = "block";
}

// -----------------------------------------------------------------------------------
// General Modal Functionality

// Closes the modal if the user clicks outside of it
window.addEventListener("click", function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
});

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