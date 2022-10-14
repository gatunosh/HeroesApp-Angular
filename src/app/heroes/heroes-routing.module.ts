import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HereoComponent } from './pages/hereo/hereo.component';
import { ListComponent } from './pages/list/list.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'edit/:id',
        component: AddComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: ':id',
        component: HereoComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
