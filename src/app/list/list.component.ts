import {
  Component,
  Input
} from '@angular/core';
import {
  List
} from '../models.interface';
import {
  DataManagerService
} from '../data-manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  showDiv: boolean = false;
  editing: boolean = true;
  newListName: string;
  myTask = '';
  @Input() list: List;

  constructor(private dataService: DataManagerService) {}
  editListName() {
    console.log("cambionombre");


    if (confirm('Do you want to change the name list ' + this.list.name + ' by '+ this.newListName )) {
      this.editListNameSure();
    }
  }
  editListNameSure() {
    this.list.name = this.newListName;
    this.editing = !this.editing
  }

  editList() {
    this.editing = false;
    console.log('editing');
  }
  editLoose() {
    this.editing = true;
  }
  mostraTasks(ev: string) {
    this.dataService.mostrarTaskSer(ev);
    console.log("esto es ev" + ev);

  }

  delete() {
    if (confirm('Do you really want to delete the list ' + this.list.name)) {
      this.dataService.deleteList(this.list.listId);
    }
  }
  addTask(ev) {
    if (ev.target.value.trim() !== '') {
      this.dataService.addNewTask(ev.target.value.trim(), this.list);
      ev.target.value = '';
    }

  }
  siExiste() {
    this.showDiv = !this.showDiv;
    this.dataService.siExisteSer(this.showDiv);

  }

}
