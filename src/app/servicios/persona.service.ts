import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  urlPerso = 'http://localhost:8080/personas/';


  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.urlPerso + 'traer/perfil');
  }

  public save(persona: Persona): Observable<any>{
    return this.http.post<any>(this.urlPerso + 'crear', persona);
  }

  public update(id: number, persona: Persona): Observable<any>{
    return this.http.put<any>(this.urlPerso + `editar/${id}`, persona);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.urlPerso + `borrar/${id}`);
  }

  
}
