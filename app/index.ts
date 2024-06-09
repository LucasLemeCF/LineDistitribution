import { Pessoa } from './models/pessoa.js';
import { iniciarMusica } from './service/controlarMusica.js';
import { pessoas } from './util/dados.js';
import { atualizarPessoas, criaListaPessoas } from './view/listaPessoas.js';

const botao = document.getElementById('botaoIniciar');

botao.addEventListener('click', () => {
    iniciarMusica();
});

onload = () => {
    criaListaPessoas();
}

const botaoTeste = document.getElementById('botaoTeste');

botaoTeste.addEventListener('click', () => {
    const pessoaSubindo = document.getElementById("pessoa"+ (2).toString());
    pessoaSubindo?.classList.add('subindo');
    pessoas[1].subirPosicao();

    const pessoaDescendo = document.getElementById("pessoa"+ (1).toString());
    pessoaDescendo?.classList.add('descendo');
    pessoas[0].descerPosicao();

    // const pessoaDescendo2 = document.getElementById("pessoa"+ (1).toString());
    // pessoaDescendo2?.classList.add('descendo');
    // pessoas[0].descerPosicao();
  
    setInterval(() => {
        pessoaSubindo?.classList.remove('subindo');
        pessoaDescendo?.classList.remove('descendo');
        pessoas.sort((a: Pessoa, b: Pessoa) => a.posicao - b.posicao);
        atualizarPessoas();
    }, 1000);
});
