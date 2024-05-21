import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuseumsModule } from './museums/museums.module';

const routes: Routes = [{
  path:'museums',
  loadChildren: ()=> import('./museums/museums.module').then(m=>MuseumsModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageMuseumRoutingModule { }
