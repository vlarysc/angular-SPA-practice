import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { ResponseUpdate } from '../usuarios.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  id!: string;
  request!: ResponseUpdate;

  constructor(
    private usuarioService: UsuariosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  update() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.usuarioService.getUsuario(this.id).subscribe((res) => {
      this.request = {
        name: `${res.data.first_name}  ${res.data.last_name}`,
        job: '',
      };
    });
  }
}
