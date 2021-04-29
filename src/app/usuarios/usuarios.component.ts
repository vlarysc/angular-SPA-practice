import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { RespostaUsuario } from './usuarios.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  respostaUsuario!: RespostaUsuario;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    console.log(UsuariosComponent);
    this.usuariosService
      .getUsuarios()
      .subscribe((res) => (this.respostaUsuario = res));
  }
}
