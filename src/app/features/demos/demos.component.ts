import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './demos.component.html',
  styleUrl: './demos.component.scss'
})
export class DemosComponent {

}
