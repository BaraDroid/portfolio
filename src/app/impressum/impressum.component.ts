import { Component } from '@angular/core';
import { MainNavbarComponent } from '../shared/main-navbar/main-navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-impressum',
  imports: [MainNavbarComponent, FooterComponent, TranslatePipe],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

}
