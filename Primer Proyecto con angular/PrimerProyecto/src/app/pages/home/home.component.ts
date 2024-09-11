import { Component, signal } from '@angular/core';  
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
  tasks = signal<Task[]>([
    {
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

   newTaskCtrol = new FormControl(' ', {
   nonNullable:true,
   validators: [
      Validators.required,
    ]
    
  });

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
}