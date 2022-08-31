import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {

  hab: Habilidad[] = [];

  habCast : any = [];

  constructor(private habServ:HabilidadService, private tokenService:TokenService) { }


  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidad();


    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    //this.datosPorfolio.obtenerDatos().subscribe(data => {this.listaDeEducacion=data.education;});
  }



  cargarHabilidad():void {
    this.habServ.lista().subscribe(data => {
      this.hab = data;
     this.habCast = this.hab.map(habilidad => {parseInt(habilidad.porcentajeDeDominio); return habilidad});
    })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.habServ.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }

}
