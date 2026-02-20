import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {

  constructor() { }


  setLanguage(pagestate: 'eng' | 'ger'){

    return console.log("der gesammte inhalt wird auf ", pagestate, "gestellt!")

  }

}
