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