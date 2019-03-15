import { Component} from '@angular/core';
import { DataManagerService } from '../data-manager.service';
@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css']
})
export class CreacionComponent  {
  editing: boolean = true;
  constructor(private dataService: DataManagerService) {}
 
  addList(ev)  {
    if (ev.keyCode === 13 && ev.target.value.trim() !== '') {
      this.dataService.addNewList(ev.target.value.trim());
      ev.target.value = '';
    }
  }
  vaciarLocal(){
    this.dataService.vaciandoLocal();
  }
  


}
