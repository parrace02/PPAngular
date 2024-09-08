import { Component, signal } from '@angular/core';  
import { CommonModule } from '@angular/common'; // Importa CommonModule
import {Task } from './../../models/task.model';

@Component({  
  selector: 'app-home',  
  standalone: true,
  imports: [CommonModule], // Asegúrate de agregar CommonModule aquí   
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
  ChangeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    //con esta linea creo el objeto 
    this.addTask(newTask);
    //este linea es para agregar un string pero no para un objeto.
    //this.tasks.update((tasks) => [...tasks, newTasks]);
  }
  //Esto se utiliza para cambiar informacion de la lista cuando se tiene en un metodo 
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
}