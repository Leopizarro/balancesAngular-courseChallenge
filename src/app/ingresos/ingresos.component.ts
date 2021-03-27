import { Ingreso } from './ingresos.model';
import { IngresosService } from './../services/ingresos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  ingresos: Ingreso[] = [];

  constructor(private ingresosService: IngresosService) { }

  ngOnInit(): void {
    this.ingresos = this.ingresosService.ingresos;
  }

  deleteIngreso(ingreso: Ingreso){
    this.ingresosService.deleteIngreso(ingreso);
  }

}
