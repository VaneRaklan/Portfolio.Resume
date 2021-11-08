(function() {
  "use strict";

  window.addEventListener("load", init);

  function init() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};
  }

  // Get the header
  var header = qsa("body header");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function stickyHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
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
