import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';


import { PageMusicRoutingModule } from './page-music-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './music/create/create.component';
import { ListComponent } from '../page-deportes/deportes/list/list.component';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    PageMusicRoutingModule,
    ReactiveFormsModule,
    ButtonModule
  ]
})
export class PageMusicModule { }