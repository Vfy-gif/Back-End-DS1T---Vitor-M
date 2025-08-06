/***********************************************************************************************************************
 * Objetivo: Arquivo responsável por calcular os juros compostos
 * Autor: Vitor Miguel
 * Data: 05/08/2025
 * Versão: 1.0
 ***********************************************************************************************************************/

function calcularJuros (capital, taxa, juros_compostos, tempo) {
    let capital_inicial         = Number(capital)
    let taxa_de_juros           = Number(taxa/100)
    let juros_compostos_no_ano  = Number(juros_compostos)
    let tempo_ano               = Number(tempo)

    let montanteFinal = capital_inicial*(1 + taxa_de_juros/juros_compostos_no_ano)**(juros_compostos_no_ano*tempo_ano)

    return Number(montanteFinal).toFixed(1)
}

module.exports = {
    calcularJuros
}

