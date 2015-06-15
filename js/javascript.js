var altoPagina = $(window).height();
var itemsMenu = $("nav ul li ");
var posicionMain = 0;

//Despliego menu
$("#buttonMenu").on("click", function(){
    $(this).toggleClass(" openMenu ");
    $("header").toggleClass(" headerOpen ");
    $("section.currentSection").toggleClass(" moveSection ");
});
//FIN Despliego menu

//Scroll Menu
itemsMenu.on("click", function(){
    posicionMain = ($(this).index()+1) * -100 ;
    //console.log(posicionMain);
    $("main").animate({"top" : posicionMain+"%"}, 600, function(){
        $("header").toggleClass(" headerOpen ");
    });
});
//FIN Scroll Menu