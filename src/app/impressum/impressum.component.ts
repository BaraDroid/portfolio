import { Component } from '@angular/core';
import { MainNavbarComponent } from '../shared/main-navbar/main-navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslatePipe } from '@ngx-translate/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-impressum',
  imports: [MainNavbarComponent, FooterComponent, TranslatePipe],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

    //menu.service
constructor(private menuService: MenuService) {}

// Methode, die aufgerufen wird, wenn das Menü geschlossen werden soll (z.B. durch einen Button-Klick)
closeTheMenu(): void {
  this.menuService.closeMenu();
}

}
