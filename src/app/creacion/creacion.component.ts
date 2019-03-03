import { Component} from '@angular/core';
import { DataManagerService } from '../data-manager.service';
@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css']
})
export class CreacionComponent  {
  campoVacio = '';
  constructor(private dataService: DataManagerService) {}
  addList(ev)  {
     console.log('esta llegando!');
    if (ev.keyCode === 13 && ev.target.value.trim() !== '') {
      console.log('intro!');
      this.dataService.addNewList(ev.target.value.trim());
      ev.target.value = '';
    }
  }
  vaciarLocal(){
    this.dataService.vaciandoLocal();
  }
  
 
  

}
