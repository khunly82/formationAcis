import {Component, EventEmitter, output, Output, OutputEmitterRef} from "@angular/core";

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
})
export class ProductComponent {

  onClick: OutputEmitterRef<number> = output()

  // ancienne syntaxe
  // @Output()
  // onClick: EventEmitter<number> = new EventEmitter();

  clickHandler() {
    this.onClick.emit(42);
  }
}
