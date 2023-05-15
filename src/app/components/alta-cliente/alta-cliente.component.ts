import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

    clientes= [
    {id: 0, nombre: 'Pepe' , cif: '32424A', direccion: 'C/de la Oca', group: 3},
    {id: 1, nombre: 'Ana' , cif: '422424A', direccion: 'C/del agua', group: 4},
  ];

  //Declaramos las variables del formulario de alta de clienetes
  cnombre: string = "";
  ccif: string = "";
  cdireccion: string = "";
  cgroup: number = 0;

  //constructor: inicializamos las variables del formulario de alta de clienetes
  constructor() {
    this.cnombre = "";
    this.ccif = "";
    this.cdireccion = "";
    this.cgroup = 0;
  }

  ngOnInit(): void {
    console.log(this.clientes);
  }

  //Metodo para añadir un usuario
  addCliente(cif: string, nombre: string, direccion: string, group: number): void {
    console.log(this.clientes);
    this.cnombre = nombre;
    this.ccif = cif;
    this.cdireccion = direccion;
    this.cgroup = group;

    this.clientes.push({id: this.clientes.length+1, nombre: this.cnombre , cif: this.ccif, direccion: this.cdireccion, group: 1});


  }


}
