import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDeportesModule } from './page-deportes/page-deportes.module';
import { PageMuseumModule } from './page-museum/page-museum.module';
import { PageVehiculosModule } from './page-vehiculos/page-vehiculos.module';

const routes: Routes =
[
  {
    path:'music',
    loadChildren: () => import('./page-music/page-music.module').then(m => m.PageMusicModule)
  },
   {
    path: 'page-deportes',
    loadChildren: () => import('./page-deportes/page-deportes.module').then(m => PageDeportesModule)
  },
     {
  path:'page-museum',
  loadChildren: ()=> import('./page-museum/page-museum.module').then(m=>PageMuseumModule)
},
  {
  path:'page-vehiculo',
    loadChildren: ()=> import('./page-vehiculos/page-vehiculos.module').then(m=>PageVehiculosModule)
  },
   { path: 'gamehub', loadChildren:() => import('./gamehub/gamehub.module').then(m => m.GamehubModule), }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
