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

var iconeRecherche = document.querySelector(".boutonRecherche>i");
var inputRecherche = document.querySelector(".boutonRecherche>input");

iconeRecherche.addEventListener("click",function(){

    if (!inputRecherche.style.display){
        console.log("Il y a eu un click!");
        inputRecherche.style.display = "inline";
        inputRecherche.style.width = "200px";
        inputRecherche.style.borderRadius = "8px";
    }
    else{
        inputRecherche.style.display = "";
        inputRecherche.style.width = "0";
        inputRecherche.style.borderRadius = "0";
    }


});


// Slider //
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";

};



var prv = document.getElementsByClassName('prev');
var nxt = document.getElementsByClassName('next');
var carrousel = document.getElementsByClassName('slideshow-container');

carrousel[0].addEventListener('mouseover', function(){
  prv[0].style.backgroundColor ='black';
  prv[0].style.opacity ='0.7';
  nxt[0].style.backgroundColor ='black';
  nxt[0].style.opacity ='0.7';

})

carrousel[0].addEventListener('mouseout', function(){
  prv[0].style.backgroundColor ='';
  prv[0].style.opacity ='';
  nxt[0].style.backgroundColor ='';
  nxt[0].style.opacity ='';

})

//SlideSHowEmplacementHotel//




///////////FIN SLIDER///////////////

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}

//--------------------fin btn scrolltotop----------------------//


// window.addEventListener('scroll', function() {
//   // récupération de la position du scroll
//   var scrollY = '2500px';
//   var basDePage = scrollY + animated;
//   // récupération élément devant être animé
//   var oElem =
//   // récupération de la position du bas de l'élément
//   var basElem = oElem.offsetTop +
//   // si il est visible dans la page
//   if( basElem < basDePage ){
//     // ajout de la classe
//     oElem.className += 'animation';
//   }
// });
