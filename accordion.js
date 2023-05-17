var accordions = document.querySelectorAll(".accordion");

accordions.forEach(function (accordion) {
  var sign = accordion.querySelector(".sign");
  // Creates click event for when the element with classname 'accordion' is clicked.
  accordion.addEventListener("click", function () {
    this.classList.toggle("active");
    // Returns the element immediately following the specified one in its parent's children list (in this case the divs following the panel class div).
    var panel = this.nextElementSibling;
    // Makes sure to switch display style based on toggle
    if (panel.style.display === "block") {
      panel.style.display = "none";
      sign.innerText = "+";
    } else {
      panel.style.display = "block";
      sign.innerText = "-";
    }
  });
});
