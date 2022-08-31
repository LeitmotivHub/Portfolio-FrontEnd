import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isLogged= false;
  pers: Persona = new Persona ("", "", "", "", "", "", "", "", "", "", "");

  constructor(public datosPersona: PersonaService, private tokenService: TokenService ) { }

  ngOnInit(): void {

    this.datosPersona.getPersona().subscribe(data => {this.pers = data;});

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

}
