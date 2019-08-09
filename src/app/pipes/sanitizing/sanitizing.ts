import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Generated class for the SanitizingPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'sanitizing',
})
export class SanitizingPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  constructor(private _sanitizer:DomSanitizer) {
  }

  transform(v:string):SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(v);
  }
}
