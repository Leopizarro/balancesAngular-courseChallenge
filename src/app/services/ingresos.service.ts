import { Ingreso } from './../ingresos/ingresos.model';


export class IngresosService{
  ingresos: Ingreso[] = [
    new Ingreso('Salary', 4000),
    new Ingreso('Car sold', 500)
  ];

  addIngreso(ingreso: Ingreso){
    this.ingresos.push(ingreso);
  }

  deleteIngreso(ingreso:Ingreso){
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice,1);
  }

}
