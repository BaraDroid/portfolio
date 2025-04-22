import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { MenuService } from '../../menu.service';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-main-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.scss'
})
export class MainNavbarComponent {
  //menu.service
  private closeMenuSubscription: Subscription | undefined;
  constructor(private translate: TranslateService, 
    private menuService: MenuService,
    public languageService: LanguageService) {}

  linkedinIconHover:boolean = false;

  showWheelAbout: boolean = false;
  showWheelSkills: boolean = false;
  showWheelPortfolio: boolean = false;
  showWheelRef: boolean = false;
  showWheelContact: boolean = false;

  menuOpen: boolean = false;

  //menu.service
  ngOnInit(): void {
    this.closeMenuSubscription = this.menuService.closeMenu$.subscribe(() => {
      this.menuOpen = false; // Schließe das Menü, wenn das Ereignis empfangen wird
    });
  }

  ngOnDestroy(): void {
    if (this.closeMenuSubscription) {
      this.closeMenuSubscription.unsubscribe();
    }
  }

  openMenuTab(event: MouseEvent) {
    this.menuOpen = true;
  }

  closeMenuTab() {
    this.menuOpen = false;
  }

  changeToGerman() {
    this.translate.use('de');
    this.languageService.germanText = true;
  }

  changeToEnglish() {
    this.translate.use('en');
    this.languageService.englishText = true;
  }
}
