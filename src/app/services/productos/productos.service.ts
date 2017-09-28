import { Injectable } from '@angular/core';
import { Http}        from "@angular/http";


@Injectable()
export class ProductosService {

  productos:any[] = [];
  loading:boolean = true;
  constructor(private http:Http) {
    this.cargar_Productos();
  }

  public cargar_Item(cod:string){
      return this.http.get(`https://myapp-9022e.firebaseio.com/productos/${ cod }.json`);
  }
  
  public cargar_Productos(){
    this.loading = true;
    this.http.get('https://myapp-9022e.firebaseio.com/productos_idx.json')
             .subscribe( res => {
               //console.log(res.json());
               /*setTimeout(()=>{

                 console.log(this.productos);
               },1500)*/

               this.loading = false;
               this.productos = res.json();
             });
  }
}
