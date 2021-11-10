import { Pipe, PipeTransform } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'

@Pipe({
  name: 'getImageUrl'
})
export class GetImageUrlPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value==null) {
      return null;
    }
    return firebase.storage().ref().child(value).getDownloadURL().then((resp)=>{
      return resp
    })
    // return value;
  }

}
