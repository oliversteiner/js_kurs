// erstelle Klasse Auto
function Auto(farbe, marke, fahrer) {
    console.log('neues Auto mit Farbe ' + farbe);

    // Eigenschaften veränderlich:
    this.farbe = farbe;
    this.marke = marke;
    this.fahrer = fahrer;

    //Eigenschaften allgemein
    this.id = "auto-" + makeUuid();
    this.motor = 'aus';

    // die ID heraufzaehlen

} // ende Klasse Auto



// starteMotor
Auto.prototype.starteMotor = function () {
    var motor = "Brum, Brum!";
    this.motor = 'an';
    console.log(this.marke + ": " + motor);

    var elem = document.getElementById(this.id);
    elem.className = "auto auto_faehrt";

};



// stoppeMotor
Auto.prototype.stoppeMotor = function () {
    var motor = "...";
    this.motor = 'aus';
    console.log(this.marke + ": " + motor);

    var elem = document.getElementById(this.id);
    elem.className = "auto";

};




// zeigeFarbe
Auto.prototype.zeigeFarbe = function () {
    console.log(gibFarbe);

    var elem = document.getElementById(this.id);
    elem.style.borderColor = this.farbe;
    return this.farbe;

}