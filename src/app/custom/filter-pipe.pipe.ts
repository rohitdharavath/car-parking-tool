import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
    transform(values, key: string, term: string) {
        if (!term) return values;
        values = values.filter(value=>{
            console.log(value[key])
            return value[key] == term.toString()
        })
        return values
    }
}
