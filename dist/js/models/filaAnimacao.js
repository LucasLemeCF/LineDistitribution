export class FilaAnimacao {
    constructor(pessoa, tempo, posicao) {
        this._pessoa = pessoa;
        this._tempo = tempo;
    }
    get pessoa() {
        return this._pessoa;
    }
    get tempo() {
        return this._tempo;
    }
}
