import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-hereo',
  templateUrl: './hereo.component.html',
})
export class HereoComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroesService.getHeroById(id))
      )
      .subscribe({
        next: heroe => this.heroe = heroe
      })
  }

}
