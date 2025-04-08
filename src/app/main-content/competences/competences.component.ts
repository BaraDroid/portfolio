import { Component, Input } from '@angular/core';
import { CommonNavbarComponent } from '../../shared/common-navbar/common-navbar.component';
import { CommonModule } from '@angular/common';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-competences',
  imports: [CommonNavbarComponent, CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.scss'
})
export class CompetencesComponent {
isWhite: boolean = true;

icons: {
  path: string;
  description: string;
} [] = [
  {
    path: './assets/frontend_icons/html.svg',
    description: 'HTML'
  },
  {
    path: './assets/frontend_icons/css.svg',
    description: 'CSS'
  },
  {
    path: './assets/frontend_icons/js.svg',
    description: 'JavaScript'
  },
  {
    path: './assets/frontend_icons/ts.svg',
    description: 'TypeScript'
  },
  {
    path: './assets/frontend_icons/angular.svg',
    description: 'Angular'
  },
  {
    path: './assets/frontend_icons/firebase.svg',
    description: 'Firebase'
  },
  {
    path: './assets/frontend_icons/git.svg',
    description: 'Git'
  },
  {
    path: './assets/frontend_icons/rest_api.svg',
    description: 'Rest-Api'
  },
  {
    path: './assets/frontend_icons/scrum.svg',
    description: 'Scrum'
  },
  {
    path: './assets/frontend_icons/material_design.svg',
    description: 'Material design'
  }
];

//menu.service
constructor(private menuService: MenuService) {}

  // Methode, die aufgerufen wird, wenn das Menü geschlossen werden soll (z.B. durch einen Button-Klick)
  closeTheMenu(): void {
    this.menuService.closeMenu();
  }
  
  
}
