import { Injectable } from '@angular/core';
import { Url } from 'url';
// 2-creo servicio exporto el serv en el providers en el module ts y importa arriba el servicio
@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {
 urlFirebase:string="https://futbolhistoria-5dfeb.firebaseio.com/.json"
constructor() { }

}
