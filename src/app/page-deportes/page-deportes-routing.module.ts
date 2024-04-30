import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeportesModule } from './deportes/deportes.module';

const routes: Routes = [
  {
    path: 'deportes',
    loadChildren: ()=> import('./deportes/deportes.module').then(m =>DeportesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageDeportesRoutingModule { }
