import { paraDecimoDeSegundo } from "../service/converterTempo.js";

export class Momento {
    private _idPessoa: number;
    private _inicio: number;

    constructor(idPessoa: number, inicio: string) {
        this._idPessoa = idPessoa;
        this._inicio = paraDecimoDeSegundo(inicio);
    }

    get idPessoa() {
        return this._idPessoa;
    }

    get inicio() {
        return this._inicio;
    }
}