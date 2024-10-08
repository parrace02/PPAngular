import { Component, computed, effect, inject, Injector, signal } from '@angular/core';  
import { CommonModule } from '@angular/common'; // Importa CommonModule
import {Task } from './../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';  // Importa formulario  


@Component({  
  selector: 'app-home',  
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Asegúrate de agregar CommonModule aquí   
  templateUrl: './home.component.html', // Asegúrate de que este archivo existe  
  styleUrls: ['./home.component.css']    // Asegúrate de que este archivo existe  
})  
export class HomeComponent {  
  // Define un Signal que contendrá las tareas  
  tasks = signal<Task[]>([ // quedo vacia
    //Elimino los estados iniicales para dejarlos guardados en el localStorage
    /*{
      id: Date.now(),
      title: 'Comienzo del proyecto',
      completado: true
    },
    {
      id: Date.now(),
      title: 'Crear componente',
      completado: true
    },
    // esto es la lista antes de crear una interface para los objetos 
    /*'Instalar Angular',
    'Crear proyecto', 
    'Crear componentes', 
    'Crear servicio'*/
  ]); 

// Se define una señal 'filter' que puede tener uno de los tres estados: 'all', 'Pending' o 'Completed'.  
// 'all' es el valor predeterminado.  
filter= signal <'all' | 'Pending' | 'Completed'> ('all');  

// 'tasksByFilter' es una propiedad computada que recalcula su valor cada vez que cambia la señal 'filter' o la lista de 'tasks'.  
tasksByFilter= computed(()=>{  
  // Se obtiene el valor actual de la señal 'filter'.  
  const filter= this.filter();  
  
  // Se obtiene la lista de tareas actual.  
  const tasks= this.tasks();  
  
  // Si el filtro es 'Pending', se filtran las tareas para que solo incluyan las que no están completadas.  
  if (filter==='Pending') {  
    return tasks.filter(task => !task.completado);  
  }  
  
  // Si el filtro es 'Completed', se filtran las tareas para que solo incluyan las que están completadas.  
  if (filter==='Completed') {  
    return tasks.filter(task => task.completado);  
  }  
  
  // Si el filtro es 'all', se devuelve la lista completa de tareas.  
  return tasks;  
});
   newTaskCtrol = new FormControl(' ', {
   nonNullable:true,
   validators: [
      Validators.required,
    ]
    
  });

  // se creo un injector 

  inject=inject(Injector);

    ngOnInit() {
    const Storage = localStorage.getItem('tasks')
    if(Storage) {
      const tasks=JSON.parse(Storage);
      this.tasks.set(tasks);
    }
    this,this.TrackTasks();    
  }

  TrackTasks() {
    effect(() => {
      const tasks= this.tasks();
      console.log(tasks)
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, {injector: this.inject});

  }

  ChangeHandler(/*event: Event*/) {
    // se elimina eñ evento y el por que todo esto ya esta en el newControl
    //const input = event.target as HTMLInputElement;
    //const newTask = input.value;
    if(this.newTaskCtrol.valid) {
      const value= this.newTaskCtrol.value.trim(); // con el trim le quito espacios al final y al inicio 
      if (value !== ''){
        this.addTask(value);
        this.newTaskCtrol.setValue('');
      }    
    }
    //con esta linea creo el objeto 
    //this.addTask(newTask);
    //este linea es para agregar un string pero no para un objeto.
    //this.tasks.update((tasks) => [...tasks, newTasks]);
  }
  //Este metodo se utiliza para cambiar informacion de la lista cuando se tiene en un metodo 
  addTask(title: string)
  {
    const newTask ={
      id: Date.now(),
      title,
      completado:false,
    }
    //aqui se copio la liena para poder crear un objeto
    this.tasks.update((tasks) => [...tasks, newTask]);  
  }
  DeleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, posicion) => posicion !==index ));
  }

  // metodo para actualizar la tarea 
  updatetask(index: number)
  {
    this.tasks.update((tasks)=> {
      return tasks.map((task,posicion) => {
        if (posicion === index) {
          return {
            ...task, // coloco todos los atributos del objeto
            completado: !task.completado //cambia el estado boleano de completado
          }
        }
        return task; // si no devolvemos igual como estado.
      })
    })
  }
    updatetaskEditing(index: number) {
      this.tasks.update(prevState => {
      return prevState.map((task,posicion) => {
        if (posicion === index) {
          return {
            ...task, // coloco todos los atributos del objeto
            editing: true //cambia el estado boleano 
          }
        }
        return {
          ...task,
          editing: false
        }; // si no las otras opciones de la lista quedan desactivadas el modo edición, solo una a la vez
      })
    });
  }
  // Método que actualiza el texto del task en una lista de tareas  
updatetaskText(index: number, event: Event) {  
  // Se obtiene el elemento de entrada (input) del evento  
  const input = event.target as HTMLInputElement;  

  // Se actualiza el estado de las tareas utilizando una función que toma el estado anterior (prevState)  
  this.tasks.update(prevState => {  
      // Se mapea el estado anterior para crear un nuevo estado  
      return prevState.map((task, posicion) => {  
          // Se verifica si la posición del task actual coincide con el índice del task a actualizar  
          if (posicion === index) {  
              // Si coinciden, se retorna un nuevo objeto task con todas las propiedades del task actual y se actualiza el título  
              return {  
                  ...task, // Se copia todos los atributos del objeto task actual  
                  title: input.value, // Se actualiza el título con el valor del input  
                  editing: false // Se establece el estado de edición como falso  
              };  
          }  
          // Se retorna el task actual sin cambios si no es el que se está editando  
          return task;  
      });  
  });  
}
changeFilter(filter: 'all' | 'Pending' | 'Completed') {  
  this.filter.set(filter);
}  
}