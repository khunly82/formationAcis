import { Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {Demo1Component} from "./features/demos/pages/demo1/demo1.component";
import {Demo2Component} from "./features/demos/pages/demo2/demo2.component";
import {Demo3Component} from "./features/demos/pages/demo3/demo3.component";
import {Demo4Component} from "./features/demos/pages/demo4/demo4.component";
import {Demo5Component} from "./features/demos/pages/demo5/demo5.component";
import {Demo6Component} from "./features/demos/pages/demo6/demo6.component";
import {Demo7Component} from "./features/demos/pages/demo7/demo7.component";
import {Demo8Component} from "./features/demos/pages/demo8/demo8.component";
import {ChronoComponent} from "./features/exercices/pages/chrono/chrono.component";
import {ArticlesComponent} from "./features/exercices/pages/articles/articles.component";
import {ArticleEditComponent} from "./features/exercices/pages/article-edit/article-edit.component";
import {articleResolver} from "./core/resolvers/article.resolver";

const demoSubRoutes: Routes = [
  { path: '', redirectTo: 'demo1', pathMatch: 'full' },
  { path: 'demo1', component: Demo1Component },
  { path: 'demo2', component: Demo2Component },
  { path: 'demo3', component: Demo3Component },
  { path: 'demo4', component: Demo4Component },
  { path: 'demo5', component: Demo5Component },
  { path: 'demo6', component: Demo6Component },
  { path: 'demo7', component: Demo7Component },
  { path: 'demo8', component: Demo8Component },
];

const exercicesSubRoutes: Routes = [
  { path: '', redirectTo: 'chrono', pathMatch: 'full' },
  { path: 'chrono', component: ChronoComponent },
  { path: 'articles', component: ArticlesComponent },
  {
    path: 'article/edit/:id',
    component: ArticleEditComponent,
    resolve: {
      article: articleResolver
    }
  }
]

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'demos',
    loadComponent: () => import('./features/demos/demos.component').then(c => c.DemosComponent),
    children: demoSubRoutes
  },
  {
    path: 'exercices',
    loadComponent: () => import('./features/exercices/exercices.component').then(c => c.ExercicesComponent),
    children: exercicesSubRoutes
  },
];


