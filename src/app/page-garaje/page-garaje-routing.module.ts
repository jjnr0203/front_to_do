import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarajeModule } from './garaje/garaje.module';

const routes: Routes = [

  {path: 'garaje', loadChildren: ()=> import('./garaje/garaje.module').then(m =>GarajeModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageGarajeRoutingModule { }
