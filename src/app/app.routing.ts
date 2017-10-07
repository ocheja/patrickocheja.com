import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from 'app/app.component';

const appRoutes: Routes = [
    {path: '', component: AppComponent}];

export const Routing = RouterModule.forRoot(appRoutes);
