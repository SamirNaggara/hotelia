//-------------------------POUR LA CARTE -------------------------

function initMap() {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);

        var mapDiv = document.getElementById('maCarte');
        var maMap = new google.maps.Map(mapDiv, {
            center: { lat: 48.865, lng: 2.3020500000000084 },
            zoom: 10
        });
        var myLatLng = { lat: 48.865, lng: 2.3020500000000084 };
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: maMap,
            title: 'Hello World'
        });
        marker.setMap(maMap);
    });
};


//-------------------CHOIX DU TRAJET----------------------------

var voiture = document.getElementById("voiture");
var metro = document.getElementById("metro");
var train = document.getElementById("train");
var nuit = document.getElementById("nuit");

var liste = [voiture,metro,train,nuit];

var textVoiture = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ut quaerat suscipit nesciunt numquam eius commodi dicta, necessitatibus, ducimus sit."; 
var textMetro = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tempore vel est quod qui quis saepe? Sit libero voluptatum illum?";
var textTrain = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea praesentium perferendis incidunt, omnis quia quo laboriosam sapiente laborum suscipit possimus!";
var textNuit = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo autem quae animi tempora consectetur dolor porro at debitis assumenda, voluptatem?";


function choixEnCours(element){
    element.style.backgroundColor = 'gray';
    
    if (element.id == "voiture"){
        document.querySelector(".texte>h3").textContent = "Le chemin en voiture";
        metro.style.backgroundColor = 'white';
        train.style.backgroundColor = 'white';
        nuit.style.backgroundColor = 'white';
        document.querySelector('.texte>p').textContent = textVoiture;
    }
    
    else if (element.id == "metro"){
        document.querySelector(".texte>h3").textContent = "Le chemin en métro";
        voiture.style.backgroundColor = 'white';
        train.style.backgroundColor = 'white';
        nuit.style.backgroundColor = 'white';
        document.querySelector('.texte>p').textContent = textMetro;

    } 
    
    else if (element.id == "train"){
        document.querySelector(".texte>h3").textContent = "Le chemin en train";
        metro.style.backgroundColor = 'white';
        voiture.style.backgroundColor = 'white';
        nuit.style.backgroundColor = 'white'; 
        document.querySelector('.texte>p').textContent = textTrain;

    }
    
    else if (element.id == "nuit"){
        document.querySelector(".texte>h3").textContent = "Le chemin de nuit";
        metro.style.backgroundColor = 'white';
        train.style.backgroundColor = 'white';
        voiture.style.backgroundColor = 'white';
        document.querySelector('.texte>p').textContent = textNuit;

    }
    
    else{
        console.log("Aucune condition de la boucle n'est satisfaite")
    }
    
}

liste.forEach(function(element){
    element.addEventListener('click',function(){
        choixEnCours(element)
    })
});

//for element in [voiture,metro,train,nuit]{
//    element.addEventListener('click',function(){
//        choixEnCours(element);
//                             })
//};



