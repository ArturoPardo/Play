import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css']
})
export class CreacionComponent implements OnInit {
  @Output() datoExportar = new EventEmitter();
  campoVacio = '';
  primeraFun(ev) {
    console.log('esta llegando!');
    if (ev.keyCode === 13 && this.campoVacio.trim() !== '') {
      console.log('La tarea para añadir es:', this.campoVacio);
      this.datoExportar.emit(this.campoVacio.trim());
      this.campoVacio = '';}
    
    }
  constructor() { }

  ngOnInit() {
  }

}
