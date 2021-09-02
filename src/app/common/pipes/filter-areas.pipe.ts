import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAreas'
})
export class FilterAreasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
