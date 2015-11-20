/**
 * Created by ost on 14.11.15.
 */

function Garage() {

    this.zaehler = 1;
    this.halle = [];
    this.elem_garage = document.getElementById('garage');

    //
    this.fuelleMitAutos();

}


Garage.prototype.fuelleMitAutos = function () {

    var Auto1 = new Auto('red', 'Mercedes', 'Hans');
    var Auto2 = new Auto('green', 'Volvo', 'Jakob');
    var Auto3 = new Auto('grey', 'Audi', 'Ivonne');

    this.halle.push(Auto1);
    this.halle.push(Auto2);
    this.halle.push(Auto3);

};


Garage.prototype.listeMitAllenAutos = function () {
    var liste = "<ol>";
    for (i = 0; i < this.halle.length; i++) {
        var auto = this.halle[i];
        liste += '<li class="auto" id="' + auto.id + '" style="border-color: ' + auto.farbe + '">' + auto.marke + "</li>";
    }
    liste += "</ol>";

    // wohin kommt die Liste:
    this.elem_garage.innerHTML = liste;
}


Garage.prototype.neuesAuto = function () {

    var farbe = document.getElementsByName('farbe');
    farbe = farbe[0].value;

    var marke = document.getElementsByName('marke');
    marke = marke[0].value;

    var fahrer = document.getElementsByName('fahrer');
    fahrer = fahrer[0].value;

    var autonew = new Auto(farbe, marke, fahrer);
    this.halle.push(autonew);

    this.listeMitAllenAutos();


}