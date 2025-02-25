import { Component } from '@angular/core';
import { CommonNavbarComponent } from '../../shared/common-navbar/common-navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  imports: [CommonNavbarComponent, CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

}
