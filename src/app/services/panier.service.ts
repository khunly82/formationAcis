import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private _panier: WritableSignal<any[]> = signal([]) ;

  // public obs$: BehaviorSubject<any> = new BehaviorSubject(0);

  get panier() : Signal<any[]> {
    return this._panier.asReadonly();
  }

  constructor(
    private  readonly  httpClient: HttpClient
  ) {
    // window.setInterval(() => {
    //   this.obs$.next(this.obs$.value + 1)
    // }, 1000)
  }

  ajouter(article:any) {
    if(!article.nom) {
      return of(new Error());
    }
    return this.httpClient.post(environment.apiBaseUrl + '/articles', article).pipe(
      // action qui va s'éxécuter apres la reponse du serveur dans la cas où ca a réussi
      tap(data => {
        this._panier.update(oldvalues =>  [...oldvalues, data]);
      })
    )
  }

  supprimer(article: any) {
    this._panier.update(oldvalues =>  oldvalues.filter(a => a !== article));
  }
}
