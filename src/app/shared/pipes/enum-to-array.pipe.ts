import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray',
  standalone: true
})
export class EnumToArrayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
