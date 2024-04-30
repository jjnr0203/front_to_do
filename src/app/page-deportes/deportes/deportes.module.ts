import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    DeportesRoutingModule
  ]
})
export class DeportesModule { }
