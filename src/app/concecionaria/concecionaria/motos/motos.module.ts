import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotosComponent } from './motos.component'; // Importa la clase Moto



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [MotosComponent] // Declara Moto como un proveedor en el módulo de motos
})
export class MotosModule { }
