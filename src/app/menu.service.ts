import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  private closeMenuSource = new Subject<void>();
  closeMenu$ = this.closeMenuSource.asObservable();

  closeMenu(): void {
    this.closeMenuSource.next();
  }
}
