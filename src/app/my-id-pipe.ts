import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'myId'
})
export class MyIdPipe implements PipeTransform {
    transform(value: string[], tablsub: number, elmentId: number): any {
        if (tablsub === elmentId) {
            return value;

        } else {
            return value.slice(0, 1);
        }

        return 1
    }
}