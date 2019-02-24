import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  triangles:string[]=[];

  anyadirTarea(text) {
    this.triangles.push(text);
    console.log(this.triangles);
// ----function triangle-----------
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame, 0.1);
    function frame() {
      if (pos ==100) {
        console.log("50");
        clearInterval(id);
      } else {
        pos++; 
       let pe=50;
        elem.style.left = pos + "%"; 
        console.log("sale"+this.post);
        elem.style.top = pos+ '%'; 
      }
    }










  }
}
