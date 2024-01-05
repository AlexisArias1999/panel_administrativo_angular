import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { GrupoEmpresarialListPageComponent } from './grupo-empresarial/pages/list-page/grupo-empresarial-list-page.component';
import { GrupoEmpresarialFormPageComponent } from './grupo-empresarial/pages/form-page/grupo-empresarial-form-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GrupoEmpresarialListPageComponent,
    GrupoEmpresarialFormPageComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class ModulesModule { }
