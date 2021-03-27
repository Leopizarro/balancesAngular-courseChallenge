import { Egreso } from './../egresos/egresos.model';


export class EgresosService{
  egresos: Egreso[] = [
    new Egreso('Gastos Comunes', 300),
    new Egreso('Compra Celular', 800)
  ]

  addEgreso(egreso: Egreso){
    this.egresos.push(egreso);
  }

  deleteEgreso(egreso:Egreso){
    const index: number = this.egresos.indexOf(egreso);
    this.egresos.splice(index,1);
  }

}
