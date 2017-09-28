import { Injectable } from '@angular/core';
import { Http}        from "@angular/http";


@Injectable()
export class ProductosService {

  productos:any[] = [];
  productos_filtrados:any[] = [];
  loading:boolean = true;

  constructor(private http:Http) {
    this.cargar_Productos();
  }

  public cargar_Item(cod:string){
      return this.http.get(`https://myapp-9022e.firebaseio.com/productos/${ cod }.json`);
  }

  public buscar_producto(termino:string){
    if (this.productos.length === 0){
      this.cargar_Productos().then(()=>{
      this.filtrar_productos(termino);
      });
    }else{
      this.filtrar_productos(termino);
    }
  }

  private filtrar_productos(termino:string){
    this.productos_filtrados = [];
      termino = termino.toLowerCase();

      this.productos.forEach( prod =>{
      if (prod.categoria.indexOf(termino) >=0 || prod.titulo.toLowerCase().indexOf(termino) >=0){
          this.productos_filtrados.push(prod);
      }
      //console.log(prod);
    })
  }


  public cargar_Productos(){
    this.loading = true;
    let promesa = new Promise ((resolve, reject) => {
      this.http.get('https://myapp-9022e.firebaseio.com/productos_idx.json')
               .subscribe( res => {
                 //console.log(res.json());
                 /*setTimeout(()=>{

                   console.log(this.productos);
                 },1500)*/

                 this.loading = false;
                 this.productos = res.json();
                 resolve();
               });
    });
    return promesa;


  }
}
