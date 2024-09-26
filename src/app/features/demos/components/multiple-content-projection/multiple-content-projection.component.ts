import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-multiple-content-projection',
  standalone: true,
    imports: [
        CardModule
    ],
  templateUrl: './multiple-content-projection.component.html',
  styleUrl: './multiple-content-projection.component.scss'
})
export class MultipleContentProjectionComponent {

}
