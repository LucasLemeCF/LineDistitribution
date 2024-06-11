export class Pessoa {
    constructor(posicao, nome) {
        this._id = posicao;
        this._posicao = posicao;
        this._nome = nome;
        this._tempo = 0;
        this._estaCantando = false;
        this._tempoProximaAnimacao = 0;
        this._posicaoAnimacao = posicao;
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
    subirPosicaoAnimacao() {
        this._posicaoAnimacao--;
    }
    descerPosicaoAnimacao() {
        this._posicaoAnimacao++;
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
    get tempoProximaAnimacao() {
        return this._tempoProximaAnimacao;
    }
    get posicaoAnimacao() {
        return this._posicaoAnimacao;
    }
    set tempo(tempo) {
        this._tempo = tempo;
    }
    set estaCantando(estaCantando) {
        this._estaCantando = estaCantando;
    }
    set tempoProximaAnimacao(tempoProximaAnimacao) {
        this._tempoProximaAnimacao = tempoProximaAnimacao;
    }
}
