import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HeroesRoutingModule } from './heroes-routing.module';


import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HereoComponent } from './pages/hereo/hereo.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HereoComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
