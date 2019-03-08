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
  // --------------------------- fin---------------

  siExisteSer(showDiv: boolean) {
    var i = 0;
    if (showDiv == true) {

      this.triangles.push("i");

    } else {
      this.triangles.splice(i, 1);
    }

    console.log("abiertas" + this.triangles.length);

  }

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
  giroVerde() {
    var list = document.getElementsByClassName("cont") as HTMLCollectionOf < HTMLElement > ;
    var pes = 0;
    var pisto = 0;
    var pas = 90;
    var idea = setInterval(rotate, 5);
    var idea2 = setInterval(rotate2, 5);
    var idea3 = setInterval(rotate3, 1);

    function rotate() {
      if (pes == -90) {
        clearInterval(idea);

      } else {
        pes--;


        list[0].style.transform = 'rotate(' + pes + 'deg)';

      }
    }

    function rotate2() {

      if (pisto == 134) {
        clearInterval(idea2);

      } else {
        pisto++;


        // list[0].style.left = pisto + 'px';
        list[0].style.marginTop = pisto + 'px';



      }
    }

    function rotate3() {
      var circle = document.getElementById("circle");
      circle.style.display = "block";
      if (pas == 0) {
        clearInterval(idea3);

      } else {
        pas--;


        // list[0].style.left = pisto + 'px';
        circle.style.bottom = pas + '%';



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

    let arreglo = this.data.lists;
    let busqueda = newList.name;
    let indice = arreglo.findIndex(list => list.name === busqueda);
    console.log(indice);
    if (indice !== -1) {
      confirm('Nombre repetido')
    } else {
      if (this.data.lists.length == 4) {
        confirm('Completed  list!! - Remove the all Tasks list? ')
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
      console.log("esto es la rotacion" + b);
    }


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
    console.log("esto llegaaaaaa" + ev);

    let arreglo = this.data.lists;
    let busqueda = ev;
    console.log("esto busqueda" + busqueda);
    let indice = arreglo.findIndex(list => list.name === busqueda);
    console.log("El elemento buscado está en el índice ", indice);

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
        console.log("AHORA ABIERTAS", this.triangles.length);

        // ------id de nuestra lista
        console.log(list.createdAt);
        // ------id de nuestra lista

        listObj.tasks.push(newTask);

        if (listObj.tasks.length > 3 || listObj.tasks.length == 3) {
          // ------saber lista deonde nos encontramos-posicion-----
          let arreglo = this.data.lists;
          let busqueda = listObj.listId;
          let indice = arreglo.findIndex(list => list.listId === busqueda);
          console.log("El elemento buscado está  DE LA LISTA ", indice);
          // ------saber lista deonde nos encontramos-posicion-----


          let busqueda3 = listObj.listId;
          console.log("esto busqueda" + busqueda3);
          var result3 = this.data.lists.filter(list => list.listId == listObj.listId);
          var result4 = result3.map(list => list.createdAt);
          console.log("mi CREACION", result4);


          var result2 = this.data.lists.map(list => list.createdAt);
          console.log("TODAS FECHAS DE CREACION", result2);


          // ------busqueda de listas menores que nuestra fecha-----
          let busqueda_menores = list.createdAt;
          var menores = this.data.lists.filter(list => list.createdAt < busqueda_menores);
          console.log("MENORES", JSON.stringify(menores.length));
          // ------busqueda de listas menores que nuestra fecha-----

          //  ------------- filtramos siempre las listas inferiores sin tasks
          var result = menores.filter(listObj => listObj.tasks.length == 0);
          console.log("LISTAS SIN TASK", result);
          console.log("El elemento buscado está en el índice ", indice);
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

  }

  deleteList(listId: number) {
    this.data.lists = this.data.lists.filter(list => list.listId !== listId);
  }
  deleteTaskSer(task: Task) {


    let arreglo = this.data.lists;
    let busqueda = task.listId;
    console.log("esto busqueda" + busqueda);
    let indice = arreglo.findIndex(list => list.listId === busqueda);
    console.log("El elemento buscado está en el índice ", indice);


    this.data.lists = this.data.lists.map(listObj => {

      if (listObj.listId === task.listId) {
        listObj.tasks = listObj.tasks.filter(objTask => objTask.taskId !== task.taskId)
        console.log("mi cuenta" + listObj.tasks.length);
        if (listObj.tasks.length < 3) {

          var arg = document.getElementsByClassName("input") as HTMLCollectionOf < HTMLElement > ;
          arg[indice].style.display = "block";
        }

      }

      return listObj;
    });



  }
}
