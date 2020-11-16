class Raquette{
    constructor($html) {

    }
}
class RaquetteG{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#raquetteG").css("top"));
        this.hauteur=parseInt($("#raquetteG").css("height"));
        this.bas=this.haut+this.hauteur
        this.vitesse=0.5;
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