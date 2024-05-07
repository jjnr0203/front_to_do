import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'gamezone', loadChildren:() => import('./gamezone/gamezone.module').then(m => m.GamezoneModule), }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamehubRoutingModule { }
