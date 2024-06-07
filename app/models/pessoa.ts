export class Pessoa {
    private _id: number;
    private _posicao: number;
    private _nome: string;
    private _tempo: number;

    constructor(posicao: number, nome: string) {
        this._id = posicao;
        this._posicao = posicao;
        this._nome = nome;
        this._tempo = 0;
    }

    public incrementaTempo(): void {
        this._tempo++;
    }

    public subirPosicao(): void {
        this._posicao--;
    }

    public descerPosicao(): void {
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

    set posicao(posicao: number) {
        this._posicao = posicao;
    }

    set tempo(tempo: number) {
        this._tempo = tempo;
    }
}