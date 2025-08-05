/***********************************************************************************************************************
 * Objetivo: Arquivo responsável por calcular os juros compostos
 * Autor: Vitor Miguel
 * Data: 05/08/2025
 * Versão: 1.0
 ***********************************************************************************************************************/

function calcularJuros (capital_inicial, taxa_de_juros, juros_compostos_no_ano, tempo_ano) {
    let capital         = Number(capital_inicial)
    let taxa            = Number(taxa_de_juros)
    let juros_compostos = Number(juros_compostos_no_ano)
    let tempo           = Number(tempo_ano)

    let montanteFinal = capital*(1 + taxa/juros_compostos)**(juros_compostos/100*tempo)

    return Number(montanteFinal).toFixed(1)
}

console.log(calcularJuros(10000, 8, 12, 5))