var altoPagina=$(window).height(),itemsMenu=$("nav ul li "),posicionMain=0;$("#buttonMenu").on("click",function(){$(this).toggleClass(" openMenu "),$("header").toggleClass(" headerOpen "),$("section.currentSection").toggleClass(" moveSection ")}),itemsMenu.on("click",function(){posicionMain=-100*($(this).index()+1),$("main").animate({top:posicionMain+"%"},600,function(){$("header").toggleClass(" headerOpen ")})});