import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  RespostaUsuario,
  RespostaCreate,
  RequestCreate,
  RespostaUsuarioUnico,
  RespostaUpdate,
  ResponseUpdate,
} from './usuarios.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private url = 'https://reqres.in/api/users';

  constructor(private https: HttpClient) {}

  getUsuarios(): Observable<RespostaUsuario> {
    return this.https.get<RespostaUsuario>(this.url);
  }
  createUsuario(request: RequestCreate): Observable<RespostaCreate> {
    return this.https.post<RespostaCreate>(this.url, request);
  }
  getUsuario(id: string): Observable<RespostaUsuarioUnico> {
    const _url = `${this.url}/${id}`;
    return this.https.get<RespostaUsuarioUnico>(_url);
  }

  updateUsuario(
    id: string,
    request: RespostaUpdate
  ): Observable<ResponseUpdate> {
    const _url = `${this.url}/${id}`;
    return this.https.put<ResponseUpdate>(_url, request);
  }
}
