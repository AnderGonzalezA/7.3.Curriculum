import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormacionAcademicaPage } from './formacion-academica.page';

const routes: Routes = [
  {
    path: '',
    component: FormacionAcademicaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormacionAcademicaPage]
})
export class FormacionAcademicaPageModule {}
