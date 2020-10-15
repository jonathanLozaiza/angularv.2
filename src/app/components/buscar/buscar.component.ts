import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  heroes: Heroe[];
  termino: string;

  constructor(
    private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
        this.termino = params['termino'];
        this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }

  getHeroe(idx: number){
    this.router.navigate(['/heroe', idx]);
  }

}
