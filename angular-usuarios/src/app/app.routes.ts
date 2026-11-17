import { Routes } from '@angular/router';
import { UsersPage } from './pages/users-page/users-page';

export const routes: Routes = [
    {path: '', component: UsersPage},
    {
        path: 'favorites',
        component: UsersPage,
        data: { favorites: true }
    },

    {path: '**', redirectTo: ''}
];
