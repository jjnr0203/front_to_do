import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'sugerencia',
    component: SugerenciaComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeportesRoutingModule { }
