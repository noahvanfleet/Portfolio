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