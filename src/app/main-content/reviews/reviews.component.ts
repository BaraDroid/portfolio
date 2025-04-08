import { Component } from '@angular/core';
import { FirstReviewComponent } from './first-review/first-review.component';
import { SecondReviewComponent } from './second-review/second-review.component';
import { ThirdReviewComponent } from './third-review/third-review.component';
import { CommonNavbarComponent } from '../../shared/common-navbar/common-navbar.component';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../menu.service';


@Component({
  selector: 'app-reviews',
  imports: [FirstReviewComponent, SecondReviewComponent, ThirdReviewComponent, CommonNavbarComponent, CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
isWhite: boolean = true;

//menu.service
constructor(private menuService: MenuService) {}

  // Methode, die aufgerufen wird, wenn das Menü geschlossen werden soll (z.B. durch einen Button-Klick)
  closeTheMenu(): void {
    this.menuService.closeMenu();
  }
}
