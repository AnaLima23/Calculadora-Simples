function calcular(operacao) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    if (operacao === '+') {
        resultado = num1 + num2;
    } else if (operacao === '-') {
        resultado = num1 - num2;
    } else if (operacao === '*') {
        resultado = num1 * num2;
    } else if (operacao === '/') {
        resultado = num2 !== 0 ? num1 / num2 : 'Erro';
    }

    document.getElementById('resultado').innerText = resultado;
}
