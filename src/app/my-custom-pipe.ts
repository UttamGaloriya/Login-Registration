import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myCustomPipe'
})
export class MyCustomPipe implements PipeTransform {
    transform(value: any): any {
        if (value.length > 10) {
            return value.slice(0, 10) + "...";

        } else {
            return value
        }


    }
}