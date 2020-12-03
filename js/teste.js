var jubileu = [1, 2, 3, 4, 5];
var ordenado = jubileu.map(function(e) {
    return e;
});

ordenado.sort(function(a, b){
    return a < b ? -1 : a > b ? 1 : 0;
});

var condicao = true;
for(var i = 0; i < jubileu.length; i++) {
    if(jubileu[0] != ordenado[0]) {
        console.log("O vetor não está ordenado em ordem crescente!");
        condicao = false;
        break;
    }
}

if(condicao) {
    console.log("O vetor está ordenado em ordem crescente!");
}