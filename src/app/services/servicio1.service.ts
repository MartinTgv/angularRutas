import { Injectable } from '@angular/core';
import { Url } from 'url';
import { Futbol } from '../interfaces/interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BinaryOperator } from '@angular/compiler';
import {map}from'rxjs/operators';
// 2-creo servicio exporto el serv en el providers en el module ts y importa arriba el servicio
@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {
 
  urlFirebase:string="https://futbolhistoria-5dfeb.firebaseio.com/.json"

 constructor(private http: HttpClient) { }
 nuevoDeporte ( futbol: Futbol) {
  let body = JSON.stringify( futbol);
  let headers = new HttpHeaders ({
    'Content-Type': 'application/json'
  });
  
  return this.http.post( this.urlFirebase, body, {headers} ).pipe(map( res => {
    console.log(res);
    return res;
  }));
}

}

//PIPE . ((URL)) ,
 
 
 