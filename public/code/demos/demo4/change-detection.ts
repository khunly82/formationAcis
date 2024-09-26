import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent { }
