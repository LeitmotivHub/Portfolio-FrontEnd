export class Experiencia {

    id? : number;
    puesto : string;
    empresa : string;
    logo: string;
    actividades: string;
    inicio: string;
    egreso: string;
    urlEmpresa : string;

    constructor(puesto: string, empresa: string, logo: string, actividades: string, inicio: string, egreso: string, urlEmpresa: string){
        this.puesto = puesto;
        this.empresa = empresa;
        this.logo = logo;
        this.actividades = actividades;
        this.inicio = inicio;
        this.egreso = egreso;
        this.urlEmpresa = urlEmpresa;
    }
}
