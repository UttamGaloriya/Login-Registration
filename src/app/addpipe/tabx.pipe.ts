import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'tabx' })
export class TabxPipe implements PipeTransform {

    transform(value: any, ...args: any[]) {
        return value.length
    }

}