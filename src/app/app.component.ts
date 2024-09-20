import {Component, computed, effect, Inject, Signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HelloComponent} from "./components/hello/hello.component";
import {ChronoComponent} from "./components/chrono/chrono.component";
import {ProductComponent} from "./components/product/product.component";
import {PanierService} from "./services/panier.service";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, ChronoComponent, ProductComponent, RouterLink, RouterLinkActive, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // products: any[] = [
  //   { nom: 'Eau Evian', prix: 0.7, description: 'Eau minérale' },
  //   { nom: 'Coca', prix: 1.2, description: 'Boisson gazeuse' },
  //   { nom: 'Café', prix: 0.2, description: 'Boisson caféinée' },
  // ];

  nbItems!: Signal<number>

  constructor(
    private readonly panierService: PanierService,
    private messageService: MessageService,
  ) {

    this.nbItems = computed(() => panierService.panier().length)

    effect(() => {
      if(panierService.panier().length > 10) {
        this.messageService.add({
          severity: 'info',
          summary: 'Attention vous avez plus de 10 articles dans votre panier'
        })
      }
    });
    // setTimeout(() => {
    //   this.products[0] = { ...this.products[0], prix: 0.9 };
    // }, 2000)
  }

  // deleteHandler($event: string) {
  //   // supprimer le produit de la liste
  //   this.products = this.products.filter(p => p.nom !== $event);
  // }
}
