import { Component } from '@angular/core';
import { MainNavbarComponent } from '../../shared/main-navbar/main-navbar.component';
import { CommonModule } from '@angular/common';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MenuService } from '../../menu.service';
import { NavdotsComponent } from "../../shared/navdots/navdots.component";

@Component({
  selector: 'app-above-the-folder',
  imports: [MainNavbarComponent, CommonModule, TranslatePipe, NavdotsComponent],
  templateUrl: './above-the-folder.component.html',
  styleUrl: './above-the-folder.component.scss'
})
export class AboveTheFolderComponent {
  isWhite: boolean = true;
  indexOfThisSection: number = 0;

//menu.service
constructor(private menuService: MenuService) {}

  // Methode, die aufgerufen wird, wenn das Menü geschlossen werden soll (z.B. durch einen Button-Klick)
  closeTheMenu(): void {
    this.menuService.closeMenu();
  }

}
