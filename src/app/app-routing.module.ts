import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDeportesModule } from './page-deportes/page-deportes.module';

const routes: Routes = [
  {
    path: 'page-deportes',
    loadChildren: () => import('./page-deportes/page-deportes.module').then(m => PageDeportesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
