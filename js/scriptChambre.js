diaporama("diaporamaChambreClassique");
diaporama("diaporamaChambreConfort");
diaporama("diaporamaChambreDeLuxe");
diaporama("diaporamaChambreSuite");


appuieBouton("chambreClassique");
appuieBouton("chambreConfort");
appuieBouton("chambreDeLuxe");
appuieBouton("chambreSuite");

var width = $(window).width();
//var style = 
//    
//    boutonPlus.style.height:400px;
//    photo.style.width:100%;
//.caracteristique.style.display=flex;
//.texte>p.stule.display = block
//**bigBoutonResrvation.style.display = block;
function apparaitreChambre(id){
    if (width>800){
        document.querySelector("#" + id + ">.boutonPlus").style.height = "660px";
        document.querySelector("#" + id + ">.boutonPlus").innerHTML = '<i class="fas fa-minus"></i>';
        document.querySelector("#" + id + ">.diaporama>.photo").style.width = "100%";
        document.querySelector("#" + id + ">.diaporama>.photo").style.height = "460px";
        document.querySelector("#" + id + ">.diaporama>.caracteristiques").style.display = "flex";
        document.querySelector("#" + id + ">.diaporama>.texte>p").style.display = "block";
        document.querySelector("#" + id + ">.bigBoutonReservation").style.display = "block";
    }
    else if (width<800){
        document.querySelector("#" + id + ">.boutonPlus").style.height = "660px";
        document.querySelector("#" + id + ">.boutonPlus").innerHTML = '<i class="fas fa-minus"></i>';
//        document.querySelector("#" + id + ">.diaporama>.photo").style.width = "100%";
//        document.querySelector("#" + id + ">.diaporama>.photo").style.height = "460px";
        document.querySelector("#" + id + ">.diaporama>.caracteristiques").style.display = "flex";
        document.querySelector("#" + id + ">.diaporama>.texte>p").style.display = "block";
        document.querySelector("#" + id + ">.bigBoutonReservation").style.display = "block";
    }
}

function dispparaitreChambre(id){
    if (width>800){
        document.querySelector("#" + id + ">.diaporama>.photo").style.width = "30%";
        document.querySelector("#" + id + ">.boutonPlus").style.height = "200px";
        document.querySelector("#" + id + ">.boutonPlus").innerHTML = '<i class="fas fa-plus"></i>';
        document.querySelector("#" + id + ">.bigBoutonReservation").style.display = "none";
        document.querySelector("#" + id + ">.diaporama>.photo").style.height = "auto";
        document.querySelector("#" + id + ">.diaporama>.texte>p").style.display = "none";
        document.querySelector("#" + id + ">.diaporama>.caracteristiques").style.display = "none";
    }
    else if (width<800){
//        document.querySelector("#" + id + ">.diaporama>.photo").style.width = "30%";
        document.querySelector("#" + id + ">.boutonPlus").style.height = "500px";
        document.querySelector("#" + id + ">.boutonPlus").innerHTML = '<i class="fas fa-plus"></i>';
        document.querySelector("#" + id + ">.bigBoutonReservation").style.display = "none";

        document.querySelector("#" + id + ">.diaporama>.texte>p").style.display = "none";
        document.querySelector("#" + id + ">.diaporama>.caracteristiques").style.display = "none";
    }
    
    
    
    
    
}

function appuieBouton(id){
    var boutonPlus = document.querySelector("#" + id + ">.boutonPlus");
    var etat = 'petit';
    boutonPlus.addEventListener("click",function(){
        if (etat == 'petit'){
            apparaitreChambre(id); 
            console.log("bouton.style.height est bien egale a 200px");
            etat = 'grand';
        }
        else{
            dispparaitreChambre(id);
            console.log("bouton.style.height est bien egale a 400px");
            etat = 'petit';
        }

                                                                       });
};










