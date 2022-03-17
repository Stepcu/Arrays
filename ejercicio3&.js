let num = new Array(20), n = 0, contvocales = 0, contconsonantes = 0;
for (n = 0; n <= 19; n++) {
    num[n] = prompt("Escriba una letra:");
    if ((num[n] == "a") || (num[n] == "e") || (num[n] == "i") || (num[n] == "o") || (num[n] == "u")) {
        contvocales++;
    } else {
        contconsonantes++;
    }
}
    document.write("La cantidad de vocales es: " + contvocales);
    document.write("<br><br>La cantidad de consonantes es: " + contconsonantes);