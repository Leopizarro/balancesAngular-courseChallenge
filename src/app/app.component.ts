import { Ingreso } from './ingresos/ingresos.model';
import { IngresosService } from './services/ingresos.service';
import { EgresosService } from './services/egresos.service';
import { Component } from '@angular/core';
import { Egreso } from './egresos/egresos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingresos:Ingreso[] = [];
  egresos:Egreso[] = [];

  constructor(private egresosService: EgresosService,
              private ingresosService: IngresosService){
                this.ingresos = this.ingresosService.ingresos;
                this.egresos = this.egresosService.egresos;
              }

  getTotalIngresos(){
    let totalIngresos: number = 0;
    this.ingresosService.ingresos.forEach((ingreso) =>{
      totalIngresos += ingreso.value;
      /* console.log(this.totalIngresos); */
    });
    return totalIngresos
  }

  getTotalEgresos(){
    let totalEgresos: number = 0;
    this.egresosService.egresos.forEach((egreso) =>{
      totalEgresos += egreso.value;
    });
    return totalEgresos
  }

  getPercentage(){
    return (this.getTotalEgresos()/this.getTotalIngresos());

  }

  getCurrentMoney(){
    return this.getTotalIngresos() - this.getTotalEgresos();
  }
}
