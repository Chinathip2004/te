import { CreateComponent } from './presentation/create/create.component';
import { Routes } from '@angular/router';
import { IndexComponent } from './presentation/index/index.component';

export const routes: Routes = [
    { path: '', component: IndexComponent},
    { path: 'process/create', component: CreateComponent}
];
