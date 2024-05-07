import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoComponent } from './auto/auto.component';
import { MotoComponent } from './moto/moto.component';

const routes: Routes = [
  {path: 'auto', component: AutoComponent},
  {path: 'moto', component: MotoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamezoneRoutingModule { }
