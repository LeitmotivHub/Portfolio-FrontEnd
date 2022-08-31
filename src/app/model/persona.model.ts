export class Persona {
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    ocupacion: String;
    acercaDe: String;
    banner: String;
    email: String;
    linkedinUrl: String;
    githubUrl: String;
    igUrl: String;
    twitterUrl: String;


    constructor (nombre: String, apellido: String, img: String, ocupacion: String, acercaDe: String, banner: String, email: String, linkedinUrl: String, githubUrl: String, igUrl: String, twitterUrl: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.ocupacion = ocupacion;
        this.acercaDe = acercaDe;
        this.banner = banner;
        this.email = email;
        this.linkedinUrl = linkedinUrl;
        this.githubUrl = githubUrl;
        this.igUrl = igUrl;
        this.twitterUrl= twitterUrl;

    }
}