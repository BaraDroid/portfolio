import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TranslateService } from '@ngx-translate/core';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
 
  constructor(private translate: TranslateService, @Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      this.setDefaultLanguage();
    }
   }


   setDefaultLanguage() {
    const savedLanguage = this.getStoredLanguage();
    if(savedLanguage) {
      this.translate.use(savedLanguage);
      localStorage.setItem("choosenLang", savedLanguage);
      this._germanText.next(savedLanguage === 'de');
      this._englishText.next(savedLanguage === 'en');
    }
    else {
      this.translate.use("de");
      localStorage.setItem("choosenLang", "de");
      this._germanText.next(savedLanguage === 'de');
    }
   }

  private _germanText = new BehaviorSubject<boolean>(true); 
  germanText$ = this._germanText.asObservable();

  private _englishText = new BehaviorSubject<boolean>(false); 
  englishText$ = this._englishText.asObservable();


  public getStoredLanguage(): string | null {
    return localStorage.getItem("choosenLang");
  }

  set englishText(value: boolean) {
    this._englishText.next(value);
    this._germanText.next(!value);
    if(value) {
      this.translate.use('en');
      localStorage.setItem("choosenLang", "en");
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
        localStorage.setItem("choosenLang", "de");
    }
  }

  public get germanText(): boolean {
    return this._germanText.value;
  }

 
  }


