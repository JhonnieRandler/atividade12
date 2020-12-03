var txtResultado = document.getElementById('resultado');
var txtLista = document.getElementById('lista');
var numeros = [];
document.getElementById('numero').focus();

var quantErros = 0;
var top = '';
var numOrdem = '';

function adicionar() {
    var numero = parseInt(document.getElementById('numero').value);
    document.getElementById('numero').value = '';

    if (isNaN(numero)) {
        alert("Insira um número válido!");
        listar();
        return;
    }
    numeros.push(numero);
    numOrdem = `Números: (${numero})`;
    document.getElementById('numero').focus();
    top = numOrdem;
    document.getElementById('resultado').innerHTML = top;
    listar();
}

function listar() {
    document.getElementById('numero').focus();
    var texto = 'Números: ';
    txtResultado.innerHTML = '';
    numeros.forEach(function (e, i) {
        if (i == (numeros.length - 1)) {
            texto += `${e}`;
        } else {
            texto += `${e}, `;
        }
    })
    txtLista.innerHTML = `${texto}`;
}


function ordem() {
    document.getElementById('numero').focus();
    var ordenado = numeros.map(function (e) {
        return e;
    });

    ordenado.sort(function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    });
    var condicao = true;

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] != ordenado[i]) {
            condicao = false;
            break;
        }
    }
    
    if (condicao) {
        txtResultado.innerHTML = `Ok! Números estão em ordem crescente!`;
    } else {
        txtResultado.innerHTML = `Atenção... Números não estão em ordem crescente!`;
    }
}

var btnAdiciona = document.getElementById('adiciona');
btnAdiciona.addEventListener('click', adicionar);
var vrfOrdem = document.getElementById('verifica');
vrfOrdem.addEventListener('click', ordem);