export class Momento {
    private _idPessoa: number;
    private _inicio: string;

    constructor(idPessoa: number, inicio: string) {
        this._idPessoa = idPessoa;
        this._inicio = inicio;
    }

    get idPessoa() {
        return this._idPessoa;
    }

    get inicio() {
        return this._inicio;
    }
}