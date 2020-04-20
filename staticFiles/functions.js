function square() {
    var side = document.getElementById('inputSquare').value;
    var area = Math.pow(side, 2);
    alert("A área do quadrado é " + area.toFixed(2) + " cm²");
}


function cube() {
    var side = document.getElementById('inputCube').value;
    var area = Math.pow(side, 2) * 6;
    alert("A área do cubo é " + area.toFixed(2) + " cm²");
}


function circle() {
    var raio = document.getElementById('inputRaio').value;
    var pi = Math.PI
    var area = pi * Math.pow(raio, 2);
    alert("A área do círculo é " + area.toFixed(2) + " cm²");
}
