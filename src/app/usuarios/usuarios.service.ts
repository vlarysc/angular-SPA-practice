import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespostaUsuario } from './usuarios.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<RespostaUsuario> {
    return this.http.get<RespostaUsuario>(this.url);
  }
}
