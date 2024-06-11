import { iniciaAnimacao } from './service/controlarAnimacao.js';
import { iniciarMusica } from './service/controlarMusica.js';
import { criaListaPessoas } from './view/listaPessoas.js';
const botao = document.getElementById('botaoIniciar');
botao.addEventListener('click', () => {
    iniciarMusica();
});
onload = () => {
    criaListaPessoas();
    iniciaAnimacao();
};
