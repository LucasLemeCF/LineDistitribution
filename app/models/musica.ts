import { paraDecimoDeSegundo } from "../service/converterTempo.js";
import { pessoas } from "../util/dados.js";
import { Pessoa } from "./pessoa.js";

export class Musica {
    private _tempoAtual: number;
    private _tempoFinal: number;
    private _momentoAtual: number;
    
    constructor(tempoFinal: string) {
        this._tempoAtual = 0;
        this._tempoFinal = paraDecimoDeSegundo(tempoFinal);
        this._momentoAtual = 0;
    }

    public incrementaTempoAtual(): void {
        this._tempoAtual++;
    }

    public incrementaMomentoAtual(): void {
        this._momentoAtual++;
    }

    public pessoaCantando(): Pessoa {
        return pessoas.find((pessoa: Pessoa) => pessoa.estaCantando == true);
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

    set tempoAtual(tempoAtual: number) {
        this._tempoAtual = tempoAtual;
    }

    set tempoFinal(tempoFinal: number) {
        this._tempoFinal = tempoFinal;
    }

    set momentoAtual(momentoAtual: number) {
        this._momentoAtual = momentoAtual;
    }
}