export class Pessoa {
    constructor(posicao, nome) {
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
    set posicao(posicao) {
        this._posicao = posicao;
    }
    set tempo(tempo) {
        this._tempo = tempo;
    }
    set intervalId(intervalId) {
        this._intervalId = intervalId;
    }
}
