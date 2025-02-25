import { Component } from '@angular/core';
import { FirstReviewComponent } from './first-review/first-review.component';
import { SecondReviewComponent } from './second-review/second-review.component';
import { ThirdReviewComponent } from './third-review/third-review.component';
import { CommonNavbarComponent } from '../../shared/common-navbar/common-navbar.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reviews',
  imports: [FirstReviewComponent, SecondReviewComponent, ThirdReviewComponent, CommonNavbarComponent, CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
isWhite: boolean = true;
}
