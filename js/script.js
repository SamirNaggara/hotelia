var DOSSIER = "file:///C:/Users/stagiaire/Desktop/hotelia/www/premiere_page/images/";
//EMPLACEMENT DU DOSSIER des images






//-------------------------FONCTION QUI CHANGE LES IMAGES DU DIPORAMA EN FONCTION DE L4id-----------------


function pressBoutonDroite(image,idDiaporama){
    var debutAdresse = "images/" + idDiaporama + "/";
        console.log("pressBoutonDroite se declenche");

    
    if (image.getAttribute("src") == debutAdresse + "1.jpg"){
        image.src = debutAdresse + "2.jpg";
    }
    else if (image.getAttribute("src") == debutAdresse + "2.jpg"){
        image.src = debutAdresse + "3.jpg";
    }
    else if (image.getAttribute("src") == debutAdresse + "3.jpg"){
        image.src = debutAdresse + "1.jpg";
    }
    else{
        console.log("L'adresse du SRC de l'image ne correspond pas a une de celles attendus");
    }
}

function pressBoutonGauche(image,idDiaporama){
    var debutAdresse = "images/" + idDiaporama + "/";
//    console.log("pressBoutonGauche se declenche");

    if (image.getAttribute('src') == debutAdresse + "1.jpg"){
        image.src = debutAdresse + "3.jpg";
    }
    else if (image.getAttribute('src') == debutAdresse + "3.jpg"){
        image.src = debutAdresse + "2.jpg";
    }
    else if (image.getAttribute('src') == debutAdresse + "2.jpg"){
        image.src = debutAdresse + "1.jpg";
    }
    else{
        console.log("L'adresse du SRC de l'image ne correspond pas a une de celles attendus");
    }
}



function diaporama(idDiaporama){
    
    var boutonGauche = document.querySelector("#" + idDiaporama + ">.photo>.boutonGauche");
    var boutonDroite = document.querySelector("#" + idDiaporama + ">.photo>.boutonDroite");
    
    var image = document.querySelector("#" + idDiaporama + ">.photo>img");
    
    var monCompteur = setInterval(function(){pressBoutonGauche(image,idDiaporama)},3000);
    
    try{ boutonGauche.addEventListener("click",function(){
            pressBoutonGauche(image,idDiaporama);
            clearInterval(monCompteur);
                                      });
        }
    catch(error){
    }
   
    try{
        boutonDroite.addEventListener("click",function(){
        pressBoutonDroite(image,idDiaporama);
        clearInterval(monCompteur);
                                  });
    
    
    }
    catch(error){
    }
}


//idDiaporama = "diaporamaBienvenue";







//------------------------PAGE RESERVATION----------------------------------------

//Cette fonction permet de faire apparaitre la fonction reservation + le fond noir

$(".boutonReservation>a").click(function(){
    document.querySelector(".fondSombre").style.display = "block";    document.querySelector(".reservationPage").style.display = "block";
    
    });

$(".fondSombre").click(function(){
    document.querySelector(".fondSombre").style.display = "none";    document.querySelector(".reservationPage").style.display = "none";
});

$(".boutonMenuReservation").click(function(){
    document.querySelector(".fondSombre").style.display = "block";    document.querySelector(".reservationPage").style.display = "block";
});


    
    


//declencherReservation();


//--------------------DRAPEAUX------------------------

var drapeauFrancais = $(".drapeauFrancais");
var drapeauAnglais = $(".drapeauAnglais");
//$(".drapeauFrancais").hide();
//$("body").hide();
//drapeauFrancais.click(function(){
//    console.log("Je passe par la fonction");
//});

drapeauFrancais.on("click",function(){
    drapeauFrancais[0].style.left = "-240px";
    drapeauAnglais[0].style.left = "-40px";
});

drapeauAnglais.on("click",function(){
    drapeauAnglais[0].style.left = "-240px";
    drapeauFrancais[0].style.left = "-40px";
});


//------NAVIGATION:MENU DEROULANT POUR LES CHAMBRES-------

var ssMenu = document.getElementById('sous_menu');
var room = document.getElementById('room');

ssMenu.addEventListener('click', function(){
  console.log(room.style.display);
  if (room.style.display == '') {
    room.style.display ='block';

  } else if (room.style.display == 'block') {
    room.style.display = '';

  }

});


//------NAVIGATION:MENU DEROULANT POUR L'HOTEL-------



var ssMenuu = document.getElementById('sousMenuHotel');
var roomm = document.getElementById('Hotel');

ssMenuu.addEventListener('click', function(){
  console.log(roomm.style.display);
  if (roomm.style.display == '') {
    roomm.style.display ='block';

  } else if (roomm.style.display == 'block') {
    roomm.style.display = '';

  }

});

//-----------------------HEADER:CHAMPS RECHERCHE--------------------------



var iconeRecherche = document.querySelector(".boutonRecherche>i");
var inputRecherche = document.querySelector(".boutonRecherche>input");
var hotelia = document.querySelector(".topHeaderMiddle");

iconeRecherche.addEventListener("click",function(){
    
    if (!inputRecherche.style.display){
        inputRecherche.style.display = "inline";
        inputRecherche.style.width = "200px";
        inputRecherche.style.borderRadius = "8px";
        if (window.innerWidth <640){
            hotelia.style.display = "none";
        }
    }
    else{
        inputRecherche.style.display = "";
        inputRecherche.style.width = "0";
        inputRecherche.style.borderRadius = "0";
        if (window.innerWidth <640){
            setTimeout(function(){ hotelia.style.display = "flex"; }, 1500);
        }
    }
    

});

(window.innerWidth)




