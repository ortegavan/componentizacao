import { Routes } from '@angular/router';
import { ReceitasComponent } from './receitas/components/receitas/receitas.component';

export const routes: Routes = [
    {
        path: 'receitas',
        component: ReceitasComponent,
    },
    {
        path: '',
        redirectTo: 'receitas',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'receitas',
    },
];
