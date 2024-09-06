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
  img = 'https://via.placeholder.com/150';

  person = {
    Nombre:'Andres',
    Edad:39,
    disabled:true,
    avatar:'https://via.placeholder.com/150'
  }
  clickHandler() {
    alert('hola')
  }
  ChangeHandler(event: Event) {
    console.log(event);
  }
}