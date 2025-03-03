import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  imports: [CommonModule],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.scss'
})
export class MainNavbarComponent {

  githubIconHover: boolean = false;
  linkedinIconHover:boolean = false;
  mailIconHover: boolean = false;
  menuHover: boolean = false;
  languageHover: boolean = false;

  xHover: boolean = false;
  showWheelAbout: boolean = false;
  showWheelSkills: boolean = false;
  showWheelPortfolio: boolean = false;
  showWheelRef: boolean = false;
  showWheelContact: boolean = false;

  menuOpen: boolean = false;

  englishText: boolean = false;
  germanText: boolean = true;

  openMenuTab() {
    this.menuOpen = true;
  }

  closeMenuTab() {
    this.menuOpen = false;
  }

  changeLanguage() {

  }
}
