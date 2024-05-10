import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [

  {path: 'lista', component: ListComponent  },
  {path: 'form', component: FormComponent  },
  { path: '', redirectTo: 'ListComponent', pathMatch: 'full' },
  { path: '', redirectTo: 'FormComponent', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarajeRoutingModule { }
