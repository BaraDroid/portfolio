import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-navbar',
  imports: [CommonModule],
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

  openMenuTab() {
    this.menuOpen = true;
  }

  closeMenuTab() {
    this.menuOpen = false;
  }
}
