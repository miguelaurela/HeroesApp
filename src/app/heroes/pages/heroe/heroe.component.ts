import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params} from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import {switchMap} from 'rxjs/operators'
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  heroe!:Heroe
  constructor(private _activatedRoute: ActivatedRoute,
              private _heroesServices:HeroesService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params:Params) => {
      let page = params['id'];
      console.log(params['id']);
    });
    this._activatedRoute.params
    .pipe(
      switchMap(({id})=> this._heroesServices.getHeroesPorId(id))
    )
    .subscribe(heroe=>this.heroe=heroe)
  }

}
