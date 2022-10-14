import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  value: string = '';
  heroes: Heroe[] = [];
  heroeSelected: Heroe | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  searching() {
    this.heroesService.getAutoComplete(this.value.trim())
        .subscribe({
          next: heroes => this.heroes = heroes
        })
  }

  selectedOption(event: MatAutocompleteSelectedEvent) {

    if (!event.option.value) {
      this.heroeSelected = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    this.value = heroe.superhero;

    this.heroesService.getHeroById(heroe.id!)
        .subscribe({
          next: heroe => this.heroeSelected = heroe
        });

  }

}
