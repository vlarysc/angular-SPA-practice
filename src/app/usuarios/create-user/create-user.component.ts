import { Component, OnInit } from '@angular/core';
import { RequestCreate, RespostaCreate } from '../usuarios.model';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  request: RequestCreate = {
    name: '',
    job: '',
  };

  response!: RespostaCreate;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {}

  save() {
    this.usuariosService.createUsuario(this.request).subscribe((res) => {
      this.response = res;
    });
  }
}
