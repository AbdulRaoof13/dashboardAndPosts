import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, text:any): any {

    if(!value) {
      return ''
    }

    text = text.toLowerCase();


    return value.filter((item:any)=>{
      return JSON.stringify(item.title).toLowerCase().includes(text) || JSON.stringify(item.body).toLowerCase().includes(text)
    });
  }

}
