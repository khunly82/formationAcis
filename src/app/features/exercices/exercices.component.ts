import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-exercices',
  standalone: true,
    imports: [
        RouterOutlet
    ],
  templateUrl: './exercices.component.html',
  styleUrl: './exercices.component.scss'
})
export class ExercicesComponent {

}
