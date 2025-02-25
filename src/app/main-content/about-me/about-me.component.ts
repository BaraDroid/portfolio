import { Component, Input } from '@angular/core';
import { CommonNavbarComponent } from '../../shared/common-navbar/common-navbar.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about-me',
  imports: [CommonNavbarComponent, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})


export class AboutMeComponent {
  isWhite: boolean = false;

}
