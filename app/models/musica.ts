import { Momento } from "./momento.js";
import { Pessoa } from "./pessoa.js";

export interface Musica {
    Pessoa: Pessoa;
    Momento: Momento[];  
}