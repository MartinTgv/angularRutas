import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Futbol } from '../interfaces/interface';
import { Servicio1Service } from '../services/servicio1.service';

/* 1) importamos el ng form y en este dos component ya que aca esta el formulario . luego modifico el app module ts agregando el formsmodule y en el import dentro de la clase tambienlo agrego .  
importo la interface 3) creo la clase y el metodo que pega con el html guardar 4) en el constructor llamo servicio*/

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})
export class DosComponent implements OnInit {
 
  deporte : Futbol = {
  nombre:'',
   anio : 0
  } ;
  
guardar(){
  console.log(this.deporte.nombre);
  this.Martin1.nuevoDeporte( this.deporte).subscribe( data => {
     
  });
}

constructor(private Martin1:Servicio1Service ) { 
  console.log ("hola estoy en el constructor");
}

ngOnInit() {};
  

  

}
