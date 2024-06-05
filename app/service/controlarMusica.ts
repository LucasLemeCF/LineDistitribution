import { adicionaTempoMusica } from '../view/tempoMusica.js';
import { controlarCronometro } from './controlarCronometro.js';

var tempoMusica: number; 
tempoMusica = 0;

export function iniciarMusica(): void {
    let numeroMomento = 0;

    setInterval(() => {
        
        tempoMusica++;

        adicionaTempoMusica(tempoMusica);
        numeroMomento = controlarCronometro(tempoMusica, numeroMomento);
        // controlarSubirPosicao(tempoMusica);
        
    }, 100);
}