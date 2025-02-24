import { Component, Input } from '@angular/core';
import { CommonNavbarComponent } from '../../shared/common-navbar/common-navbar.component';


@Component({
  selector: 'app-about-me',
  imports: [CommonNavbarComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})


export class AboutMeComponent {
  isWhite: boolean = false;

}
