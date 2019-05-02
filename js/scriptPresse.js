function ombreMoi(id) {
    if (id == "article1") {
        $('#article1').addClass("selectionEnCours");
        $('#article2').removeClass("selectionEnCours");
        $('#article3').removeClass("selectionEnCours");
        $('#article4').removeClass("selectionEnCours");
        $('#article5').removeClass("selectionEnCours");
    } else if (id == "article2") {
        $('#article1').removeClass("selectionEnCours");
        $('#article2').addClass("selectionEnCours");
        $('#article3').removeClass("selectionEnCours");
        $('#article4').removeClass("selectionEnCours");
        $('#article5').removeClass("selectionEnCours");
    } else if (id == "article3") {
        $('#article1').removeClass("selectionEnCours");
        $('#article2').removeClass("selectionEnCours");
        $('#article3').addClass("selectionEnCours");
        $('#article4').removeClass("selectionEnCours");
        $('#article5').removeClass("selectionEnCours");
    } else if (id == "article4") {
        $('#article1').removeClass("selectionEnCours");
        $('#article2').removeClass("selectionEnCours");
        $('#article3').removeClass("selectionEnCours");
        $('#article4').addClass("selectionEnCours");
        $('#article5').removeClass("selectionEnCours");
    } else if (id == "article5") {
        $('#article1').removeClass("selectionEnCours");
        $('#article2').removeClass("selectionEnCours");
        $('#article3').removeClass("selectionEnCours");
        $('#article4').removeClass("selectionEnCours");
        $('#article5').addClass("selectionEnCours");
    } else {
        console.log("il y a une erreur dans ombreMoi");
    }
}

ombreMoi("article4");

$('#article1').click(function(){
    ombreMoi("article1");   
    $('.articlePrincipal img').attr("src","images/articlePresse/articles/1.jpg");
});

$('#article2').click(function(){
    ombreMoi("article2");  
    $('.articlePrincipal img').attr("src","images/articlePresse/articles/2.jpg");
});

$('#article3').click(function(){
    ombreMoi("article3");
    $('.articlePrincipal img').attr("src","images/articlePresse/articles/3.jpg");
});

$('#article4').click(function(){
    ombreMoi("article4");    
    $('.articlePrincipal img').attr("src","images/articlePresse/articles/4.jpg");
});

$('#article5').click(function(){
    ombreMoi("article5");    
    $('.articlePrincipal img').attr("src","images/articlePresse/articles/5.jpg");
});

