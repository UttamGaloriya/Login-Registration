import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myCustomPipe'
})
export class MyCustomPipe implements PipeTransform {
    transform(value: any, args?: any, showList: boolean = false): any {
        if (value == 0) { return null; }
        // return ("other address")
        return 1
    }
}