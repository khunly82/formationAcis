import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-hello,.appHello,[appHello]',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss',
})
export class HelloComponent {
}
