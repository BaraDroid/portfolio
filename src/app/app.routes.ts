import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { ReviewsComponent } from './main-content/reviews/reviews.component';
import { WorkComponent } from './main-content/work/work.component';
import { CompetencesComponent } from './main-content/competences/competences.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'data_protection', component: DataProtectionComponent },
    { path: 'section_contact', component: ContactComponent },
    { path: 'section_references', component: ReviewsComponent },
    { path: 'section_my_work', component: WorkComponent },
    { path: 'section_competences', component: CompetencesComponent },
    { path: 'section_about', component: AboutMeComponent }
];
