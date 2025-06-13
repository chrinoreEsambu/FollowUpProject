import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HerobanerComponent } from './herobaner/herobaner.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { StatisticComponent } from './statistic/statistic.component';
import { EntrainementComponent } from './entrainement/entrainement.component';
import { LoginComponent } from './login/login.component';
import { MoodComponent } from './mood/mood.component';
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';



export const routes: Routes = [
    { 
        path: '', redirectTo: '/herobaner', pathMatch: 'full'

    }, 
    {
    path: 'navbar', component: NavbarComponent
    },
    {
        path: 'herobaner', component: HerobanerComponent
    },
    {
        path: 'ajouter', component: AjouterComponent
    },
    {
        path:'statistic', component : StatisticComponent
    },
    {
        path:'entrainement', component : EntrainementComponent
    },
    {
        path:'login', component : LoginComponent
    },
    {
        path:'mood', component : MoodComponent
    },
    {
        path:'suggestion-list', component : SuggestionListComponent
    }
];
