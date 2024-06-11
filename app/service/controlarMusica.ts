import { Pessoa } from '../models/pessoa.js';
import { musica, pessoas } from '../util/dados.js';
import { adicionaTempoMusica } from '../view/tempoMusica.js';
import { iniciarAnimacao } from './controlarAnimacao.js';
import { controlarCronometro } from './controlarCronometro.js';
import { controlarSubirPosicao } from './controlarPosicao.js';

export function iniciarMusica(): void {
    const intervalId = setInterval(() => {
        if (!finalizaMusica(intervalId)) {
            controlarCronometro();
            controlarSubirPosicao();
        }

        iniciarAnimacao();

        musica.incrementaTempoAtual();
        
    }, 100);
}

function finalizaMusica(intervalId: number): Boolean {
    if (musica.tempoAtual == musica.tempoFinal) {
        adicionaTempoMusica();
        resultadoFinal();
        clearInterval(intervalId);
        return true;
    } else {
        return false;
    }
}

function resultadoFinal(): void {
    console.log('Fim da música');
    // organizaPosicao();
    pessoas.forEach((pessoa) => {
        console.log(pessoa.posicao + "º lugar " + pessoa.nome);
    });
    console.log(pessoas);
    removeTodasAnimacoes();
}

function organizaPosicao(): void {
    pessoas.sort((a: Pessoa, b: Pessoa) => a.posicao - b.posicao);
}

function removeTodasAnimacoes(): void {
    pessoas.forEach((pessoa) => {
        const subindo = document.getElementById("pessoa" + (pessoa.id).toString());
        subindo?.classList.remove('subindo');
        subindo?.classList.remove('descendo');
    
        const borda = document.getElementById("img" + (pessoa.id).toString());
        borda?.classList.remove('borda');
    });
}