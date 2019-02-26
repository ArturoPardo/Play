import { Component,  Input } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'myapp';
  // triangles:string[]=[];
  triangles: string[] = JSON.parse(localStorage.getItem("text")) || []; //Intento cargar el array de localStorage o uno


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
    this.triangles.push(text);
console.log("jjjj" +this.Data);
 
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
            var lista = document.getElementById("lista");
            lista.style.display = "none";

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
