import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosComponent } from './vehiculos.component';



@NgModule({
  declarations: [
    VehiculosComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [VehiculosComponent] // Declara Moto como un proveedor en el módulo de motos
})

export class VehiculosModule { }
