import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './table/table.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
