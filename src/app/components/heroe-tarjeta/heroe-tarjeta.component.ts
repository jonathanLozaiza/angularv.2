import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() i: number;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router:Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  getHeroe(idx:number){
    //this.heroeSeleccionado.emit(this.i);
    this.router.navigate(['/heroe',idx]);
  }
}