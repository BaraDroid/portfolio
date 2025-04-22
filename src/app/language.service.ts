import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
 
  constructor(private translate: TranslateService) { }

  private _germanText = new BehaviorSubject<boolean>(true); 
  germanText$ = this._germanText.asObservable();

  private _englishText = new BehaviorSubject<boolean>(false); 
  englishText$ = this._englishText.asObservable();


  public getStoredLanguage(): string | null {
    return sessionStorage.getItem("choosenLang");
  }

  set englishText(value: boolean) {
    this._englishText.next(value);
    this._germanText.next(!value);
    if(value) {
      this.translate.use('en');
      sessionStorage.clear();
      sessionStorage.setItem("choosenLang", "en");
    }
  }

  public get englishText(): boolean {
    return this._englishText.value;
  }

  set germanText(value: boolean) {
    this._germanText.next(value);
    this._englishText.next(!value);
    if(value) {
        this.translate.use('de');
        sessionStorage.clear();
        sessionStorage.setItem("choosenLang", "de");
    }
  }

  public get germanText(): boolean {
    return this._germanText.value;
  }

 
  }


