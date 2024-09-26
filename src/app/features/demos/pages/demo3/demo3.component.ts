import { Component } from '@angular/core';
import {HelloComponent} from "../../components/hello/hello.component";
import {MarkdownComponent} from "ngx-markdown";
import {CardModule} from "primeng/card";
import {InputSwitchModule} from "primeng/inputswitch";
import {NgForOf, NgIf} from "@angular/common";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {Button} from "primeng/button";
import {Boisson} from "../../models/boisson.model";

@Component({
  selector: 'app-demo3',
  standalone: true,
  imports: [
    HelloComponent,
    MarkdownComponent,
    CardModule,
    InputSwitchModule,
    NgIf,
    ProgressSpinnerModule,
    NgForOf,
    Button
  ],
  templateUrl: './demo3.component.html',
  styleUrl: './demo3.component.scss',
})
export class Demo3Component {
  isLoading: boolean = true;
  isLoading2: boolean = true;

  items: Boisson[] = [
    { id: 1, nom: 'Coca', image: '/images/coca.png' },
    { id: 2, nom: 'Fanta', image: '/images/fanta.png' },
    { id: 3, nom: 'Sprite', image: '/images/sprite.png' },
  ];

  trackFn(index:number, boisson: Boisson) {
    return boisson.id;
  }

  changeBoissons() {
    this.items = [
      { id: 1, nom: 'Coca', image: '/images/coca.png' },
      { id: 2, nom: 'Fanta', image: '/images/fanta.png' },
      { id: 4, nom: 'Nalu', image: '/images/nalu.jpg' },
      { id: 5, nom: 'FuseTea', image: '/images/fuse-tea.png' },
    ];
  }

}
