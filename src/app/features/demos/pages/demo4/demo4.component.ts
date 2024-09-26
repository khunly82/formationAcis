import {ChangeDetectorRef, Component} from '@angular/core';
import {Boisson} from "../../models/boisson.model";
import {ProductComponent} from "../../components/product/product.component";
import {CardModule} from "primeng/card";
import {MarkdownComponent} from "ngx-markdown";
import {Button} from "primeng/button";
import {InputOutputComponent} from "../../components/input-output/input-output.component";
import {ContentProjectionComponent} from "../../components/content-projection/content-projection.component";
import {
  MultipleContentProjectionComponent
} from "../../components/multiple-content-projection/multiple-content-projection.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-demo4',
  standalone: true,
  imports: [
    ProductComponent,
    CardModule,
    MarkdownComponent,
    Button,
    InputOutputComponent,
    ContentProjectionComponent,
    MultipleContentProjectionComponent,
    NgOptimizedImage
  ],
  templateUrl: './demo4.component.html',
  styleUrl: './demo4.component.scss',
})
export class Demo4Component {
  products: Boisson[] = [
    { id: 1, nom: 'Coca', description: 'Boisson gazeuse caféïnée', image: '/images/coca.png', price: 1 },
    { id: 2, nom: 'Fanta', description: 'Boisson gazeuse à l\'orange', image: '/images/fanta.png', price: 1.1 },
  ];

  value: string = 'Khun';

  onClick(id: number) {
    alert(`Le composant n° ${id} a renvoyée cette valeur`)
  }

  changePriceWithoutRef() {
    this.products.forEach(p => p.price = 2);
  }

  changePriceWithRef() {
    this.products = this.products.map(p => ({...p, price: 3}));
  }
}
