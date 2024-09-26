import {
  Component,
  Signal,
  ViewChild
} from '@angular/core';
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {CheckboxModule} from "primeng/checkbox";
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {ListeCourseItemComponent} from "../../components/liste-course-item/liste-course-item.component";
import {PanierService} from "../../../../core/services/panier.service";
import {Subject} from "rxjs";
import {Article} from "../../models/article.model";
import {ConfirmationService, MessageService} from "primeng/api";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    FloatLabelModule,
    InputTextModule,
    CheckboxModule,
    Button,
    FormsModule,
    TableModule,
    ListeCourseItemComponent,
    CardModule
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  nomArticle: string|null = null;
  estImportant: boolean = false;

  articles: Signal<Article[]>

  @ViewChild('button') button!: any;

  destroyed: Subject<void> = new Subject<void>();

  constructor(
    private readonly panierService: PanierService,
    private readonly confirmService: ConfirmationService,
    private readonly messageService: MessageService,
  ) {
    this.articles = panierService.panier;
  }

  ajouter() {
    if(!this.nomArticle?.trim()) {
      return;
    }
    this.panierService.ajouter({
        nom: this.nomArticle,
        estImportant: this.estImportant,
    }).subscribe({
      next: () => {
        this.nomArticle = null;
        this.estImportant = false;
        this.messageService.add({ severity: 'success', detail: 'L\'article a été ajouté au panier' });
      }
    });
  }

  delete(article: any) {
    this.confirmService.confirm({
      header: 'Êtes vous sûr de vouloir supprimer cet article ?',
      accept: () => {
        this.panierService.supprimer(article)
          .subscribe({
            next: () => this.messageService.add({ severity: 'success', detail: 'L\'article a été supprimé' })
          });
      }
    })
  }
}
