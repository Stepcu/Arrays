let num = new Array(10), numBuscado = 0, n = 0;
for (n = 0; n < num.length; n++) {
    num[n] = parseInt(prompt("Escriba un numero: "));
}
document.write("<br>El arreglo contiene:<br><br>")
for (n = 0; n < num.length; n++) {
    document.write(num[n] + " ");
}
document.write("<br><br>")
numBuscado= parseInt(prompt("Digite el numero a buscar:"));
for(n = 0; n < num.length; n++) {
    if(numBuscado == num[n]) {
        num[n] *= 2;
    }
    document.write(num[n] + " "); 
}
