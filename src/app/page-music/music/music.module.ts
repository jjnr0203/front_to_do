import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



import { MusicRoutingModule } from './music-routing.module';
import { ListComponent } from '../../page-deportes/deportes/list/list.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
    ReactiveFormsModule
  ]
})
export class MusicModule { }
