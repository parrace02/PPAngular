import { Component } from '@angular/core';  
import { CommonModule } from '@angular/common'; // Importa CommonModule  

@Component({  
  selector: 'app-labs',  
  standalone: true,  
  imports: [CommonModule], // Asegúrate de agregar CommonModule aquí  
  templateUrl: './labs.component.html',  
  styleUrls: ['./labs.component.css']  
})  
export class LabsComponent {  
  bienvenida = 'Hola';  
  tasks: string[] = [  
    'Instalar Angular',  
    'Crear proyecto',  
    'Crear componentes'  
  ];
  Nombre = 'Andres';
  Edad = 39;
  disabled=true;
  img = '246076832_4816627708348583_9102039506862301512_n.jpg';
}