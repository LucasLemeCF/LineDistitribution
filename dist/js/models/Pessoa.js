export class Pessoa {
    constructor(posicao, nome) {
        this._id = posicao;
        this._posicao = posicao;
        this._nome = nome;
        this._tempo = 0;
        this._estaCantando = false;
    }
    incrementaTempo() {
        this._tempo++;
    }
    subirPosicao() {
        this._posicao--;
    }
    descerPosicao() {
        this._posicao++;
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
    get estaCantando() {
        return this._estaCantando;
    }
    set tempo(tempo) {
        this._tempo = tempo;
    }
    set estaCantando(estaCantando) {
        this._estaCantando = estaCantando;
    }
}
