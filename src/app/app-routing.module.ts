import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuseumsModule } from './page-museum/museums/museums.module';
import { PageMuseumModule } from './page-museum/page-museum.module';

const routes: Routes = [
  {
  path:'page-museum',
  loadChildren: ()=> import('./page-museum/page-museum.module').then(m=>PageMuseumModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
