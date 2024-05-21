import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MuseumsRoutingModule } from './museums-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MuseumsRoutingModule,
    ReactiveFormsModule
  ]
})
export class MuseumsModule { }
