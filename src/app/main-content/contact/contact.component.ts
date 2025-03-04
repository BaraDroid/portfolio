import { Component } from '@angular/core';
import { FormularComponent } from './formular/formular.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonNavbarComponent } from '../../shared/common-navbar/common-navbar.component';
import { CommonModule } from '@angular/common';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [FormularComponent, FooterComponent, CommonNavbarComponent, CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
isWhite: boolean = true;
}
