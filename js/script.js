$(document).ready(function () {

    // Apparition de la bannière
    $(".banniere-sortie").delay(1000).slideDown(600);

    // Fermeture de la bannière
    $(".fermer-banniere").on("click", function () {
        $(".banniere-sortie").fadeOut(400);
    });

    // Menu burger 
    $("#boutonBurger").on("click", function () {
        $("header nav").slideToggle(400);
    });

    // Mode sombre / mode clair
    $("#boutonTheme").on("click", function () {
        $("body").toggleClass("mode-sombre");

        const modeSombre = $("body").hasClass("mode-sombre");

        $(this).attr("aria-pressed", String(modeSombre));
        $(this).text(modeSombre ? "☀️" : "🌙");
    });

});