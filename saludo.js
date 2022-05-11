var Persona = /** @class */ (function () {
    function Persona(anioNacimiento, nombre) {
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }
    Persona.prototype.cualEsTuNombre = function () {
        return "Mi nombre es " + this.nombre.split("  ");
    };
    ;
    Persona.prototype.cualEsTuEdad = function () {
        return "Mi edad es ";
    };
    ;
    Persona.prototype.cualEsTuGeneracion = function () {
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
    };
    Persona.prototype.calculartuEdad = function () {
        return "mi edad es " + (2022 - this.nacimiento);
    };
    return Persona;
}());
;
// Termina la definicion de la class persona 
var fede = new Persona(1984, "Federico");
console.log(fede.cualEsTuNombre());
console.log(fede.cualEsTuGeneracion());
console.log(fede.calculartuEdad());
