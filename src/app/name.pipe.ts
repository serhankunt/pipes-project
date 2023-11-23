import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipe'
  
})
export class NamePipe implements PipeTransform {

  transform(value: string[], search1 : string) {
    return value.filter(p=>p.toLowerCase().includes(search1.toLowerCase()));
    
  }

}

