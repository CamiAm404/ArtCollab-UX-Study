import { Routes } from '@angular/router';
import { CaseStudyComponent } from './pages/case-study/case-study.component';

export const routes: Routes = [
    {path: '', redirectTo: '/case-study', pathMatch: 'full'},
    {path: 'case-study', component: CaseStudyComponent }
];