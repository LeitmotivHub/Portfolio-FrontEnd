import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  pro: Proyecto[] = [];

  constructor(private proServ:ProyectoService, private tokenService:TokenService) { }


  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();


    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    //this.datosPorfolio.obtenerDatos().subscribe(data => {this.listaDeEducacion=data.education;});
  }



  cargarProyectos():void {
    this.proServ.lista().subscribe(data => {this.pro = data;})
  }

  delete(id?: number) {
    if (id != undefined) {
      this.proServ.delete(id).subscribe(
        data => {
          this.cargarProyectos();
          alert("Proyecto eliminado");
        }, err => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }
  }

}
