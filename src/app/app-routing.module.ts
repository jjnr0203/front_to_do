import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDeportesModule } from './page-deportes/page-deportes.module';
import { PageMuseumModule } from './page-museum/page-museum.module';
import { PageGarajeModule } from './page-garaje/page-garaje.module';
import { MainComponent } from '../app/main/main.component';


const routes: Routes =
[
  {
    path:'music',
    loadChildren: () => import('./page-music/page-music.module').then(m => m.PageMusicModule)
  },
   {
    path: 'page-deportes',

    loadChildren: () => import('./page-deportes/page-deportes.module').then(() => PageDeportesModule)
  }
     {
  path:'page-museum',
  loadChildren: ()=> import('./page-museum/page-museum.module').then(m=>PageMuseumModule)
},

   { path: 'gamehub', loadChildren:() => import('./gamehub/gamehub.module').then(m => m.GamehubModule), },
   { path: 'page-garaje', loadChildren:() => import('./page-garaje/page-garaje.module').then(m => m.PageGarajeModule), },
   {path: 'main', component: MainComponent  },
   {path: 'page-garaje', component: PageGarajeModule  },
   { path: '', redirectTo: 'MainComponent', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
