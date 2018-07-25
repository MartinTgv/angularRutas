import { Routes, RouterModule } from '@angular/router';
import { UnoComponent } from './prueba/uno.component';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DosComponent } from './prueba/dos.component';


const APP_ROUTES: Routes = [
 
  { path:'1', component:UnoComponent},
 
  { path:'2',component:DosComponent },

  { path: '2/:id', component:DosComponent},
  {path: '2/:key', component:DosComponent },
  {path:'**', pathMatch:'full' , redirectTo:'1'}

];


@NgModule({

  imports: [RouterModule.forRoot(APP_ROUTES)],
  
  exports: [RouterModule]
  
  })
 //
  export class APP_ROUTING { }