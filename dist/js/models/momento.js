import { paraDecimoDeSegundo } from "../service/converterTempo.js";
export class Momento {
    constructor(idPessoa, inicio, fim) {
        this._idPessoa = idPessoa;
        this._inicio = paraDecimoDeSegundo(inicio);
        this._fim = paraDecimoDeSegundo(fim);
    }
    get idPessoa() {
        return this._idPessoa;
    }
    get inicio() {
        return this._inicio;
    }
    get fim() {
        return this._fim;
    }
}
