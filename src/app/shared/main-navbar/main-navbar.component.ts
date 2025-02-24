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


}
