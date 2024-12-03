function ToggleNavBar() {
    const navbar = document.getElementById("navBar")
    if (!navbar.classList.contains("open")) {
        navbar.classList.add("open");
    }
    else {
        navbar.classList.remove("open");
    }
}

function ExpandProjectBox(id) {
    const projectBox = document.getElementById(id);
    projectBox.classList.add("expanded");
    projectBox.classList.add("hasShadow");
    // if this project box is type 1 or 2, reveal the hidden text (don't do this for type 3)
    if (projectBox.classList.contains("projectBox") || projectBox.classList.contains("projectBox2")) {
        projectBox.lastElementChild.classList.add("revealed");
    }
}

function CollapseProjectBox(id) {
    const projectBox = document.getElementById(id);
    projectBox.classList.remove("expanded");
    projectBox.classList.remove("hasShadow");
    // if this project box is type 1 or 2, hide the revealed text (don't do this for type 3)
    if (projectBox.classList.contains("projectBox") || projectBox.classList.contains("projectBox2")) {
        projectBox.lastElementChild.classList.remove("revealed");
    }
}

function NavigationButton(link) {
    location.href = link;
}

function ExternalLinkButton(link) {
    window.open(link, '_blank');
}


// Add a shadow to the nav bar when scrolled
window.addEventListener('scroll', (event) => {
    // First get the nav bar by id
    const navBar = document.getElementById('navBar');
    // if the nav bar scroll position is greater, add the shadow class
    if (window.scrollY > 0) {
        navBar.classList.add('hasShadow');
        navBar.classList.add('isOpaque');
    }
    else {
        navBar.classList.remove('hasShadow');
        navBar.classList.remove('isOpaque');
    }
})