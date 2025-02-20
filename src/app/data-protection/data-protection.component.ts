import { Component } from '@angular/core';
import { MainNavbarComponent } from '../shared/main-navbar/main-navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-data-protection',
  imports: [MainNavbarComponent, FooterComponent],
  templateUrl: './data-protection.component.html',
  styleUrl: './data-protection.component.scss'
})
export class DataProtectionComponent {

}
