import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
 
  private _germanText = new BehaviorSubject<boolean>(true); 
  germanText$ = this._germanText.asObservable();

  private _englishText = new BehaviorSubject<boolean>(false); 
  englishText$ = this._englishText.asObservable();

  set englishText(value: boolean) {
    this._englishText.next(value);
    this._germanText.next(!value);
  }

  public get englishText(): boolean {
    return this._englishText.value;
  }

  set germanText(value: boolean) {
    this._germanText.next(value);
    this._englishText.next(!value);
  }

  public get germanText(): boolean {
    return this._germanText.value;
  }


  }


