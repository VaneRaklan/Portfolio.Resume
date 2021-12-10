(function() {
  "use strict";
  window.addEventListener("load", init);

  function init() {
    openProjects();
    backArrows();
  }

  function openProjects() {
    id('proximity-connector').addEventListener("click", () => {
      id('proximity').classList.remove('hidden');
      id('main-page').classList.add('hidden');
    });
    id('seasonality-connector').addEventListener("click", () => {
      id('seasonality').classList.remove('hidden');
      id('main-page').classList.add('hidden');
    });
    id('affordability-connector').addEventListener("click", () => {
      id('affordability').classList.remove('hidden');
      id('main-page').classList.add('hidden');
    });
    id('closest-connector').addEventListener("click", () => {
      id('closest').classList.remove('hidden');
      id('main-page').classList.add('hidden');
    });
  }

  function backArrows() {
    let arrows = qsa('.back-arrow');
    for (let i=0; i < arrows.length; i++) {
      arrows[i].addEventListener("click", () => {
        id('main-page').classList.remove('hidden');
        id('proximity').classList.add('hidden');
        id('affordability').classList.add('hidden');
        id('closest').classList.add('hidden');
        id('seasonality').classList.add('hidden');
      });
    }
  }

  /* HELPER FUNCTIONS  */
  /**
    Gets the element with the corresponding ID attatched
    @param {string} ID - the id of the element
  */
  function id(ID) {
    return document.getElementById(ID);
  }
  /**
    Gets a list of elements that match the CSS Selector
    @param {string} QSA - the CSS Selector to query
  */
  function qsa(QSA) {
    return document.querySelectorAll(QSA);
  }
})();
