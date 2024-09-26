import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {TimerPipe} from "../../../../shared/pipes/timer.pipe";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-chrono',
  standalone: true,
  imports: [
    Button,
    TimerPipe,
    CardModule
  ],
  templateUrl: './chrono.component.html',
  styleUrl: './chrono.component.scss'
})
export class ChronoComponent {

  compteur : number = 0;
  idInterval: number | undefined;
  private memo : number = 0;

  start(){
    const start = Date.now() - this.memo;
    this.idInterval = window.setInterval(()=>{
      this.compteur = Date.now() - start;
    });
  }

  stop() {
    window.clearInterval(this.idInterval);
    this.idInterval = undefined;
    this.memo = this.compteur;
  }

  reset(){
    this.stop();
    this.compteur = 0;
    this.memo = 0;
  }
}
