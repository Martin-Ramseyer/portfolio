document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const darkModeImage = darkModeToggle.querySelector("img");
  const logo_contacto = document.getElementById("logo_contacto");

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
      darkModeImage.src = "src/images/modo-on.png";
      logo_contacto.src = "src/images/logo-dark.png";
    } else {
      darkModeImage.src = "src/images/modo-off.png";
      logo_contacto.src = "src/images/logo.png";
    }


    var menuToggle = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      menuToggle.classList.add('collapsed');
      navbarCollapse.classList.remove('show');
    }
  });

  var menuItems = document.querySelectorAll('.navbar-nav .nav-link');
  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {

      var menuToggle = document.querySelector('.navbar-toggler');
      var navbarCollapse = document.querySelector('.navbar-collapse');
      menuToggle.classList.add('collapsed');
      navbarCollapse.classList.remove('show');
    });
  });
});
