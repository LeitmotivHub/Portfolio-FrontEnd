export class Proyecto {
    id? : number;
    titulo : string;
    descripcion : string;
    imgUrl: string;
    urlProyecto: string;
    fechaDeLanzamiento: string;

    constructor(titulo: string, descripcion: string, imgUrl: string, urlProyecto: string, fechaDeLanzamiento: string){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imgUrl = imgUrl;
        this.urlProyecto = urlProyecto;
        this.fechaDeLanzamiento = fechaDeLanzamiento;
        
    }
}
