import { Pessoa } from "../models/pessoa.js";
import { pessoas } from "../util/dados.js";

export function buscaPessoaPorId(id: number): Pessoa | null {
    return pessoas.find((pessoa: Pessoa) => pessoa.id === id) || null;
}

export function buscaPessoaPosicaoAcima(posicaoAtual: number): Pessoa | null {
    let posicaoAcima = posicaoAtual - 1;
    let pessoaPosicaoAcima: Pessoa | null = null;

    pessoas.forEach((pessoa: Pessoa) => {
        if (pessoa.posicao == posicaoAcima) {
            pessoaPosicaoAcima = pessoa;
        } 
   });

   return pessoaPosicaoAcima;
}