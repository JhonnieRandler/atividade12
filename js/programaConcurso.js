var candidato = document.getElementById('candidato');
candidato.focus();

var candidatos = [];


function adicionar() {
    candidato.focus();
    var nomeCandidato = candidato.value;
    var acertos = parseInt(document.getElementById('acertos').value);
    candidato.value = '';
    document.getElementById('acertos').value = '';

    if (nomeCandidato == "" || nomeCandidato == null || isNaN(acertos)) {
        alert("Insira informações válidas:");
        candidato.focus();
        return;
    }
    candidatos.push({ nome: nomeCandidato, acertos: acertos });

    listar();
}

function listar() {
    candidato.focus();
    var texto = '';
    candidatos.forEach(function (e) {
        texto += `${e.nome} - ${e.acertos} acertos\n`;
    })
    document.getElementById('candidatosAprovados').innerHTML = texto;
}

function mostrarAprovados() {
    if (candidatos.length == 0) {
        candidato.focus();
        return;
    }
    var quantAcertos = parseInt(prompt("Número de Acertos para Aprovação?"));
    if (isNaN(quantAcertos)) {
        alert("Digite uma quantidade válida de acertos!");
        listar();
        return;
    } else {
        candidato.focus();
        var aprovados = candidatos.filter(function (e) {
            return e.acertos >= quantAcertos;
        });
        if(aprovados.length == 0) {
            document.getElementById('candidatosAprovados').innerHTML = "Nenhum candidato foi aprovado!";
            candidato.focus();
            return;
        }
        var texto = '';
        aprovados.sort(function(a,b) {
            return a.acertos > b.acertos ? -1 : a.acertos < b.acertos ? 1 : 0;
        });
        aprovados.forEach(function (e) {
            texto += `${e.nome} - ${e.acertos} acertos\n`;
        })
        document.getElementById('candidatosAprovados').innerHTML = texto;
    }
}

var btnAdiciona = document.getElementById('btnAdiciona');
var btnListar = document.getElementById('btnListar');
var btnAprovados = document.getElementById('btnAprovados');
btnAdiciona.addEventListener('click', adicionar);
btnListar.addEventListener('click', listar);
btnAprovados.addEventListener('click', mostrarAprovados);