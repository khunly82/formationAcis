import {ChangeDetectionStrategy, Component, Input, output, OutputEmitterRef} from '@angular/core';
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

  // il existe une nouvelle syntaxe (sera vue après les «signaux»)
  @Input()
  product! : any;

  onClick: OutputEmitterRef<number> = output()

  // ancienne syntaxe
  // @Output()
  // onClick: EventEmitter<number> = new EventEmitter()


  constructor() {
  }

  clickHandler() {
    this.onClick.emit(this.product.id);
  }
}
