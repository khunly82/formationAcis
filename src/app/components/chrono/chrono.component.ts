import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {TimerPipe} from "../../pipes/timer.pipe";

@Component({
  selector: 'app-chrono',
  standalone: true,
  imports: [
    Button,
    TimerPipe
  ],
  templateUrl: './chrono.component.html',
  styleUrl: './chrono.component.scss'
})
export class ChronoComponent {

  compteur : number = 0;
  private idInterval: number | undefined;

  start(){
    this.idInterval = window.setInterval(()=>{
      this.compteur+=13;
    }, 13);
  }

  stop() {
    window.clearInterval(this.idInterval);
  }

  reset(){
    this.stop();
    this.compteur = 0;
  }
}
