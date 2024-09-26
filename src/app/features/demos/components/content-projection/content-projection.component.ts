import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss'
})
export class ContentProjectionComponent {

}
