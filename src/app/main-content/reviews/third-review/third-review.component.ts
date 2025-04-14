import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-third-review',
  imports: [CommonModule,TranslatePipe, TranslateDirective],
  templateUrl: './third-review.component.html',
  styleUrl: './third-review.component.scss'
})
export class ThirdReviewComponent {
showWheel = false;

goToLinkedInUrl() {
  window.open('https://www.linkedin.com/in/albina-januzi/', "_blank");
}
}
