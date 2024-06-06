import { paraDecimoDeSegundo } from "../service/converterTempo.js";
export class Musica {
    constructor(tempoFinal, pessoas, momentos) {
        this._tempoAtual = 0;
        this._tempoFinal = paraDecimoDeSegundo(tempoFinal);
        this._momentoAtual = 0;
        this._Pessoas = pessoas;
        this._Momentos = momentos;
    }
    incrementaTempoAtual() {
        this._tempoAtual++;
    }
    incrementaMomentoAtual() {
        this._momentoAtual++;
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
    get pessoas() {
        return this._Pessoas;
    }
    get momentos() {
        return this._Momentos;
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
    set pessoas(pessoas) {
        this._Pessoas = pessoas;
    }
    set momentos(momentos) {
        this._Momentos = momentos;
    }
}
