'use strict'

var className = document.body.className;

var eteindre = function () {

    document.body.className = 'dark-theme';

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var response = xmlhttp.responseText; //if you need to do something with the returned value
        }
    }
    xmlhttp.open("POST", "https://shelly-34-eu.shelly.cloud/device/relay/control", true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send("id=b914c0&auth_key=YWI3ODF1aWQ0C9150A97A6D6158DFE494429BE28AFFC8DE8B760DC651858503C3D864741E7E4A6C4632A76DB295&channel=0&turn=off");
    document.getElementById('box').src = 'lampe_éteinte.png';

}

var allumer = function () {

    document.body.className = 'light-theme';

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var response = xmlhttp.responseText; //if you need to do something with the returned value
        }
    }

    xmlhttp.open("POST", "https://shelly-34-eu.shelly.cloud/device/relay/control", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("id=b914c0&auth_key=YWI3ODF1aWQ0C9150A97A6D6158DFE494429BE28AFFC8DE8B760DC651858503C3D864741E7E4A6C4632A76DB295&channel=0&turn=on");
    document.getElementById('box').src = 'lampe_allumée.png';
}

