import { Component } from '@angular/core';
import { CommonNavbarComponent } from '../../shared/common-navbar/common-navbar.component';
import { CommonModule } from '@angular/common';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { MenuService } from '../../menu.service';
import { NavdotsComponent } from "../../shared/navdots/navdots.component";

@Component({
  selector: 'app-work',
  imports: [CommonNavbarComponent, CommonModule, TranslatePipe, NavdotsComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  isWhite: boolean = false;
  indexOfThisSection: number = 3;
  showContribution: boolean = false;

  projects =[
    {
      name: 'Pokedex',
      imgSrc: '././assets/screenshots/pokedex.png',
      technologies: 'REST API | JavaScript | CSS | HTML',
      iconSrc: './assets/emojis/statistic.svg',
      gitHubUrl: 'https://github.com/BaraDroid/pokedex',
      liveUrl: 'https://pokedex.barbora-lambeinova.de/'
    }
  ]
    

  //menu.service
constructor(private menuService: MenuService) {}

// Methode, die aufgerufen wird, wenn das Menü geschlossen werden soll (z.B. durch einen Button-Klick)
closeTheMenu(): void {
  this.menuService.closeMenu();
}

//ja pak predavam url jako parametr, abych mohla pracovat pouze s jednou funkci pro vsechno
goToUrl(givenUrl: string) {
  window.open(givenUrl, "_blank");
}

}
