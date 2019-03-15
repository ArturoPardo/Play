import {
  Injectable
} from '@angular/core';
import {
  List,
  Task
} from './models.interface';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  numero: number;
  triangles: string[] = [];

  data: {
    lists: Array < List >
  } = {
    lists: []

  };
  // --------------------------- Para saber si se abrió las task de una lista y se cerraron. Se almacena en el array triangles---------------

  siExisteSer(showDiv: boolean) {
    var i = 0;
    if (showDiv == true) {
      this.triangles.push("i");
    } else {
      this.triangles.splice(i, 1);
    }
  }
  // --------------------------- fin. Se almacena en el array triangles---------------
  getData() {
    return this.data;
  }
  // --------------------------------flecha rosa-------
  triangle() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 7);

    function frame() {
      if (pos == 100) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.left = pos + "%";
        elem.style.top = pos + '%';
      }
    }
  }
  // --------------------------------fin flecha rosa-------
   // --------------------------------retornos-------
  rgiroRosa() {
    var list = document.getElementsByClassName("cont1") as HTMLCollectionOf < HTMLElement > ;
    var rrosa = -90;
    var idea = setInterval(rotate, 0.3);
    function rotate() {
      if (rrosa == 0) {
        clearInterval(idea);
      } else {
        rrosa++;
        list[0].style.transform = 'rotate(' + rrosa + 'deg)';
      }
    }
  }
  rgiroAzul() {
    var list1 = document.getElementsByClassName("cont3") as HTMLCollectionOf < HTMLElement > ;
    var razul = -90;
    var ideas = setInterval(Rote, 0.6);
    function Rote() {
      if (razul == 0) {
        clearInterval(ideas);
      } else {
        razul++;
        list1[0].style.transform = 'rotate(' + razul + 'deg)';
      }
    }
  }
  
  rgiroVerde() {
    var list = document.getElementsByClassName("cont") as HTMLCollectionOf < HTMLElement > ;
    var rot = -90;
    var despl = 134;
    var pas = 90;
    var idea = setInterval(rotate, 5);
    var idea2 = setInterval(despla, 5);
    var idea3 = setInterval(circle, 1);

    function rotate() {
      if (rot == 0) {
        clearInterval(idea);
      } else {
        rot++;
        list[0].style.transform = 'rotate(' + rot + 'deg)';
      }
    }

    function despla() {
      if (despl == 0) {
        clearInterval(idea2);
      } else {
        despl--;
        list[0].style.marginTop = despl + 'px';
      }
    }

    function circle() {
      var circle = document.getElementById("circle");
      circle.style.display = "block";
      if (pas == 0) {
        clearInterval(idea3);
        circle.style.display = "none";
      } else {
        pas--;
        circle.style.bottom = pas + '%';
      }
    }
  }

  // ------------------------crono----------------
  rCrono(){
    var roto = document.getElementById("roto");
    var a = 0;
    roto.style.transform = 'rotate(' + a + 'deg)';
    console.log("esto es la rotacion" + a);  
  }
   // --------------------------------fin retornos-------

  giroAzul() {
    var list1 = document.getElementsByClassName("cont3") as HTMLCollectionOf < HTMLElement > ;
    var gazul = 0;
    var ideas = setInterval(Rote, 0.1);

    function Rote() {
      if (gazul == -90) {
        clearInterval(ideas);
      } else {
        gazul--;
        list1[0].style.transform = 'rotate(' + gazul + 'deg)';
      }
    }
  }
  giroRosa() {
    var list = document.getElementsByClassName("cont1") as HTMLCollectionOf < HTMLElement > ;
    var grosa = 0;
    var idea = setInterval(rotate, 0.1);

    function rotate() {
      if (grosa == -90) {
        clearInterval(idea);
      } else {
        grosa--;
        list[0].style.transform = 'rotate(' + grosa + 'deg)';
      }
    }
  }
  giroVerde() {
    var list = document.getElementsByClassName("cont") as HTMLCollectionOf < HTMLElement > ;
    var rot = 0;
    var desp = 0;
    var circle_a = 90;
     var idea = setInterval(rotate, 5);
    var idea2 = setInterval(despl, 5);
    var idea3 = setInterval(circle_m, 1);

    function rotate() {
      if (rot == -90) {
        clearInterval(idea);
      } else {
        rot--;
        list[0].style.transform = 'rotate(' + rot + 'deg)';
      }
    }

    function despl() {
      if (desp == 134) {
        clearInterval(idea2);
      } else {
        desp++;
        list[0].style.marginTop = desp + 'px';
      }
    }

    function circle_m() {
      var circle = document.getElementById("circle");
      circle.style.display = "block";
      if (circle_a == 0) {
        clearInterval(idea3);
      } else {
        circle_a--;
        circle.style.bottom = circle_a + '%';
      }
    }
  }
  circle() {
    var up = 0;
    var ide = setInterval(uper, 15);
    function uper() {
      var circle = document.getElementById("circle");
      circle.style.display = "block";
      if (up == 93) {
        clearInterval(ide);
      } else {
        up++;
        circle.style.bottom = up + '%';
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
    const now = new Date();
    const newList: List = {
      listId: Date.now(),
      createdAt: now,
      modifiedAt: now,
      name,
      tasks: [],
    };

    let arreglo = this.data.lists;
    let busqueda = newList.name;
    let indice = arreglo.findIndex(list => list.name === busqueda);
    if (indice !== -1) {
      confirm('Nombre repetido')
    } else {
      if (this.data.lists.length == 4) {
        alert('Completed  list!!');
      } else {
        this.data.lists.push(newList);
      }
    }

    // ------------------------crono----------------
    var roto = document.getElementById("roto");
    for (let i = 0; i < this.data.lists.length + 1; i++) {
      var a = 22.5;
      var b = a * i;
      roto.style.transform = 'rotate(' + b + 'deg)';
    }
    if(this.data.lists.length==1){roto.style.borderBottom = '10px solid #FFd100';}
    if(this.data.lists.length==2){roto.style.borderBottom = '10px solid #00a168';}
    if(this.data.lists.length==3){roto.style.borderBottom = '10px solid  #0086bd';}
    if(this.data.lists.length==4){roto.style.borderBottom = '10px solid #c20233';}
  }


  mostrarTaskSer(ev: string) {
    const now = new Date();
    const newList: List = {
      listId: Date.now(),
      createdAt: now,
      modifiedAt: now,
      name,
      tasks: [],
    };
    let arreglo = this.data.lists;
    let busqueda = ev;
    // console.log("esto busqueda" + busqueda);
    let indice = arreglo.findIndex(list => list.name === busqueda);
    // console.log("El elemento buscado está en el índice ", indice);
    var lista = document.getElementsByClassName("tasks") as HTMLCollectionOf < HTMLElement > ;
    lista[indice].style.display = "block";

  }


  addNewTask(text: string, list: List) {
    setTimeout(this.giroVerde, 0.1);
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
        // console.log("AHORA ABIERTAS", this.triangles.length);
        // ------id de nuestra lista
        // console.log(list.createdAt);
        // ------id de nuestra lista

        listObj.tasks.push(newTask);
        if (listObj.tasks.length > 3 || listObj.tasks.length == 3) {
          // ------saber lista deonde nos encontramos-posicion-----
          let arreglo = this.data.lists;
          let busqueda = listObj.listId;
          let indice = arreglo.findIndex(list => list.listId === busqueda);
          // console.log("El elemento buscado está  DE LA LISTA ", indice);
          // ------saber lista deonde nos encontramos-posicion-----


          let busqueda3 = listObj.listId;
          // console.log("esto busqueda" + busqueda3);
          var result3 = this.data.lists.filter(list => list.listId == listObj.listId);
          var result4 = result3.map(list => list.createdAt);
          // console.log("mi CREACION", result4);


          var result2 = this.data.lists.map(list => list.createdAt);
          // console.log("TODAS FECHAS DE CREACION", result2);


          // ------busqueda de listas menores que nuestra fecha-----
          let busqueda_menores = list.createdAt;
          var menores = this.data.lists.filter(list => list.createdAt < busqueda_menores);
          // console.log("MENORES", JSON.stringify(menores.length));
          // ------busqueda de listas menores que nuestra fecha-----

          //  ------------- filtramos siempre las listas inferiores sin tasks
          var result = menores.filter(listObj => listObj.tasks.length == 0);
          // console.log("LISTAS SIN TASK", result);
          // console.log("El elemento buscado está en el índice ", indice);
          indice = indice - result.length;
          //  ------------- filtramos siempre las listas inferiores sin tasks
          var listo = document.getElementsByClassName("input") as HTMLCollectionOf < HTMLElement > ;
          listo[indice].style.display = "none";
        }

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
    setTimeout(this.rCrono, 1);
    setTimeout(this.rgiroVerde, 1);
  }



  deleteList(listId: number) {
    this.data.lists = this.data.lists.filter(list => list.listId !== listId);
  }
  deleteTaskSer(task: Task) {
    let arreglo = this.data.lists;
    let busqueda = task.listId;
    // console.log("esto busqueda" + busqueda);
    let indice = arreglo.findIndex(list => list.listId === busqueda);
    // console.log("El elemento buscado está en el índice ", indice);
    this.data.lists = this.data.lists.map(listObj => {

      if (listObj.listId === task.listId) {
        listObj.tasks = listObj.tasks.filter(objTask => objTask.taskId !== task.taskId)
     
        if (listObj.tasks.length < 3) {
          var arg = document.getElementsByClassName("input") as HTMLCollectionOf < HTMLElement > ;
          arg[indice].style.display = "block";
        }

      }

      return listObj;
    });

  }
}
