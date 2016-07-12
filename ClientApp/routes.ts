import { RouterConfig } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

export const routes: RouterConfig = [
    { path: '', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'home' }
];
