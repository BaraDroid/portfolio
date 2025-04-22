import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-first-review',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './first-review.component.html',
  styleUrl: './first-review.component.scss'
})
export class FirstReviewComponent {
  showWheel = false;

  goToLinkedInUrl() {
    window.open('https://www.linkedin.com/in/caryen-song-b6b913317/', "_blank");
  }
}
