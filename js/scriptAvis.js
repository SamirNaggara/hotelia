//
//
//data-choix="hotel"
// data-choix="chambre"
//data-choix="restaurant"
//data-choix="spa"
//
//data-spa="true" data-chambre="true" data-hotel="true" data-restaurant="true"

console.log($('[data-spa]')[0]);



function choixCommentaire(id) {
    if (id == "hotel") {
        $('[data-hotel]').show();
        $('[data-spa]').hide();
        $('[data-chambre]').hide();
        $('[data-restaurant]').hide();
    } else if (id == "chambre") {
        $('[data-hotel]').hide();
        $('[data-spa]').hide();
        $('[data-chambre]').show();
        $('[data-restaurant]').hide();
    } else if (id == "spa") {
        $('[data-hotel]').hide();
        $('[data-spa]').show();
        $('[data-chambre]').hide();
        $('[data-restaurant]').hide();
    } else if (id == "restaurant") {
        $('[data-hotel]').hide();
        $('[data-spa]').hide();
        $('[data-chambre]').hide();
        $('[data-restaurant]').show();
    } else if (id == "tout") {
        $('[data-hotel]').show();
        $('[data-spa]').show();
        $('[data-chambre]').show();
        $('[data-restaurant]').show();
    } else {
        console.log("il y a une erreur dans ChoixCommentaire");
    }


};

function griseMoi(id) {
    if (id == "hotel") {
        $('#hotel').addClass("selectionee");
        $('#tout').removeClass("selectionee");
        $('#chambre').removeClass("selectionee");
        $('#restaurant').removeClass("selectionee");
        $('#spa').removeClass("selectionee");
    } else if (id == "chambre") {
        $('#hotel').removeClass("selectionee");
        $('#tout').removeClass("selectionee");
        $('#chambre').addClass("selectionee");
        $('#restaurant').removeClass("selectionee");
        $('#spa').removeClass("selectionee");
    } else if (id == "spa") {
        $('#hotel').removeClass("selectionee");
        $('#tout').removeClass("selectionee");
        $('#chambre').removeClass("selectionee");
        $('#restaurant').removeClass("selectionee");
        $('#spa').addClass("selectionee");
    } else if (id == "restaurant") {
        $('#hotel').removeClass("selectionee");
        $('#tout').removeClass("selectionee");
        $('#chambre').removeClass("selectionee");
        $('#restaurant').addClass("selectionee");
        $('#spa').removeClass("selectionee");
    } else if (id == "tout") {
        $('#hotel').removeClass("selectionee");
        $('#tout').addClass("selectionee");
        $('#chambre').removeClass("selectionee");
        $('#restaurant').removeClass("selectionee");
        $('#spa').removeClass("selectionee");
    } else {
        console.log("il y a une erreur dans grisMoi");
    }
}



var listeBoutton = ["tout","hotel","chambre","restaurant","spa"];

listeBoutton.forEach(function(monBouton){
    console.log("Un bouton a été appuyé!!" + monBouton);
    $("#" + monBouton).click(function() {
        console.log("Un bouton a été appuyé!!" + monBouton);
        choixCommentaire(monBouton);
    griseMoi(monBouton)
                     });    

});


//------------------Mettre les etoiles en jaune au hover et au click--------------------
var etoile = 0;
function clickEtoile1(){
    $('.etoile1').removeClass('far');
    $('.etoile1').addClass('fas');
    $('.etoile2').removeClass('fas');
    $('.etoile2').addClass('far'); 
    $('.etoile3').removeClass('fas');
    $('.etoile3').addClass('far'); 
    $('.etoile4').removeClass('fas');
    $('.etoile4').addClass('far'); 
    $('.etoile5').removeClass('fas');
    $('.etoile5').addClass('far'); 
    
    etoile = 1;
}   

function clickEtoile2(){
    clickEtoile1();
    $('.etoile2').removeClass('far');
    $('.etoile2').addClass('fas'); 
    $('.etoile3').removeClass('fas');
    $('.etoile3').addClass('far'); 
    $('.etoile4').removeClass('fas');
    $('.etoile4').addClass('far'); 
    $('.etoile5').removeClass('fas');
    $('.etoile5').addClass('far'); 
    
    etoile = 2;
}

function clickEtoile3(){
    clickEtoile2();
    $('.etoile3').removeClass('far');
    $('.etoile3').addClass('fas');
    $('.etoile4').removeClass('fas');
    $('.etoile4').addClass('far'); 
    $('.etoile5').removeClass('fas');
    $('.etoile5').addClass('far');
    
    etoile = 3;
}

function clickEtoile4(){
    clickEtoile3();
    $('.etoile4').removeClass('far');
    $('.etoile4').addClass('fas'); 
    $('.etoile5').removeClass('fas');
    $('.etoile5').addClass('far');
    
    etoile = 4;
}


function clickEtoile5(){
    clickEtoile4();
    $('.etoile5').removeClass('far');
    $('.etoile5').addClass('fas');
    
    etoile = 5;
}

function clickEtoile(numeroEtoile){
    if (numeroEtoile == 1){
        clickEtoile1();
    }
    else if (numeroEtoile == 2){
        clickEtoile2();
    }
    else if (numeroEtoile == 3){
        clickEtoile3();
    }
    else if (numeroEtoile == 4){
        clickEtoile4();
    }
    else if (numeroEtoile == 5){
        clickEtoile5();
    }
    else{
        console.log("Il y a un probleme dans clickEtoile");
    }
}
    
var etoileAvant = 0;
var bloquer = false;

clickEtoile4();

$('.etoile1').click(function(){
    clickEtoile1();
    console.log(etoile);
    bloquer = true;
});


$('.etoile2').click(function(){
    console.log(etoile);
    clickEtoile2();
    bloquer = true;

});

$('.etoile3').click(function(){
    clickEtoile3();
    bloquer = true;
});

$('.etoile4').click(function(){
    clickEtoile4();
    bloquer = true;
});

$('.etoile5').click(function(){
    clickEtoile5();
    bloquer = true;
});



$('.etoile1').hover(function(){
    etoileAvant = etoile;
    clickEtoile1();    
}
,function(){
    if (!bloquer){
    clickEtoile(etoileAvant);
    
    };
    bloquer = false;
});

$('.etoile2').hover(function(){
    etoileAvant = etoile;
    clickEtoile2();    
}
,function(){
    if (!bloquer){
    clickEtoile(etoileAvant);
    
    };
    bloquer = false;
});

$('.etoile3').hover(function(){
    etoileAvant = etoile;
    clickEtoile3();    
}
,function(){
    if (!bloquer){
    clickEtoile(etoileAvant);
    
    };
    bloquer = false;
});

$('.etoile4').hover(function(){
    etoileAvant = etoile;
    clickEtoile4();    
}
,function(){
    if (!bloquer){
    clickEtoile(etoileAvant);
    
    };
    bloquer = false;
});

$('.etoile5').hover(function(){
    etoileAvant = etoile;
    clickEtoile5();    
}
,function(){
    if (!bloquer){
    clickEtoile(etoileAvant);
    
    };
    bloquer = false;
    
});




    
