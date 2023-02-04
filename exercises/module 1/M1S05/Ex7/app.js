import Time from './Time.js';
import Partida from './Partida.js';

const timeA = new Time("Time DevInHouse", "DIH");
const timeB = new Time("Time Orientados a Objetos", "POO");

const partida1 = new Partida("DIH", 3, "POO", 2);
const partida2 = new Partida("POO", 1, "DIH", 1);

timeA.computarPartida(partida1);
timeB.computarPartida(partida1);

timeA.computarPartida(partida2);
timeB.computarPartida(partida2);

console.log("Situacao do Time DevInHouse");
timeA.exibirSituacao();

console.log("Situacao do Time Orientados a Objetos");
timeB.exibirSituacao();
