import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {


  //Declaramos las variables del formulario de contacto
  cnombre: string = "";
  cemail: string = "";
  cmensaje: string = "";
  cproblema: number = 0;
  ccontrol: boolean = false;


  //constructor: inicializamos las variables del formulario de contacto
  constructor(public router: Router) {
    this.cnombre = "";
    this.cemail = "";
    this.cmensaje = "";
    this.cproblema = 0;
    this.ccontrol = false;
  }

  ngOnInit() { }

  //Metodo para enviar formulario de contacto
  contact(nombre: string, email: string, mensaje: string, problema: number): void {
    // Validacion del problema es correcta, entonces realiza la asignacion de atributos y abre un alert
    if (problema == 5) {

      this.cnombre = nombre;
      this.cemail = email;
      this.cmensaje = mensaje;
      this.ccontrol = true;

      //Navegacion al componente hijo conctact-done y el paso de parametros.
      this.router.navigate(['contacto-done'], { queryParams: { data: [this.cnombre, this.cemail, this.cmensaje] } });
      alert("Mensaje enviado correctamente");


    } else {
      alert("Respuesta invalida, intentalo otra vez");
    }

  }

}
