import { Egreso } from './egresos.model';
import { EgresosService } from './../services/egresos.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  egresos: Egreso[] = [];
  @Input() totalIngresos: number;

  constructor(private egresosService: EgresosService) { }

  ngOnInit(): void {
    this.egresos = this.egresosService.egresos;
  }

  getPercentage(egreso: Egreso){
    let percentage = (egreso.value/this.totalIngresos);
    return percentage
  }

  deleteEgreso(egreso:Egreso){
    this.egresosService.deleteEgreso(egreso);
  }

}
