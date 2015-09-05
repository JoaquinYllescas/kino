var altoPagina = $(window).height();
var anchoPagina = $(window).width();
var posicionMain = 0;




var tecnologiaUsada, porcentajeTecnologia, trabajoSeleccionado, maxMarginLeftGaleria, indexMenuItem;
var posGaleriaTrabajo = 0;
var trabajoAbierto = "0";


//Var para iconos rotativos SOBRE MI: ancho LI, entre 2 - 20 me da el punto donde estaria centrado el icono
var margenParaCentrado = (($(".knowledge .content ul li").width())/2) - 20;
console.log(margenParaCentrado);

//Var para iconos galeria


//Selectores
var itemsMenu = $("nav ul li, header h1 a");
var itemsMenuDesplegable = $("nav ul li");

var tecnologias = $(".perfil .content ul li");


var svgBtHamburguer = $(".burger-bun-bot, .burger-bun-top, .burger-filling");
var avanzar = $(".avanzar");
var retroceder = $(".retroceder");

var listaTrabajos = $(".trabajos ul li"),
    nTrabajos = $(".trabajos ul li").length,
    anchoGaleria = nTrabajos * anchoPagina,
    trabajosContainer = $(".trabajos ul"),
    posXgaleria = 0;


    //Selectores secciones
    var sobreMi = $(".sobreMi"),
        trabajos = $(".trabajos"),
        contacto = $(".contacto");

    var seccionHome = 0;
    var seccionSobreMi, seccionTrabajos, seccionContacto;
    //Alturas secciones
    $(window).on("load", function(){
    
            seccionSobreMi = altoPagina;

            seccionTrabajos = altoPagina+$(".sobreMi").height();

            seccionContacto = seccionTrabajos+$(".trabajos").height();

        });
    
//FIN Selectores

$(".home").css("height", altoPagina);

//Despliego menu
$("#btBurguer").on("click", function(){
    if($("#hamburger").hasClass("openMenu")){
        $("#hamburger").removeClass("openMenu");
    }else{
        $("#hamburger").addClass(" openMenu ");
    }

    if($("header").hasClass("headerOpen")){
        $("header").removeClass("headerOpen");
    }else{
        $("header").addClass(" headerOpen ");
    }


    if($("#hamburger").hasClass("is-open")){
        $("#hamburger").addClass(" is-closed ").removeClass("is-open");
    }else{
        $("#hamburger").addClass(" is-open ").removeClass(" is-closed ")
    }
});

    //Despliegue menu con SWIPE
        var miMenu = document.getElementById('hamburger');
        // create a simple instance
        // by default, it only adds horizontal recognizers
        var mcMenu = new Hammer(hamburger);

        // listen to events...
        mcMenu.on("swipeleft", function(ev) {
            $("header").removeClass("headerOpen");
            $("#hamburger").removeClass(" is-open openMenu is-closed ").addClass(" is-closed ");
        });

        mcMenu.on("swiperight", function(ev) {
            //console.log(ev.type +" DERECHA!!");
            $("header").removeClass("headerOpen").addClass("headerOpen");
            $("#hamburger").removeClass("is-open openMenu is-closed").addClass(" is-open openMenu ");
        });

    var animaScroll, seccionTrabajos, seccionContacto;
//FIN Despliego menu

//Animacion Scroll Menu
itemsMenu.on("click", function(){

    if($(this).find("a").attr("id") == "sobreMi"){
        animaScroll(seccionSobreMi, 1);
        
    }else if($(this).find("a").attr("id") == "trabajos"){
        animaScroll(seccionTrabajos, 2);
        
    }else if($(this).find("a").attr("id") == "contacto"){
        animaScroll(seccionContacto, 3);
        
    }else if($(this).attr("id") == "home"){
        animaScroll(0, 0);
        
    }
});

function animaScroll(aPosicion, currentSection){

    $("html, body").animate({scrollTop:aPosicion}, 1000, "easeInOutQuart");
    console.log(-aPosicion);
        $("header").removeClass(" headerOpen ");

    //Para cambiar tb el boton de menu
    if($("#hamburger").hasClass("is-open")){
        $("#hamburger").addClass(" is-closed ").removeClass("is-open");
    }else{
        $("#hamburger").addClass(" is-open ").removeClass(" is-closed ")
    }

    //Añado currentSection al menu y a las secciones
    /*if(currentSection == 0){
        
        itemsMenu.removeClass("currentSection");
        $("section").removeClass("currentSection");

    }else if(currentSection == 1){
        
        itemsMenu.removeClass("currentSection");
        $("section").removeClass("currentSection");

        itemsMenuDesplegable.eq(0).addClass(" currentSection ");
        $("section").eq(1).addClass(" currentSection ");

    }else if(currentSection == 2){
        
        itemsMenu.removeClass("currentSection");
        $("section").removeClass("currentSection");

        itemsMenuDesplegable.eq(1).addClass(" currentSection ");
        $("section").eq(2).addClass(" currentSection ");

    }else if(currentSection == 3){
        itemsMenu.removeClass("currentSection");
        $("section").removeClass("currentSection");

        itemsMenuDesplegable.eq(2).addClass(" currentSection ");
        $("section").eq(3).addClass(" currentSection ");
    }
    */

}
//FIN Animacion Scroll Menu








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
    $(".slideIcons i").animate({"marginLeft" : "-50%"}, 300, function(){
        $(".slideIcons i").animate({"marginLeft" : "100%"}, 0, function(){
            $(".slideIcons i").css("backgroundPosition", arrayIconsRWD[ currentArrayRWD ] + " 0px" );

            $(".slideIcons i").animate({"marginLeft" : margenParaCentrado+"px"}, 300);
            if(currentArrayRWD == 2){
                currentArrayRWD = 0;
            }else{
                currentArrayRWD = currentArrayRWD + 1;
            }
        });

    });


    $(".slideIcons1 i").animate({"marginLeft" : "-50%"}, 300, function(){
        $(".slideIcons1 i").animate({"marginLeft" : "100%"}, 0, function(){
            $(".slideIcons1 i").css("backgroundPosition", arrayIconsDesign[ currentArrayDesign ] + " 0px" );

            $(".slideIcons1 i").animate({"marginLeft" : margenParaCentrado+"px"}, 300);
            if(currentArrayDesign == 2){
                currentArrayDesign = 0;
            }else{
                currentArrayDesign = currentArrayDesign + 1;
            }
        });

    });

}, 2000);

//FIN Animacion para iconos SOBRE MI que tienen mas de una opcion ej RWD




//Trabajos
    listaTrabajos.css("width", anchoPagina);
    trabajosContainer.css("width", anchoGaleria);

    //HAMMER JS: SWIPE para galeria
        var miGaleria = document.getElementById('galeriaTrabajos');
        // create a simple instance
        // by default, it only adds horizontal recognizers
        var mc = new Hammer(galeriaTrabajos);

        // listen to events...
        mc.on("swipeleft", function(ev) {
            console.log(ev.type +" IZQUIERDA!!");
            avanzoIzquierda();
        });

        mc.on("swiperight", function(ev) {
            console.log(ev.type +" DERECHA!!");
            avanzoDerecha();
        });

        function avanzoIzquierda(){
            if(posXgaleria <= -(anchoPagina*(nTrabajos-1))){
            }else{
                posXgaleria = posXgaleria - anchoPagina;
            }
            trabajosContainer.css("marginLeft", posXgaleria);
        }
        function avanzoDerecha(){
            if(posXgaleria >= 0){
                posXgaleria = 0;
            }else{
                posXgaleria = posXgaleria + anchoPagina;    
            }
            trabajosContainer.css("marginLeft", posXgaleria);
        }

        $("#avanzoIzquierda").on("click", avanzoIzquierda);
        $("#avanzoDerecha").on("click", avanzoDerecha);


        
    //SOLO AL CARGAR: Media Query para cambiar las imagenes a alta calidad y demas inyecciones de contenido
    var str1 = "img/trabajos/";
    var str2 = "img/trabajos/calidad/";
    var dataName;
    if(anchoPagina > 768){
        
        $("#galeriaTrabajos li img").each(function(){
            dataName = $(this).attr("data-name");
            $(this).attr("src" , str2+dataName);
        });
    }

//FIN Trabajos

var windowScrollTop;

$(window).on("scroll", function(){
    windowScrollTop = $(window).scrollTop();
    //Si hago SCROLL voy cambiando el current section, así podre cambiar de color bt hamburguesa
    compruebCurrent(100);
});

function compruebCurrent(donde){

    console.log(donde);

    if((windowScrollTop >= seccionSobreMi) && (windowScrollTop < seccionTrabajos)){
        
        itemsMenu.removeClass("currentSection");
        $("section").removeClass("currentSection");

        itemsMenuDesplegable.eq(0).addClass(" currentSection ");
        $("section").eq(1).addClass(" currentSection ");

    }else if((windowScrollTop >= seccionTrabajos) && (windowScrollTop < seccionContacto)){
       
        itemsMenu.removeClass("currentSection");
        $("section").removeClass("currentSection");

        itemsMenuDesplegable.eq(1).addClass(" currentSection ");
        $("section").eq(2).addClass(" currentSection ");
    }else if(windowScrollTop >= seccionContacto){
       
        itemsMenu.removeClass("currentSection");
        $("section").removeClass("currentSection");

        itemsMenuDesplegable.eq(2).addClass(" currentSection ");
        $("section").eq(3).addClass(" currentSection ");
    }else{

        itemsMenu.removeClass("currentSection");
        $("section").removeClass("currentSection");        
        $("section").eq(0).addClass(" currentSection ");
    }
}


//El ONRESIZE detecta la banda superior del navegador como cambio de tamaño
//el orientationchange de JS no
$(window).on("resize", function(){
    
    altoPagina = $(window).height();
    anchoPagina = $(window).width();
    anchoGaleria = nTrabajos * anchoPagina;

    $(".home").css("height", altoPagina);

    //Galeria trabajos
    trabajosContainer.css("marginLeft", "0px");
    listaTrabajos.css("width", anchoPagina);
    trabajosContainer.css("width", anchoGaleria);
    posXgaleria = 0;

    //Recalculo distancias para el scroll del menu
    seccionSobreMi = altoPagina;
    seccionTrabajos = altoPagina+$(".sobreMi").height();
    seccionContacto = seccionTrabajos+$(".trabajos").height();


    //Calculo para centrar iconos ke se mueven
    margenParaCentrado = (($(".knowledge .content ul li").width())/2) - 20;


    //Media Query para cambiar las imagenes a alta calidad y demas inyecciones de contenido
    if(anchoPagina > 768){
        
        $("#galeriaTrabajos li img").each(function(){
            dataName = $(this).attr("data-name");
            $(this).attr("src" , str2+dataName);
        });

    }else{

        $("#galeriaTrabajos li img").each(function(){
            dataName = $(this).attr("data-name-mobile");
            $(this).attr("src" , str1+dataName);
        });
    }

   
});


//Orientacion de movil y tableta para recolocar la galeria de trabajos
window.addEventListener('orientationchange', doOnOrientationChange);
function doOnOrientationChange(){
    //A HOME le paso el Ancho de la página, aunque en realidad es el alto,
    //pero como lo calcula antes de que se gire el dispositivo tengo ke poner el ancho    
    $(".home").css("height", anchoPagina-31);

    posXgaleria = 0;
    trabajosContainer.css("marginLeft", posXgaleria);
}

    







/*
Tareas:

- Revisar on resize de galeria de trabajos. Cuando avanzo y cambio tamaño no se adapta.
    Comprobar que al cambiar de portrait a landscape se hace correctamente.
- Probar imágenes de trabajo con @pixelratio, ahora se ven borrosas en 768px por que este mac es retina
    en PC se deberían ver bien. Debería poner otra imagen mas grande y reducida al 50% para ke la definicion
    fuese buena en rentina display.

*/








