import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HelloComponent} from "./components/hello/hello.component";
import {ChronoComponent} from "./components/chrono/chrono.component";
import {ProductComponent} from "./components/product/product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, ChronoComponent, ProductComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  products: any[] = [
    { nom: 'Eau Evian', prix: 0.7, description: 'Eau minérale' },
    { nom: 'Coca', prix: 1.2, description: 'Boisson gazeuse' },
    { nom: 'Café', prix: 0.2, description: 'Boisson caféinée' },
  ];

  constructor() {
    setTimeout(() => {
      this.products[0] = { ...this.products[0], prix: 0.9 };
    }, 2000)
  }

  deleteHandler($event: string) {
    // supprimer le produit de la liste
    this.products = this.products.filter(p => p.nom !== $event);
  }
}
