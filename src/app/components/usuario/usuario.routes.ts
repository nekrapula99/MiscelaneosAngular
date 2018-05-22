import {  Routes } from '@angular/router';

import {UsuarioNuevoComponent} from './usuario-nuevo.component';
import {UsuarioEditarComponent} from './usuario-editar.component';
import {UsuarioDetalleComponent} from './usuario-detalle.component';

export const USUARIOS_ROUTES: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent }, // usuario/10/nuevo
  { path: 'editar', component: UsuarioEditarComponent }, // usuario/10/editar
  { path: 'detalle', component: UsuarioDetalleComponent }, // usuario/10/detalle
  { path: '**', pathMatch: 'full', redirectTo: 'editar' } //cualquier otra cosa lo tira al home
];
