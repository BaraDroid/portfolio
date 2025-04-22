import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FirstReviewComponent } from './first-review/first-review.component';
import { SecondReviewComponent } from './second-review/second-review.component';
import { ThirdReviewComponent } from './third-review/third-review.component';
import { CommonNavbarComponent } from '../../shared/common-navbar/common-navbar.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MenuService } from '../../menu.service';
import { NavdotsComponent } from "../../shared/navdots/navdots.component";
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-reviews',
  imports: [FirstReviewComponent, SecondReviewComponent, ThirdReviewComponent, CommonNavbarComponent, CommonModule, NavdotsComponent, TranslatePipe],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
isWhite: boolean = true;
indexOfThisSection: number = 4;
showArrows: boolean = false;

// ngOnInit() {
//   this.checkScreenWidth();
// }

//menu.service
constructor(private menuService: MenuService, @Inject(PLATFORM_ID) private platformId: Object) {}

  // Methode, die aufgerufen wird, wenn das Menü geschlossen werden soll (z.B. durch einen Button-Klick)
  closeTheMenu(): void {
    this.menuService.closeMenu();
  }


  //haha, to stejnak smazu, kdyz to necham bejt dlouhy
  // checkScreenWidth() {
  //   if(isPlatformBrowser(this.platformId)) {
  //     if(window.innerWidth <= 988) {
  //       this.showArrows = true;
  //     }
  //     else{this.showArrows = false;}
  //   }
  //   }

}
