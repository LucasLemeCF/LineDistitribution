import { musica, pessoas } from "../util/dados.js";
import { atualizarPessoaDescendo, atualizarPessoaSubindo } from "../view/listaPessoas.js";
export function iniciarAnimacao() {
    // adicionarBorda();
    // removerBorda();
    if (temAnimacaoNaFila()) {
        const pessoa = musica.filaAnimacao[0];
        if (musica.tempoProximaAnimacao == 0) {
            animar(pessoa);
            musica.tempoProximaAnimacao = 10;
        }
        else if (musica.tempoProximaAnimacao > 0) {
            musica.tempoProximaAnimacao--;
        }
        if (musica.tempoProximaAnimacao == 1) {
            alterarPosicoes(pessoa);
            mostrarLog(pessoa);
            musica.filaAnimacao.shift();
            removeAnimacaoAnterior(pessoa.posicaoAnimacao);
        }
    }
}
function temAnimacaoNaFila() {
    return musica.filaAnimacao.length > 0;
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
function animar(pessoa) {
    const divPessoaSubindo = document.getElementById("pessoa" + (pessoa.posicaoAnimacao).toString());
    divPessoaSubindo?.classList.add('subindo');
    const divPessoaDescendo = document.getElementById("pessoa" + (pessoa.posicaoAnimacao - 1).toString());
    divPessoaDescendo?.classList.add('descendo');
}
function removeAnimacaoAnterior(posicaoAnimacao) {
    const subindo = document.getElementById("pessoa" + (posicaoAnimacao + 1).toString());
    subindo?.classList.remove('subindo');
    subindo?.classList.remove('descendo');
    const descendo = document.getElementById("pessoa" + (posicaoAnimacao).toString());
    descendo?.classList.remove('subindo');
    descendo?.classList.remove('descendo');
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
