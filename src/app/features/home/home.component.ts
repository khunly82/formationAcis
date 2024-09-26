import { Component } from '@angular/core';
import {MarkdownComponent} from "ngx-markdown";
import {CardModule} from "primeng/card";

@Component({
  standalone: true,
  imports: [
    MarkdownComponent,
    CardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  commands: { title: string, file: string }[] = [
    { title: 'Installation du «CLI»', file: '/code/home/install-cli.sh' },
    { title: 'Créer un nouveau projet', file: '/code/home/new.sh' },
    { title: 'Installation d\'une dépendence (des dépendences)', file: '/code/home/install.sh' },
    { title: 'Démarrage du projet', file: '/code/home/start.sh' },
    { title: 'Génération du projet', file: '/code/home/build.sh' },
    { title: 'Ajouter les variables d\'environment', file: '/code/home/environments.sh' },
  ]
}
