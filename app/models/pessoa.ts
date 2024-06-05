export class Pessoa {
    private _id: number;
    private _posicao: number;
    private _nome: string;
    private _tempo: number;
    private _intervalId: number;

    constructor(posicao: number, nome: string) {
        this._id = posicao;
        this._posicao = posicao;
        this._nome = nome;
        this._tempo = 0;
        this._intervalId = 0;
    }

    get id() {
        return this._id;
    }

    get posicao() {
        return this._posicao;
    }

    get nome() {
        return this._nome;
    }

    get tempo() {
        return this._tempo;
    }

    get intervalId() {
        return this._intervalId;
    }

    set posicao(posicao: number) {
        this._posicao = posicao;
    }

    set tempo(tempo: number) {
        this._tempo = tempo;
    }

    set intervalId(intervalId: number) {
        this._intervalId = intervalId;
    }
}