// Wichtige Variablen



function init() {
     _elem_ampel = document.getElementById('ampel');
     _elem_rennen = document.getElementById('ausgabe_rennen_im_gang');
     _rennen_im_gang = false;
};



function starteRennen(text) {
    console.log('---starteRennen');

    _rennen_im_gang = true;

    var farbe_ampel = "green";
    feedback(farbe_ampel);
};


function stoppeRennen() {
    console.log('---endeRennen');
    _rennen_im_gang = false;
    var farbe_ampel = "red";
    feedback(farbe_ampel);
}


// ändert die Farbe der Ampel
function feedback(farbe_ampel) {
    _elem_ampel.style.backgroundColor = farbe_ampel;
    //  _elem_rennen.innerHTML= " "+_rennen_im_gang;

}

// auf die Ampel klicken zum Starten,
// nochmals klicken um wieder anzuhalten.
function toggleAmpel() {
    console.log('toggleAmpel');

    // wenn _elem_rennen "falsch" ist die funktion starteRennen ausführen

    if (_rennen_im_gang == false) {
        starteRennen();
    } else {
        stoppeRennen();
    }


}


function starteAlleAutos() {
    for (i = 0; i < Garage.halle.length; i++) {
        var auto = Garage.halle[i];
        auto.starteMotor();
    }
}


function stoppeAlleAutos() {
    for (i = 0; i < Garage.halle.length; i++) {
        var auto = Garage.halle[i];
        auto.stoppeMotor();
    }
}

function toggleAlleAutos() {

    for (i = 0; i < Garage.halle.length; i++) {
        var auto = Garage.halle[i];

        if (auto.motor == 'an') {
            auto.stoppeMotor();

        } else {
            auto.starteMotor();
        }

    }
}



function makeUuid() {
    var min = 10;
    var max = 10;
    var uuid =  Math.floor(Math.random() * (max - min + 1)) + min;

    return uuid;
}