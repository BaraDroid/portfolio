import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-common-navbar',
  imports: [CommonModule],
  templateUrl: './common-navbar.component.html',
  styleUrl: './common-navbar.component.scss'
})
export class CommonNavbarComponent {
  @Input()whiteColor: boolean = false;

  showWheelAbout: boolean = false;
  showWheelSkills: boolean = false;
  showWheelPortfolio: boolean = false;
  showWheelRef: boolean = false;
  showWheelContact: boolean = false;

  menuOpen: boolean = false;

  germanText: boolean = true;
  englishText: boolean = false;

    //menu.service
    private closeMenuSubscription: Subscription | undefined;
    constructor(private translate: TranslateService, private menuService: MenuService) {}

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
    this.germanText = true;
    this.englishText = false;
  }

  changeToEnglish() {
    this.translate.use('en');
    this.englishText = true;
    this.germanText = false;
  }
}
