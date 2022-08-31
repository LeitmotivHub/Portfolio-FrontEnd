export class Habilidad {

    id?: number;
    nombreHabilidad : string;
    logoUrl : string;
    porcentajeDeDominio : string;


    constructor(nombreHabilidad: string, logoUrl: string, porcentajeDeDominio: string){
        this.nombreHabilidad = nombreHabilidad;
        this.logoUrl = logoUrl;
        this.porcentajeDeDominio = porcentajeDeDominio;
        
    }


}
