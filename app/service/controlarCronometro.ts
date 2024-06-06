import { Pessoa } from "../models/pessoa.js";
import { musica, pessoas } from "../util/dados.js";
import { converterParaSegundos } from "./converterTempo.js";
import { buscaPessoaPorId } from "./realizarBusca.js";

export function controlarCronometro(): void {
    if(!acabouMomentos() && momentoDeCantar()) {
        pausarTodosCronometros();
        ativaCronometro();
        musica.incrementaMomentoAtual();
    }
}

function acabouMomentos(): Boolean {
    return musica.momentoAtual == musica.momentos.length;
}

function momentoDeCantar(): Boolean {
    return musica.momentos[musica.momentoAtual].inicio == musica.tempoAtual;
}

export function pausarTodosCronometros(): void {
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

function ativaCronometro(): void {
    const pessoa = buscaPessoaPorId(musica.momentos[musica.momentoAtual].idPessoa);
    
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