import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {NgTemplateOutlet} from "@angular/common";
import {MarkdownComponent} from "ngx-markdown";

@Component({
  selector: 'app-demo6',
  standalone: true,
  imports: [
    CardModule,
    NgTemplateOutlet,
    MarkdownComponent
  ],
  templateUrl: './demo6.component.html',
  styleUrl: './demo6.component.scss'
})
export class Demo6Component {

}
