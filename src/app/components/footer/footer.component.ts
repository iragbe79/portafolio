import { Component} from '@angular/core';
import { InformacionService } from "../../services/informacion/informacion.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent  {

  anio:number = new Date().getFullYear();
  info:any = {};

  constructor(public _is:InformacionService){

  }

}
