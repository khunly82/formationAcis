import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {BehaviorSubject, Observable, of, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Article} from "../../features/exercices/models/article.model";

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private _panier: WritableSignal<Article[]> = signal([]) ;

  // public obs$: BehaviorSubject<any> = new BehaviorSubject(0);

  get panier() : Signal<Article[]> {
    return this._panier.asReadonly();
  }

  constructor(
    private  readonly  httpClient: HttpClient
  ) {
    // window.setInterval(() => {
    //   this.obs$.next(this.obs$.value + 1)
    // }, 1000)
    this.loadData();
  }

  loadData() {
    this.httpClient.get<Article[]>(environment.apiBaseUrl + '/articles')
      .subscribe({
        next: data => this._panier.set(data)
      })
  }

  getById(id: string) {
    return this.httpClient.get<Article>(environment.apiBaseUrl + '/articles/' + id)
  }

  update(id: string, article: Article) {
    return this.httpClient.put<Article>(environment.apiBaseUrl + '/articles/' + id, article).pipe(tap(
      () => this.loadData()
    ))
  }

  ajouter(article:Article) {
    if(!article.nom) {
      return throwError(() => new Error());
    }
    return this.httpClient.post<Article>(environment.apiBaseUrl + '/articles', article).pipe(
      // action qui va s'éxécuter apres la reponse du serveur dans la cas où ca a réussi
      tap(data => {
        // this._panier.update(oldvalues =>  [...oldvalues, data]);
        this.loadData()
      })
    )
  }

  supprimer(article: Article) {
    return this.httpClient.delete(environment.apiBaseUrl + '/articles/' + article.id)
      .pipe(tap(data => {
      // this._panier.update(oldvalues =>  oldvalues.filter(a => a !== article));
      this.loadData()
    }))
  }
}
