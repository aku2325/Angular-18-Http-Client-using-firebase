import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTaskComponent } from './dashboard/create-task/create-task.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    // {
    //     path: 'login',
    //     component: LoginComponent
    // },

    {
        path: '',
        component: DashboardComponent,
        // children: [
        //     {
        //         path: 'dashboard',
        //         component: DashboardComponent,

        //     }
        // ]
    }
];
