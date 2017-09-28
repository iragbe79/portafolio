import { Injectable } from '@angular/core';
import { Http}        from "@angular/http";


@Injectable()
export class ProductosService {

  productos:any[] = [];
  loading:boolean = true;
  constructor(private http:Http) {
    this.cargar_Productos();

  }

  public cargar_Productos(){
    this.loading = true;
    this.http.get('https://myapp-9022e.firebaseio.com/productos_idx.json')
             .subscribe( res => {
               console.log(res.json());
               this.loading = false;
             });
  }
}
