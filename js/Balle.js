class Balle{
    constructor($html){
        this.$html=$html;

        //parse int ici sert a privatiser les variabes suivantes à cette classe seulement
        this.haut=parseInt($html.css("top"));
        this.gauche=parseInt($html.css("left"));

        //Appel des valeurs de la balle du css pour la mettre dans le js
        this.largeur=$('#balle').width();
        this.hauteur=$("#balle").height();

        //variable d'aléatoire de la vitesse et de la direction de la balle
        this.vitesseX=Math.random()*5-1;
        this.vitesseY=Math.random()*5-1;
    }

    //get = obtenir et set = definir
    get bas() {
        return this.haut+this.hauteur;
    }

    set bas(value) {
        this.haut = value - this.hauteur;
    }

    get droite() {
        return this.gauche+this.largeur;
    }

    set droite(value) {
        this.largeur = value - this.largeur;
    }

    majHTML(){
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
    }

    // Collisions
    limitmouv(){

        this.majHTML();

        if(this.bas>terrain.hauteur){
            this.bas=terrain.hauteur;
            this.vitesseY=this.vitesseY*-1;
        }

        if(this.haut<0){
            this.haut=0;
            this.vitesseY=this.vitesseY*-1;
        }

        if (this.droite>terrain.largeur){
            this.gauche=terrain.largeur/2;
            this.haut=terrain.hauteur/2;
        }

        if(this.gauche<0){
            this.gauche=terrain.largeur/2;
            this.haut=terrain.hauteur/2;
        }

        if(this.gauche < raquetteG.droite){
            if(this.bas > raquetteG.haut){
                if(this.haut < raquetteG.bas){
                    this.vitesseX = this.vitesseX*-1;
                }
            }
        }
        if(this.droite > raquetteD.gauche){
            if(this.bas > raquetteD.haut){
                if(this.haut < raquetteD.bas){
                    this.vitesseX = this.vitesseX*-1;
                }
            }
        }

    }

    //mouvements de la balle
    bouge(){
        this.gauche=this.gauche+this.vitesseX;
        this.haut=this.haut+this.vitesseY;

        // Appel de la variable qui limite les mouvements de la balle
        this.limitmouv();

        this.majHTML();
    }
}