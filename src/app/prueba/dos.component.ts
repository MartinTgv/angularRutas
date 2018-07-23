import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { futbol } from '../interfaces/interface';

/* 1) importamos el ng form y en este dos component ya que aca esta el formulario . luego modifico el app module ts agregando el formsmodule y en el import dentro de la clase tambienlo agrego .  
importo la interface*/
@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})
export class DosComponent implements OnInit {
 
  deporte : futbol = {
  nombre:'',
   anio : 0
  } ;
  
guardar(){
  console.log(this.deporte.nombre);
}

  
 constructor() { }

  ngOnInit() {
  }

}
