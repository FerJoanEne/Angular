import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  title: string = 'Contador usando redux';

  counter?: number;

  increment(){
    console.log("incrementando")
  }

  reset(){
    console.log("reset")
  }

  decrement(){
    console.log("decrementando")
  }
}
