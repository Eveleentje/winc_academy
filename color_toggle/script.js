// Menu toggle

let toggleNavStatus = false;

let toggleNav = function() {
    let getNavbarUl = document.querySelector(".nav-navbar ul");

    if (toggleNavStatus === false) {
        getNavbarUl.style.visibility = "visible";
        getNavbarUl.style.transform = "translateX(50px)";
    

    toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getNavbarUl.style.visibility = "hidden";
        getNavbarUl.style.left = "-50px";
        getNavbarUl.style.transition = "transform .5s ease";
        getNavbarUl.style.transform = "translateX(-100%)";
    
    toggleNavStatus = false;
    }
};

// Color change


const body = document.getElementsByTagName("BODY")[0];
var menuItems = document.querySelectorAll(".nav-navbar ul li");
var text = document.getElementById("text");

Array.from(menuItems);

menuItems[0].addEventListener("click", colorGray);
menuItems[1].addEventListener("click", colorOchre);
menuItems[2].addEventListener("click", colorSeafoam);
menuItems[3].addEventListener("click", colorFuchsia);
menuItems[4].addEventListener("click", colorBlue);

// Text change

menuItems[0].addEventListener("click", textGray);
menuItems[1].addEventListener("click", textOchre);
menuItems[2].addEventListener("click", textSeafoam);
menuItems[3].addEventListener("click", textFuchsia);
menuItems[4].addEventListener("click", textBlue);

function colorGray() {
    body.style.background="gray";
    toggleNav();
};

function textGray() {
    text.textContent="Gray"
};

function colorOchre() {
    body.style.background="#FF9D02";
    toggleNav();
};

function textOchre() {
    text.textContent="Ochre"
};

function colorSeafoam() {
    body.style.background="#C9E1BE";
    toggleNav();
};

function textSeafoam() {
    text.textContent="Seafoam"
};

function colorFuchsia() {
    body.style.background="fuchsia";
    toggleNav();
};

function textFuchsia() {
    text.textContent="Fuchsia"
};

function colorBlue() {
    body.style.background="blue";
    toggleNav();
};

function textBlue() {
    text.textContent="Blue"
};
