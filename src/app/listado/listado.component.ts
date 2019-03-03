import { Component,OnInit, Input } from '@angular/core';
import { List } from '../models.interface';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Input() lists: Array<List>;
  constructor() { }

  ngOnInit() {
  }

}
