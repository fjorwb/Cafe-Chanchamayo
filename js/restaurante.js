$(document).ready(function () {
  // ---- Scroll Elementos Menu

  var acerca = $("#acerca").offset().top,
    menu = $("#platillos").offset().top,
    galeria = $("#galeria").offset().top,
    ubicacion = $("#ubicacion").offset().top;

  // Boton Acerca de
  $("#btn-acerca").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: acerca - 100,
      },
      500
    );
  });

  $("#btn-menu").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: menu - 10,
    });
  });

  $("#btn-galeria").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: galeria - 10,
    });
  });

  $("#btn-ubicacion").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: ubicacion - 10,
    });
  });

  // ---- Efecto Menu

  $(".menu a").each(function (index) {
    $(this).css({
      top: "-200px",
    });

    $(this).animate(
      {
        top: "-20px",
      },
      2000 + index * 500
    );
  });

  // ---- Efecto Header

  if ($(window).width > "800px") {
    $("header .textos").css({
      opacity: 0,
      "margin-top": "200px",
    });

    $("header .textos").animate(
      {
        opacity: 1,
        "margin-top": "80px",
      },
      3000
    );
  }
});
