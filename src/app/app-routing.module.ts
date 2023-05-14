import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {
    path: 'alta_cliente',
    component: AltaClienteComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
