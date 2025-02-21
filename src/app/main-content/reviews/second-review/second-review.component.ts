import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-second-review',
  imports: [CommonModule],
  templateUrl: './second-review.component.html',
  styleUrl: './second-review.component.scss'
})
export class SecondReviewComponent {
showWheel = false;
}
