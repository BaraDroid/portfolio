import { Component } from '@angular/core';
import { AboveTheFolderComponent } from './above-the-folder/above-the-folder.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CompetencesComponent } from './competences/competences.component';
import { WorkComponent } from './work/work.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactComponent } from './contact/contact.component';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-main-content',
  imports: [AboveTheFolderComponent, AboutMeComponent, CompetencesComponent, WorkComponent, ReviewsComponent, ContactComponent,
    TranslatePipe, TranslateDirective
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  constructor(private translate: TranslateService) {}
  


}
