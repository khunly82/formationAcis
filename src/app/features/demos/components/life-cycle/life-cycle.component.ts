import {
  AfterContentInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent implements OnInit, AfterContentInit, OnChanges, OnDestroy {
  @Input()
  value: number = 0;

  constructor(private readonly messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messageService.add({ severity: 'info', summary: 'Le composant est initialisé' })
  }

  ngAfterContentInit(): void {
    this.messageService.add({ severity: 'success', summary: 'Le template composant est initialisé' })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.messageService.add({ severity: 'warn', summary: 'Un «input» du composant a été modifié' })
  }

  ngOnDestroy(): void {
    this.messageService.add({ severity: 'error', summary: 'Le composant est détruit' })
  }
}
