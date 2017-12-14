
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./core/login/login.component";


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    }
    // {
    //     path: 'adminWeb',
    //     component: SidebarComponent,
    //     children: []
    // }
];

export const routing = RouterModule.forRoot(appRoutes);