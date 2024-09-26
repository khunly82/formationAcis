import {Component, ElementRef, ViewChild} from '@angular/core';
import {CardModule} from "primeng/card";
import {MarkdownComponent} from "ngx-markdown";
import {CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-demo8',
  standalone: true,
  imports: [
    CardModule,
    MarkdownComponent,
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    DecimalPipe,
    DatePipe
  ],
  templateUrl: './demo8.component.html',
  styleUrl: './demo8.component.scss'
})
export class Demo8Component {
  protected readonly window = window;
  protected readonly Date = Date;
}
