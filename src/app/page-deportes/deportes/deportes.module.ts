import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { DeportesRoutingModule } from './deportes-routing.module';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    SugerenciaComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    DeportesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class DeportesModule { }
