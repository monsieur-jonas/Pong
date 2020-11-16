let terrain=new Terrain($("#terrain"));
console.log(terrain);

let balle = new Balle($("#balle"));

let raquetteG = new RaquetteG($("#raquetteG"));
let raquetteD = new RaquetteD($("#raquetteD"));

// Cette fonction sert a deplacer la balle
setInterval(function(){ 
    
    balle.gauche=balle.gauche+balle.vitesseX; 
    balle.haut=balle.haut+balle.vitesseY;

    if(balle.gauche>terrain.largeur-balle.largeur){ 
        balle.gauche=terrain.largeur-balle.largeur; 
        balle.vitesseX=balle.vitesseX*-1;
    }
    
    if(balle.gauche<0){  
        balle.gauche=0;
        balle.vitesseX=balle.vitesseX*-1;
    }

    if(balle.haut>terrain.hauteur-balle.hauteur){
        balle.haut=terrain.hauteur-balle.hauteur;
        balle.vitesseY=balle.vitesseY*-1;
    }

    if(balle.haut<0){
        balle.haut=0;
        balle.vitesseY=balle.vitesseY*-1;
    }

    // on applique gauche la vitesse de déplacement pour les deux raquettes
    raquetteG.haut=raquetteG.haut+raquetteG.vitesse;
    raquetteD.haut=raquetteD.haut+raquetteD.vitesse;

    // Rebondissement des Raquettes dans le terrain
    if(raquetteG.haut>terrain.hauteur-raquetteG.hauteur){
        raquetteG.haut=terrain.hauteur-raquetteG.hauteur;
        raquetteG.vitesse=raquetteG.vitesse*-1;
    }

    if(raquetteG.haut<0){
        raquetteG.haut=0;
        raquetteG.vitesse=raquetteG.vitesse*-1;
    }

    if(raquetteD.haut>terrain.hauteur-raquetteD.hauteur){
        raquetteD.haut=terrain.hauteur-raquetteD.hauteur;
        raquetteD.vitesse=raquetteD.vitesse*-1;
    }

    if(raquetteD.haut<0){
        raquetteD.haut=0;
        raquetteD.vitesse=raquetteD.vitesse*-1;
    }
    
    balle.majHTML();
    raquetteG.majHTML();
    raquetteD.majHTML();

}, 10);

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) { return}
    console.log("La touche '"+event.key+ "' a ete enfoncee")
    event.preventDefault();
}, true);

window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) { return}
    console.log("La touche '"+event.key+ "' a ete relachee")
    event.preventDefault();
}, true);