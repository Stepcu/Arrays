let num = new Array(10), n = 0;
for (n = 0; n <= 9; n++) {
    num[n] = parseInt(prompt("Digite un numero: "));
}
for (n = 0; n <= 9; n++) {
    document.write(num[n] + " ");
}
document.write("<br><br>");
n = 0;
for (n = 9; n >= 0; n--) {
    document.write(num[n] + " ");
}