import { Component, OnInit } from '@angular/core';
import { Futbol } from '../interfaces/interface';
import { Servicio1Service } from '../services/servicio1.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {

  deportes: Futbol[] = [];
  key:string;
  
  constructor(private Martin1:Servicio1Service  ) { 
    
    this.Martin1.getall( ).subscribe( data => {
    console.log(data);
    for(let dato in data){
      console.log(dato);
      let eqNuevo = data[dato];
      eqNuevo.key = dato;
      this.deportes.push(eqNuevo);
    }
   
    console.log(this.deportes);
    console.log();
 });
}


  
    

  ngOnInit() {
    
  }

}
