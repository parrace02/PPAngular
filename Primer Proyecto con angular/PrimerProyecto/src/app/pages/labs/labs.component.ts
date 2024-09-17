import { Component, signal } from '@angular/core';  
 // Importa CommonModule 
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'; // Importa formulario  

@Component({  
  selector: 'app-labs',  
  standalone: true,  
  imports: [ReactiveFormsModule], // Asegúrate de agregar CommonModule aquí  
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
    'Crear componentes',
    'Crear servicio'
  ]);
  Nombre = signal('Andres');
  Edad = 39;
  disabled=true;
  img = 'https://via.placeholder.com/150';

  person = signal({
    Nombre:'Andres',
    Edad:39,
    disabled:true,
    avatar:'https://via.placeholder.com/150'
  });

  // vamos a crear un formulario reactivo 
colorCtrl=new FormControl();
widthCtrl=new FormControl(50, {
  nonNullable:true,
});
nomeCtrl=new FormControl('Aqui escribir', {
  nonNullable:true,
  validators: [
    Validators.required,
    Validators.minLength(3)
  ]
});

// crear un constructor 

constructor() {
  this.colorCtrl.valueChanges.subscribe(value=> {
    console.log(value);
  })
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
  ChangeEdad(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        Edad: parseInt(newValue, 10) 
      }
    });
  }
  ChangeNombre(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        Nombre: newValue
      }
    });
  }
}