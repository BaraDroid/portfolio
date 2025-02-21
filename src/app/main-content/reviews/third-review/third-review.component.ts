import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-third-review',
  imports: [CommonModule],
  templateUrl: './third-review.component.html',
  styleUrl: './third-review.component.scss'
})
export class ThirdReviewComponent {
showWheel = false;
}
