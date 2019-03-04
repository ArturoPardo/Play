import { Injectable } from '@angular/core'; 
import { List, Task} from './models.interface';
  

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  data: {
    lists: Array < List >
  } = {
    lists: [],
  };
  // --------------------------- fin---------------

  getData() {
    return this.data;
  }
  triangle() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 7);

    function frame() {
      if (pos == 100) {
        console.log("llego flecha");
        clearInterval(id);
      } else {
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
  circle() {
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
    setTimeout(this.giroRosa, 1000);
    setTimeout(this.circle, 1500);
    setTimeout(this.giroAzul, 3000);

    console.log("llega al servicio");
    const now = new Date();
    const newList: List = {
      listId: Date.now(),
      createdAt: now,
      modifiedAt: now,
      name,
      tasks: [],
    };
    if(this.data.lists.length == 5 ){ if (confirm('Completed list!! - Remove the all list? ')) {
      this.vaciandoLocal();
    }}
    else{
      this.data.lists.push(newList);
      console.log(this.data.lists.length);
    }
 
  }

  mostrarTaskSer(ev:string){
    const now = new Date();
    const newList: List = {
      listId: Date.now(),
      createdAt: now,
      modifiedAt: now,
      name,
      tasks: [],
    };
    console.log("esto llegaaaaaa" +ev);

    let arreglo = this.data.lists;
   let busqueda = ev;
    console.log("esto busqueda" +busqueda);
    let indice = arreglo.findIndex(list=> list.name=== busqueda);
    console.log("El elemento buscado está en el índice ", indice);
    
  var lista = document.getElementsByClassName("tasks") as HTMLCollectionOf < HTMLElement > ;



  lista[indice].style.display = "block";

  

  }

  addNewTask(text: string, list: List) {
    const newTask: Task = {
      listId: list.listId,
      taskId: Date.now(),
      text,
      color: '',
      completed: false,
      createdAt: new Date(),
      modifiedAt: new Date()
    };
   
    this.data.lists = this.data.lists.map(listObj => {
      if (listObj.listId === list.listId) {

        if(listObj.tasks.length == 5 ){ if (confirm('Completed Task list!! - Remove the all Tasks list? ')) {
          console.log(listObj.tasks.length);
        }}

        else{listObj.tasks.push(newTask);}
        
        
      }
      return listObj;
    });
  }

  vaciandoLocal() {
    this.data.lists = [];
    var circle = document.getElementById("circle");
    circle.style.display = "none";
    var lista = document.getElementById("animate");
    lista.style.display = "none";
    setTimeout(this.rgiroAzul, 1);
    setTimeout(this.rgiroRosa, 1);

  }

  deleteList(listId: number) {
    this.data.lists = this.data.lists.filter(list => list.listId !== listId);
  }
  deleteTaskSer(task:Task) {
    console.log('mi id task' +task.taskId);
    console.log('mi data'+this.data.lists);
  
    this.data.lists = this.data.lists.map(listObj=>{
      if(listObj.listId === task.listId){
        console.log("premio");
        listObj.tasks = listObj.tasks.filter(objTask => objTask.taskId !== task.taskId)
      }
      return listObj;
    });
    
   
    
  }
}
