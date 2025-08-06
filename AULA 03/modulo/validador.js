/***********************************************************************************************************************
 * Objetivo: Arquivo responsável por validar o nome do cliente
 * Autor: Vitor Miguel
 * Data: 06/08/2025
 * Versão: 1.0
 ***********************************************************************************************************************/

const MESSAGE_ERROR_EMPTY_NUMBER = "ERRO: Não é possível utilizar número e nem deixar o campo vazio"
const MESSAGE_ERROR_NAN          = "ERRO: Não é possível utilizar caracteres diferentes dos números, nem numeros menores que 0 e maiores que 100 e nem vazio"
const MESSAGE_ERROR_EMPTY_NNAN   = "ERRO: Não é possível utilizar caracteres diferentes dos números, nem vazio e nem números menores ou iguais a 0"

function validar_cliente(clienteNome) {

    let clienteNome_ = clienteNome

    if (!isNaN(clienteNome_) || clienteNome_ == "" || clienteNome_ == null){
        
        console.log(MESSAGE_ERROR_EMPTY_NUMBER)

        process.exit()
    }

    return false
}


function validar_produto (produtoNome) {

    let produtoNome_ = String(produtoNome)

    if (!isNaN(produtoNome_) || produtoNome_ == "" || produtoNome_ == null){
        
        console.log(MESSAGE_ERROR_EMPTY_NUMBER)

        process.exit()
    }

    return false

}

function validador_capital (capital) {

    let capital_inicial = Number(capital)

    if (isNaN(capital_inicial) || capital_inicial < 0 || capital_inicial == "") {

        console.log(MESSAGE_ERROR_NAN)

        process.exit()
    }

    return false
}

function validador_taxa (taxa) {

    let taxa_de_juros = taxa

    if (isNaN(taxa_de_juros) || taxa_de_juros < 0 || taxa_de_juros > 100 || taxa_de_juros == "") {

        console.log(MESSAGE_ERROR_NAN)

        process.exit()
    }

    return false

}

function validador_juros_compostos (juros_compostos) {

    let juros_compostos_no_ano = juros_compostos

    if (isNaN(juros_compostos_no_ano) || juros_compostos_no_ano <= 0 || juros_compostos == "") {

        console.log(MESSAGE_ERROR_EMPTY_NNAN)

        process.exit()
    }

    return false

}

function validador_tempo (tempo) {

    let tempo_ano = tempo

    if(isNaN(tempo_ano) || tempo_ano <= 0 || tempo_ano == "") {

        console.log(MESSAGE_ERROR_EMPTY_NNAN)

        process.exit()
    }

    return false

}




module.exports = {
    validar_cliente,
    validar_produto,
    validador_capital,
    validador_taxa,
    validador_juros_compostos,
    validador_tempo
}