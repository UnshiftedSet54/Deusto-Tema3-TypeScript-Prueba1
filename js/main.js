var SalesEmployee = /** @class */ (function () {
    function SalesEmployee(nombre, apellido, correoElectronico, fechaNacimiento, unidadDeVenta, zonaGeografica) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correoElectronico = correoElectronico;
        this.fechaNacimiento = fechaNacimiento;
        this.unidadDeVenta = unidadDeVenta;
        this.zonaGeografica = zonaGeografica;
    }
    SalesEmployee.prototype.getNombre = function () {
        return this.nombre;
    };
    SalesEmployee.prototype.setNombre = function (newNombre) {
        this.nombre = newNombre;
    };
    SalesEmployee.prototype.getApellido = function () {
        return this.apellido;
    };
    SalesEmployee.prototype.setApellido = function (newApellido) {
        this.apellido = newApellido;
    };
    SalesEmployee.prototype.getCorreoElectronico = function () {
        return this.correoElectronico;
    };
    SalesEmployee.prototype.setCorreoElectronico = function (newCorreoElectronico) {
        this.correoElectronico = newCorreoElectronico;
    };
    SalesEmployee.prototype.getFechaNacimiento = function () {
        return this.fechaNacimiento;
    };
    SalesEmployee.prototype.setFechaNacimiento = function (newFechaNacimiento) {
        this.fechaNacimiento = newFechaNacimiento;
    };
    SalesEmployee.prototype.getUnidadDeVenta = function () {
        return this.unidadDeVenta;
    };
    SalesEmployee.prototype.setUnidadDeVenta = function (newUnidadDeVenta) {
        this.unidadDeVenta = newUnidadDeVenta;
    };
    SalesEmployee.prototype.getZonaGeografica = function () {
        return this.unidadDeVenta;
    };
    SalesEmployee.prototype.setZonaGeografica = function (newZonaGeografica) {
        this.zonaGeografica = newZonaGeografica;
    };
    return SalesEmployee;
}());
var addEmployee = function () {
    var nombre = document.getElementById('name').value;
    var apellido = document.getElementById('surname').value;
    var correoElectronico = document.getElementById('email').value;
    var fechaNacimiento = new Date(document.getElementById('birthDate').value);
    var unidadDeVenta = document.getElementById('sdUnit').value;
    var zonaGeografica = document.getElementById('area').value;
    var Empleado1 = new SalesEmployee(nombre, apellido, correoElectronico, fechaNacimiento, unidadDeVenta, zonaGeografica);
    console.log(Empleado1);
};
