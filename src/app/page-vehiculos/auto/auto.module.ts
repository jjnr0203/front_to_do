import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoComponent } from './auto.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class AutoModule { }
