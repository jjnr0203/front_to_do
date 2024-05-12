import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';



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
    ReactiveFormsModule,
    CardModule,
    InputNumberModule,
    ButtonModule,
    MessagesModule
  ]
})
export class MusicModule { }
