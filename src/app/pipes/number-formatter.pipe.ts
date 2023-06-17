import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormatter',
})
export class NumberFormatterPipe implements PipeTransform {
  private options = {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  transform(value: number): string {
    return value.toLocaleString(undefined, this.options);
  }
}
