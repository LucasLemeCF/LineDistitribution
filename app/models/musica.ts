import { paraDecimoDeSegundo } from "../service/converterTempo.js";
import { Momento } from "./momento.js";
import { Pessoa } from "./pessoa.js";

export class Musica {
    private _tempoAtual: number;
    private _tempoFinal: number;
    private _momentoAtual: number;
    private _pessoaCatanado: Pessoa;
    private _Pessoas: Pessoa[];
    private _Momentos: Momento[];
    
    constructor(tempoFinal: string, pessoas: Pessoa[], momentos: Momento[]) {
        this._tempoAtual = 0;
        this._tempoFinal = paraDecimoDeSegundo(tempoFinal);
        this._momentoAtual = 0;
        this._Pessoas = pessoas;
        this._Momentos = momentos;
        this._pessoaCatanado = this._Pessoas[this._Momentos[this._momentoAtual].idPessoa - 1];
    }

    public incrementaTempoAtual(): void {
        this._tempoAtual++;
    }

    public incrementaMomentoAtual(): void {
        this._momentoAtual++;
    }

    public alteraPessoaCantando(): void {
        if (this._momentoAtual < this._Momentos.length) {
            this._pessoaCatanado = this.pessoas[this.momentos[this.momentoAtual].idPessoa - 1]
        }
    }

    get pessoaPosicaoAcima(): Pessoa {
        return this._Pessoas.find((pessoa: Pessoa) => pessoa.posicao + 1 == this.pessoaCantando.posicao);
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

    get pessoaCantando(): Pessoa {
        return this._pessoaCatanado;
    }

    get pessoas() {
        return this._Pessoas;
    }

    get momentos() {
        return this._Momentos;
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

    set pessoas(pessoas: Pessoa[]) {
        this._Pessoas = pessoas;
    }

    set momentos(momentos: Momento[]) {
        this._Momentos = momentos;
    }
}