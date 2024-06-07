import { Pessoa } from "../models/pessoa.js";
import { musica } from "../util/dados.js";

export function controlarSubirPosicao(): void {
    // console.log(musica.momentoAtual, musica.momentos.length)
    // if (!acabouMomentos()) {
    //     // console.log(musica.pessoaPosicaoAcima)
    //     // if (cantorPassouPosicao()) {
    //     //     // subirPosicao();
    //     // }
    // }
}

function acabouMomentos(): Boolean {
   return musica.momentoAtual < musica.momentos.length;
}

function cantorPassouPosicao(): Boolean {
    return musica.pessoaCantando.tempo > musica.pessoaPosicaoAcima.tempo;
}

function subirPosicao(): void {

    // if (musica.pessoaCantando != undefined ) {
    //     // console.log(musica.pessoaCantando);
    //     // musica.pessoaCantando.setPosicao(musica.pessoaCantando.posicao - 1);   
    // }
         
    // musica.pessoaPosicaoAcima.descerPosicao();

    // animarAtualizacao(idDivDescendo, idDivSubindo);
    // reorganizarPosPosicao();
    // atualizarPessoas();
}

function animarAtualizacao(idDivDescendo: string, idDivSubindo: string): void {
    const pessoaDescendo = document.getElementById(idDivDescendo);
    const pessoaSubindo = document.getElementById(idDivSubindo);

    pessoaDescendo?.classList.add('descendo');
    pessoaSubindo?.classList.add('subindo');

    setTimeout(() => {
        pessoaDescendo?.classList.remove('descendo');
        pessoaSubindo?.classList.remove('subindo');
    }, 500);
}

function reorganizarPosPosicao(): void {
    musica.pessoas.sort((a: Pessoa, b: Pessoa) => a.posicao - b.posicao);
}