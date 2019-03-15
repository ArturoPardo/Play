import { Component } from '@angular/core';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {

  constructor(private dataService: DataManagerService) { }
  
  
 
}
