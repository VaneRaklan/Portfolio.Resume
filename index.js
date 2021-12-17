(function(){
    "use strict";
    window.addEventListener("load", init);

    function init() {
        id('burger-icon').addEventListener("click", hamburgerMenu);
        responsiveLinks();
        connectProjects();
        qs('.fa-arrow-left').addEventListener("click", closeProject);
    }

    function hamburgerMenu() {
        let menu = id('responsive-links');
        if (menu.className === 'hidden') {
            menu.className = '';
        } else {
            menu.className = 'hidden';
        }
    }

    function responsiveLinks() {
        let links = qsa('#responsive-links a');
        for (let i=0; i<links.length; i++) {
            links[i].addEventListener("click", hamburgerMenu);
        }
    }

    function connectProjects() {
        id('proximity').addEventListener("click", () => {
            stageProject();
            id('proximity-page').className = '';
            
        });
        id('seasonality').addEventListener("click", () => {
            stageProject();
            id('seasonality-page').className = '';
        });
        id('emergency').addEventListener("click", () => {
            stageProject();
            id('emergency-page').className = '';
        });
        id('affordability').addEventListener("click", () => {
            stageProject();
            id('affordability-page').className = '';
        });
    }

    function stageProject() {
        window.scrollTo(0,0);
        let mainSections = qsa('main > section:not(:last-child)');
        for (let i=0; i<mainSections.length; i++) {
            mainSections[i].className = 'hidden';
        }
        let projectSections = qsa('#project-page section');
        for (let i=0; i<projectSections.length; i++) {
            projectSections[i].className = 'hidden';
        }
        id('project-page').className = 'block';
    }

    function closeProject() {
        let mainSections = qsa('main > section:not(:last-child)');
        for (let i=0; i<mainSections.length; i++) {
            mainSections[i].className = '';
        }
        id('project-page').className = 'hidden';
    }

    // ==== HELPER FUNCTIONS ====

    /**
     * gets the element that matches the id
     * @param {string} ID - id of target element
     * @returns target element
     */
    function id (ID) {
        return document.getElementById(ID);
    }

    /**
     * gets a single element that matches the CSS selector
     * @param {string} QS - query selector for target element
     * @returns first element that matches the query selector
     */
    function qs (QS) {
        return document.querySelector(QS);
    }
    /**
     * gets a list of elements that match a given CSS selector
     * @param {string} QSA - CSS selector to query
     * @returns all elements that match the query
     */
    function qsa (QSA) {
        return document.querySelectorAll(QSA);
    }
})();

function hamburgerMenu() {
    var x = document.getElementById("myLinks");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}