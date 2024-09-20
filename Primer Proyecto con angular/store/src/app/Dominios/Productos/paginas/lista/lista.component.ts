import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductoComponent} from './../../componentes/producto/producto.component'

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, ProductoComponent],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  FromChild(event: string){
    console.log('éstamos en el padre');
    console.log(event);
  }

}
