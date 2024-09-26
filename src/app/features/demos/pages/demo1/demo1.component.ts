import {Component, ViewEncapsulation} from '@angular/core';
import {MarkdownComponent} from "ngx-markdown";
import {HelloComponent} from "../../components/hello/hello.component";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-non-encapsulated',
  standalone: true,
  template: `<p class="some-class">Ce composant n'est pas encapsulé.</p>`,
  styles: `.some-class { text-decoration: line-through; }`,
  encapsulation: ViewEncapsulation.None,
})
class NonEncapsulatedComponent {}

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [
    MarkdownComponent,
    HelloComponent,
    NonEncapsulatedComponent,
    CardModule
  ],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss',
})
export class Demo1Component {

}
