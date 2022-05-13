"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(anioNacimiento, nombre) {
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }
    cualEsTuNombre() {
        return "Mi nombre es " + this.nombre.split("  ");
    }
    ;
    cualEsTuEdad() {
        return "Mi edad es ";
    }
    ;
    cualEsTuGeneracion() {
        if (this.nacimiento < 1975) {
            return "Soy un Baby Boomer";
        }
        if (this.nacimiento > 1975 && this.nacimiento < 1999) {
            return "Soy un milenial";
        }
        if (this.nacimiento > 1999) {
            return "Soy un Centenial";
        }
        if (this.nacimiento < 2010) {
            return "Soy un Alfa";
        }
    }
    calculartuEdad() {
        return "mi edad es " + (2022 - this.nacimiento);
    }
}
exports.Persona = Persona;
;
