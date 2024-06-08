import { paraDecimoDeSegundo } from "../service/converterTempo.js";
import { pessoas } from "../util/dados.js";
export class Musica {
    constructor(tempoFinal) {
        this._tempoAtual = 0;
        this._tempoFinal = paraDecimoDeSegundo(tempoFinal);
        this._momentoAtual = 0;
    }
    incrementaTempoAtual() {
        this._tempoAtual++;
    }
    incrementaMomentoAtual() {
        this._momentoAtual++;
    }
    pessoaCantando() {
        return pessoas.find((pessoa) => pessoa.estaCantando == true);
    }
    get tempoAtual() {
        return this._tempoAtual;
    }
    get tempoFinal() {
        return this._tempoFinal;
    }
    get momentoAtual() {
        return this._momentoAtual;
    }
    set tempoAtual(tempoAtual) {
        this._tempoAtual = tempoAtual;
    }
    set tempoFinal(tempoFinal) {
        this._tempoFinal = tempoFinal;
    }
    set momentoAtual(momentoAtual) {
        this._momentoAtual = momentoAtual;
    }
}
