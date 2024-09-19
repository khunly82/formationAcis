import {ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, Output} from '@angular/core';
import {CardModule} from "primeng/card";
import {CommonModule, CurrencyPipe} from "@angular/common";
import {Button} from "primeng/button";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CardModule,
    CurrencyPipe,
    Button,
    CommonModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input()
  product! : any;
  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  delete() {
    this.onDelete.emit(this.product.nom);
  }
}
