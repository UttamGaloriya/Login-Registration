import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'ProductName'
})
export class ProductNamePipe implements PipeTransform {
    transform(value: string, n: number): any {
        if (value.length < 10) {
            return value;

        } else {
            return value.slice(0, n) + '...';
        }

    }
}