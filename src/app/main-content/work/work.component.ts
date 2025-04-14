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
  currentIndex: number = 0;

  projects: {
    name: string;
    imgSrc: string;
    technologies: string;
    iconSrc: string;
    gitHubUrl: string;
    liveUrl: string;
    descriptionKey: string;
    contributionKey: string;
  }[] = [
    {
      name: 'Pokedex',
      imgSrc: '././assets/screenshots/pokedex.png',
      technologies: 'REST API | JavaScript | Asynchronous Requests | CSS | HTML',
      iconSrc: './assets/emojis/statistic.svg',
      gitHubUrl: 'https://github.com/BaraDroid/pokedex',
      liveUrl: 'https://pokedex.barbora-lambeinova.de/',
      descriptionKey: 'work.pokedex.description',
      contributionKey: 'work.pokedex.contribution'
    },
    {
      name: 'Join',
      imgSrc: '././assets/screenshots/join.png',
      technologies: 'Angular | Firebase | TypeScript | SCSS | HTML',
      iconSrc: './assets/emojis/join.svg',
      gitHubUrl: 'https://i.kym-cdn.com/photos/images/original/000/310/238/0e5.png',
      liveUrl: 'https://i.kym-cdn.com/photos/images/original/000/310/238/0e5.png',
      descriptionKey: 'work.join.description',
      contributionKey: 'work.join.contribution'
    },
    {
      name: 'El Pollo Loco',
      imgSrc: '././assets/screenshots/pollo_loco.png',
      technologies: 'OOP | JavaScript | Collision Detection | CSS | HTML',
      iconSrc: './assets/emojis/pollo_loco.svg',
      gitHubUrl: 'https://github.com/BaraDroid/El-pollo-loco',
      liveUrl: 'https://i.kym-cdn.com/photos/images/original/000/310/238/0e5.png',
      descriptionKey: 'work.pollo_loco.description',
      contributionKey: 'work.pollo_loco.contribution'
    },
  ]

  showNextProject() {
    this.currentIndex++;
    if(this.currentIndex >= this.projects.length){
      this.currentIndex = 0;
    }
    console.log('next method currentIndex', this.currentIndex);
  }

  showPreviousProject() {
    this.currentIndex--;
    if(this.currentIndex < 0) {
      this.currentIndex = this.projects.length - 1;
    }
    console.log('previous method currentIndex', this.currentIndex);
  }
    

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
