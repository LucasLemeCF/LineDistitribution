import { Pessoa } from "../models/pessoa.js";
import { pessoas } from "../util/dados.js";
import { atualizarPessoaDescendo, atualizarPessoaSubindo } from "../view/listaPessoas.js";

export function iniciaAnimacao(): void {
    pessoas.forEach((pessoa) => {
        setInterval(() => {
            if (temAnimacaoNaFila(pessoa) && prontoParaProximaAnimacao(pessoa)) {  
                animar(pessoa);
            
                pessoa.filaAnimacao--;
                pessoa.tempoProximaAnimacao = 11;       
            } else if (naoTerminouTempoAnimacao(pessoa)) {
                pessoa.tempoProximaAnimacao--;
            }

            if (pessoa.tempoProximaAnimacao == 1) {
                alterarPosicoes(pessoa);
                mostrarLog(pessoa);

                removeAnimacaoAnterior(pessoa.posicaoAnimacao);
            }
        }, 100);
    });
}

function alterarPosicoes(pessoa: Pessoa): void {
    atualizarPessoaDescendo(pessoaPosicaoAcima(pessoa.posicaoAnimacao));
    atualizarPessoaSubindo(pessoa);

    if (pessoaPosicaoAcima(pessoa.posicaoAnimacao) != undefined) {
        pessoaPosicaoAcima(pessoa.posicaoAnimacao).descerPosicaoAnimacao();
        pessoa.subirPosicaoAnimacao();
    }
}

function mostrarLog(pessoa: Pessoa): void {
    if (pessoaPosicaoAcima(pessoa.posicaoAnimacao) != undefined) {
        console.log("Acima: " + pessoaPosicaoAcima(pessoa.posicaoAnimacao).nome);
    }
    console.log("Abaixo: " + pessoa.nome);

    pessoas.forEach((pessoa) => {
        console.log(pessoa.nome + ": " + pessoa.posicaoAnimacao);
    });

    console.log("-");
}

function temAnimacaoNaFila(pessoa: Pessoa): Boolean {
    return pessoa.filaAnimacao > 0;
}

function prontoParaProximaAnimacao(pessoa: Pessoa): Boolean {
    return pessoa.tempoProximaAnimacao == 0;
}

function animar(pessoa: Pessoa): void {
    const divPessoaSubindo = document.getElementById("pessoa" + (pessoa.posicaoAnimacao).toString());
    // const divPessoaDescendo = document.getElementById("pessoa" + (pessoa.posicaoAnimacao-1).toString());

    divPessoaSubindo?.classList.add(('subindo').toString());
    // divPessoaDescendo?.classList.add(('descendo').toString());
}

function removeAnimacaoAnterior(posicaoAnimacao: number): void {
    const div = document.getElementById("pessoa" + (posicaoAnimacao+1).toString());
    div?.classList.remove('subindo');
    div?.classList.remove('descendo');
}

export function removerTodasAnimacoes(): void {
    pessoas.forEach((pessoa) => {
        const div = document.getElementById("pessoa" + (pessoa.posicaoAnimacao).toString());
        div?.classList.remove('subindo');
        div?.classList.remove('descendo');
    });
}

function pessoaPosicaoAcima(posicaoBuscada: number): Pessoa {
    return pessoas.find((pessoa: Pessoa) => pessoa.posicaoAnimacao == posicaoBuscada - 1);
}

function naoTerminouTempoAnimacao(pessoa: Pessoa): Boolean {
    return pessoa.tempoProximaAnimacao > 0;
}
