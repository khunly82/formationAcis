import {Component, Input, output, OutputEmitterRef} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [
    InputTextModule
  ],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss'
})
export class InputOutputComponent {
  @Input()
  value!: string;

  valueChange: OutputEmitterRef<string> = output();

  onInput(event: Event) {
    this.valueChange.emit((<any>event.target).value);
  }
}
