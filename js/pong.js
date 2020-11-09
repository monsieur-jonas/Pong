let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));

class Terrain{
    constructor($html){
      this.$html=$html;
      this.largeur=$html.width();
      this.hauteur=$html.height();
    }
    
  }

class Balle{
    constructor($html){
      this.$html=$html;
      this.haut=parseInt($("#balle").css("top"));
      this.gauche=parseInt($("#balle").css("left"));
    }
    majHTML(){
        this.$html.css("#balle").css("left",balle.gauche);
        this.$html.css("#balle").css("top",balle.haut);
    }
    
  }

  let terrain=new Terrain($("#terrain"));
  let balle=new Balle($("#balle"));


  setInterval(function(){
    balle.gauche=balle.gauche+1; 
    balle.haut=balle.haut+1; 
    
    if(balle.gauche>terrain.largeur){
        balle.gauche=terrain.largeur;
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.gauche>terrain.largeur){
        balle.gauche=terrain.largeur;
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.haut>terrain.hauteur){
        balle.haut=0
    }
    balle.majHTML;
}, 10);
