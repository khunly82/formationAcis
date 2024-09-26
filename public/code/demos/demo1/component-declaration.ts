import {Component} from "@angular/core";

@Component({
  // permet de définir comment le composant pourra être intégré dans un autre composant
  selector: 'app-hello,.appHello,[appHello]',
  // nécessaire si «standalone app»
  standalone: true,
  imports: [],
  // obligatoire
  // ou template: '<!-- inline template -->'
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss',
})
export class HelloComponent {
}
