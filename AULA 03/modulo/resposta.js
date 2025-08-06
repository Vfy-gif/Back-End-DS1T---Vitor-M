/***********************************************************************************************************************
 * Objetivo: Arquivo responsável por dar a mensagem da Empresa
 * Autor: Vitor Miguel
 * Data: 06/08/2025
 * Versão: 1.0
 ***********************************************************************************************************************/

function resposta(clienteNome, produtoNome, capital, juros_compostos_no_ano, montanteFinal) {

    let clienteNome_ = clienteNome
    let produtoNome_ = produtoNome
    let capital_inicial = capital
    let juros_compostos = juros_compostos_no_ano
    let montante = montanteFinal

    console.log("*************************** MicroDownf ******************************")
    console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${clienteNome_}`)
    console.log(`A compra do produto ${produtoNome_}, tem um valor de: ${capital_inicial}.`)
    console.log(`A sua compra será parcelada em ${juros_compostos} vezes e o Sr(a) pagará: ${montante}`)
    console.log("Muito obrigado por escolher a MicroDownf.")
    console.log("********************************************************************")

    process.exit()

    return
}

module.exports = {
    resposta
}