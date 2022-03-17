let num = new Array(10), n = 0;

for (n = 0; n <= 9; n++){
    num[n] = parseInt(prompt("Digite un numero:"));
}
num.sort((prev, next) => prev - next);
for (n = 0; n <= 9; n++) {
    document.write( num[n] + " ");
}