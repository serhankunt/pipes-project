import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prop'
})
export class PropPipe implements PipeTransform {

  transform(value:any[], search:string )  {

    if(search == ""){
      return value ;
    }
   
    return value.filter(p=>{
      const name = p.name.toLowerCase().includes(search.toLowerCase());
      const age = p.age.toString().includes(search);

      return name + age;
    })
  }

}
