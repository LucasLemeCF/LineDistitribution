import { pessoas } from "../util/dados.js";
import { atualizarPessoaDescendo, atualizarPessoaSubindo } from "../view/listaPessoas.js";
export function iniciaAnimacao() {
    pessoas.forEach((pessoa) => {
        setInterval(() => {
            if (temAnimacaoNaFila(pessoa) && prontoParaProximaAnimacao(pessoa)) {
                animar(pessoa);
                pessoa.filaAnimacao--;
                pessoa.tempoProximaAnimacao = 11;
            }
            else if (naoTerminouTempoAnimacao(pessoa)) {
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
function alterarPosicoes(pessoa) {
    atualizarPessoaDescendo(pessoaPosicaoAcima(pessoa.posicaoAnimacao));
    atualizarPessoaSubindo(pessoa);
    if (pessoaPosicaoAcima(pessoa.posicaoAnimacao) != undefined) {
        pessoaPosicaoAcima(pessoa.posicaoAnimacao).descerPosicaoAnimacao();
        pessoa.subirPosicaoAnimacao();
    }
}
function mostrarLog(pessoa) {
    if (pessoaPosicaoAcima(pessoa.posicaoAnimacao) != undefined) {
        console.log("Acima: " + pessoaPosicaoAcima(pessoa.posicaoAnimacao).nome);
    }
    console.log("Abaixo: " + pessoa.nome);
    pessoas.forEach((pessoa) => {
        console.log(pessoa.nome + ": " + pessoa.posicaoAnimacao);
    });
    console.log("-");
}
function temAnimacaoNaFila(pessoa) {
    return pessoa.filaAnimacao > 0;
}
function prontoParaProximaAnimacao(pessoa) {
    return pessoa.tempoProximaAnimacao == 0;
}
function animar(pessoa) {
    const divPessoaSubindo = document.getElementById("pessoa" + (pessoa.posicaoAnimacao).toString());
    // const divPessoaDescendo = document.getElementById("pessoa" + (pessoa.posicaoAnimacao-1).toString());
    divPessoaSubindo?.classList.add(('subindo').toString());
    // divPessoaDescendo?.classList.add(('descendo').toString());
}
function removeAnimacaoAnterior(posicaoAnimacao) {
    const div = document.getElementById("pessoa" + (posicaoAnimacao + 1).toString());
    div?.classList.remove('subindo');
    div?.classList.remove('descendo');
}
export function removerTodasAnimacoes() {
    pessoas.forEach((pessoa) => {
        const div = document.getElementById("pessoa" + (pessoa.posicaoAnimacao).toString());
        div?.classList.remove('subindo');
        div?.classList.remove('descendo');
    });
}
function pessoaPosicaoAcima(posicaoBuscada) {
    return pessoas.find((pessoa) => pessoa.posicaoAnimacao == posicaoBuscada - 1);
}
function naoTerminouTempoAnimacao(pessoa) {
    return pessoa.tempoProximaAnimacao > 0;
}
