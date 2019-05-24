import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExperienciaProfesionalPage } from './experiencia-profesional.page';

const routes: Routes = [
  {
    path: '',
    component: ExperienciaProfesionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExperienciaProfesionalPage]
})
export class ExperienciaProfesionalPageModule {}
