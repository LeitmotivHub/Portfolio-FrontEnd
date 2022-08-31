import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  isLogged  = false;
 // pers: Persona = new Persona ("", "", "");

  // dataPorfolio:any;

  //constructor(private datosPorfolio:PorfolioService) { }

  pers: Persona = new Persona ("", "", "", "", "", "", "", "", "", "", "");


  constructor (public datosPersona: PersonaService, private router:Router, private tokenService: TokenService) {

  }


  ngOnInit(): void {
   // this.datosPorfolio.obtenerDatos().subscribe(data => {console.log(data); this.dataPorfolio= data;});

   if(this.tokenService.getToken()) {
    this.isLogged = true;
   } else {
    this.isLogged = false
   }


   this.datosPersona.getPersona().subscribe(data=> {this.pers = data});

  }


  onLogOut():void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login'])
  }


  toAbout() {
    document.getElementById("fotoDePerfil").scrollIntoView({behavior: "smooth"});
  }

  toEducacion() {
    document.getElementById("educacion").scrollIntoView({behavior:"smooth"});
  }

  toExperiencia() {
    document.getElementById("experiencia").scrollIntoView({behavior:"smooth"});
  }

  toAptitudes() {
    document.getElementById("habilidades").scrollIntoView({behavior:"smooth"});
  }

  toProyecto() {
    document.getElementById("proyectos").scrollIntoView({behavior:"smooth"});
  }

}
