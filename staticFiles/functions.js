function circle() {
    var raio = parseFloat(prompt("Digite o raio: "));
    var pi = Math.PI
    var area = pi * Math.pow(raio, 2);
    alert("A área da circunferência é " + area.toFixed(2) + " cm²");
}

