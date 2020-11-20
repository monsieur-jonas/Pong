//ici on apelle les fonctions correspondantes pour faire bouger la balle et les deux raquettes
setInterval(function(){
    balle.bouge();
    raquetteG.bouge();
    raquetteD.bouge();

}, 10);

//ici on dit au programme d'écouter certaines touches du clavier quand elles sont appuyées pour bouger les raquettes
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) { return}
    if(event.key === "a"){
        raquetteG.monte();
    }
    if(event.key === "q"){
        raquetteG.descend();
    }
    if(event.key === "p"){
        raquetteD.monte();
    }
    if(event.key === "m"){
        raquetteD.descend();
    }
    event.preventDefault();
}, true);

//ici on dit au programme d'écouter certaines touches du clavier quand elles sont relachées pour arreter les raquettes
window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) { return}
    if(event.key === "a"){
        raquetteG.stop();
    }
    if(event.key === "q"){
        raquetteG.stop();
    }
    if(event.key === "p"){
        raquetteD.stop();
    }
    if(event.key === "m"){
        raquetteD.stop();
    }
    event.preventDefault();
}, true);