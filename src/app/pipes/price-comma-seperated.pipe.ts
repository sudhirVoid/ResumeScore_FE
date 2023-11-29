import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceCommaSeperated'
})
export class PriceCommaSeperatedPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return ''; // Return an empty string if the input is falsy

    // Use regular expression to add commas as thousands separators
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
