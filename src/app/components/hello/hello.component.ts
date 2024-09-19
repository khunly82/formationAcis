import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule, DatePipe, DecimalPipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [
    UpperCasePipe,
    DatePipe,
    DecimalPipe,
    CommonModule,
  ],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss',
})
export class HelloComponent {
  nom: string = 'Khun';
  dateNaissance: Date = new Date('1982-05-06');
  nb: number = 0.1 * 3;
  isAdmin : boolean = true;

  ingredients: string[] = ['Sel', 'Poivre', 'Sucre'];

  constructor() {
    window.setTimeout(() => {
      this.ingredients = ['Sel', 'Pommes', 'Cannette de Coca', 'Sucre']
    }, 3000)
  }

  onBtnClick() {
    this.isAdmin = false;
  }
}
