import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  titulo: string = '';
  descripcion: string = '';
  imgUrl: string;
  urlProyecto: string;
  fechaDeLanzamiento: string;



  constructor(private proServ: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.titulo, this.descripcion, this.imgUrl, this.urlProyecto, this.fechaDeLanzamiento);
    this.proServ.save(proyecto).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Error al añadir proyecto");
        this.router.navigate(['']);
      }
    )
  }




}
