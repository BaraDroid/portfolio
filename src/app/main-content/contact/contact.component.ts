import { Component } from '@angular/core';
import { FormularComponent } from './formular/formular.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonNavbarComponent } from '../../shared/common-navbar/common-navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormularComponent, FooterComponent, CommonNavbarComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
isWhite: boolean = true;
}
