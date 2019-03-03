import {
  Injectable
} from '@angular/core';
import {
  List
} from './models.interface';
@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  data: {
    lists: Array < List >
  } = {
    lists: [


    ],
  };
  // --------------------------- fin---------------

  getData() {
    return this.data;
  }
  triangle(){
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 7);
   
    function frame() {
      if (pos == 100) {
        console.log("llego flecha");
        clearInterval(id);}

        else {
          pos++;
  
          elem.style.left = pos + "%";
  
          elem.style.top = pos + '%';
  
  
  
        }

      }


  }
  rgiroRosa() {

    var list = document.getElementsByClassName("cont1") as HTMLCollectionOf < HTMLElement > ;
    var pes = -90;
    var idea = setInterval(rotate, 0.3);

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
  rgiroAzul() {

    var list1 = document.getElementsByClassName("cont3") as HTMLCollectionOf < HTMLElement > ;
    var pis = -90;
    var ideas = setInterval(Rote, 0.6);

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
  giroAzul() {

    var list1 = document.getElementsByClassName("cont3") as HTMLCollectionOf < HTMLElement > ;
    var pis = 0;
    var ideas = setInterval(Rote, 0.1);

    function Rote() {
      if (pis == -90) {
        clearInterval(ideas);
        console.log("g-cont3");

      } else {
        pis--;

        list1[0].style.transform = 'rotate(' + pis + 'deg)';
      }
    }
  }
  giroRosa() {

    var list = document.getElementsByClassName("cont1") as HTMLCollectionOf < HTMLElement > ;
    var pes = 0;
    var idea = setInterval(rotate, 0.1);

    function rotate() {

      if (pes == -90) {


        clearInterval(idea);

        console.log("g-cont1");

      } else {
        pes--;

        list[0].style.transform = 'rotate(' + pes + 'deg)';
      }
    }
  }
 circle(){

  var pas = 0;
  var ide = setInterval(uper, 15);

  function uper() {
    var circle = document.getElementById("circle");
    circle.style.display = "block";
    if (pas == 90) {
      clearInterval(ide);
      

        } else {
          pas++;

          circle.style.bottom = pas + '%';

        }

      }









 }
  
  addNewList(name: string) {
    var lista = document.getElementById("animate");
    lista.style.display = "block";

    setTimeout(this.triangle, 50);
    setTimeout(this.circle, 1000);
    setTimeout(this.giroRosa, 2500);
    setTimeout(this.giroAzul, 2900);
    
    
   
   


    console.log("llega al servicio");
    const now = new Date();
    const newList: List = {
      listId: Date.now(),
      createdAt: now,
      modifiedAt: now,
      name,
      tasks: [],
    };
    this.data.lists.push(newList);

  }


  vaciandoLocal() {
    this.data.lists = [];
    var circle = document.getElementById("circle");
    circle.style.display = "none";
    var lista = document.getElementById("animate");
    lista.style.display = "none";
    setTimeout(this.rgiroAzul,1);
    setTimeout(this.rgiroRosa,1);

  }

  deleteList(listId: number) {
    this.data.lists = this.data.lists.filter(list => list.listId !== listId);
  }
}
