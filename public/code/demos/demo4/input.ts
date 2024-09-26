import {Component, Input} from "@angular/core";
import {Boisson} from "../../../../src/app/features/demos/models/boisson.model";

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
})
export class ProductComponent {
  // il existe une nouvelle syntaxe (sera vue après les «signaux»)
  @Input()
  product! : Boisson;
}
