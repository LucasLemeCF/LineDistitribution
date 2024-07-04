import { Momento } from "../models/momento.js";
import { Musica } from "../models/musica.js";
import { Pessoa } from "../models/pessoa.js";
// (Posição inicial, Nome)
export var pessoas = [
    new Pessoa(1, 'Dahye'),
    new Pessoa(2, 'Lenay'),
    new Pessoa(3, 'Luna'),
    new Pessoa(4, 'Misook'),
];
// (Numero da posição inicial, Tempo no formato MM:SS:MS)
export var momentos = [
    new Momento(3, '00:01:00', '00:16:08'),
    new Momento(3, '00:18:00', '00:20:00'),
    new Momento(2, '00:21:00', '00:25:00'),
    new Momento(2, '00:26:00', '00:28:00'),
    new Momento(1, '00:29:00', '00:36:00'),
    new Momento(4, '00:37:00', '00:43:00'),
    new Momento(1, '00:45:00', '00:52:00'),
    new Momento(4, '00:53:00', '01:00:00'),
    new Momento(3, '01:01:00', '01:05:00'),
    new Momento(3, '01:07:00', '01:08:50'),
    new Momento(2, '01:09:00', '01:17:00'),
    new Momento(3, '01:18:00', '01:26:00'),
    new Momento(2, '01:27:00', '01:32:00'),
    new Momento(1, '01:33:00', '01:35:00'),
    new Momento(4, '01:36:00', '01:42:50'),
    new Momento(1, '01:43:00', '01:51:00'),
    new Momento(2, '01:51:30', '01:56:00'),
    new Momento(1, '01:59:00', '02:08:00'),
    new Momento(2, '02:09:00', '02:12:00'),
    new Momento(4, '02:13:00', '02:16:00'),
    new Momento(3, '02:17:00', '02:20:00'),
    new Momento(1, '02:20:10', '02:23:30'),
    new Momento(3, '02:24:00', '02:28:00'),
    new Momento(3, '02:30:00', '02:31:00'),
    new Momento(1, '02:31:00', '02:32:00'),
    new Momento(4, '02:32:01', '02:39:30'),
    new Momento(1, '02:40:00', '02:45:30'),
];
export var musica = new Musica('02:50:00');
// Multiplica o tamanho da barra
export var tamanhoDaBarra = 3;
