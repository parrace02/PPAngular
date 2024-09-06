import { Component, signal } from '@angular/core';  
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
  // Este es una lista sin signal 
  /*tasks: string[] = [  
    'Instalar Angular',  
    'Crear proyecto',  
    'Crear componentes'
  ];*/
  //Esta es con signal 
  tasks= signal([  
    'Instalar Angular',  
    'Crear proyecto',  
    'Crear componentes'
  ]);
  Nombre = signal('Andres');
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
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.Nombre.set(newValue);

    console.log(event);
  }
  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}