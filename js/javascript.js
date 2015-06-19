var altoPagina = $(window).height();
var itemsMenu = $("nav ul li ");
var posicionMain = 0;

//Despliego menu
$("#hamburger").on("click", function(){
    $(this).toggleClass(" openMenu ");
    $("header").toggleClass(" headerOpen ");
    $("section.currentSection").toggleClass(" moveSection ");

    if($(this).hasClass("is-open")){
        $(this).addClass(" is-closed ").removeClass("is-open");
    }else{
        $(this).addClass(" is-open ").removeClass(" is-closed ")
    }
});
//FIN Despliego menu

//Scroll Menu
itemsMenu.on("click", function(){
    posicionMain = ($(this).index()+1) * -100 ;
    //console.log(posicionMain);
    $("main").animate({"top" : posicionMain+"%"}, 600, function(){
        $("header").toggleClass(" headerOpen ");
    });

    //Para cambiar tb el boton de menu
    if($("#hamburger").hasClass("is-open")){
        $("#hamburger").addClass(" is-closed ").removeClass("is-open");
    }else{
        $("#hamburger").addClass(" is-open ").removeClass(" is-closed ")
    }
});
//FIN Scroll Menu
