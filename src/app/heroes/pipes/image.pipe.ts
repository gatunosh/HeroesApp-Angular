import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: Heroe): string {
    if(value.alt_img !== '') {
      return `assets/heroes/${ value.id }.jpg`
    }
    return 'assets/no-image.png';
  }

}
