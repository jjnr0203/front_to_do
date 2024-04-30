import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConcecionariaComponent } from './concecionaria/concecionaria/concecionaria.component'; // Ajusta la ruta según la ubicación real del archivo
import { VehiculosComponent } from './concecionaria/concecionaria/vehiculos/vehiculos.component'; // Ajusta la ruta según la ubicación real del archivo
import { MotosComponent } from './concecionaria/concecionaria/motos/motos.component'; // Ajusta la ruta según la ubicación real del archivo

@NgModule({
  declarations: [
    AppComponent,
    ConcecionariaComponent,
    VehiculosComponent,
    MotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
