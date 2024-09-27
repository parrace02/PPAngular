import { Component, signal } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { CounterComponent } from './../../../Compartido/Componentes/counter/counter.component';  

@Component({  
  selector: 'app-about',  
  standalone: true,  
  imports: [CommonModule, CounterComponent],  
  templateUrl: './about.component.html',  
  styleUrls: ['./about.component.css']  
})  
export class AboutComponent {  
  duration = signal(500);  
  message = signal('Practica');  

  changeDuration(event: Event) {  
    const input = event.target as HTMLInputElement;  
    this.duration.set(input.valueAsNumber);  
  }  
  
  changeMessage(event: Event) { // Corregido de hangeMessage a changeMessage  
    const input = event.target as HTMLInputElement;  
    this.message.set(input.value);  
  }  

}