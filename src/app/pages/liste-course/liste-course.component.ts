import { Component } from '@angular/core';
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {CheckboxModule} from "primeng/checkbox";
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {ListeCourseItemComponent} from "../../components/liste-course-item/liste-course-item.component";

@Component({
  standalone: true,
  imports: [
    FloatLabelModule,
    InputTextModule,
    CheckboxModule,
    Button,
    FormsModule,
    TableModule,
    ListeCourseItemComponent
  ],
  templateUrl: './liste-course.component.html',
  styleUrl: './liste-course.component.scss'
})
export class ListeCourseComponent {
  nomArticle: string|null = null;
  estImportant: boolean = false;

  articles: any[] = [];

  ajouter() {
    if(!this.nomArticle?.trim()) {
      return;
    }
    this.articles = [...this.articles, {
      nom: this.nomArticle,
      estImportant: this.estImportant,
    }];
    this.nomArticle = null;
    this.estImportant = false;
  }

  delete(article: any) {
    this.articles = this.articles.filter(a => a !== article);
  }
}
