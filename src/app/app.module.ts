import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UnoComponent } from './prueba/uno.component';
import { DosComponent } from './prueba/dos.component';
import { APP_ROUTING } from './routes.routing';
import { FormsModule } from '@angular/forms';
import { Servicio1Service } from './services/servicio1.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    DosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [Servicio1Service],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

// 5)agregar el formsMODULE . HTTPCLIENT.