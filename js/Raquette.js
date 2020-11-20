class Raquette{

    constructor($html){
        this.$html=$html;
        this.haut = parseInt($html.css("top"));
        this.gauche = parseInt($html.css("left"));
        this.largeur = $html.width();
        this.hauteur = $html.height();
        this.vitesse=4;
        this.direction=0;
    }

    // Créations de classes et variables
    get bas(){
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

    monte(){
        this.direction=-1;
    }

    descend(){
        this.direction=1;
    }

    stop(){
        this.direction=0;
    }

    majHTML(){
        this.$html.css("top",this.haut);
    }

    bouge(){
        this.haut=this.haut+this.vitesse*this.direction;
        this.majHTML();
        if (this.haut<0){
            this.haut=0;
            this.stop();
        }
        if (this.bas>terrain.hauteur){
            this.bas=terrain.hauteur;
            this.stop();
        }
    }

}

let raquetteG = new Raquette($("#raquetteG"));
let raquetteD = new Raquette($("#raquetteD"));