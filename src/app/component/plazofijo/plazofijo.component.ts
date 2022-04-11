import { Component, OnInit } from '@angular/core';
import { Simulacion } from 'src/app/models/sumulacion.models';
import { SimuladoresService } from 'src/app/providers/simuladores.service';

@Component({
  selector: 'app-plazofijo',
  templateUrl: './plazofijo.component.html',
  styleUrls: ['./plazofijo.component.css']
})

export class PlazofijoComponent implements OnInit {
  resultado : string;
  simulacion: Simulacion;
  capital: number;
  dias:number;

  constructor(public simuladores: SimuladoresService) {
      this.capital = 1000;
      this.dias = 30
      this.resultado = simuladores.prueba();
      this.simulacion  =new Simulacion(this.capital,this.dias,41)
   }

  ngOnInit(): void {
  }

  incrementa(t:string,inc : number){
    switch(t){
      case 'C':
        this.capital += inc;
        break;
      case 'D':
        this.dias += inc;
        break;
      default:
        break;
    }
  }    

}
