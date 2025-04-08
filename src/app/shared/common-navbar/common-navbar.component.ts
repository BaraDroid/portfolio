import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-common-navbar',
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './common-navbar.component.html',
  styleUrl: './common-navbar.component.scss'
})
export class CommonNavbarComponent {
  @Input()whiteColor: boolean = false;
  menuHover: boolean = false;
  languageHover: boolean = false;
  xHover: boolean = false;
  showWheelAbout: boolean = false;
  showWheelSkills: boolean = false;
  showWheelPortfolio: boolean = false;
  showWheelRef: boolean = false;
  showWheelContact: boolean = false;

  menuOpen: boolean = false;

  germanText: boolean = true;
  englishText: boolean = false;

  openMenuTab(event: MouseEvent) {
    this.menuOpen = true;
  }

  closeMenuTab() {
    this.menuOpen = false;
  }

  constructor(private translate: TranslateService) {}

  changeToGerman() {
    this.translate.use('de');
    this.germanText = true;
    this.englishText = false;
  }

  changeToEnglish() {
    this.translate.use('en');
    this.englishText = true;
    this.germanText = false;
  }
}
