document.getElementById('numero').focus();
var dicaGameOver = document.getElementById('dicaGameOver');
var btnApostar = document.getElementById('apostar');
var btnReiniciar = document.getElementById('reiniciar');
btnReiniciar.style.display = 'none';

var aleatorio = Math.floor(Math.random() * (100 - 1) + 1);
console.log(aleatorio);

var tentativas = [];
var quantErros = 0;
var erros = '';
var finalErros = '';

function apostar() {
    erros = '';
    var num = parseInt(document.getElementById('numero').value);
    document.getElementById('numero').value = '';
    if (isNaN(num) || num < 1 || num > 100) {
        alert("Insira um número válido (entre 1 e 100)...");
        document.getElementById('numero').focus();
        return;
    } else if (num == aleatorio) {
        dicaGameOver.innerHTML = `Você venceu, o número sorteado foi ${aleatorio}`;
        gameOver();
        return;
    } else if (tentativas.length == 0) {
        tentativas.push(num);
        quantErros++;
        tentativas.forEach(function (n, i) {
            if (i == (tentativas.length - 1)) {
                erros += `${n}`;
            } else {
                erros += `${n}, `;
            }
        });
        finalErros = `Erros: ${quantErros} (${erros})`;
        document.getElementById('numero').focus();
        document.getElementById('erros').innerHTML = finalErros;
        document.getElementById('chances').innerHTML = `Chances: ${6 - quantErros}`;
        if (aleatorio > num) {
            dicaGameOver.innerHTML = `Dica: Tente um número maior que ${num}`;
        } else if (aleatorio < num) {
            dicaGameOver.innerHTML = `Dica: Tente um número menor que ${num}`;
        }
    } else if (tentativas.length == 5) {
        if (tentativas.indexOf(num) == -1) {
            tentativas.push(num);
            dicaGameOver.innerHTML = `Game Over!! Número Sorteado: ${aleatorio}`;
            quantErros++;
            tentativas.forEach(function (n, i) {
                if (i == (tentativas.length - 1)) {
                    erros += `${n}`;
                } else {
                    erros += `${n}, `;
                }
            });
            finalErros = `Erros: ${quantErros} (${erros})`;
            document.getElementById('erros').innerHTML = finalErros;
            document.getElementById('chances').innerHTML = `Chances: ${6 - quantErros}`;
            gameOver();
            return;
        } else {
            alert(`Você já apostou o número ${num}. Tente outro...`);
            document.getElementById('numero').focus();
            return;
        }
    } else {
        if (tentativas.indexOf(num) == -1) {
            tentativas.push(num);
            quantErros++;
            tentativas.forEach(function (n, i) {
                if (i == (tentativas.length - 1)) {
                    erros += `${n}`;
                } else {
                    erros += `${n}, `;
                }
            });
            finalErros = `Erros: ${quantErros} (${erros})`;
            document.getElementById('numero').focus();
            document.getElementById('erros').innerHTML = finalErros;
            document.getElementById('chances').innerHTML = `Chances: ${6 - quantErros}`;
            if (aleatorio > num) {
                dicaGameOver.innerHTML = `Dica: Tente um número maior que ${num}`;
            } else if (aleatorio < num) {
                dicaGameOver.innerHTML = `Dica: Tente um número menor que ${num}`;
            }
        } else {
            alert(`Você já apostou o número ${num}. Tente outro...`);
            document.getElementById('numero').focus();
            return;
        }
    }
}

function reiniciar() {
    btnReiniciar.style.display = 'none';
    aleatorio = Math.floor(Math.random() * (100 - 1) + 1);
    document.getElementById('numero').disabled = false;
    btnApostar.disabled = false;
    tentativas = [];
    quantErros = 0;
    aleatorio = Math.floor(Math.random() * (100 - 1) + 1);
    erros = '';
    dicaGameOver.innerHTML = '';
    document.getElementById('erros').innerHTML = '';
    document.getElementById('chances').innerHTML = '';
    document.getElementById('numero').focus();
    console.log(aleatorio);
}

function gameOver() {
    btnReiniciar.style.display = 'inline';
    document.getElementById('numero').disabled = true;
    btnApostar.disabled = true;
}

btnApostar.addEventListener('click', apostar);
btnReiniciar.addEventListener('click', reiniciar);