import { Component } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { RouterOutlet } from '@angular/router';  

@Component({  
  selector: 'app-root',  
  standalone: true,  
  imports: [CommonModule, RouterOutlet],  
  template: '<router-outlet></router-outlet>' // Cambiado a 'template'  
})  
export class AppComponent {  
  title = 'store';  
}