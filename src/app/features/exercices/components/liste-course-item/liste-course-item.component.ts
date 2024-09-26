import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Button} from "primeng/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'tr[appListeCoursesItem]',
  standalone: true,
  imports: [
    Button,
    RouterLink
  ],
  templateUrl: './liste-course-item.component.html',
  styleUrl: './liste-course-item.component.scss'
})
export class ListeCourseItemComponent {
  @Input()
  article!: any;

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter();

  delete(article: string) {
    this.onDelete.emit(article);
  }
}
