import { Component, Input,SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input({required:true}) duration =0;
  @Input({required:true}) message=  " ";

  constructor() {
    //NO ASINCRONO
    console.log('constructor');
    console.log('-'.repeat(10));
  }
  
ngOnChanges(changes: SimpleChanges) {
  // cada vez que se hace un cambio darations y message
  console.log('ngOnChanges');
  console.log('-'.repeat(10));
  console.log(changes);
  }

  ngOnInit() {
    // Inicialiador del componete esto si es para cosas asincronas
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration=> ',this.duration);
    console.log('message=> ',this.message);
  }

ngAfterViewInit() {
  console.log('ngAfterViewInit');
  console.log('-'.repeat(10));
}
ngOnDestroy(){
  console.log('ngOnDestroy');
  console.log('-'.repeat(10));
}
}


