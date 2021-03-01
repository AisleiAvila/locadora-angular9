import { Routes, RouterModule  } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ConsultaComponent } from './app/pessoa/consulta/consulta.component';
import { CadastroComponent } from './app/pessoa/cadastro/cadastro.component';
import { ModuleWithProviders } from '@angular/core';
import { LogInComponent } from './app/log-in/log-in.component';
import { RegisterComponent } from './app/register/register.component';

const appRoutes: Routes = [
    { path: 'home',                    component: HomeComponent },
    { path: '',                        component: HomeComponent },
    { path: 'consulta-pessoa',         component: ConsultaComponent },
    { path: 'cadastro-pessoa',         component: CadastroComponent },
    { path: 'cadastro-pessoa/:codigo', component: CadastroComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LogInComponent },
    { path: 'register', component: RegisterComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
