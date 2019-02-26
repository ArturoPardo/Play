import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'myapp';
  // triangles:string[]=[];
  triangles: string[] = JSON.parse(localStorage.getItem("text")) || []; //Intento cargar el array de localStorage o uno

  eliminarTarea(tarea) {
    
        console.log("eliminar tarea" +tarea);
       
          for(let i=0;i<this.triangles.length;i++){
          if(tarea ==this.triangles[i]){
            this.triangles.splice(i,1);
           
    }
  }
  this.guardaLocalStorage();
}
  





  Puta(){console.log("putaaaaaaaaa");}
  giroGlobal() {
  




    var list1 = document.getElementsByClassName("central") as HTMLCollectionOf < HTMLElement > ;
    var pis = 180;
    var ideas = setInterval(Rote, 0.1);

    function Rote() {
      if (pis == 0) {
        clearInterval(ideas);
        console.log("g-cont3");

      } else {
        pis--;

        list1[0].style.transform = 'rotate(' + pis + 'deg)';
      }
    }
  }

 vaciarLocal(){
  console.log("llega la funcion!");
  this.triangles=[];

  var circle = document.getElementById("circle");
    circle.style.display = "none";
    var animate = document.getElementById("animate");
   animate.style.top = '-10px';
    
this.giroAzul();
this.giroRosa();
 }

  // -------------------regreso-----------

  giroAzul() {

    var list1 = document.getElementsByClassName("cont3") as HTMLCollectionOf < HTMLElement > ;
    var pis = -90;
    var ideas = setInterval(Rote, 0.1);

    function Rote() {
      if (pis == 0) {
        clearInterval(ideas);
        console.log("g-cont3");

      } else {
        pis++;

        list1[0].style.transform = 'rotate(' + pis + 'deg)';
      }
    }
  }

  giroRosa() {

    var list = document.getElementsByClassName("cont1") as HTMLCollectionOf < HTMLElement > ;
    var pes = -90;
    var idea = setInterval(rotate, 0.1);

    function rotate() {

      if (pes == 0) {


        clearInterval(idea);

        console.log("g-cont1");

      } else {
        pes++;

        list[0].style.transform = 'rotate(' + pes + 'deg)';
      }
    }
  }
  // -------------------regreso-----------




  guardaLocalStorage() {
    localStorage.setItem("text", JSON.stringify(this.triangles)); //Intento guardarlo en localStorage
  }
 




  anyadirTarea(text) {
    
    if (this.triangles.length ==5) {
      
      if(confirm('Completed!! max 5 tasks!! - Do you want remove the list?' )){this.vaciarLocal();}
      
      console.log("5");}

    else{
    
    this.triangles.push(text);
    if (this.triangles.length == 5) { 
      setTimeout(this.giroAzul, 4000);
      setTimeout(this.giroRosa, 4000);
      setTimeout(this.giroGlobal, 5000);
      var lista = document.getElementById("animate");
      lista.style.display = "none";
      
      
     
      
  
  
      
    }
 
    this.guardaLocalStorage();
    if (this.triangles.length > 1) {
      this.giroAzul();
      this.giroRosa();



    }
    // ----escondo bola y lista-----------
    var lista = document.getElementById("lista");
    lista.style.display = "none";
    var circle = document.getElementById("circle");
    circle.style.display = "none";

    

    // ----function triangle-----------
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 7);

  
    // ......



    function frame() {
      if (pos == 100) {
        console.log("llego flecha");
         
          

        // ----triangulo----------
        var list = document.getElementsByClassName("cont1") as HTMLCollectionOf < HTMLElement > ;
        var pes = 0;
        var idea = setInterval(rotate, 0.2);

        function rotate() {
          if (pes == -90) {
            clearInterval(idea);
          } else {
            pes--;

            list[0].style.transform = 'rotate(' + pes + 'deg)';
          }
        }







        clearInterval(id);
       


        // ----circle-----------

        var pas = 0;
        var ide = setInterval(uper, 15);

        function uper() {
          var circle = document.getElementById("circle");
          circle.style.display = "block";
          if (pas == 90) {
            clearInterval(ide);
            // ----lista-----------
            var lista = document.getElementById("lista");
            lista.style.display = "block";
            // ----lista-----------

            // ----trianguloazul----------
            var list1 = document.getElementsByClassName("cont3") as HTMLCollectionOf < HTMLElement > ;
            var pis = 0;
            var ideas = setInterval(rotate, 0.2);

            function rotate() {
              if (pis == -90) {
                clearInterval(ideas);

              } else {
                pis--;

                list1[0].style.transform = 'rotate(' + pis + 'deg)';

              }

            }




          }
          // ----trianguloazul----------
          else {
            pas++;
            circle.style.bottom = pas + '%';
       

          }
        }

        // ----circle-----------

      } else {
        pos++;

        elem.style.left = pos + "%";

        elem.style.top = pos + '%';



      }
    }

    








  }
 
}
}