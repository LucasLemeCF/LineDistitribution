import { momentos, pessoas } from "../util/dados.js";
import { atualizarPessoas } from "../view/listaPessoas.js";
import { buscaPessoaPorId, buscaPessoaPosicaoAcima } from "./realizarBusca.js";
export function controlarSubirPosicao(numeroVez) {
    if (numeroVez > 0) {
        let pessoaCantando = buscaPessoaPorId(momentos[numeroVez - 1].idPessoa);
        let PessoaPosicaoAcima = buscaPessoaPosicaoAcima(pessoaCantando?.posicao || 0);
        if (pessoaCantando !== null && pessoaCantando?.tempo > (PessoaPosicaoAcima?.tempo || 0)) {
            console.log(pessoaCantando?.nome);
            subirPosicao(pessoaCantando?.posicao || 0);
        }
    }
}
function subirPosicao(posicaoAtual) {
    let posicaoAcima = posicaoAtual - 1;
    pessoas[posicaoAtual - 1].posicao--;
    pessoas[posicaoAcima - 1].posicao++;
    let idDivDescendo = 'pessoa' + pessoas[posicaoAcima - 1].posicao;
    let idDivSubindo = 'pessoa' + pessoas[posicaoAtual - 1].posicao;
    animarAtualizacao(idDivDescendo, idDivSubindo);
    reorganizarPosPosicao();
    atualizarPessoas();
}
function animarAtualizacao(idDivDescendo, idDivSubindo) {
    const pessoaDescendo = document.getElementById(idDivDescendo);
    const pessoaSubindo = document.getElementById(idDivSubindo);
    pessoaDescendo?.classList.add('descendo');
    pessoaSubindo?.classList.add('subindo');
    setTimeout(() => {
        pessoaDescendo?.classList.remove('descendo');
        pessoaSubindo?.classList.remove('subindo');
    }, 500);
}
function reorganizarPosPosicao() {
    pessoas.sort((a, b) => a.posicao - b.posicao);
}
