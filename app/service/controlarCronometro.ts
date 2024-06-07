import { musica } from "../util/dados.js";
import { alteraTempo } from "../view/listaPessoas.js";

export function controlarCronometro(): void {
    if (musica.pessoaCantando != undefined) {
        musica.pessoaCantando.incrementaTempo();    
        alteraTempo();
    }

    if (acabouMomento()) {
        musica.incrementaMomentoAtual();
        musica.alteraPessoaCantando();
    }
}

function acabouMomento(): Boolean {
    return musica.momentoAtual < musica.momentos.length && 
        musica.tempoAtual == musica.momentos[musica.momentoAtual].inicio;
}