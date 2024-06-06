import { musica, pessoas } from "../util/dados.js";
import { converterParaSegundos } from "./converterTempo.js";
import { buscaPessoaPorId } from "./realizarBusca.js";
export function controlarCronometro() {
    if (!acabouMomentos() && momentoDeCantar()) {
        pausarTodosCronometros();
        ativaCronometro();
        musica.incrementaMomentoAtual();
    }
}
function acabouMomentos() {
    return musica.momentoAtual == musica.momentos.length;
}
function momentoDeCantar() {
    return musica.momentos[musica.momentoAtual].inicio == musica.tempoAtual;
}
export function pausarTodosCronometros() {
    pessoas.forEach((pessoa) => {
        pausarCronometro(pessoa.id);
    });
}
function pausarCronometro(idPessoa) {
    const pessoa = buscaPessoaPorId(idPessoa);
    if (pessoa) {
        clearInterval(pessoa.intervalId);
    }
}
function ativaCronometro() {
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
