var criancas = [];
var nomes = [];
document.getElementById('nome').focus();
function adicionar() {
    var crianca = {};
    crianca.nome = document.getElementById('nome').value;
    crianca.idade = parseInt(document.getElementById('idade').value);
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';

    if(isNaN(crianca.idade) || crianca.nome == '') {
        alert("Insira informações válidas!");
        document.getElementById('nome').focus();
        return;
    }
    criancas.push(crianca);
    listar();
}

function listar() {
    document.getElementById('nome').focus();
    var txtResultado = document.getElementById('resultado');
    var texto = '';
    txtResultado.innerHTML = '';
    criancas.forEach(function(e) {
        texto += `${e.nome} - ${e.idade} anos\n`;
    })
    txtResultado.innerHTML = `${texto}`;
}

function resumir() {
    document.getElementById('nome').focus();
    var txtResultado = document.getElementById('resultado');
    var criancasOrdenadas = criancas.map(function(e) {
        return e;
    });
    var resumoCriancas = [];
    criancasOrdenadas.sort(function(a,b) {
        return a.idade < b.idade ? -1 : a.idade > b.idade ? 1 : 0;
    });
    var texto = '';
    txtResultado.innerHTML = '';
    criancasOrdenadas.forEach(function(e) {
        var condicao = false;
        var indice = 0;

        resumoCriancas.forEach(function(n, i) {
            if (n.idade == e.idade) {
                condicao = true;
                indice = i;
            }
        })

        if(condicao) {
            resumoCriancas[indice].quantidade++;
            nomes[e.idade] += ` e ${e.nome}`;
            resumoCriancas[indice].nomes = nomes[e.idade];
        } else {
            nomes[e.idade] = `${e.nome}`;
            resumoCriancas.push({idade: e.idade, quantidade: 1, nomes: e.nome});
        }
    })

    var resultados = resumoCriancas.map(a = a => a.quantidade).reduce(function (acumulador, atual) {
        return acumulador + atual;
    }, 0);

    resumoCriancas.forEach(function(e) {
        var porcentagem = (100 * e.quantidade) / resultados;
        e.porcentagem = porcentagem;
    })

    resumoCriancas.forEach(function(e) {
        texto += `${e.idade} ano(s): ${e.quantidade} criança(s) - ${e.porcentagem.toFixed(2)}% (${e.nomes})

`;
    })

    txtResultado.innerHTML = `${texto}`;
}

var btnAdiciona = document.getElementById('adiciona');
var btnListar = document.getElementById('listar');
var btnResumir = document.getElementById('resumir');
btnAdiciona.addEventListener('click', adicionar);
btnListar.addEventListener('click', listar);
btnResumir.addEventListener('click', resumir);