import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'formacion-academica', loadChildren: './formacion-academica/formacion-academica.module#FormacionAcademicaPageModule' },
  { path: 'formacion-academica', loadChildren: './formacion-academica/formacion-academica.module#FormacionAcademicaPageModule' },
  { path: 'experiencia-profesional', loadChildren: './experiencia-profesional/experiencia-profesional.module#ExperienciaProfesionalPageModule' },
  { path: 'idiomas', loadChildren: './idiomas/idiomas.module#IdiomasPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
