import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-navbar',
  imports: [],
  templateUrl: './common-navbar.component.html',
  styleUrl: './common-navbar.component.scss'
})
export class CommonNavbarComponent {
  @Input()whiteColor: boolean = false;
  menuHover: boolean = false;
  languageHover: boolean = false;
}
