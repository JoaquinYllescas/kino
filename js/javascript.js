$("#buttonMenu").on("click", function(){
    $(this).toggleClass(" openMenu ");
    $("header").toggleClass(" headerOpen ");
    $("section.currentSection").toggleClass(" moveSection ");
});