import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcecionariaComponent} from './concecionaria/concecionaria/concecionaria.component';
import { VehiculosComponent} from './concecionaria/concecionaria/vehiculos/vehiculos.component';
import { MotosComponent} from './concecionaria/concecionaria/motos/motos.component';

const routes: Routes = [
  { path: 'concesionaria', component: ConcecionariaComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'motos', component: MotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
