import { Component, OnInit } from '@angular/core';
import { Simulacion } from 'src/app/models/sumulacion.models';
import { SimuladoresService } from 'src/app/providers/simuladores.service';

@Component({
  selector: 'app-plazofijo',
  templateUrl: './plazofijo.component.html',
  styleUrls: ['./plazofijo.component.css']
})

export class PlazofijoComponent implements OnInit {
  resultado : Simulacion[];
  simulacion: Simulacion;
  capital: number;
  dias:number;
  tasa:number;
  interes:number;

  constructor(public simuladores: SimuladoresService) {
      this.capital = 1000;
      this.dias = 30;
      this.interes= 0;
      this.tasa= 41
      this.resultado = simuladores.verSimulaciones();
      this.simulacion  =new Simulacion(this.capital,this.dias,this.tasa,this.interes)
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
    this.simuladores.addSimualcion(new Simulacion(this.capital,this.dias,this.tasa,this.interes))
  }
    
  decrementa(d:string,dec:number){
      switch(d){
        case 'C':
          if (this.capital > 1000){
            this.capital -= dec;
          }
          break;
        case 'D':
          if (this.dias > 30){
            this.dias -= dec;
          }
          break;
        default:
          break;
      }
      
      this.simuladores.addSimualcion(new Simulacion(this.capital,this.dias,this.tasa,this.interes) )
  }    
 

}
 

