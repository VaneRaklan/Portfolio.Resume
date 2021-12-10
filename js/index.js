(function() {
  "use strict";

  window.addEventListener("load", init);

  function init() {
    
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
