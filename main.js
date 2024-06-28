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

// Modal for Sherlock Project --------------------------------------------------------

let sherlockModal = document.getElementById("sherlock-modal");
let sherlockModalClose = document.getElementById("sherlock-close");
let sherlockModalOpen = document.getElementById("sherlock-open");
let sherlockModalOpenTitle = document.getElementById("sherlock-title");


sherlockModalOpen.onclick = function() {
    sherlockModal.style.display = "block";
}

sherlockModalOpenTitle.onclick = function() {
    sherlockModal.style.display = "block";
}

sherlockModalClose.onclick = function() {
    sherlockModal.style.display = "none";
}

// -----------------------------------------------------------------------------------
// General Modal Functionality

// Closes the modal if the user clicks outside of it
window.addEventListener("click", function(event) {
    if(event.target == sherlockModal) {
        sherlockModal.style.display = "none";
    }
});

// Modal boat animation
let boat = document.querySelector(".project-modal-boat");
let island = document.querySelector(".project-modal-island");


let xpos = boat.getBoundingClientRect().left/ window.outerWidth * 100;
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