import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer',
  standalone: true
})
export class TimerPipe implements PipeTransform {

  transform(value: number, withMs: boolean = true): string {
    let ms: string = (value % 1000).toString().padStart(3, '0');
    let s: string = ((Math.floor(value / 1000)) % 60)
      .toString().padStart(2, '0');
    let m: string = ((Math.floor(value / 60000)) % 60)
      .toString().padStart(2, '0');
    let h: string = ((Math.floor(value / 3600000)))
      .toString().padStart(2, '0');
    if(withMs) {
      return `${h}:${m}:${s}:${ms}`;
    }
    return `${h}:${m}:${s}`;
  }

}
