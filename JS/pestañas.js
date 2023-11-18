(function () {
  var body = document.body;

  var movimiento = document.getElementsByClassName('pestañas')[0];

  movimiento.addEventListener('click', function toggleClasses() {
    [body, movimiento].forEach(function (el) {
      el.classList.toggle('pestañaEntrar');
    });
  });


var volverEntrar = document.getElementsByClassName('volver-entrar')[0];

  volverEntrar.addEventListener('click', function toggleClasses() {
    [body, volverEntrar].forEach(function (el) {
      el.classList.toggle('pestañaRecuperar');
    });
  });

})();


