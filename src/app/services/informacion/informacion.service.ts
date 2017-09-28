import { Injectable } from '@angular/core';
import { Http} from "@angular/http";

@Injectable()
export class InformacionService {

  info:any = {};
  team:any[] = [];
  loadInfo:boolean = false;
  loadTeam:boolean = false;

  constructor(public http:Http) {
    this.carga_Info();
    this.carga_About();
  }

  carga_Info(){
    this.http.get("assets/data/info.pagina.json")
             .subscribe( data => {
               console.log(data.json());
               this.info = data.json();
               this.loadInfo = true;
             });
  }

  carga_About(){
    this.http.get("https://myapp-9022e.firebaseio.com/equipo.json")
             .subscribe( data => {
               console.log(data.json());
               this.team = data.json();
               this.loadTeam = true;
             });
  }

}
