import { Component, Input, SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input({required:true}) duration: number=0;
  @Input({required:true}) message: string = " ";

  constructor() {
    //NO ASINCRONO
    console.log('constructor');
    console.log('-'.repeat(10));
  }
  
ngOnChamgers(changes: SimpleChange) {
  // cada vez que se hace un cambio darations y message
  console.log('ngOnChamgers');
  console.log('-'.repeat(10));
  console.log(changes);
  }
}


