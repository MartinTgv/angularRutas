import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Futbol } from '../interfaces/interface';
import { Servicio1Service } from '../services/servicio1.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  };

  key:string;
  
guardar(){
  console.log(this.deporte.nombre);
  
  this.Martin1.nuevoDeporte( this.deporte).subscribe( data => {
      alert("Guardado con exito."); 
    },
    error => {
      alert("Error al guardar el registro");
    }
  );
  this.ruta.navigate(['/2',0]);
}

constructor(private Martin1:Servicio1Service ,
            private ruta: Router,
            private activarRuta:ActivatedRoute) { 
  console.log ("hola estoy en el constructor");
  this.activarRuta.params.subscribe(parametros =>{
    this.key = parametros['key'];
    console.log(this.key);
    
  })
}

actualizar(){
  console.log(this.deporte.nombre);
  this.Martin1.actualizar( this.deporte , this.key).subscribe( data => {
     alert("Actualizado");
  });
  this.ruta.navigate(['/2','key']);
 

}

  borrar(){
    console.log(this.deporte.nombre);
    this.Martin1.borrar( this.deporte, this.key).subscribe( data => {
      alert("borrado");
   
       
    });
    this.ruta.navigate(['/1','key'])
   
  }



ngOnInit() {
  
};
  

}
