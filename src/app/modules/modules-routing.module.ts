import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrupoEmpresarialListPageComponent } from './grupo-empresarial/pages/list-page/grupo-empresarial-list-page.component';
import { GrupoEmpresarialFormPageComponent } from './grupo-empresarial/pages/form-page/grupo-empresarial-form-page.component';
import { ContentComponent } from '../layouts/content/content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'grupo-empresarial/list',
        component: GrupoEmpresarialListPageComponent
      },
      {
        path: 'grupo-empresarial/form',
        component: GrupoEmpresarialFormPageComponent
      },
      {
        path: '**',
        redirectTo: 'grupo-empresarial/list'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
