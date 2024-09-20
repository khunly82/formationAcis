import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
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
import {PanierService} from "../../services/panier.service";
import {Subject, Subscription, takeUntil} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";

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
export class ListeCourseComponent implements OnInit, OnDestroy, AfterViewInit {
  nomArticle: string|null = null;
  estImportant: boolean = false;

  articles: Signal<any[]>

  @ViewChild('button') button!: any;

  destroyed: Subject<void> = new Subject<void>();

  constructor(
    private readonly panierService: PanierService,
  ) {
    this.articles = panierService.panier;

    // const signal = toSignal(this.panierService.obs$);
    //
    // effect(() => {
    //   console.log(signal());
    // })

    // this.panierService.obs$.pipe(
    //   // operation sur le flux
    //   //takeUntil(this.destroyed)
    // ).subscribe({
    //   next: (v) => {
    //     console.log(v);
    //   }
    // })
  }

  ngAfterViewInit(): void {
    console.log(2);
        //console.log(this.button.el.nativeElement);
  }

  ngOnDestroy(): void {
      console.log(0);
      this.destroyed.next();
      this.destroyed.complete();
  }

  ngOnInit(): void {
      console.log(1);
      //console.log(this.button);
  }

  ajouter() {
    if(!this.nomArticle?.trim()) {
      return;
    }
    // this.articles = [...this.articles, {
    //   nom: this.nomArticle,
    //   estImportant: this.estImportant,
    // }];
    this.panierService.ajouter({
        nom: this.nomArticle,
        estImportant: this.estImportant,
    }).subscribe({
      next: () => {},
      error: (err) => {},
    });
    this.nomArticle = null;
    this.estImportant = false;
  }

  delete(article: any) {
    // this.articles = this.articles.filter(a => a !== article);
  }
}
