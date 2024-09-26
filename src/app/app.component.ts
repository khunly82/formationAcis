import {Component, computed, effect, Inject, Signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HelloComponent} from "./features/demos/components/hello/hello.component";
import {ChronoComponent} from "./features/exercices/pages/chrono/chrono.component";
import {ProductComponent} from "./features/demos/components/product/product.component";
import {PanierService} from "./core/services/panier.service";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {BadgeModule} from "primeng/badge";
import {NavLinkComponent} from "./shared/nav-link/nav-link.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, ChronoComponent, ProductComponent, RouterLink, RouterLinkActive, ToastModule, ConfirmDialogModule, BadgeModule, NavLinkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  links: NavLinks = [
    { path: '/home', title: 'Accueil', icon: 'pi pi-home' },
    {
      title: 'Demos', icon: 'pi pi-folder',
      children: [
        {
          title: 'Composants', children: [
            { path: '/demos/demo1', title: 'Intro' },
            { path: '/demos/demo2', title: 'Bindings' },
            { path: '/demos/demo3', title: 'Blocks et Directives structurelles' },
            { path: '/demos/demo4', title: 'Cummunication parent/enfant' },
            { path: '/demos/demo5', title: 'Cycles de vie' },
            { path: '/demos/demo6', title: 'ng-template' },
            // { path: '/demos/demo7', title: '@ViewChild - @ViewChilren - @ChildContent' },
          ]
        },
        { path: '/demos/demo8', title: 'Pipes' },
      ],
    },
    {
      title: 'Exercices', icon: 'pi pi-book',
      children: [
        { path: '/exercices/chrono', title: 'Chronomètre' },
        { path: '/exercices/articles', title: 'Panier' },
      ]
    },
  ]

  nbItems!: Signal<number>

  constructor(
    private readonly panierService: PanierService,
    private messageService: MessageService,
  ) {

    this.nbItems = computed(() => this.panierService.panier().length)

    effect(() => {
      if(panierService.panier().length > 10) {
        this.messageService.add({
          severity: 'info',
          summary: 'Attention vous avez plus de 10 articles dans votre panier'
        })
      }
    });
  }
}
