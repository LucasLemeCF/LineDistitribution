import { Momento } from "../models/momento.js";
import { Pessoa } from "../models/pessoa.js";
import { momentos, pessoas } from "../util/dados.js";
import { converterParaSegundos, paraCemMilisegundos } from "./converterTempo.js";
import { buscaPessoaPorId } from "./realizarBusca.js";

export function controlarCronometro(tempoMusica: number, numeroMomento: number): number {
    console.log(numeroMomento);
    if(!acabouMomentos(numeroMomento, momentos) && momentoDeCantar(tempoMusica, numeroMomento)) {
        pausarTodosCronometros();
        ativaCronometro(momentos[numeroMomento].idPessoa);
        numeroMomento++
        return numeroMomento;
    }
    return numeroMomento;
}

function acabouMomentos(numeroMomento: number, momentos: Momento[]): Boolean {
    return numeroMomento == momentos.length;
}

function momentoDeCantar(tempoMusica: number, numeroMomento: number): Boolean {
    return paraCemMilisegundos(momentos[numeroMomento].inicio) == tempoMusica;
}

function pausarTodosCronometros(): void {
    pessoas.forEach((pessoa: Pessoa) => {
        pausarCronometro(pessoa.id);
    });
}

function pausarCronometro(idPessoa: number): void {
    const pessoa = buscaPessoaPorId(idPessoa);
    if (pessoa) {
        clearInterval(pessoa.intervalId);
    }
}

function ativaCronometro(idPessoa: number): void {
    const pessoa = buscaPessoaPorId(idPessoa);
    
    if (pessoa) {
        const intervalId = setInterval(() => {
            pessoa.tempo++;
            const element = document.getElementById(`tempo${pessoa.id}`);
            if (element !== null) {
                element.innerText = converterParaSegundos(pessoa.tempo.toString());
            }
        }, 100);
        pessoa.intervalId = intervalId;
    }
}