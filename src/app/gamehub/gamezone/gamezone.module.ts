import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamezoneRoutingModule } from './gamezone-routing.module';
import { GameListComponent } from './game-list/game-list.component';
import { GameFormComponent } from './game-form/game-form.component';


@NgModule({
  declarations: [
    GameListComponent,
    GameFormComponent
  ],
  imports: [
    CommonModule,
    GamezoneRoutingModule
  ]
})
export class GamezoneModule { }
