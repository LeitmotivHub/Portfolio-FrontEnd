import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {

  pers: Persona = null;

  constructor(private persoServ: PersonaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.persoServ.getPersona().subscribe(
        data =>{
          this.pers = data;
        }, err =>{
          alert("Error al modificar la informacion");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.persoServ.update(id, this.pers).subscribe(
        data => {
          alert("Información Actualizada");
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar la informacion");
           this.router.navigate(['']);
        }
      )
    }
  
  }
  