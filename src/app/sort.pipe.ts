import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array:any, field: number){
    if(!Array.isArray(array) || !field){
      return array ;
    }

    if (typeof array[0] === 'number') {
      // If the array contains numbers, sort them directly
      return array.slice().sort((a, b) => a - b);
    }

    return array.slice().sort((a,b)=>{
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });

  }

}
