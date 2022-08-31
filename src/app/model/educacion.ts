export class Educacion {

    id?: number;
    carrera: string;
    institucion: string;
    logoUrl: string;
    fechaInicio: string;
    fechaEgreso: string;

    constructor(carrera: string, institucion: string, logoUrl: string, fechaInicio: string, fechaEgreso: string){
        this.carrera = carrera;
        this.institucion = institucion;
        this.logoUrl = logoUrl;
        this.fechaInicio = fechaInicio;
        this.fechaEgreso = fechaEgreso;
    }
}
