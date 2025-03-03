import { Component } from '@angular/core';
import { MainNavbarComponent } from '../../shared/main-navbar/main-navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-above-the-folder',
  imports: [MainNavbarComponent, CommonModule],
  templateUrl: './above-the-folder.component.html',
  styleUrl: './above-the-folder.component.scss'
})
export class AboveTheFolderComponent {


}
