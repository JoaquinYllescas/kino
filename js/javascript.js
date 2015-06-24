var altoPagina = $(window).height();
var posicionMain = 0;

var tecnologiaUsada, porcentajeTecnologia;

//Selectores
var itemsMenu = $("nav ul li ");
var blackLayer = $(".blackLayer");
var tecnologias = $(".perfil .content ul li");
var textBlackLayerH3 = $(".infoBlackLayer h3");
var textBlackLayerP = $(".infoBlackLayer p");
var svgBtHamburguer = $(".burger-bun-bot, .burger-bun-top, .burger-filling");

//FIN Selectores



//Despliego menu
$("#hamburger").on("click", function(){
    $(this).toggleClass(" openMenu ");
    $("header").toggleClass(" headerOpen ");
    //$("section.currentSection").toggleClass(" moveSection ");

    if($(this).hasClass("is-open")){
        $(this).addClass(" is-closed ").removeClass("is-open");
    }else{
        $(this).addClass(" is-open ").removeClass(" is-closed ")
    }
});
//FIN Despliego menu

//Animacion Scroll Menu
itemsMenu.on("click", function(){
    posicionMain = ($(this).index()+1) * -100 ;
    $("section").removeClass(" currentSection ");
    var indexMenuItem =  $(this).index();
    $("section").eq(indexMenuItem+1).addClass(" currentSection ");
    if(indexMenuItem == 0){
        console.log("SI");
        svgBtHamburguer.css("background-color", "#24aa92");
    }else{
        svgBtHamburguer.css("background-color", "#fff");
    }

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
//FIN Animacion Scroll Menu


//HOVER Iconos SOBRE MI para encima de foto
tecnologias.mouseenter(function(){
    tecnologiaUsada = $(this).attr("data-tecnology");
    porcentajeTecnologia = $(this).attr("data-percentage");
    //console.log(tecnologiaUsada+" "+porcentajeTecnologia);
    textBlackLayerH3.text(tecnologiaUsada);
    textBlackLayerP.text(porcentajeTecnologia);

    blackLayer.stop().animate({"opacity" : 1}, 200, function(){
        textBlackLayerH3.css("marginLeft","0px");
        textBlackLayerP.css("marginLeft","0px");
    });
}).mouseleave(function(){
    textBlackLayerH3.css("marginLeft","-300px");
    textBlackLayerP.css("marginLeft","300px");
    blackLayer.stop().animate({"opacity" : 0}, 500);
});
//FIN HOVER Iconos SOBRE MI para encima de foto



//Animacion para iconos SOBRE MI que tienen mas de una opcion ej RWD
var arrayIconsRWD = [
    "-160px",
    "-200px",
    "-240px"
]
var arrayIconsDesign = [
    "-360px",
    "-400px",
    "-440px"
]
var currentArrayRWD = 0;
var currentArrayDesign = 0;


setInterval(function(){
    console.log("Intervalo");
    $(".slideIcons i").animate({"marginLeft" : "-40px"}, 300, function(){
        $(".slideIcons i").animate({"marginLeft" : "100px"}, 0, function(){
            $(".slideIcons i").css("backgroundPosition", arrayIconsRWD[ currentArrayRWD ] + " 0px" );

            $(".slideIcons i").animate({"marginLeft" : "30px"}, 300);
            if(currentArrayRWD == 2){
                currentArrayRWD = 0;
            }else{
                currentArrayRWD = currentArrayRWD + 1;
            }
        });

    });


    $(".slideIcons1 i").animate({"marginLeft" : "-40px"}, 300, function(){
        $(".slideIcons1 i").animate({"marginLeft" : "100px"}, 0, function(){
            $(".slideIcons1 i").css("backgroundPosition", arrayIconsDesign[ currentArrayDesign ] + " 0px" );

            $(".slideIcons1 i").animate({"marginLeft" : "30px"}, 300);
            if(currentArrayDesign == 2){
                currentArrayDesign = 0;
            }else{
                currentArrayDesign = currentArrayDesign + 1;
            }
        });

    });

}, 2000);

//FIN Animacion para iconos SOBRE MI que tienen mas de una opcion ej RWD

$("#trabajo").on("click", function(){
    $(".myWork").css({"width" : "100%", "height" : "100%"});
    $(".myWork").css("background-color" , "#171717").removeClass("workUnActive").addClass(" workActive ");

});

$(".closeMyWork").on("click", function(){
    $(".myWork").css({"width" : "0%", "height" : "0%"});
    $(".myWork").css("background-color" , "#24aa92").removeClass("workActive").addClass(" workUnActive ");
});