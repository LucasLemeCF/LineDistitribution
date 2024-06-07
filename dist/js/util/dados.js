import { Momento } from "../models/momento.js";
import { Musica } from "../models/musica.js";
import { Pessoa } from "../models/pessoa.js";
// (Posição inicial, Nome)
var pessoas = [
    new Pessoa(1, 'Dahye'),
    new Pessoa(2, 'Lenay'),
    new Pessoa(3, 'Luna'),
    new Pessoa(4, 'Misook'),
    new Pessoa(5, 'Rinah'),
    new Pessoa(6, 'Sazumi'),
];
// (Numero da posição inicial, Tempo no formato MM:SS:MS)
var momentos = [
    new Momento(5, '00:01:00'),
    new Momento(2, '00:02:00'),
    new Momento(3, '00:04:00'),
];
export var musica = new Musica('00:06:00', pessoas, momentos);
