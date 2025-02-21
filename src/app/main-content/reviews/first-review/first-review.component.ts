import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-review',
  imports: [CommonModule],
  templateUrl: './first-review.component.html',
  styleUrl: './first-review.component.scss'
})
export class FirstReviewComponent {
  showWheel = false;
}
