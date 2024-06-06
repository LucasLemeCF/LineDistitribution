import { paraDecimoDeSegundo } from "../service/converterTempo.js";
export class Momento {
    constructor(idPessoa, inicio) {
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
