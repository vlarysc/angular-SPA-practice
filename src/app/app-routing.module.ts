import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './table/table.component';
import { CreateUserComponent } from './usuarios/create-user/create-user.component';
import { UpdateComponent } from './usuarios/update/update.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: '',
    component: UsuariosComponent,
  },
  {
    path: 'create',
    component: CreateUserComponent,
  },
  {
    path: 'update/:id',
    component: UpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
