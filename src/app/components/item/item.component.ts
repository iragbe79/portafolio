import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductosService} from "../../services/productos/productos.service";
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent  {

  producto:any = undefined;
  cod:any = undefined;

  constructor(private route:ActivatedRoute,
              private _ip:ProductosService) {
    route.params.subscribe (parametros =>{
      _ip.cargar_Item(parametros['id'])
         .subscribe(res => {
           this.producto = res.json();
           this.cod = parametros['id'];
           //console.log(this.producto);
         })
    })
  }



}
