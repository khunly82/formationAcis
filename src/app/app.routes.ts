import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'courses', loadComponent: () => import('./pages/liste-course/liste-course.component').then(c => c.ListeCourseComponent) },
];
