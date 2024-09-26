import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'li[appNavLink]',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgClass,
    NgIf
  ],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavLinkComponent {
  @Input()
  item!: NavLink;

  constructor(
  ) {
  }

  toggle() {
    if(this.item.children){
      this.item = {...this.item, open: !this.item.open };
      if(!this.item.open) {
        this.item.children = this.item.children?.map(c => ({...c, open: false}))
      }
    }
  }
}
