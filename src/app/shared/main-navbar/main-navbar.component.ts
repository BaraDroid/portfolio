import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-navbar',
  imports: [CommonModule, TranslatePipe, TranslateDirective, RouterModule],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.scss'
})
export class MainNavbarComponent {

  //githubIconHover: boolean = false;
  linkedinIconHover:boolean = false;
  //mailIconHover: boolean = false;
  //menuHover: boolean = false;
  languageHover: boolean = false;

  //xHover: boolean = false;
  showWheelAbout: boolean = false;
  showWheelSkills: boolean = false;
  showWheelPortfolio: boolean = false;
  showWheelRef: boolean = false;
  showWheelContact: boolean = false;

  menuOpen: boolean = false;

  englishText: boolean = false;
  germanText: boolean = true;

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
