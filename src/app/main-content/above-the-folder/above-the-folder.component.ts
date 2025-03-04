import { Component } from '@angular/core';
import { MainNavbarComponent } from '../../shared/main-navbar/main-navbar.component';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-folder',
  imports: [MainNavbarComponent, CommonModule, TranslatePipe],
  templateUrl: './above-the-folder.component.html',
  styleUrl: './above-the-folder.component.scss'
})
export class AboveTheFolderComponent {


}
