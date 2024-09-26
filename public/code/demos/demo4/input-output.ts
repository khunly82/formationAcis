import {EventEmitter, Input, output, Output, OutputEmitterRef} from "@angular/core";

export class InputOutputComponent {
  @Input()
  value!: string;

  valueChange: OutputEmitterRef<string> = output();

  onInput(event: Event) {
    this.valueChange.emit((<any>event.target).value);
  }
}
