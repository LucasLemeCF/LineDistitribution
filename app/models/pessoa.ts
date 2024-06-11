
export class Pessoa {
    private _id: number;
    private _posicao: number;
    private _nome: string;
    private _tempo: number;
    private _estaCantando: boolean;
    private _filaAnimacao: number;
    private _tempoProximaAnimacao: number;
    private _posicaoAnimacao: number;

    constructor(posicao: number, nome: string) {
        this._id = posicao;
        this._posicao = posicao;
        this._nome = nome;
        this._tempo = 0;
        this._estaCantando = false;
        this._filaAnimacao = 0;
        this._tempoProximaAnimacao = 0;
        this._posicaoAnimacao = posicao;
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

    public subirPosicaoAnimacao(): void {
        this._posicaoAnimacao--;
    }

    public descerPosicaoAnimacao(): void {
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

    get filaAnimacao() {
        return this._filaAnimacao;
    }

    get tempoProximaAnimacao() {
        return this._tempoProximaAnimacao;
    }

    get posicaoAnimacao() {
        return this._posicaoAnimacao;
    }

    set tempo(tempo: number) {
        this._tempo = tempo;
    }

    set estaCantando(estaCantando: boolean) {
        this._estaCantando = estaCantando;
    }

    set tempoProximaAnimacao(tempoProximaAnimacao: number) {
        this._tempoProximaAnimacao = tempoProximaAnimacao;
    }

    set filaAnimacao(animacao: number) {
        this._filaAnimacao = animacao;
    }

}