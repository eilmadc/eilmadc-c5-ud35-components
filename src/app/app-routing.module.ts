import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaClienteComponent } from './components/alta-cliente/alta-cliente.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ContactoDoneComponent } from './components/contacto-done/contacto-done.component';

const routes: Routes = [
  {
    //Alta de cliente
    path: 'alta-cliente',
    component: AltaClienteComponent
  },
  {
    //Formulario de Contacto de cliente
    path: 'contacto',
    component: ContactoComponent
  },
  {
    //Contacto realizado, formulario enviado.
    path:'contacto-done',
    component: ContactoDoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
