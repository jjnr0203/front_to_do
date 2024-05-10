import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarajeRoutingModule } from './garaje-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    GarajeRoutingModule
  ]
})
export class GarajeModule { }
