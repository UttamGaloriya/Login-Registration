import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'myFullAddress'
})
export class myFullAddress implements PipeTransform {
    transform(value: string[], addressMore: number, adsid: number): any {

        if (value.length > 20) {
            if (addressMore == adsid) {
                return value;

            } else {
                return value.slice(0, 20) + "...";
            }
        } else { return value }


        return 1
    }
}