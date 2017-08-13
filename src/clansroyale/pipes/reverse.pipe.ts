import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverse' })
export class ReversePipe implements PipeTransform {
  transform(arr: Array<any>): Array<any> {
    if (arr && arr.length > 0) {
      return arr.slice().reverse();
    }
    return arr;
  }
}
