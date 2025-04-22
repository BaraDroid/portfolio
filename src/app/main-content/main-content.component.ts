import { Component, HostListener } from '@angular/core';
import { AboveTheFolderComponent } from './above-the-folder/above-the-folder.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CompetencesComponent } from './competences/competences.component';
import { WorkComponent } from './work/work.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactComponent } from './contact/contact.component';
import { TranslateService} from "@ngx-translate/core";
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { NavdotsComponent } from "../shared/navdots/navdots.component";

@Component({
  selector: 'app-main-content',
  imports: [AboveTheFolderComponent, AboutMeComponent, CompetencesComponent, WorkComponent, ReviewsComponent, ContactComponent, RouterOutlet],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  constructor(private translate: TranslateService) {}

}
