import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'data_protection', component: DataProtectionComponent }
];
