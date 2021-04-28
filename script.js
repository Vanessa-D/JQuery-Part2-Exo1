// Modification du DOM --> Cacher des éléments

// $ --> JQuery() permet de transformer l'élément en objet JQuery

// La méthode hide() transforme le style ciblé par la classe en display none

$(document).ready(function(){ // Chargement du HTML PUIS exécution du script
    $('.to_hide').hide();
});



// En JS vanilla, on aurait :
// document.querySelector(".to_hide").style.display="none";