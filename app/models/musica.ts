import { paraDecimoDeSegundo } from "../service/converterTempo.js";
import { pessoas } from "../util/dados.js";
import { Pessoa } from "./pessoa.js";

export class Musica {
    private _tempoAtual: number;
    private _tempoFinal: number;
    private _momentoAtual: number;
    private _filaAnimacao: Pessoa[];
    private _tempoProximaAnimacao: number;
    
    constructor(tempoFinal: string) {
        this._tempoAtual = 0;
        this._tempoFinal = paraDecimoDeSegundo(tempoFinal);
        this._momentoAtual = 0;
        this._filaAnimacao = [];
        this._tempoProximaAnimacao = 0;
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

    public adicionaFilaAnimacao(pessoa: Pessoa): void {
        this._filaAnimacao.push(pessoa);
    }

    public removeFilaAnimacao(): void {
        this._filaAnimacao.shift();
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

    get filaAnimacao() {
        return this._filaAnimacao;
    }

    get tempoProximaAnimacao() {
        return this._tempoProximaAnimacao;
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

    set tempoProximaAnimacao(tempoProximaAnimacao: number) {
        this._tempoProximaAnimacao = tempoProximaAnimacao;
    }
}