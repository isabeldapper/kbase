/* =========================================================================================================================== 

Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function pares(x, y) {
 // código aqui
}
pares(32, 321);

==============================================================================================================================*/

function pares(x, y) {

    var resultadoPares = [];

    for (i = x; i <= y; i++) {
        if (i % 2 == 0) {
            resultadoPares.push(i);
        }
    }
    return resultadoPares
}
var p = pares(32, 321);
console.log(p);