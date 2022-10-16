import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
    img {
      max-width: 100%;
      border-radius: 20px;
    }
    `
  ]
})
export class AddComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'Dc - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    publisher: Publisher.DCComics,
    alt_img: '',
    first_appearance: ''
  }

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private _snackBar: MatSnackBar,
              public dialog: MatDialog
            ) { }

  ngOnInit(): void {

    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroesService.getHeroById(id))
      )
      .subscribe({
        next: heroe => this.heroe = heroe
      })

    
  }

  save() {

    if (this.heroe.superhero.trim().length === 0) {
      return;
    } 

    if (this.heroe.id) {
      this.heroesService.updateHero(this.heroe)
          .subscribe({
            next: heroe => this.showSnackBar('Hero has been updated')
          })
    } else {
      this.heroesService.createHero(this.heroe)
          .subscribe({
            next: heroe => {
              this.router.navigate(['/heroes', heroe.id]),
              this.showSnackBar('Hero has been created')
            }
          })
    }


  }

  deleteHero() {

    const dialog = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: this.heroe
    });
    
    dialog.afterClosed()
        .subscribe({
          next: (result) => {
            if(result) {
              this.heroesService.deleteHero(this.heroe.id!)
              .subscribe({
                next: resp => {
                  this.router.navigate(['/heroes']);
                }
              });
            }
          }
        })
  }

  showSnackBar(msg: string) {
    this._snackBar.open(msg, 'ok!', {
      duration: 2500
    });
  }

}
