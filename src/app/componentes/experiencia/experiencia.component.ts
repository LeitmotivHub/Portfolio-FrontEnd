import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  exp: Experiencia[] = [];

  constructor(private expServ:ExperienciaService, private tokenService:TokenService) { }


  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();


    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    //this.datosPorfolio.obtenerDatos().subscribe(data => {this.listaDeEducacion=data.education;});
  }



  cargarExperiencia():void {
    this.expServ.lista().subscribe(data => {this.exp = data;})
  }

  delete(id?: number) {
    if (id != undefined) {
      this.expServ.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
          alert("Experiencia eliminada");
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}
