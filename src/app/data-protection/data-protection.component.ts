import { Component } from '@angular/core';
import { MainNavbarComponent } from '../shared/main-navbar/main-navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-data-protection',
  imports: [MainNavbarComponent, FooterComponent, TranslatePipe],
  templateUrl: './data-protection.component.html',
  styleUrl: './data-protection.component.scss'
})
export class DataProtectionComponent {

}
