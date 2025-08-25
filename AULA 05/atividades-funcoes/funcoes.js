
function selecionar(){

    const operadorsoma      = document.getElementById('somador')
    const operadorsubtacao  = document.getElementById('subtracao')
    const operadormultiplicacao = document.getElementById('multiplicador')
    const operadordivisao       = document.getElementById('divisor')
    selectElement.value = operadorsoma,operadordivisao,operadorsubtacao,operadormultiplicacao
}

function calcular(){

    let v1 = parseInt(document.getElementById('n1').value);
    let v2 = parseInt(document.getElementById('n2').value);

    let sinal_calculo = getElementById('operadores').value


    

    if(sinal_calculo == '+'){
        let resultado = v1 + v2
        document.getElementById('resultado').innerHTML = resultado;
    }if(sinal_calculo == '-'){
        let resultado = v1 - v2
        document.getElementById('resultado').innerHTML = resultado;
    }if(sinal_calculo == '/'){
        let resultado = v1 / v2
        document.getElementById('resultado').innerHTML = resultado;
    }if(sinal_calculo == 'x'){
        let resultado = v1 * v2
        document.getElementById('resultado').innerHTML = resultado;
    }
}
calcular()