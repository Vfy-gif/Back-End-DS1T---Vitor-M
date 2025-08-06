/*************************************************************************************************************************************
 * Objetivo: Criar um app para ao calculo os juros compostos de uma venda parcelada.
 * Autor: Vitor Miguel
 * Data: 05/08
 * Versão: 1.0
 *************************************************************************************************************************************/
const { parse } = require("path")
var readline = require("readline")

const juros_modulo = require("./modulo/juros")
const validador    = require("./modulo/validador")
const resposta     = require("./modulo/resposta") 

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Digite seu nome: ", function (clienteNome_){

    let clienteNome = String(clienteNome_).toUpperCase()
    
    validador.validar_cliente(clienteNome)

    entradaDeDados.question("Digite o nome do produto: ", function(produtoNome_){

        let produtoNome = String(produtoNome_).toUpperCase()

        validador.validar_produto(produtoNome)

        entradaDeDados.question("Digite a capital inicial: ", function (capital){

            let capital_inicial = Number(capital)

            validador.validador_capital(capital_inicial)

            entradaDeDados.question("Digite a taxa de juros: ", function(taxa){

                let taxa_de_juros = Number(taxa)
                
                validador.validador_taxa(taxa_de_juros)

                entradaDeDados.question("Digite o número de vezes que os juros são compostos no ano: ", function(juros_compostos){

                    let juros_compostos_no_ano = Number(juros_compostos)

                    validador.juros_compostos_no_ano

                    entradaDeDados.question("Digite o tempo em anos: ", function(tempo){

                        let tempo_ano = Number(tempo)

                        let montanteFinal = juros_modulo.calcularJuros(capital_inicial, taxa_de_juros, juros_compostos_no_ano, tempo_ano)

                        resposta.resposta(clienteNome, produtoNome, capital, juros_compostos_no_ano, montanteFinal)

                    })
                })

            })

        })

    })



})

