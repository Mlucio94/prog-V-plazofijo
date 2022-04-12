import { Injectable } from '@angular/core';
import { Simulacion } from '../models/sumulacion.models';

@Injectable({
  providedIn: 'root'
})
export class SimuladoresService {
  simulaciones: Simulacion[] = [];
  constructor() { }
  
  prueba():string{
      return 'Funciona';
  }
  addSimualcion(simulacion :Simulacion){
    this.simulaciones.push(simulacion);
  }
  verSimulaciones(){
    return this.simulaciones;
  }
}
