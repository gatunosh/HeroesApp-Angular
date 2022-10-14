import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';


import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HereoComponent } from './pages/hereo/hereo.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from '../material/material.module';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { ImagePipe } from './pipes/image.pipe';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HereoComponent,
    HomeComponent,
    ListComponent,
    HeroeCardComponent,
    ImagePipe,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
