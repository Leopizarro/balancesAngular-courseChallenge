import { EgresosService } from './../services/egresos.service';
import { IngresosService } from './../services/ingresos.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() totalIngresos: number;
  @Input() totalEgresos: number;
  @Input() percent: number;
  @Input() currentMoney: number;

  constructor(private ingresosService: IngresosService,
              private egresosService: EgresosService) { }

  ngOnInit(): void {
  }


}
