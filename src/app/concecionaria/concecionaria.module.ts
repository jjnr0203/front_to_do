import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcecionariaComponent } from './concecionaria/concecionaria.component';
import { MotosComponent } from './concecionaria/motos/motos.component';



@NgModule({
  declarations: [
    MotosComponent,
    ConcecionariaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ConcecionariaComponent] // Exporta el componente
})
export class ConcecionariaModule { }
