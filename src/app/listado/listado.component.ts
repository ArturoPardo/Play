import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Input() arrData;
  @Output() borrarTarea = new EventEmitter();
  borrado(tarea){
    this.borrarTarea.emit(tarea);
    console.log('borrarTarea');
  }
  constructor() { }

  ngOnInit() {
  }

}
