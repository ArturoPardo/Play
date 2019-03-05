import { Component, Input } from '@angular/core';
import { List } from '../models.interface';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  showDiv: boolean = false;
  @Input() list: List;
  
  constructor(private dataService: DataManagerService) {}
myTask ='';
 mostraTasks(ev:string){
  
  this.dataService.mostrarTaskSer(ev);
  console.log("esto es ev"+ev);

 }



  delete() {
    if (confirm('Do you really want to delete the list ' + this.list.name)) {
      this.dataService.deleteList(this.list.listId);
    }
  }
  addTask(ev){
    if (ev.target.value.trim() !== '') {
      this.dataService.addNewTask(ev.target.value.trim(), this.list);
      ev.target.value = '';
      
    }
   
  }
  siExiste() {
   
    this.showDiv = !this.showDiv;
    console.log(this.showDiv );
   
  }
  
}
