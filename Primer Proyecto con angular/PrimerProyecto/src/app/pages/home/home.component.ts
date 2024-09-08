import { Component, signal } from '@angular/core';  
import { CommonModule } from '@angular/common'; // Importa CommonModule   

@Component({  
  selector: 'app-home',  
  standalone: true,
  imports: [CommonModule], // Asegúrate de agregar CommonModule aquí   
  templateUrl: './home.component.html', // Asegúrate de que este archivo existe  
  styleUrls: ['./home.component.css']    // Asegúrate de que este archivo existe  
})  
export class HomeComponent {  
  // Define un Signal que contendrá las tareas  
  tasks = signal(['Instalar Angular', 'Crear proyecto', 'Crear componentes', 'Crear servicio']); 
  ChangeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTasks = input.value;
    this.tasks.update((tasks) => [...tasks, newTasks]);
  }
  DeleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, posicion) => posicion !==index ));
  }
}