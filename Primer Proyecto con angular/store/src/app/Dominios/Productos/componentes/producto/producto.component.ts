import { Component, Input, Output, EventEmitter } from '@angular/core'; // Correcta importación de EventEmitter  
import { CommonModule } from '@angular/common';  

@Component({  
  selector: 'app-producto',  
  standalone: true,  
  imports: [],  
  templateUrl: './producto.component.html',  
  styleUrls: ['./producto.component.css'] // Cambiado a styleUrls  
})  
export class ProductoComponent {  
  @Input({ required: true }) img: string = '';  
  @Input({ required: true }) Precio: number = 0;  
  @Input({ required: true }) Titulo: string = '';  

  @Output() addToCart = new EventEmitter();  

  addTocartHandler() {  
    console.log('click from child');  
    this.addToCart.emit('Hola, este es un mensaje desde el hijo');  
  }  
}