function ToggleNavBar() {
    const navbar = document.getElementById("navBar")
    if (!navbar.classList.contains("open")) {
        navbar.classList.add("open");
    }
    else {
        navbar.classList.remove("open");
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
    // if the nav bar scroll position is greater than 0, add the shadow class
    if (window.scrollY > 0) {
        const navBar = document.getElementById('navBar');
        navBar.classList.add('hasShadow');
        navBar.classList.add('isOpaque');
    }
    else {
        const navBar = document.getElementById('navBar');
        navBar.classList.remove('hasShadow');
        navBar.classList.remove('isOpaque');
    }
    // if scroll position is greater than the banner, reveal toTopArrow
    if (window.scrollY > 200) {
        const arrow = document.getElementById('toTop');
        arrow.classList.remove('invisible');
    }
    else {
        const arrow = document.getElementById('toTop');
        arrow.classList.add('invisible');
    }
})

function ScrollToPosition(pixelsFromTop) {
    window.scrollTo({
        top: pixelsFromTop,
        behavior: 'smooth'
    });
}
function ScrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
}

// function ToggleFilter(filterId) {
//     // get the filter button that called this
//     const filterButton = document.getElementById(filterId);

//     // activate 'all'
//     if (filterId == 'all' && !filterButton.classList.contains('filterOn')){
//         // deactivate everything else first
//         const filterButtons = document.getElementsByClassName('filterButton');
//         for (var i = 0; i < filterButtons.length; i++){ filterButtons[i].classList.remove('filterOn'); }

//         // then activate all
//         filterButton.classList.add('filterOn');
//         FilterProjects(filterId, true);
//     }
//     // activating something other than 'all'
//     else if (!filterButton.classList.contains('filterOn')) {
//         // if 'all' is activated, deactivate it and deactivate all projects
//         if (document.getElementById('all').classList.contains('filterOn')){
//             document.getElementById('all').classList.remove('filterOn');
//             FilterProjects('all', false);
//         }

//         // then activate the filter
//         filterButton.classList.add('filterOn');
//         FilterProjects(filterId, true);
//     }
//     // deactivate something other than 'all'
//     else if (filterId != 'all' && filterButton.classList.contains('filterOn')){
//         filterButton.classList.remove('filterOn');
//         FilterProjects(filterId, false);
//     }
// }

// function FilterProjects(selectedFilter, isOn) {
//     if (selectedFilter == 'all'){
//         // get all the projects
//         const projects = document.getElementsByClassName('projectBox');
//         // make all visible
//         if (isOn) { for (var i = 0; i < projects.length; i++){ projects[i].classList.add('filteredOn'); } }
//         else { for (var i = 0; i < projects.length; i++){ projects[i].classList.remove('filteredOn'); } }
//     }
//     else {
//         // get all the projects with the filter name
//         const projects = document.getElementsByClassName(selectedFilter);
//         if (isOn) { for (var i = 0; i < projects.length; i++){ projects[i].classList.add('filteredOn'); } }
//         else { for (var i = 0; i < projects.length; i++){ projects[i].classList.remove('filteredOn'); } }
//     }
// }


