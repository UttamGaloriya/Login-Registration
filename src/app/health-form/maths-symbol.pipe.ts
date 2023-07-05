import { Pipe, PipeTransform } from '@angular/core';
import { compersionList } from './selectData';

@Pipe({
  name: 'symbol'
})
export class MathsSymbolPipe implements PipeTransform {
  compersionList: string[] = ['equal', 'less', 'gretter', 'noteqval']
  list = compersionList
  transform(value: string,): unknown {

    for (let item of this.compersionList) {
      if (item === value) {
        return this.list[item]
      }
    }
    return null
  }

}
