import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-second-review',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './second-review.component.html',
  styleUrl: './second-review.component.scss'
})
export class SecondReviewComponent {
showWheel = false;

goToLinkedInUrl() {
  window.open('https://www.linkedin.com/in/catalina-acosta-rivera/', "_blank");
}
}
