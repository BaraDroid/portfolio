import { Component } from '@angular/core';
import { FormularComponent } from './formular/formular.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonNavbarComponent } from '../../shared/common-navbar/common-navbar.component';
import { CommonModule } from '@angular/common';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { MenuService } from '../../menu.service';
import { NavdotsComponent } from "../../shared/navdots/navdots.component";

@Component({
  selector: 'app-contact',
  imports: [FormularComponent, FooterComponent, CommonNavbarComponent, CommonModule, TranslatePipe, TranslateDirective, NavdotsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
isWhite: boolean = true;
indexOfThisSection: number = 5;
contactSection: boolean = true;

//menu.service
constructor(private menuService: MenuService) {}

  // Methode, die aufgerufen wird, wenn das Menü geschlossen werden soll (z.B. durch einen Button-Klick)
  closeTheMenu(): void {
    this.menuService.closeMenu();
  }

}
