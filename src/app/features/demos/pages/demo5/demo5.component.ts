import {Component, signal, Signal, WritableSignal} from '@angular/core';
import {CardModule} from "primeng/card";
import {MarkdownComponent} from "ngx-markdown";
import {LifeCycleComponent} from "../../components/life-cycle/life-cycle.component";
import {Button} from "primeng/button";

@Component({
  selector: 'app-demo5',
  standalone: true,
  imports: [
    CardModule,
    MarkdownComponent,
    LifeCycleComponent,
    Button
  ],
  templateUrl: './demo5.component.html',
  styleUrl: './demo5.component.scss',
})
export class Demo5Component {
  displayed: boolean = false
  value: number = 0

  onClick() {
    this.value++;
  }
}
