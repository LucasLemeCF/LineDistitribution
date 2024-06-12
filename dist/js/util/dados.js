import { Momento } from "../models/momento.js";
import { Musica } from "../models/musica.js";
import { Pessoa } from "../models/pessoa.js";
// (Posição inicial, Nome)
export var pessoas = [
    new Pessoa(1, 'Dahye'),
    new Pessoa(2, 'Lenay'),
    new Pessoa(3, 'Luna'),
    new Pessoa(4, 'Misook'),
    new Pessoa(5, 'Rinah'),
    new Pessoa(6, 'Sazumi'),
];
// (Numero da posição inicial, Tempo no formato MM:SS:MS)
export var momentos = [
    new Momento(5, '00:00:00', '00:03:30'),
    new Momento(2, '00:04:30', '00:05:00'),
    new Momento(4, '00:07:00', '00:08:00'),
];
export var musica = new Musica('00:15:00');
