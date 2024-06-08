import { musica } from "../util/dados.js";
export function controlarSubirPosicao() {
    if (cantorPassouPosicao()) {
        subirPosicao();
    }
}
function acabouMomentos() {
    return musica.momentoAtual < musica.momentos.length;
}
function cantorPassouPosicao() {
    return musica.pessoaCantando.tempo > musica.pessoaPosicaoAcima.tempo;
}
function subirPosicao() {
    if (musica.pessoaCantando != undefined) {
        musica.pessoaPosicaoAcima.descerPosicao();
        // musica.pessoaCantando.subirPosicao();
        console.log(musica.pessoaCantando);
    }
    // animarAtualizacao(idDivDescendo, idDivSubindo);
    // reorganizarPosPosicao();
    // atualizarPessoas();
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
    musica.pessoas.sort((a, b) => a.posicao - b.posicao);
}
