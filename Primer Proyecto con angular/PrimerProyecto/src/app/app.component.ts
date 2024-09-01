import { Component } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { RouterOutlet } from '@angular/router';  

@Component({  
  selector: 'app-root',  
  standalone: true,  
  imports: [CommonModule, RouterOutlet], // Asegúrate de incluir CommonModule aquí  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {  
  bienvenida = 'Hola';  
  tasks: string[] = [  
    'Instalar Angular',  
    'Crear proyecto',  
    'Crear componentes'  
  ];  
}