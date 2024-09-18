import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input({required:true}) img: string='';
  @Input({required:true}) Precio: number= 0;
  @Input({required:true}) Titulo: string='';
} 
