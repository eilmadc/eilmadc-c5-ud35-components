import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/* Componente para mostrar los datos del formulairo de contacto*/
@Component({
  selector: 'app-contacto-done',
  templateUrl: './contacto-done.component.html',
  styleUrls: ['./contacto-done.component.css']
})

//Implementa de onInit
export class ContactoDoneComponent implements OnInit {

  //Atributos de la clase.
  cnombre: string | number = "";
  cemail: string = "";
  cmensaje: string = "";
  cproblema: number = 0;

  constructor(public route: ActivatedRoute) {

  }

  ngOnInit(): void {
    //Variables que vienen de contacto component mediante suscripcion
    this.route.queryParams.subscribe((params: any) => {
      console.log(params);

      //asignacion de los datos a los atributos de la clase.
      this.cnombre = params.data[0];
      this.cemail = params.data[1];
      this.cmensaje = params.data[2];
    })
  }

}
