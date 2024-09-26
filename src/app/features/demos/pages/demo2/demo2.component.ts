import { Component } from '@angular/core';
import {HelloComponent} from "../../components/hello/hello.component";
import {MarkdownComponent} from "ngx-markdown";
import {CardModule} from "primeng/card";
import {ChipsModule} from "primeng/chips";
import {FormsModule} from "@angular/forms";
import {Button} from "primeng/button";
import {FloatLabelModule} from "primeng/floatlabel";

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [
    HelloComponent,
    MarkdownComponent,
    CardModule,
    ChipsModule,
    FormsModule,
    Button,
    FloatLabelModule
  ],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.scss',
})
export class Demo2Component {
  value: string = 'Khun';

  clickHandler() {
    alert(this.value);
  }
}
