class Terrain{
    constructor($html){
        this.$html=$html;
        // Appel de width du terrain
        this.largeur=$("#terrain").width();
        // Appel de height du terrain
        this.hauteur=$("#terrain").height();
    }
}

let terrain=new Terrain($("#terrain"));
console.log(terrain);

class Balle{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#balle").css("top"));
        this.gauche=parseInt($("#balle").css("left"));
        // Aléatoire du déplacement de la balle
        this.vitesseX=Math.random()*5-1;
        this.vitesseY=Math.random()*5-1;
        // Appel de width et height de la balle
        this.largeur=$('#balle').width();
        this.hauteur=$("#balle").height();
    }
    majHTML(){ // la fonction "mise à jour html"
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
    }
}

let balle = new Balle($("#balle"));

class RaquetteG{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#raquetteG").css("top"));
        this.vitesse=1.5;
        this.hauteur=parseInt($("#raquetteG").css("height"));
    }
    majHTML(){
        this.$html.css("top",raquetteG.haut);
    }

}

class RaquetteD{
    constructor($html){
        this.$html=$html;
        this.hauteur=parseInt($("#raquetteD").css("height"));
        this.haut=parseInt($("#raquetteD").css("top"));
        this.vitesse=1.5;
    }
    majHTML(){
        this.$html.css("top",raquetteD.haut);
    }
}

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