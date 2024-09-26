import {Component} from "@angular/core";
import {HelloComponent} from "../../../../src/app/features/demos/components/hello/hello.component";

@Component({
  selector: 'app-demo1',
  standalone: true,
  // Dans une application standalone le composant doit être importé
  imports: [HelloComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class Demo1Component {
}
