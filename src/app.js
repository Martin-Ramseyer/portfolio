var menuItems = document.querySelectorAll('.navbar-nav .nav-link');
menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Cierra el menú automáticamente al hacer clic en un enlace
    var menuToggle = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');
    menuToggle.classList.add('collapsed');
    navbarCollapse.classList.remove('show');
  });
});