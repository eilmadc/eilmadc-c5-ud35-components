import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AltaClienteComponent } from './components/alta-cliente/alta-cliente.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ContactoDoneComponent } from './components/contacto-done/contacto-done.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AltaClienteComponent,
    ContactoComponent,
    ContactoDoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
