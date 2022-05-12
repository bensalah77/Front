import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort_id'
})
export class SortidPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
   return value.sort((a,b)=>{
      let x=a.idArticle.toLocaleLowerCase();
      let y=b.idArticle.toLocaleLowerCase();
      if(x<y){
        return -1;
      }
      else {return 1;}
    return 0;});
  }

}
