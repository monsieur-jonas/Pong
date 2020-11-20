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
