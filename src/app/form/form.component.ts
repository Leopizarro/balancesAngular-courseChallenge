import { Egreso } from './../egresos/egresos.model';
import { IngresosService } from './../services/ingresos.service';
import { Component, OnInit } from '@angular/core';
import { EgresosService } from '../services/egresos.service';
import { Ingreso } from '../ingresos/ingresos.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  type: string = "addIngreso";
  descriptionInput: string;
  valorInput: number;

  constructor(private ingresosService: IngresosService,
              private egresosService: EgresosService) { }

  ngOnInit(): void {
  }

  addTransaction(){
    if (this.type === 'addIngreso'){
      this.ingresosService.ingresos.push(new Ingreso(this.descriptionInput, this.valorInput));
    }else{
      this.egresosService.egresos.push(new Egreso(this.descriptionInput, this.valorInput));
    }
  }

  changeTypeValue(event){
    this.type = event.target.value;
  }

}
