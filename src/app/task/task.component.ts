import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models.interface';
import { DataManagerService } from '../data-manager.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  constructor(private dataService: DataManagerService) { }
  
  deleteTask() {
    if (confirm('Do you really want to delete the list ' + this.task.text)) {
      this.dataService.deleteTaskSer(this.task);
    }
  }
  ngOnInit() {
  }

}
