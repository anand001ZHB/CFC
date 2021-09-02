import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEstablishments'
})
export class FilterEstablishmentsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
