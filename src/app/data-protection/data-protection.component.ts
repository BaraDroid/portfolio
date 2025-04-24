import { Component } from '@angular/core';
import { MainNavbarComponent } from '../shared/main-navbar/main-navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslatePipe } from '@ngx-translate/core';
import { MenuService } from '../menu.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-data-protection',
  imports: [MainNavbarComponent, FooterComponent, TranslatePipe, RouterModule],
  templateUrl: './data-protection.component.html',
  styleUrl: './data-protection.component.scss'
})
export class DataProtectionComponent {
  contactSection: boolean = false;

    //menu.service
    constructor(private menuService: MenuService) {}

    // Methode, die aufgerufen wird, wenn das Menü geschlossen werden soll (z.B. durch einen Button-Klick)
    closeTheMenu(): void {
      this.menuService.closeMenu();
    }

}
