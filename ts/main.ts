interface Employee {
  nombre: string
  apellido: string
  correoElectronico: string
  fechaNacimiento: Date
}

class SalesEmployee implements Employee {
  nombre: string
  apellido: string
  fechaNacimiento: Date
  correoElectronico: string
  unidadDeVenta: string
  zonaGeografica: string

  constructor(nombre: string, apellido: string, correoElectronico: string, fechaNacimiento: Date, unidadDeVenta: string, zonaGeografica: string){
    this.nombre = nombre
    this.apellido = apellido
    this.correoElectronico = correoElectronico
    this.fechaNacimiento = fechaNacimiento
    this.unidadDeVenta = unidadDeVenta
    this.zonaGeografica = zonaGeografica
  }

  getNombre(){
    return this.nombre
  }

  setNombre(newNombre: string){
    this.nombre = newNombre
  }

  getApellido(){
    return this.apellido
  }

  setApellido(newApellido: string){
    this.apellido = newApellido
  }

  getCorreoElectronico(){
    return this.correoElectronico
  }

  setCorreoElectronico(newCorreoElectronico: string){
    this.correoElectronico = newCorreoElectronico
  }

  getFechaNacimiento(){
    return this.fechaNacimiento
  }

  setFechaNacimiento(newFechaNacimiento: Date){
    this.fechaNacimiento = newFechaNacimiento
  }

  getUnidadDeVenta(){
    return this.unidadDeVenta
  }

  setUnidadDeVenta(newUnidadDeVenta){
    this.unidadDeVenta = newUnidadDeVenta
  }

  getZonaGeografica(){
    return this.unidadDeVenta
  }

  setZonaGeografica(newZonaGeografica){
    this.zonaGeografica = newZonaGeografica
  }
}

const addEmployee = (): void => {
  const nombre: string = (<HTMLInputElement>document.getElementById('name')).value
  const apellido: string = (<HTMLInputElement>document.getElementById('surname')).value
  const correoElectronico: string = (<HTMLInputElement>document.getElementById('email')).value
  const fechaNacimiento: Date = new Date((<HTMLInputElement>document.getElementById('birthDate')).value)
  const unidadDeVenta: string = (<HTMLInputElement>document.getElementById('sdUnit')).value
  const zonaGeografica: string = (<HTMLInputElement>document.getElementById('area')).value

  const Empleado1: SalesEmployee = new SalesEmployee(nombre, apellido, correoElectronico, fechaNacimiento, unidadDeVenta, zonaGeografica)

  console.log(Empleado1)
}