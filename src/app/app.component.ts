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
    if(this.triangles.length >1){
      
  
        // ----triangulo----------
var list = document .getElementsByClassName("cont1");
var pes =-90;
var idea = setInterval(rotate, 0.1);
function rotate() {
  if (pes ==0) {
    clearInterval(idea);
    console.log("girando");
  }
  else{
    pes++; 
    console.log(pes);
    list[0].style.transform ='rotate(' +pes+'deg)'; 
   
  }

}
// ----triangulo----------
    
    
    }
  
    var lista = document.getElementById("lista"); 
    lista.style.display = "none"; 
  
    var circle = document.getElementById("circle"); 
    circle.style.display = "none"; 




// ----function triangle-----------
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame, 7);
    function frame() {
      if (pos ==100) {

        // ----triangulo----------
var list = document .getElementsByClassName("cont1");
var pes = 0;
var idea = setInterval(rotate, 0.2);
function rotate() {
  if (pes ==-90) {
    clearInterval(idea);
    console.log("girando");
  }
  else{
    pes--; 
    console.log(pes);
    list[0].style.transform ='rotate(' +pes+'deg)'; 
   
  }

}
// ----triangulo----------
       
        console.log("50");
        clearInterval(id);
// ----circle-----------
       
        var pas= 0; 
        var ide = setInterval(uper, 15);
        function uper() {
          var circle = document.getElementById("circle"); 
          circle.style.display = "block"; 
          if (pas ==90) {
            clearInterval(ide);
// ----lista-----------
            var lista = document.getElementById("lista"); 
           lista.style.display = "block"; 
// ----lista-----------





          }
          else{
            pas++; 
           circle.style.bottom = pas+ '%'; 
             var lista = document.getElementById("lista"); 
             lista.style.display = "none"; 
             
          }
        }

// ----circle-----------

      } else {
        pos++; 
     
        elem.style.left = pos + "%"; 
        console.log("sale"+this.post);
        elem.style.top = pos+ '%'; 



      }
    }










  }
}
