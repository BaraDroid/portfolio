import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private _isGerman = new BehaviorSubject<boolean>(true); // Standardmäßig Deutsch
  isGerman$ = this._isGerman.asObservable();

  get isGerman(): boolean {
    return this._isGerman.value;
  }

  set isGerman(value: boolean) {
    this._isGerman.next(value);
  }

  toggleLanguage(): void {
    this.isGerman = !this.isGerman;
  }

  getCurrentLanguageIcon(): string {
    return this.isGerman ? './assets/icons/de.svg' : './assets/icons/en.svg';
  }
}
