import { Pessoa } from "../models/pessoa.js";
import { musica, pessoas } from "../util/dados.js";
import { atualizarPessoaDescendo, atualizarPessoaSubindo } from "../view/listaPessoas.js";

export function iniciarAnimacao(): void { 
    if (temAnimacaoNaFila()) {
        const pessoa = musica.filaAnimacao[0];

        if (musica.tempoProximaAnimacao == 0) {
            animar(pessoa);
            musica.tempoProximaAnimacao = 10;       
        } else if (musica.tempoProximaAnimacao > 0) {
            musica.tempoProximaAnimacao--;
        }

        if (musica.tempoProximaAnimacao == 1) {
            alterarPosicoes(pessoa);
            musica.filaAnimacao.shift();
            removeAnimacaoAnterior(pessoa.posicaoAnimacao);
        }
    }
}

function temAnimacaoNaFila(): Boolean {
    return musica.filaAnimacao.length > 0;
}

function alterarPosicoes(pessoa: Pessoa): void {
    atualizarPessoaDescendo(pessoaPosicaoAcima(pessoa.posicaoAnimacao));
    atualizarPessoaSubindo(pessoa);

    if (pessoaPosicaoAcima(pessoa.posicaoAnimacao) != undefined) {
        pessoaPosicaoAcima(pessoa.posicaoAnimacao).descerPosicaoAnimacao();
        pessoa.subirPosicaoAnimacao();
    }
}

function animar(pessoa: Pessoa): void {
    const divPessoaSubindo = document.getElementById("pessoa" + (pessoa.posicaoAnimacao).toString());
    divPessoaSubindo?.classList.add('subindo');

    const divPessoaDescendo = document.getElementById("pessoa" + (pessoa.posicaoAnimacao-1).toString());
    divPessoaDescendo?.classList.add('descendo');
}

function removeAnimacaoAnterior(posicaoAnimacao: number): void {
    const subindo = document.getElementById("pessoa" + (posicaoAnimacao+1).toString());
    subindo?.classList.remove('subindo');
    subindo?.classList.remove('descendo');

    const descendo = document.getElementById("pessoa" + (posicaoAnimacao).toString());
    descendo?.classList.remove('subindo');
    descendo?.classList.remove('descendo');
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