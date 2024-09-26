import { ResolveFn } from '@angular/router';
import {Article} from "../../features/exercices/models/article.model";
import {inject} from "@angular/core";
import {PanierService} from "../services/panier.service";

export const articleResolver: ResolveFn<Article> = (route, state) => {
  const id = route.params['id'];
  const panierService = inject(PanierService);

  return panierService.getById(id);
};
