document.getElementById('clube').focus();
var clubes = [];
var listaTabela = document.getElementById('listaTabela');

function adicionar() {
    var clube = document.getElementById('clube').value;
    document.getElementById('clube').value = '';
    document.getElementById('clube').focus();
    if (clube == '') {
        alert("Insira o nome do time!");
        return;
    } else if (clubes.indexOf(clube) != -1) {
        alert("Esse time já foi adicionado!");
        return;
    }
    clubes.push(clube);
    listar();
}

function listar() {
    document.getElementById('clube').focus();
    listaTabela.innerHTML = '';
    var texto = '';

    clubes.forEach(function(e, i){
        texto += `${i+1}.  ${e}\n`;
    })
    listaTabela.innerHTML = texto;
}

function mostrarTabela() {
    listaTabela.innerHTML = '';
    var texto = '';

    if (clubes.length % 2 != 0) {
        alert("É necessário uma quantidade par de times para se montar a tabela!");
        listar();
        return;
    } else {
        document.getElementById('clube').focus();
        var reversa = clubes.map(function(e){
            return e;
        });
        reversa.reverse();
        for (var i = 0; i < (clubes.length / 2); i++) {
            texto += `${clubes[i]} x ${reversa[i]}\n`;
        }
        listaTabela.innerHTML = texto;
    }
}

var btnAdicionar = document.getElementById('btnAdicionar');
var btnListar = document.getElementById('listar');
var btnTabela = document.getElementById('tabela');
btnAdicionar.addEventListener('click', adicionar);
btnListar.addEventListener('click', listar);
btnTabela.addEventListener('click', mostrarTabela);