"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = require("./clases/Persona");
let fede = new Persona_1.Persona(1984, "Federico");
console.log(fede.cualEsTuNombre());
console.log(fede.cualEsTuGeneracion());
console.log(fede.calculartuEdad());
