 //''let'' permet la déclaration des variables gauche et haut

//parseInt convertit une chaine de caractère en un entier




// Jquerry perme de faire le lien entre html/css et le fichier js 

class Terrain{ //différent de la class css
    constructor($html){ //constructor permet d'attribuer des valeurs à ce qu'il y a dans les paranthèses
        this.$html=$html; //$ désigne un élément JQuerie 
        // $element 
        this.largeur=$("#terrain").width(); // fait appel à l'élement css width de l'id terrain du css grâce au $
        this.hauteur=$("#terrain").height(); // on récupère/importe la valeur de la hauteur du terrain depuis le css
    }
}


let terrain=new Terrain($("#terrain")); //déclare la variable terrain prenant la valeur de la class Terrain ci-dessus à laquelle on associe les valeurs de la l'id terrain de la fiche css
console.log(terrain); //affiche les valeurs de la variable terrain dans la console du navigateur web

class Balle{ //Une classe sert seulement pour y répertorier des variables
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#balle").css("top")); //déclaration de variables uniquement pour cette classe
        this.gauche=parseInt($("#balle").css("left")); // this permet de déclarer une variable dans une classe et let permet de déclarer des variables en dehors des classes
        this.vitesseX=Math.random()*2-1;//la balle peut aller dans toutes les directions de façon aléatoire
        this.vitesseY=Math.random()*2-1;// multiplier par 2 puis soustraire 1 permet d'avoir un intervalle Math.random() compris entre -1 et 1 pour pouvoir aller soit à droite, soit à gauche. Il en va de même pour le haut et le bas
        this.largeur=$('#balle').width(); //on fait appel à la valeur width de l'id balle du css pour l'intégrer dans le fichier js
        this.hauteur=$("#balle").height();
    }
    majHTML(){ // la fonction "mise à jour html"
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
    }
}

// déclaration de la variable js balle qui reprend les valeurs de la classe Balle qui reprend des valeurs css de l'id balle
let balle = new Balle($("#balle"));

class RaquetteG{ //dans les classes, on ne fait que déclarer des variables, pour faire des actions, il faut utiliser une fonction
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#raquetteG").css("top"));
        this.vitesse=0.5;
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
        this.vitesse=0.5;
    }
    majHTML(){
        this.$html.css("top",raquetteD.haut);
    }
}

let raquetteG = new RaquetteG($("#raquetteG"));
let raquetteD = new RaquetteD($("#raquetteD"));

setInterval(function(){ //cette fonction permet de déplacer la balle 
    balle.gauche=balle.gauche+balle.vitesseX; //la valeur gauche de la variable balle est appelée ici pour prendre la valeur balle.gauche+balle.vitesseX pour déplacer la balle
    balle.haut=balle.haut+balle.vitesseY;
    //on fait appel à la valeur "left" de l'id balle css et on lui donne le nom "gauche" dans la variable "balle" dans le fichier js
    //on applique la variable haut à la div possédant l'id #balle
    
    //-balle.largeur pour que la balle ne dépasse pas le bord du terrain car le point de "collision" de la balle se situe en haut à gauche
    // la balle rebondit lorsqu'elle touche la droite du terrain
    if(balle.gauche>terrain.largeur-balle.largeur){ 
        balle.gauche=terrain.largeur-balle.largeur; 
        balle.vitesseX=balle.vitesseX*-1;
    }
    // la valeur gauche de la classe balle
    // la balle rebondit lorsqu'elle touche la gauche du terrain
    if(balle.gauche<0){  
        balle.gauche=0;
        balle.vitesseX=balle.vitesseX*-1;
    }

    // la balle rebondit lorsqu'elle touche le bas du terrain
    if(balle.haut>terrain.hauteur-balle.hauteur){
        balle.haut=terrain.hauteur-balle.hauteur;
        balle.vitesseY=balle.vitesseY*-1;
    }

    // la balle rebondit lorsqu'elle touche le haut du terrain
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