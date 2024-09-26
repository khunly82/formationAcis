import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'app-non-encapsulated',
  standalone: true,
  template: `<p class="some-class">Ce composant enfant n'est pas encapsulé</p>`,
  styles: `.some-class { text-decoration: line-through; }`,
  encapsulation: ViewEncapsulation.None,
})
class NonEncapsulatedComponent {}
