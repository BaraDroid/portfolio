import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { MenuService } from '../../menu.service';
import { LanguageService } from '../../language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-common-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './common-navbar.component.html',
  styleUrl: './common-navbar.component.scss'
})
export class CommonNavbarComponent {
  @Input()whiteColor: boolean = false;

  showWheelAbout: boolean = false;
  showWheelSkills: boolean = false;
  showWheelPortfolio: boolean = false;
  showWheelRef: boolean = false;
  showWheelContact: boolean = false;

  menuOpen: boolean = false;

    //menu.service
    private closeMenuSubscription: Subscription | undefined;
    constructor(private translate: TranslateService, 
      private menuService: MenuService, 
      public languageService: LanguageService) {}

  //menu.service
  ngOnInit(): void {
    this.closeMenuSubscription = this.menuService.closeMenu$.subscribe(() => {
      this.menuOpen = false; // Schließe das Menü, wenn das Ereignis empfangen wird
    });
  }

  ngOnDestroy(): void {
    if (this.closeMenuSubscription) {
      this.closeMenuSubscription.unsubscribe();
    }
  }

  openMenuTab(event: MouseEvent) {
    this.menuOpen = true;
  }

  closeMenuTab() {
    this.menuOpen = false;
  }

setLanguage() {
  if(this.languageService.getStoredLanguage() === "de") {
    this.changeToEnglish();
  }
  else if(this.languageService.getStoredLanguage() === "en") {
    this.changeToGerman();
  }
  else {this.changeToGerman();}
}

  changeToGerman() {
    this.languageService.germanText = true;
  }

  changeToEnglish() {
    this.languageService.englishText = true;
  }

}
